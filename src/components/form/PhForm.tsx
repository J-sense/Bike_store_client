import { Form } from "antd";
import React, { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};
const PhForm = ({ onSubmit, children }: TForm) => {
  // const metho= useForm()
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PhForm;
