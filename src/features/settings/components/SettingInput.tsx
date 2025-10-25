import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

interface SettingInputProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export const SettingInput = ({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  disabled = false,
}: SettingInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
