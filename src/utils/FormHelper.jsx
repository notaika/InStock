import { useField } from "formik";
import errorIcon from "../assets/icons/error-24px.svg";

function showError(meta) {
  return (
    <div className="error-container">
      <img src={errorIcon} alt="error icon" className="errorIcon" />
      <div className="error">{meta.error}</div>
    </div>
  );
}

export function TextInput({ label, labelClassName, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className={labelClassName}>
        {label}
      </label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? showError(meta) : null}
    </>
  );
}

export function RadioInput({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label className="radio-input">
        <input type="radio" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? showError(meta) : null}
    </div>
  );
}

export function SelectInput({ label, labelClassName, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name} className={labelClassName}>
        {label}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? showError(meta) : null}
    </div>
  );
}
