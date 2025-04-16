import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import ReactModal from "react-modal";
import * as Yup from "yup";
import Loader from "../common/Loading";

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  tour: "",
  startDate: "",
  endDate: "",
  details: "",
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().required("End date is required"),
  details: Yup.string(),
});

const BookingForm = ({ tour_title }) => {
  const formikRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [LoadingmodalIsOpen, setLoadingModalIsOpen] = useState(false);

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
          phone: values.phoneNumber,
          tour: tour_title,
          startdate: values.startDate,
          enddate: values.endDate,
          details: values.details,
        }),
      });
      setLoadingModalIsOpen(false);
      // console.log(response.ok);
      if (response.ok) {
        setModalMessage(
          "Thank you for Booking. We will reach out to you very soon!",
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
    <div className="py-8 items-center flex flex-col w-full md:px-10 px-4">
      <div className="bg-white">
        <h2 className="md:text-4xl text-3xl text-center text-[#11665b] font-bold">
          Tour Booking
        </h2>
        <h2 className="md:text-xl text-lg text-[#1A3E58] my-4 text-center">
          Embark on a Journey with PanEthiopia Tours: Book Your Adventure Today!
        </h2>
        <p className="text-gray-600 text-left font-medium text-lg mb-8 ">
          Welcome to the gateway of extraordinary experiences with PanEthiopia Tours!
          Your adventure begins here as you step into the vibrant
          tapestry of Ethiopia&apos;s rich history, diverse cultures, and
          breathtaking landscapes. Immerse yourself in the allure of this
          undiscovered gem by securing your spot on our captivating tours.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          innerRef={formikRef}
        >
          <Form>
            <div className="flex flex-col gap-4 text-lg md:justify-between">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
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
                    <span className="text-gray-500 text-sm ml-1">
                      (required)
                    </span>
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
                    <span className="text-gray-500 text-sm ml-1">
                      (required)
                    </span>
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
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                    className="p-2 border-2 rounded-md border-[#1A3E58] focus:outline-none focus:border-secondaryColor"
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
                    className="p-2 border-2 rounded-md border-[#1A3E58] focus:outline-none focus:border-secondaryColor"
                  />
                  <ErrorMessage
                    name="endDate"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="details">Booking Details</label>
                <Field
                  type="text"
                  id="details"
                  name="details"
                  className="p-5 border-2 rounded-md border-[#1A3E58]"
                  placeholder="Any other thing we should know?"
                />
                <ErrorMessage
                  name="details"
                  component="div"
                  className="text-red-500 text-sm"
                />
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
          {/* )} */}
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

export default BookingForm;
