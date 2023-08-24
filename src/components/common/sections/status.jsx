"use client";

import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Container from "@/components/layouts/container";
import { persentase } from "@/data/persentase";
import StatusCard from "@/components/ui/cards/status";
import * as mqtt from "mqtt";

// var mqtt = require("mqtt");
var options = {
  protocol: "ws",
  username: "1260hu2445",
  password: "670ehijopy",
  keepalive: 20,
  topic: "1260hu2445/nesas",
  // clientId uniquely identifies client
  // choose any string you wish
  clientId: "mqttjs_" + Math.random().toString((2, 8)),
};
var client = mqtt.connect("mqtt://b37.mqtt.one:8083", options);

client.subscribe("publishtopic");
export const DashboardStatus = () => {
  var note;
  client.on("message", function (topic, message) {
    note = message.toString();
    // Updates React state with message
    setResult(note);
    console.log(note);
    client.end();
  });

  const [result, setResult] = useState(0);
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
            <StatusCard
              key={index}
              image={item.image}
              symbol={item.symbol}
              title={item.title}
              result={result}
              level={item.level}
            />
          ))}
          <div
            data-aos="zoom-in-up"
            className="space-y-2 lg:col-span-4 text-center text-white bg-primary w-full h-[225px] flex justify-center flex-col rounded-2xl"
          >
            <h4 className="text-xl lg:text-2xl font-medium">STATUS</h4>
            <p className="text-2xl lg:text-3xl font-semibold">Moderate</p>
          </div>
        </article>
      </Container>
    </section>
  );
};
