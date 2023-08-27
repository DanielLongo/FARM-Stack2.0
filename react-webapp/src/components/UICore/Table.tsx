import React from "react";

interface TableColumn {
  header: string;
  accessor: string;
}

interface TableProps {
  data: Record<string, any>[];
  columns: TableColumn[];
}

const TableComponent: React.FC<TableProps> = ({ data, columns }) => {
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-500 text-lg">No records found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border rounded-md border-slate-50 ">
      <table className="min-w-full bg-white table-auto shadow-md rounded-lg">
        <thead>
          <tr className="w-full h-16 border-gray-300 border-b py-8">
            {columns.map((column, idx) => (
              <th
                key={idx}
                className="pl-14 text-gray-600 font-normal pr-6 text-left text-sm tracking-wide"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="text-left pl-14 pr-6 py-3 text-gray-800 text-sm"
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
