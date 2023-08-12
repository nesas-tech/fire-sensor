"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Container from "@/components/layouts/container";
import { persentase } from "@/data/persentase";
import StatusCard from "@/components/ui/cards/status";

export const DashboardStatus = () => {
  useEffect(() => {
    AOS.init({
      delay: 400,
      once: true,
      duration: 500,
    });
  }, []);

  return (
    <section className="py-14">
      <Container>
        <article className="grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {persentase.map((item, index) => (
            <StatusCard key={index} {...item} />
          ))}
        </article>
        <div
          data-aos="zoom-in-up"
          className="w-full mt-5 space-y-2 text-center text-white bg-primary p-7 rounded-2xl"
        >
          <h4 className="text-lg font-medium">STATUS</h4>
          <p className="text-2xl font-semibold">203.3</p>
        </div>
      </Container>
    </section>
  );
};
