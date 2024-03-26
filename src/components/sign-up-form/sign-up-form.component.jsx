import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "@/utils/firebase.utils";

import InputField from "../basic/input";
import { Form, Formik } from "formik";
import Button from "../basic/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ changeAuthType }) => {
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (values) => {
    if (values.password !== values.confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        values.email,
        values.password
      );

      await createUserDocumentFromAuth(user, {
        displayName: values.displayName,
      });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-[36px] text-center text-night-sky">Sign Up</h1>
      <div className="text-center text-[#191970]">
        Already have an account? <br />
        <button
          type="button"
          onClick={() => changeAuthType()}
          className="text-[#6A5ACD] outline-none bg-transparent"
        >
          Sign in with your email and password
        </button>
      </div>

      <Formik
        initialValues={defaultFormFields}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          handleSubmit(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ errors }) => (
          <Form className="mt-[20px]">
            <InputField
              label="Display Name"
              id="displayName"
              name="displayName"
              type="text"
              placeholder="Enter display name"
              errors={errors}
            />
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              errors={errors}
            />

            <InputField
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder=""
              errors={errors}
            />

            <InputField
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder=""
              errors={errors}
            />

            <Button type="submit" className="ml-auto w-[100%]">
              Sign Up
            </Button>

            <button
              type="button"
              onClick={signInWithGoogle}
              className="text-[#6A5ACD] outline-none bg-transparent w-full mt-[30px]"
            >
              Sign Up With Google
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
