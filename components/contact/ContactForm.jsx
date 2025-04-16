import { Formik, Form, Field, ErrorMessage } from "formik";
import ReactModal from "react-modal";
import React, { useRef, useState } from "react";
import Loader from "../common/Loading";

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const formikRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [LoadingmodalIsOpen, setLoadingModalIsOpen] = useState(false);
  const handleSubmit = async (values) => {
    // console.log(values);
    setLoadingModalIsOpen(true);
    try {
      const response = await fetch("/api/SentMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          message: values.message,
        }),
      });
      setLoadingModalIsOpen(false);
      // console.log(response.ok);
      if (response.ok) {
        setModalMessage(
          "Thank you for contacting us. We will reach out to you very soon!",
        );
        setModalIsOpen(true);
      } else {
        setModalMessage(
          "Apologies! Could not send form successfully. Try again please!",
        );
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    console.log("contact");
    // router.push("/");
  };

  return (
    <div className="flex flex-col gap-2 md:gap-5">
      <h1 className="font-semibold text-[#11665b] text-4xl md:text-6xl">
        {`Let's Collaborate`}
      </h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
        innerRef={formikRef}
      >
        <Form className="w-full mx-auto flex flex-col space-y-6">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block mb-1 text-[#11665b] text-xl"
            >
              Full Name:
              <span className="text-gray-500 text-sm ml-1">(required)</span>
            </label>
            <div className="flex">
              <div className="w-1/2 mr-2">
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full  p-2 text-black border-black border"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2 ml-2">
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full  p-2 text-black border-black border"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-[#11665b] text-xl"
            >
              Email:
              <span className="text-gray-500 text-sm ml-1">(required)</span>
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full p-2 text-black border-black border "
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-1 text-[#11665b] text-xl"
            >
              Message:
              <span className="text-gray-500 text-sm ml-1">(required)</span>
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className="w-full  p-2 text-black border-black border"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-[#11665b] w-36 text-white font-semibold text-xl py-2 px-4 mb-8 md:mb-0 md:py-4 md:px-8
                         shadow-greenbay-secondary items-center rounded-md justify-center hover:bg-greenbay-secondary shadow-md hover:scale-105 duration-300"
          >
            Submit
          </button>
        </Form>
      </Formik>

      <ReactModal
        isOpen={LoadingmodalIsOpen}
        // onRequestClose={closeModal}
        className="flex items-center justify-center w-full h-full"
      >
        <Loader />
      </ReactModal>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex items-center justify-center w-full h-full"
      >
        <div className="flex flex-col items-center justify-center bg-white md:w-[500px] h-[300px] w-full p-2 border rounded-sm ">
          <p className="text-md lg:text-xl mb-5 text-center">{modalMessage}</p>
          <button
            onClick={closeModal}
            className="p-2 bg-primaryColor border text-white rounded-sm"
          >
            Close
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default ContactForm;
