import React, { useState } from "react";
import { Spinner } from "flowbite-react";

const RequestLoan = () => {
  const [full, setFull] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
 

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("action", "request_for_loan");
    formdata.append("full_name", full);
    formdata.append("loan_amount", amount.toString());
    formdata.append("repayment_duration", duration.toString());

    try {
      const request = await fetch("https://okigwecreations.online/api/", {
        method: "POST",
        headers: {},
        body: formdata,
      });
      const response = await request.json();
      console.log(response);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white pb-12 md:pb-24 lg:pb-36 px-5">
      <form
        className="w-full md:w-8/12 lg:w-5/12 mx-auto border border-gray-300  rounded-md pt-10 pb-16 px-5"
        onSubmit={submitHandler}
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-mont font-semibold text-blue-950 text-center mb-10">
          Request A Loan Here
        </h2>
        <div className="relative z-0 w-full mb-12 group">
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="block py-2.5 px-0 w-full text-sm md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => {
              setFull(e.target.value);
            }}
          />
          <label
            htmlFor="fullname"
            className="peer-focus:font-medium absolute text-sm md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Concrete Rosalia
          </label>
        </div>

        <div className="flex gap-x-4">
          <div className="relative z-0 w-6/12 mb-6 group">
            <input
              type="number"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Amount to Borrow
            </label>{" "}
          </div>{" "}
          <div className="relative z-0 w-6/12 mb-6 group">
            <input
              type="number"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              max={12}
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Loan Duration
            </label>
          </div>
        </div>

        <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full px-5 py-2.5 md:py-4 lg:py-5 text-center "
        >
          {loading ? <Spinner color="info" /> : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default RequestLoan;
