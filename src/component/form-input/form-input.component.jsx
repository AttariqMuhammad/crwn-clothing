import { FormInputlLabel, Group, Input } from "./form-input.styles.jsx";

export default function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputlLabel shrink={otherProps.value.length}>
          {label}
        </FormInputlLabel>
      )}
    </Group>
  );
}
