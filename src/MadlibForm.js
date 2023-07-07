import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MadlibForm = ({ addWord, reset }) => {
  const initialValues = {
    noun: "",
    pluralNoun: "",
    adjective: "",
    verb: "",
    color: ""
  };

  const validationSchema = Yup.object().shape({
    noun: Yup.string().required("Field cannot be empty"),
    pluralNoun: Yup.string().required("Field cannot be empty"),
    adjective: Yup.string().required("Field cannot be empty"),
    verb: Yup.string().required("Field cannot be empty"),
    color: Yup.string().required("Field cannot be empty")
  });

  const handleSubmit = (values) => {
    addWord(values);
    reset()
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="MadlibForm">
        <Field
          type="text"
          placeholder="choose a noun"
          name="noun"
        />
        <ErrorMessage name="noun" component="div" className="error" />

        <Field
          type="text"
          placeholder="choose a plural noun"
          name="pluralNoun"
        />
        <ErrorMessage name="pluralNoun" component="div" className="error" />

        <Field
          type="text"
          placeholder="choose an adjective"
          name="adjective"
        />
        <ErrorMessage name="adjective" component="div" className="error" />

        <Field
          type="text"
          placeholder="choose a color"
          name="color"
        />
        <ErrorMessage name="color" component="div" className="error" />

        <Field
          type="text"
          placeholder="choose a verb"
          name="verb"
        />
        <ErrorMessage name="verb" component="div" className="error" />

        <button type="submit">Get Story</button>
      </Form>
    </Formik>
  );
};

export default MadlibForm;
