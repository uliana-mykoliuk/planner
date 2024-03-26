// components/InputField.tsx
import { Field, ErrorMessage } from "formik";

interface InputFieldProps {
  id: string;
  name: string;
  as?: string;
  placeholder?: string;
  className?: string;
  errors: any;
  label?: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  as = "input",
  label,
  placeholder,
  className,
  errors,
  type,
}) => {
  const inputClassName = `mt-[4px] outline-none rounded-[5px] bg-[#CDC5FF] py-[6px] px-[12px] text-[14px] text-[#191970] placeholder:text-[#19197095] placeholder:font-thin ${
    className || ""
  }`;

  return (
    <div className="w-full grid">
      <label htmlFor={id} className="text-[#191970] block text-[14px]">
        {label}
      </label>
      <Field
        as={as}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder || `Enter your ${name}`}
        className={inputClassName}
      />
      {errors[name] ? (
        <ErrorMessage
          name={name}
          component="div"
          className="mt-[4px] text-[14px] text-[#FF003D] font-thin leading-[14px]"
        />
      ) : (
        <div className="invisible h-[18px]" />
      )}
    </div>
  );
};

export default InputField;
