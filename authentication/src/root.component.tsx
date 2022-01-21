import { Form, Formik } from "formik";
import { Button, Col, Input, InputGroup, Row } from "reactstrap";
import { loginProps } from "../interfaces/loginInterface";
import * as Yup from "yup";
import "./authentication-component.css";
import { useState } from "react";

export default function OrderCreation(): JSX.Element {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = async (values: loginProps) => {
    console.log(values);
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email Required!"),
      password: Yup.string().required("Password Required!"),
  });

  return (
    <div className="Container">
      <h1>Sign In</h1>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={signInSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <label className="FormField">Email</label>
              <InputGroup>
                <Input
                  value={values.email}
                  name="email"
                  placeholder="Email..."
                  type="email"
                  onChange={handleChange}
                ></Input>
              </InputGroup>
              <label className="FormField">Password</label>
              <InputGroup>
                <Input
                  placeholder="Password..."
                  name="password"
                  value={values.password}
                  type="password"
                  onChange={handleChange}
                ></Input>
              </InputGroup>
              <div>
                <br/>
              {emailError ? emailError : passwordError}
              </div>
              
            </Row>
            <Button
              type="submit"
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
              onClick={() => {
                if (values.email == "" || values.password == "") {
                  setEmailError(errors.email);
                  setPasswordError(errors.password);
                }
              }}
              className="CreateButton"
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
