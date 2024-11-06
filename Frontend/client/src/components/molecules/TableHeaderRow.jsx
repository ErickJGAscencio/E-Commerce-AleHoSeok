import React from 'react'
import TableHeaderCell from '../atoms/TableHeaderCell';

function TableHeaderRow({ headers }) {
  return (
    <tr>
      {headers.map((header, index) => (
        <TableHeaderCell key={index} content={header} />
      ))}
    </tr>
  );
};

export default TableHeaderRow;