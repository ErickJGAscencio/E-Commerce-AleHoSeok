import React from 'react'
import TableHeaderRow from '../molecules/TableHeaderRow';
import TableRow from '../molecules/TableRow';

function Table({ headers, data }) {
  return (
    <table>
      <thead>
        <TableHeaderRow headers={headers} />
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} rowData={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;