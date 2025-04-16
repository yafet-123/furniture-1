import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import ReactModal from "react-modal";
import * as Yup from "yup";
import Loader from "../common/Loading";

const hotelType = [
  "Sheraton Addis, a Luxury Collection Hotel",
  "Hyatt Regency Addis Ababa",
  "Radisson Blu Hotel, Addis Ababa",
  "Hiliton Addis Ababa",
];
const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  hotelType: "",
  startDate: "",
  endDate: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  hotelType: Yup.lazy((val) =>
    Array.isArray(val)
      ? Yup.array().of(Yup.string())
      : Yup.string().required("Choose at least one Hotel"),
  ),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().required("End date is required"),
  message: Yup.string(),
});

const RentalBookingForm = () => {
  const formikRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [LoadingmodalIsOpen, setLoadingModalIsOpen] = useState(false);
  // console.log("values");
  const handleSubmit = async (values) => {
    setLoadingModalIsOpen(true);
    try {
      const response = await fetch("/api/hotelbooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.fullName,
          email: values.email,
          phone: values.phoneNumber,
          hotelType: values.hotelType,
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
    // console.log("contact");
    // router.push("/");
  };

  return (
    <div className="py-8 flex flex-col w-full md:px-10 px-4 bg-[#edf2f5]">
      <div className="">
        <h2 className="md:text-6xl text-3xl text-center text-[#11665b] font-bold">
          Hotel Booking
        </h2>
        <h2 className="md:text-xl text-lg  text-gray-600 my-4 text-center">
          Kindly Complete the Form Below, and We Will Handle the Rest
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          innerRef={formikRef}
        >
          <Form>
            <div className="flex flex-col-reverse gap-4 text-lg md:justify-between w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="fullName">
                    Full Name:{" "}
                    <span className="text-gray-500 text-sm ml-1">
                      (required)
                    </span>
                  </label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    className=" p-2 border-2 rounded-md border-[#11665b]"
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
                    <span className="text-gray-500 text-sm ml-1">
                      (required)
                    </span>
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="p-2 border-2  rounded-md border-[#11665b]"
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
                    <span className="text-gray-500 text-sm ml-1">
                      (required)
                    </span>
                  </label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className=" p-2 border-2  rounded-md border-[#11665b]"
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
                    <span className="text-gray-500 text-sm ml-1">
                      (required)
                    </span>
                  </label>
                  <Field
                    type="date"
                    id="startDate"
                    name="startDate"
                    className="p-2 border-2 rounded-md border-[#11665b] focus:outline-none focus:border-secondaryColor"
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
                    <span className="text-gray-500 text-sm ml-1">
                      (required)
                    </span>
                  </label>
                  <Field
                    type="date"
                    id="endDate"
                    name="endDate"
                    className="p-2 border-2 rounded-md border-[#11665b] focus:outline-none focus:border-secondaryColor"
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
                    className=" p-2 border-2 rounded-md border-[#11665b]"
                    placeholder="Any other thing we should know?"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="">
                <div className="flex flex-col">
                  {/* Car Types (Checkboxes) */}
                  <label className="block md:text-4xl text-3xl text-center text-[#11665b] font-bold mb-5">
                    Hotel Types
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {hotelType.map((hotelType) => (
                      <label
                        key={hotelType}
                        className="flex  items-center mb-2"
                      >
                        <Field
                          type="checkbox"
                          name="hotelType"
                          value={hotelType}
                          className="mr-2"
                        />
                        {hotelType}
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name="carTypes"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="place-self-center">
              <button
                type="submit"
                className="bg-[#11665b] md:w-96 w-full mt-8 text-white text-lg font-medium py-2 px-4 mb-8 md:mb-0 md:py-4 md:px-6
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

export default RentalBookingForm;
