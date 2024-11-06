import React from 'react'
import TableCell from '../atoms/TableCell';

function TableRow({ rowData }){
  return (
    <tr>
      {rowData.map((cell, index) => (
        <TableCell key={index} content={cell} />
      ))}
    </tr>
  );
};

export default TableRow;