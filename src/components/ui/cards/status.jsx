import clsx from "clsx";

import Image from "next/image";

const StatusCard = ({ title, image, level, result }) => {
  return (
    <figure
      className={clsx(
        title == "HUMADITY" && "bg-tertiary",
        title == "GAS RESISTANCE" && "bg-secondary",
        title == "GAS RESISTANCE"
          ? "text-white"
          : title == "APPROX ALTITUDE"
          ? "text-white"
          : "text-secondary",
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
