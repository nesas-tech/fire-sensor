"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Container from "@/components/layouts/container";
// import Chart from "@/components/ui/chart/";

export const DashboardStatusDetail = () => {
  useEffect(() => {
    AOS.init({
      delay: 400,
      once: false,
      duration: 500,
    });
  }, []);

  return (
    <section className="pb-16 lg:pt-5">
      <Container>
        <article data-aos="zoom-in-up">
          <h2 className="mb-10 text-2xl font-semibold lg:mb-20 lg:text-3xl text-primary">
            Detail Status
          </h2>
          {/* <Chart /> */}
        </article>
      </Container>
    </section>
  );
};
