import { DashboardBody } from "@/components/dashboard-body";
import { DashboardHeader } from "@/components/dashboard-header";

function Empty() {
  return (
    <div className="min-h-full w-full flex flex-col bg-neutral-50">
      <DashboardHeader title="Empty Page" />
      <DashboardBody className="flex justify-center items-center">
        <pre className="text-primary text-lg leading-none">
          {`
  %%%%%   %%%%%   %%%%%   %%%%%  
 %       %     %  %   %  %    % 
  %%%%   %     %  %%%%%  %%%%%  
      %  %     %  %   %  %  %   
 %%%%%    %%%%%   %   %  %   %  
        `}
        </pre>
      </DashboardBody>
    </div>
  );
}

export default Empty;
