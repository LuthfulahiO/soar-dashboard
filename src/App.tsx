import { lazy } from "react";
import { Routes, Route } from "react-router";

import Empty from "@/pages/(dashboard)/empty";

const Cards = lazy(() => import("@/pages/(dashboard)/cards"));
const DashboardLayout = lazy(() => import("@/pages/(dashboard)/layout"));
const Overview = lazy(() => import("@/pages/(dashboard)/overview"));
const Settings = lazy(() => import("@/pages/(dashboard)/settings"));

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="settings" element={<Settings />} />
        <Route path="transactions" element={<Empty />} />
        <Route path="accounts" element={<Empty />} />
        <Route path="investments" element={<Empty />} />
        <Route path="credit-cards" element={<Cards />} />
        <Route path="loans" element={<Empty />} />
        <Route path="services" element={<Empty />} />
        <Route path="privileges" element={<Empty />} />
      </Route>
    </Routes>
  );
}

export default App;
