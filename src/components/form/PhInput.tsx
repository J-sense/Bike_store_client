import { Input } from "antd";

import { Controller } from "react-hook-form";
type TInput = {
  type: string;
  name: string;
  label: string;
};
const PhInput = ({ type, name, label }: TInput) => {
  //   const { register } = useFormContext();
  //   const { register } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </>
  );
};

export default PhInput;
