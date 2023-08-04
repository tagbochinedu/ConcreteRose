import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Table, Spinner } from "flowbite-react";
import Pagination from "../Components/Organisms/Pagination/Pagination";

const LoanPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const formdata = new FormData();
  formdata.append("action", "get_repayment_schedule");
  formdata.append("transaction_id", id);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const pageLoans = data.data?.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchHandler = async () => {
      setLoading(true);
      setError("");
      try {
        const request = await fetch("https://okigwecreations.online/api/", {
          method: "POST",
          headers: {},
          body: formdata,
        });
        const response = await request.json();

        setData(response);
        console.log(response);
      } catch (err) {
        setError("Failed to fetch Data");
      } finally {
        setLoading(false);
      }
    };

    fetchHandler();
  }, []);

  return (
    <section className="min-h-screen px-5 pt-32">
      {" "}
      <div className="w-10/12 md:w-8/12 lg:w-5/12 mx-auto mb-16">
        <Table className="">
          {" "}
          <Table.Head className="w-10/12">
            <Table.HeadCell className="">DATA</Table.HeadCell>
            <Table.HeadCell className="text-center">VALUE</Table.HeadCell>
          </Table.Head>{" "}
          {!loading && (
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer">
                {" "}
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                  FULL NAME
                </Table.Cell>{" "}
                <Table.Cell className="text-center">
                  {data.FULL_NAME}
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer">
                {" "}
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                  TRANSACTION ID
                </Table.Cell>{" "}
                <Table.Cell className="text-center">{id}</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer">
                {" "}
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                  DATE OF LOAN
                </Table.Cell>{" "}
                <Table.Cell className="text-center">
                  {data.DATE.split(" ")[0]}
                </Table.Cell>
              </Table.Row>{" "}
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer">
                {" "}
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                  AMOUNT BORROWED(N)
                </Table.Cell>{" "}
                <Table.Cell className="text-center">
                  {data.LOAN_AMOUNT}
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer">
                {" "}
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                  REPAYMENT DURATION(months)
                </Table.Cell>{" "}
                <Table.Cell className="text-center">
                  {data.REPAYMENT_DURATION}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          )}
        </Table>{" "}
        {loading && (
          <div className="flex justify-center items-center min-h-[100px] w-full">
            <Spinner color="info" className="mx-auto" />
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center min-h-[100px] w-full">
            <span>{error}</span>
          </div>
        )}
      </div>
      <div className="w-10/12 md:w-8/12 mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-mont font-semibold text-blue-950 text-center mb-5">
          PREVIOUS LOANS BY USER
        </h2>
        <Table className="">
          {" "}
          <Table.Head>
            <Table.HeadCell className="text-center">ID</Table.HeadCell>
            <Table.HeadCell className="text-center">
              LOAN BALANCE
            </Table.HeadCell>
            <Table.HeadCell className="text-center">MONTH COUNT</Table.HeadCell>
            <Table.HeadCell className="text-center">DUE AMOUNT</Table.HeadCell>
          </Table.Head>{" "}
          {!loading && (
            <Table.Body className="divide-y divide-x">
              {pageLoans.map((loan) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer"
                  onClick={() => {
                    navigate(`/${loan.TRANSACTION_ID}`);
                  }}
                  key={loan.ID}
                >
                  {" "}
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                    {loan.ID}
                  </Table.Cell>{" "}
                  <Table.Cell className="text-center">
                    {loan.LOAN_BALANCE}
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    {loan.MONTH_COUNT}
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    {loan.EXPECTED_REPAYMENT_AMOUNT}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          )}
        </Table>{" "}
        {loading && (
          <div className="flex justify-center items-center min-h-[100px] w-full">
            <Spinner color="info" className="mx-auto" />
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center min-h-[100px] w-full">
            <span>{error}</span>
          </div>
        )}
        {loading ? (
          <></>
        ) : (
          <Pagination
            itemsPerPage={productsPerPage}
            total={data?.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </section>
  );
};

export default LoanPage;
