import { DashboardBody } from "@/components/dashboard-body";
import { DashboardHeader } from "@/components/dashboard-header";
function Settings() {
  return (
    <div className="min-h-full w-full flex flex-col bg-neutral-50">
      <DashboardHeader title="Settings" />
      <DashboardBody>
        <div className="h-screen w-full flex justify-center items-center">
          <h1 className="text-primary">Settings</h1>
        </div>
      </DashboardBody>
    </div>
  );
}

export default Settings;
