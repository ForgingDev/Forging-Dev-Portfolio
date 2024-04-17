import { ErrorMessage, useFormikContext } from "formik";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FC, HTMLInputTypeAttribute } from "react";
import { cn } from "../helpers/tailwind.helper";

type Props = {
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  label?: string;
  name: string;
  onChange: (value: string) => void;
  required?: boolean;
  textarea?: boolean;
  type?: HTMLInputTypeAttribute;
  wrapperClassName?: string;
};
const Field: FC<Props> = ({
  className = "",
  disabled,
  icon,
  label,
  name,
  onChange,
  required = false,
  textarea,
  type = "text",
  wrapperClassName = "",
}) => {
  const { getFieldMeta } = useFormikContext();

  const fieldError = getFieldMeta(name).error;
  const initialValue = getFieldMeta(name).initialValue as string;
  const fieldValue = getFieldMeta(name).value as string;

  return (
    <div className={cn("relative mb-3", wrapperClassName)}>
      {label && (
        <label className="font-medium text-zinc-200" htmlFor={name}>
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <span className="relative">
        {textarea ? (
          <InputTextarea
            disabled={disabled}
            onChange={(e: { target: { value: string } }) =>
              onChange(e.target.value)
            }
            name={name}
            value={fieldValue ?? initialValue}
            className={cn(
              "min-h-24 w-full rounded-md bg-dark-purple bg-opacity-50 px-2 py-1 text-zinc-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50",
              {
                [className || ""]: className,
                "bg-red-300 bg-opacity-20": fieldError,
              },
            )}
          />
        ) : (
          <InputText
            disabled={disabled}
            onChange={(e: { target: { value: string } }) =>
              onChange(e.target.value)
            }
            name={name}
            type={type}
            value={fieldValue ?? initialValue}
            className={cn(
              "w-full rounded-md bg-dark-purple bg-opacity-50 p-2 text-zinc-200 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50",
              {
                [className || ""]: className,
                "bg-red-300 bg-opacity-20": fieldError,
                "pr-7": icon,
              },
            )}
          />
        )}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-700">
          {icon}
        </div>
      </span>
      <ErrorMessage
        name={name}
        component="div"
        className="absolute text-sm text-red-400"
      />
    </div>
  );
};

export default Field;
