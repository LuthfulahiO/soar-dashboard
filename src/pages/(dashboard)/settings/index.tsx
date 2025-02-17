import { DashboardBody } from "@/components/dashboard-body";
import { DashboardHeader } from "@/components/dashboard-header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/tabs";

import EditProfile from "./components/edit-profile";
import Preferences from "./components/preferences";
import Security from "./components/security";

const tabs = [
  { value: "profile", label: "Edit Profile", content: <EditProfile /> },
  {
    value: "preferences",
    label: "Preferences",
    content: <Preferences />,
  },
  {
    value: "security",
    label: "Security",
    content: <Security />,
  },
];

function Settings() {
  return (
    <div className="min-h-full w-full flex flex-col bg-neutral-50">
      <DashboardHeader title="Settings" />
      <DashboardBody>
        <div className="bg-white w-full p-4 lg:p-[30px] rounded-[25px] flex flex-col overflow-hidden">
          <Tabs defaultValue="profile">
            <TabsList className="w-full items-start justify-start p-0 h-auto border-b border-[#F4F5F7] gap-4 lg:gap-14 overflow-x-auto hide-scrollbar">
              {tabs.map((tab) => (
                <TabsTrigger
                  value={tab.value}
                  key={tab.value}
                  className="pb-2 first:ml-0.5 whitespace-nowrap"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent
                className="mt-6 lg:mt-10"
                value={tab.value}
                key={tab.value}
              >
                {tab.content}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </DashboardBody>
    </div>
  );
}

export default Settings;
