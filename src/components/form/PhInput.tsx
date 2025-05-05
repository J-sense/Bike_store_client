import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInput = {
  type: string;
  name: string;
  label?: string;
  className?: string;
};

const PhInput = ({ type, name, label, className }: TInput) => {
  const { control } = useFormContext();

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input {...field} type={type} id={name} className={className} />
        )}
      />
    </>
  );
};

export default PhInput;
