import { Routes, Route } from "react-router";

import Empty from "@/pages/(dashboard)/empty";
import DashboardLayout from "@/pages/(dashboard)/layout";
import Overview from "@/pages/(dashboard)/overview";
import Settings from "@/pages/(dashboard)/settings";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="settings" element={<Settings />} />
        <Route path="transactions" element={<Empty />} />
        <Route path="accounts" element={<Empty />} />
        <Route path="investments" element={<Empty />} />
        <Route path="credit-cards" element={<Empty />} />
        <Route path="loans" element={<Empty />} />
        <Route path="services" element={<Empty />} />
        <Route path="privileges" element={<Empty />} />
      </Route>
    </Routes>
  );
}

export default App;
