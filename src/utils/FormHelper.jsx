import { useField } from "formik";

export function TextInput({ label, labelClassName, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className={labelClassName}>
        {label}
      </label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export function RadioInput({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label className="radio-input">
        <input type="radio" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export function SelectInput({ label, labelClassName, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name} className={labelClassName}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};