"use client";

import Script from 'next/script'
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Container from "@/components/layouts/container";
import { persentase } from "@/data/persentase";
import StatusCard from "@/components/ui/cards/status";

// import { connect } from "mqtt";
import "@/lib/config.js"
// import "https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js"
import "@/lib/mqttws31.js"

export const DashboardStatus = () => {

//   // MQT Init
//   let mqtt;
//   const reconnectTimeout = 2000;

//   function MQTTconnect() {
//     if (typeof path == "undefined") {
//         path = '/mqtt';
//     }
//     mqtt = new Paho.MQTT.Client(
//         host,
//         port,
//         path,
//         "web_" + parseInt(Math.random() * 100, 10)
//     );
//     const options = {
//         timeout: 3,
//         useSSL: useTLS,
//         cleanSession: cleansession,
//         onSuccess: onConnect,
//         onFailure: function (message) {
//             $('#status').val("Connection failed: " + message.errorMessage + "Retrying");
//             setTimeout(MQTTconnect, reconnectTimeout);
//         }
//     };

//     mqtt.onConnectionLost = onConnectionLost;
//     mqtt.onMessageArrived = onMessageArrived;

//     if (username != null) {
//         options.userName = username;
//         options.password = password;
//     }
//     console.log("Host=" + host + ", port=" + port + ", path=" + path + " TLS = " + useTLS + " username=" + username + " password=" + password);
//     mqtt.connect(options);
// }

// function onConnect() {

//   console.log("onConnect");
//   client.subscribe("IoT/temp");
//   client.subscribe("IoT/hum");

//   $('#status').val('Connected to ' + host + ':' + port + path);
//   // Connection succeeded; subscribe to our topic
//   mqtt.subscribe(topic, { qos: 0 });
//   $('#topic').val(topic);
// }

// function onConnectionLost(response) {
//   setTimeout(MQTTconnect, reconnectTimeout);
//   $('#status').val("connection lost: " + responseObject.errorMessage + ". Reconnecting");

// };

// function onMessageArrived(message) {

//   const topic = message.destinationName;
//   const payload = message.payloadString;

//   const0= payload.split(",");
//   let datasensor = myArray[1];
//   let datasensor1 = myArray[0];
//   let datasensor2 = myArray[2];
//   let datasensor3 = myArray[3];
//   let datasensor4 = myArray[4];
//   let datasensor5 = myArray[5];
  
//   let colorStatus;
//   if (datasensor5 == "Aman") {
//       document.getElementById("colorStatus1").innerHTML = "darkgreen";
//       colorStatus = "darkgreen";
//   } else {
//       document.getElementById("colorStatus1").innerHTML = "maroon";
//       colorStatus = "maroon";

//   }
//   $('#ws').prepend('<li>' + topic + ' = ' + payload + '</li>');

//   const mysql = require('mysql');

//   const con = mysql.createConnection({
//       host: "localhost:8080",
//       user: "root",
//       password: "",
//       database: "pkmdb"
//   });

//   con.connect(function (err) {
//       if (err) throw err;
//       console.log("Connected!");
//       n = new Date();
//       y = n.getFullYear();
//       m = n.getMonth() + 1;
//       d = n.getDate();
//       const tgl =  m + "/" + d + "/" + y;

//       const sql = "INSERT INTO telemetry (tgl, temp,hum,gas,alt,idx,status) VALUES (" + tgl + ", " + datasensor + "," + datasensor1 + "," + datasensor2 + "," + datasensor3 + "," + datasensor4 + "," + datasensor5 + ")";
//       con.query(sql, function (err, result) {
//           if (err) throw err;
//           console.log("1 record inserted");
//       });
//   });
// };

const [result, setResult] = useState(0);

useEffect(() => {
  AOS.init({
    delay: 400,
    once: true,
    duration: 500,
  });
  // MQTTconnect();
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
            <h4 className="text-xl font-medium lg:text-2xl">STATUS</h4>
            <p className="text-2xl font-semibold lg:text-3xl">Moderate</p>
          </div>
        </article>
      </Container>
    </section>
  );
};
