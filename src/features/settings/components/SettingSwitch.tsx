import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";

interface SettingSwitchProps {
  id: string;
  title: string;
  description: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  icon?: React.ReactNode;
}

export const SettingSwitch = ({
  id,
  title,
  description,
  checked,
  onCheckedChange,
  icon,
}: SettingSwitchProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <Label className="flex items-center gap-2" htmlFor={id}>
          {icon}
          {title}
        </Label>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Switch checked={checked} id={id} onCheckedChange={onCheckedChange} />
    </div>
  );
};
