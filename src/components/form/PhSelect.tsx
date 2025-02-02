import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type options = {
  label: string;
  value: string;
};
type TSelect = {
  name: string;
  label: string;
  options: options[];
};
const PhSelect = ({ name, label, options }: TSelect) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select
            // defaultValue="lucy"
            style={{ width: "100%" }}
            {...field}
            options={options}
          />
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
