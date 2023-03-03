import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import reduxLog, { login } from '../reduxLog';

const FormLog = () => (
  <div className="border border-dark rounded w-50 center p-3 bg-perso2">
    <h1>Login</h1>
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

        if (!values.password) {
          errors.password = "Required";
        } else if (
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
        ) {
          errors.password = "Invalid password (Minimum eight characters, at least one letter and one number)";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          reduxLog.dispatch(login(values));
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
