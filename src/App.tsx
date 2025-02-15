import { Routes, Route } from "react-router";

import DashboardLayout from "@/pages/(dashboard)/layout";
import Overview from "@/pages/(dashboard)/overview";
import Settings from "@/pages/(dashboard)/settings";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
