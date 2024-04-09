import React, { useState } from 'react';
import { Package } from '../../../../types/package';

const packageData: Package[] = [
  {
    name: 'Jane Doe',
    tag: '@user123',
    invoiceDate: `13/01/23`,
    status: 'Active',
    email: 'freeuser@example.com',
  },
  {
    name: 'Jane Doe',
    tag: '@user123',
    invoiceDate: `13/01/23`,
    status: 'Active',
    email: 'freeuser@example.com',
  },
  {
    name: 'Jane Doe',
    tag: '@user123',
    invoiceDate: `13/01/23`,
    status: 'Active',
    email: 'freeuser@example.com',
  },
  {
    name: 'Jane Doe',
    tag: '@user123',
    invoiceDate: `13/01/23`,
    status: 'Active',
    email: 'freeuser@example.com',
  },
  {
    name: 'Jane Doe',
    tag: '@user123',
    invoiceDate: `13/01/23`,
    status: 'Active',
    email: 'freeuser@example.com',
  },
];

const Table = () => {
  const [selectedRows, setSelectedRows] = useState(new Set<number>());

  const handleCheckboxChange = (index: number) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(index)) {
      newSelectedRows.delete(index);
    } else {
      newSelectedRows.add(index);
    }
    setSelectedRows(newSelectedRows);
  };

  const isRowSelected = (index: number) => {
    return selectedRows.has(index);
  };

  return (
    <div className="rounded-3xl border border-stroke bg-white px-5 pt-6 pb-2.5 sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left dark:bg-meta-4">
              <th className="min-w-[30px] py-4 px-4"></th>
              <th className="min-w-[220px] py-4 px-4 font-bold text-[#534D59] dark:text-white xl:pl-11">
                Users
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-[#534D59] dark:text-white">
                Status
              </th>
              <th className="py-4 px-4 font-bold text-[#534D59] dark:text-white">
                Date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-bold text-[#534D59] dark:text-white">
                E-mail
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, index) => (
              <tr
                key={index}
                className={`${
                  isRowSelected(index) ? 'bg-slate-100' : ''
                } hover:bg-gray-100 transition-colors`}
              >
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="checkbox"
                    checked={isRowSelected(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="text-black font-bold ">{packageItem.name}</h5>
                  <p className="text-sm">${packageItem.tag}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <span
                    className={`inline-flex items-center rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      packageItem.status === 'Active'
                        ? 'bg-success text-success'
                        : packageItem.status === 'Offline'
                        ? 'bg-slate-600 text-[#3F3748]'
                        : packageItem.status === 'Wait'
                        ? 'bg-warning text-warning'
                        : ''
                    }`}
                  >
                    <div
                      className={`w-2 h-2 mr-2 rounded-full ${
                        packageItem.status === 'Active'
                          ? 'bg-success'
                          : packageItem.status === 'Offline'
                          ? 'bg-slate-600'
                          : packageItem.status === 'Wait'
                          ? 'bg-warning'
                          : ''
                      }`}
                    ></div>
                    {packageItem.status}
                  </span>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.invoiceDate}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.email}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG code for the first button */}
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG code for the second button */}
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
