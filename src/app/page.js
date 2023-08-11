import Header from "@/components/common/header";
import {
  DashboardStatus,
  DashboardStatusDetail,
} from "@/components/common/sections/";

export default function Home() {
  return (
    <main className="h-screen bg-tertiary">
      <Header />
      <DashboardStatus />
      {/* <DashboardStatusDetail /> */}
    </main>
  );
}
