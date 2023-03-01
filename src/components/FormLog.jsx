import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormLog = () => (
  <div className="border border-dark rounded w-50 center p-3 bg-perso2">
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let JSONValue = JSON.stringify(values, null, 2); //on stock le contenue des inputs au format json
          alert(JSONValue);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-group">
          <div>
            <label htmlFor="email">Email Address :</label>
            <Field type="email" name="email" className="form-control"/>
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="email">Password :</label>
            <Field type="password" name="password"  className="form-control"/>
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit" className="btn btn-perso" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormLog;
