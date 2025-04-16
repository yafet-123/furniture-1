import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import ReactModal from "react-modal";
import * as Yup from "yup";
import Loader from "../common/Loading";

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  startDate: "",
  endDate: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().required("End date is required"),
  message: Yup.string(),
});

const Booking = ({ booking }) => {
  const formikRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [tourName, settourName] = useState(booking);
  const [LoadingmodalIsOpen, setLoadingModalIsOpen] = useState(false);
  // console.log(booking)
  const handleSubmit = async (values) => {
    // console.log(values);
    setLoadingModalIsOpen(true);
    try {
      const response = await fetch("/api/tourbooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.fullName,
          email: values.email,
          tourName: tourName,
          phone: values.phoneNumber,
          startdate: values.startDate,
          enddate: values.endDate,
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
    // console.log('contact');
    // router.push("/");
  };

  return (
    <div className="pt-32 pb-16 flex flex-col w-full md:px-10 px-4 bg-[#106156]">
      <div className="text-white">
        <h2 className="md:text-6xl text-3xl text-center font-bold">
          Tour Booking
        </h2>
        <h2 className="md:text-4xl text-2xl font-semibold text-white my-4 text-center">
          Embark on a Journey with PanEthiopia Tours: Book Your Adventure
          Today!
        </h2>
        <p className="text-white text-center font-medium text-xl lg:text-2xl mb-8 ">
          {`Welcome to the gateway of incredible journeys to Ethiopia! Your adventure begins here as you explore Ethiopia's vibrant history, diverse 
          cultures, and stunning landscapes. Dive into the beauty and mystery of this remarkable country by booking one of our unforgettable tours. 
          Uncover the hidden treasures of Ethiopia with us!`}
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          innerRef={formikRef}
        >
          <Form>
            <h1 className="text-center text-xl lg:text-3xl mb-5 font-bold">
              Tour : {booking}
            </h1>
            <div className="flex flex-col-reverse gap-4 text-lg md:justify-between w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="fullName">
                    Full Name:{" "}
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    className=" p-2 border-2 rounded-md border-[#1A3E58]"
                    placeholder="i.e Alice"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email">
                    Email{" "}
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="p-2 border-2  rounded-md border-[#1A3E58]"
                    placeholder="i.e alice@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="phoneNumber">
                    Phone Number{" "}
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className=" p-2 border-2  rounded-md border-[#1A3E58]"
                    placeholder="i.e 0911000000"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="startDate">
                    Start Date{" "}
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field
                    type="date"
                    id="startDate"
                    name="startDate"
                    className="p-2 text-black border-2 rounded-md border-[#1A3E58] focus:outline-none focus:border-secondaryColor"
                  />
                  <ErrorMessage
                    name="startDate"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="endDate">
                    End Date{" "}
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field 
                    type="date"
                    id="endDate"
                    name="endDate"
                    className="p-2 text-black border-2 rounded-md border-[#1A3E58] focus:outline-none focus:border-secondaryColor"
                  />
                  <ErrorMessage
                    name="endDate"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="message">Message</label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    className=" p-2 border-2 text-black rounded-md border-[#1A3E58]"
                    placeholder="Any other thing we should know?"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="place-self-center">
              <button
                type="submit"
                className="bg-white md:w-96 w-full mt-8 text-black text-lg font-medium py-2 px-4 mb-8 md:mb-0 md:py-4 md:px-6
                           shadow-black items-center rounded-md justify-center shadow-md hover:scale-105 duration-300"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>

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

export default Booking;
