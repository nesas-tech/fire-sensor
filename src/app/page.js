"use client";

import { useEffect, useState } from "react";

import Loading from "@/components/ui/loading";
import Header from "@/components/common/header";
import {
  DashboardStatus,
  DashboardStatusDetail,
} from "@/components/common/sections/";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main className="h-full bg-[#E8F8FD]">
      <Header title="Fire Sensor" className="text-2xl lg:text-3xl" />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <DashboardStatus />
          <DashboardStatusDetail />
        </div>
      )}
    </main>
  );
}
