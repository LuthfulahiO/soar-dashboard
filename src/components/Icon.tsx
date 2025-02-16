import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: React.FC<SVGProps<SVGSVGElement>>;
}

export function Icon({ icon: IconComponent, ...props }: IconProps) {
  return <IconComponent {...props} />;
}
