import { useField } from "formik";
import { Label, Input, ErrorP } from "./FormElements";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input {...field} {...props} borderColor={meta.touched && meta.error} />
      {meta.touched && meta.error ? <ErrorP>{meta.error}</ErrorP> : null}
    </div>
  );
};

export default MyTextInput;
