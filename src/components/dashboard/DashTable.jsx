import { Fragment } from "react";
import { DOTS, useCustomPagination } from "../../hooks/useCustomPagination";
import { Menu, Transition } from "@headlessui/react";
const tableData = [
  {
    id: "1391e37e-bcfc",
    name: "Model XYZ",
    size: "2 MB",
    status: 1,
    model: "Da-Vinci",
    cData: "07-03-23",
    eDate: "07-03-23",
  },
  {
    id: "1391e37e-bcfc",
    name: "Model XYZ",
    size: "2 MB",
    status: 2,
    model: "Da-Vinci",
    cData: "07-03-23",
    eDate: "07-03-23",
  },
  {
    id: "1391e37e-bcfc",
    name: "Model XYZ",
    size: "2 MB",
    status: 3,
    model: "Da-Vinci",
    cData: "07-03-23",
    eDate: "07-03-23",
  },
  {
    id: "1391e37e-bcfc",
    name: "Model XYZ",
    size: "2 MB",
    status: 4,
    model: "Da-Vinci",
    cData: "07-03-23",
    eDate: "07-03-23",
  },
  {
    id: "1391e37e-bcfc",
    name: "Model XYZ",
    size: "2 MB",
    status: 2,
    model: "Da-Vinci",
    cData: "07-03-23",
    eDate: "07-03-23",
  },
  {
    id: "1391e37e-bcfc",
    name: "Model XYZ",
    size: "2 MB",
    status: 1,
    model: "Da-Vinci",
    cData: "07-03-23",
    eDate: "07-03-23",
  },
  {
    id: "1391e37e-bcfc",
    name: "Model XYZ",
    size: "2 MB",
    status: 3,
    model: "Da-Vinci",
    cData: "07-03-23",
    eDate: "07-03-23",
  },
  {
    id: "1391e37e-bcfc",
    name: "Model XYZ",
    size: "2 MB",
    status: 4,
    model: "Da-Vinci",
    cData: "07-03-23",
    eDate: "07-03-23",
  },
];

const statusStyle = {
  1: "bg-[#F0C0001F] py-1 px-2 rounded text-[#F0C000]",
  2: "bg-[#9D5BD21F] py-1 px-2 rounded text-[#9D5BD2]",
  3: "bg-[#F2555A1F] py-1 px-2 rounded text-[#F2555A]",
  4: "bg-[#3CB1791F] py-1 px-2 rounded text-[#3CB179]",
};
const statusText = {
  1: "Pending",
  2: "In-Progress",
  3: "Failed",
  4: "Completed",
};
const menuOptions = ["Train", "View", "Download", "Update", "Delete"];
const DashTable = () => {
  const paginationRange = useCustomPagination({
    totalCount: 40,
    pageSizeNum: 10,
    siblingCount: 1,
    currentPage: 1,
  });
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="w-full inline-block align-middle">
            <div className="overflow-auto border border-[#16191F] rounded bg-[#0C0D0F] z-10">
              <table className="min-w-full divide-y divide-[#16191F] table-auto">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID - UUID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500 "
                    >
                      Model Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500 "
                    >
                      Model Size
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500 "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500 "
                    >
                      Base Model
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500 "
                    >
                      Date Created
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500  "
                    >
                      Last Edited
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500 "
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#16191F]">
                  {tableData.map((data, idx) => (
                    <tr key={idx}>
                      <td className="px-3 py-4 text-sm font-medium whitespace-nowrap">
                        {data.id}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap">
                        {data.name}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap">
                        {data.size}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap">
                        <span className={statusStyle[data.status]}>
                          {statusText[data.status]}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap">
                        {data.model}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap">
                        {data.cData}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap">
                        {data.eDate}
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap uppercase cursor-pointer">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button
                              aria-hidden="true"
                              className="inline-flex w-full justify-center text-[#0096C7] "
                            >
                              View Actions
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-50 mt-2 w-26 origin-top-right rounded-md bg-[#13151A] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                {menuOptions.map((a) => (
                                  <Menu.Item key={a}>
                                    {({ active }) => (
                                      <div
                                        className={
                                          "text-white block px-4 py-2 text-sm font-Poppins normal-case"
                                        }
                                      >
                                        {a}
                                      </div>
                                    )}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-4">
        <div className="flex justify-center gap-2">
          {paginationRange?.length > 1 && (
            <button className="bg-[#08090A] p-2 border border-[#16191F] rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.38 12.5467C6.25333 12.5467 6.12667 12.5001 6.02667 12.4001L1.98 8.35341C1.78667 8.16008 1.78667 7.84008 1.98 7.64674L6.02667 3.60008C6.22 3.40674 6.54 3.40674 6.73333 3.60008C6.92667 3.79341 6.92667 4.11341 6.73333 4.30674L3.04 8.00008L6.73333 11.6934C6.92667 11.8867 6.92667 12.2067 6.73333 12.4001C6.64 12.5001 6.50667 12.5467 6.38 12.5467Z"
                  fill="#6C757D"
                />
                <path
                  d="M13.6667 8.5H2.44667C2.17333 8.5 1.94667 8.27333 1.94667 8C1.94667 7.72667 2.17333 7.5 2.44667 7.5H13.6667C13.94 7.5 14.1667 7.72667 14.1667 8C14.1667 8.27333 13.94 8.5 13.6667 8.5Z"
                  fill="#6C757D"
                />
              </svg>
            </button>
          )}
          {paginationRange?.length > 1 &&
            paginationRange.map((pageNumber) => {
              if (pageNumber === DOTS) {
                return <span key={pageNumber}>&#8230;</span>;
              }

              return (
                <button
                  className={`justify-center items-center h-10 w-10 flex border border-[#16191F] rounded-[8px] text-white ${
                    pageNumber === 1 ? "bg-[#023E8A]" : "bg-[#08090A] "
                  }`}
                  key={pageNumber}
                >
                  {pageNumber}
                </button>
              );
            })}

          {paginationRange?.length > 1 && (
            <button className="bg-[#08090A] p-2 border border-[#16191F] rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.62001 12.5467C9.49334 12.5467 9.36667 12.5001 9.26667 12.4001C9.07334 12.2067 9.07334 11.8867 9.26667 11.6934L12.96 8.00008L9.26667 4.30674C9.07334 4.11341 9.07334 3.79341 9.26667 3.60008C9.46001 3.40674 9.78001 3.40674 9.97334 3.60008L14.02 7.64674C14.2133 7.84008 14.2133 8.16008 14.02 8.35341L9.97334 12.4001C9.87334 12.5001 9.74667 12.5467 9.62001 12.5467Z"
                  fill="white"
                />
                <path
                  d="M13.5533 8.5H2.33333C2.05999 8.5 1.83333 8.27333 1.83333 8C1.83333 7.72667 2.05999 7.5 2.33333 7.5H13.5533C13.8267 7.5 14.0533 7.72667 14.0533 8C14.0533 8.27333 13.8267 8.5 13.5533 8.5Z"
                  fill="white"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default DashTable;
