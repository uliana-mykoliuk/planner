import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <div className="bg-[#191970] ">
      <div className="px-[50px] py-[100px]">
        <h2 className="text-pink-cloud text-center text-[48px]">Contact Us</h2>
        <div className="bg-white max-w-[980px] mx-auto rounded-[20px] pt-[40px] pb-[60px]">
          <p className="text-center text-[#191970]">
            Have any questions or suggestions? Feel free to contact me.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors }) => (
              <Form className="w-full max-w-[520px] mt-[20px] mx-auto">
                <div className="w-full grid">
                  <label htmlFor="email" className="text-[#191970] block">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="mt-[4px] outline-none rounded-[5px] bg-[#FFD1DC] py-[6px] px-[12px] text-[14px] text-[#191970]"
                  />
                  {errors?.email ? (
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-[4px] text-[14px] text-[#FF003D] font-thin leading-[14px]"
                    />
                  ) : (
                    <div className="invisible h-[18px]" />
                  )}
                </div>

                <div className="w-full grid">
                  <label htmlFor="message" className="text-[#191970] block">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    placeholder="Feel free to write here your questions or suggestions"
                    className="mt-[4px] outline-none rounded-[5px] bg-[#FFD1DC] py-[6px] px-[12px] text-[14px] text-[#191970] h-[300px] resize-none"
                  />
                  {errors?.message ? (
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="mt-[4px] text-[14px] text-[#FF003D] font-thin leading-[14px]"
                    />
                  ) : (
                    <div className="invisible h-[18px]" />
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-[30px] py-[8px] text-[#FFD1DC] bg-gradient-to-r from-[#191970] to-[#6A5ACD] rounded-[5px]"
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
