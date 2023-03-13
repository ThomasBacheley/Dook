import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import reduxLog, { login } from "../reduxLog";
import axios from "../axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormLog = (props) => (
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

        /* if (!values.password) {
          errors.password = "Required";
        } else if (
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
        ) {
          errors.password =
            "Invalid password (Minimum eight characters, at least one letter and one number)";
        } */
        return errors;
      }}
      onSubmit={(values) => {
        props.refreshin();

        axios.get("/sanctum/csrf-cookie").then(() => {
          axios
            .post("/login", {
              email: values.email,
              password: values.password,
            })
            .then((response) => {
              reduxLog.dispatch(
                login({
                  id: response.data.id,
                  name: response.data.name,
                  email: response.data.email,
                })
              );
              toast.info("Connecter en tant que " + response.data.name + "!");
            })
            .catch((error) => {
              toast.error(error.message);
            });
        });
      }}
    >
      <Form className="form-group">
        <div>
          <label htmlFor="email">Email Address :</label>
          <Field type="email" name="email" className="form-control" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="email">Password :</label>
          <Field type="password" name="password" className="form-control" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit" className="btn btn-perso">
          Submit
        </button>
      </Form>
    </Formik>
    <ToastContainer />
  </div>
);

export default FormLog;
