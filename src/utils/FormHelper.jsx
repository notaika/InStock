import { useField } from "formik";
import errorIcon from "../assets/icons/error-24px.svg";
import "./FormHelper.scss";

function showError(meta) {
  return (
    <div className="error">
      <img src={errorIcon} alt="error icon" className="error__icon" />
      <div className="error__copy">{meta.error}</div>
    </div>
  );
}

export function TextInput({ label, labelClassName, className, ...props }) {
  const [field, meta] = useField(props);
  const inputClassName = [
    "text-input",
    meta.touched && meta.error ? "text-input--error" : "",
    className,
  ].join(" ");

  return (
    <>
      <label htmlFor={props.name} className={labelClassName}>
        {label}
      </label>
      <input className={inputClassName} {...field} {...props} />
      {meta.touched && meta.error ? showError(meta) : null}
    </>
  );
}

export function TextAreaInput({ label, labelClassName, className, ...props }) {
  const [field, meta] = useField(props);
  const inputClassName = [
    "text-input",
    meta.touched && meta.error ? "text-input--error" : "",
    className,
  ].join(" ");
  return (
    <>
      <label htmlFor={props.name} className={labelClassName}>
        {label}
      </label>
      <textarea className={inputClassName} {...field} {...props} />
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
        <span className="radio__custom"></span>
        <span className="radio-input__copy">{children}</span>
      </label>
      {meta.touched && meta.error ? showError(meta) : null}
    </div>
  );
}

export function SelectInput({ label, labelClassName,className, ...props }) {
  const [field, meta] = useField(props);
  const inputClassName = [
    "text-input",
    meta.touched && meta.error ? "text-input--error" : "",
    className,
  ].join(" ");
  
  return (
    <div>
      <label htmlFor={props.name} className={labelClassName}>
        {label}
      </label>
      <select {...field} {...props} className={inputClassName}/>
      {meta.touched && meta.error ? showError(meta) : null}
    </div>
  );
}
