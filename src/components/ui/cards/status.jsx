"use client";

import { useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

const StatusCard = ({ title, image, level, result }) => {
  const classNames = [];
  switch (title) {
    case "HUMIDITY":
      classNames.push("bg-tertiary text-secondary");
      break;
    case "GAS RESISTANCE":
      classNames.push("bg-secondary text-white");
      break;
    case "APPROX ALTITUDE":
      classNames.push("text-white");
      break;
    default:
      classNames.push("text-secondary");
      break;
  }

  useEffect(() => {
    AOS.init({
      delay: 400,
      once: true,
      duration: 500,
    });
  }, []);

  return (
    <figure
      data-aos="zoom-in-up"
      className={clsx(
        classNames,
        "relative rounded-2xl h-[225px] overflow-hidden w-full"
      )}
    >
      <Image
        src={image}
        height={225}
        width={225}
        alt=""
        className="absolute z-0 object-center w-full h-full rounded-2xl"
      />
      <figcaption className="relative z-10 m-5 space-y-2">
        <h2 className="text-lg font-medium">{title}</h2>
        <div className="space-y-2 text-2xl font-semibold">
          <p className={clsx(result == null && "hidden")}>{result}</p>
          <p className={clsx(level == null && "hidden")}>{level}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default StatusCard;
