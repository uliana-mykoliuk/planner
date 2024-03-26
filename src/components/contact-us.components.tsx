import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "./basic/input";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  email: "",
  message: "",
};

const ContactUs = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };
  return (
    <div className="bg-main-blue ">
      <div className="px-[50px] py-[100px]">
        <h2 className="text-pink-cloud text-center text-[48px] mb-[50px]">
          Contact Us
        </h2>
        <div className="bg-white max-w-[980px] mx-auto rounded-[20px] pt-[40px] pb-[60px]">
          <p className="text-center text-main-blue">
            Have any questions or suggestions? Feel free to contact me.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors }) => (
              <Form className="w-full max-w-[520px] mt-[20px] mx-auto">
                <InputField
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  errors={errors}
                />

                <InputField
                  label="Message"
                  as="textarea"
                  name="message"
                  id="message"
                  placeholder="Feel free to write here your questions or suggestions"
                  className="h-[150px] resize-none"
                  errors={errors}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-[30px] py-[8px] text-main-pink bg-gradient-to-r from-main-blue to-main-purple rounded-[5px]"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
