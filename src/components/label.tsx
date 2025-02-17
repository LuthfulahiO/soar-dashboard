import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ className, ...props }: LabelProps) => {
  return (
    <label
      className={cn("block text-neutral-900 mb-2", className)}
      {...props}
    />
  );
};
Label.displayName = "Label";

export { Label };
