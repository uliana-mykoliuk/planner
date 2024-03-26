import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "@/utils/firebase.utils";
import InputField from "../basic/input";
import { Form, Formik } from "formik";
import Button, { BUTTON_TYPE_CLASSES } from "../basic/button.component";

const SignInForm = ({ changeAuthType }) => {
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (values) => {
    try {
      await signInAuthUserWithEmailAndPassword(values.email, values.password);
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  return (
    <div>
      <h1 className="text-[36px] text-center text-night-sky">Sign In</h1>
      <div className="text-center text-[#191970]">
        Don't have an account? <br />
        <button
          type="button"
          onClick={() => changeAuthType()}
          className="text-[#6A5ACD] outline-none bg-transparent"
        >
          Sign up with your email and password
        </button>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
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
            <Button type="submit" className="w-full">
              Sign In
            </Button>

            <button
              type="button"
              onClick={signInWithGoogle}
              className="text-[#6A5ACD] outline-none bg-transparent w-full mt-[30px]"
            >
              Sign In With Google
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
