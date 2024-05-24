import React from "react";
import { ErrorMessage, Form, Field, Formik, useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const RadioInput = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default function InventoryAdd() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.description) {
      errors.description = "Required";
    } else if (values.description.length > 20) {
      errors.description = "Must be 20 characters or less";
    }

    return errors;
  };

  return (
    <>
      <h1>Title</h1>

      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Item Name"
          />

          <TextInput
            label="Description"
            name="description"
            type="text"
            placeholder="Description"
          />

          <SelectInput label="Category" name="category">
            <option value="">Please select</option>
            <option value="electronics">Electronics</option>
            <option value="gear">Gear</option>
            <option value="apparel">Apparel</option>
            <option value="health">Health</option>
          </SelectInput>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
