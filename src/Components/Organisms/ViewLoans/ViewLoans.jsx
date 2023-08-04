import { useEffect, useState } from "react";
import { Table, Spinner } from "flowbite-react";
import Pagination from "../Pagination/Pagination";
import { useNavigate } from "react-router-dom";

const ViewLoans = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const pageLoans = data?.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formdata = new FormData();
  formdata.append("action", "get_all_loan_request");
  formdata.append("transaction_id", "");

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
        setData(response.data);
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
    <section className="max-md:px-5 w-full md:w-8/12 mx-auto">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-mont font-semibold text-blue-950 text-center">
        View Existng Loans
      </h2>
      <h2 className="text-xs font-mont font-light text-red-400 text-center mb-5">
        *Click transaction to view transaction details
      </h2>
      <Table>
        {" "}
        <Table.Head>
          <Table.HeadCell className="text-center">ID</Table.HeadCell>
          <Table.HeadCell className="text-center">Full Name</Table.HeadCell>
          <Table.HeadCell className="text-center">Amount</Table.HeadCell>
          <Table.HeadCell className="text-center">Duration</Table.HeadCell>
        </Table.Head>{" "}
        {!loading && (
          <Table.Body className="divide-y">
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
                  {loan.FULL_NAME}
                </Table.Cell>
                <Table.Cell className="text-center">
                  {loan.LOAN_AMOUNT}
                </Table.Cell>
                <Table.Cell className="text-center animate-pulse cursor-pointer">
                  {loan.REPAYMENT_DURATION}
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
    </section>
  );
};

export default ViewLoans;
