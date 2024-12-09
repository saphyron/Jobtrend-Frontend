import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { subdata } from './data/options.js';

export default function Sublist() {
  // Define the columns for the table
  const columns = [
    {
      accessorKey: 'subtitle',
      header: '⭥',
      enableSorting: true,
    },
    {
      accessorKey: 'antal',
      header: '⭥',
      enableSorting: true,
    },
  ];

  return (
    <div className="sublist">
      <h3>Faglige kompetencer</h3>
      <MaterialReactTable
        columns={columns}
        data={subdata}
        initialState={{
          sorting: [{ id: 'antal', desc: false }], // Initial sort by 'antal'
        }}
        muiTableBodyRowProps={{
          className: 'trname', // Apply the 'trname' class to table rows
        }}
        localization={{
          // Customize localization texts
          noRecordsFound: 'Der er ikke flere oplysninger',
          noResultsFound: 'Der er ikke noget match',
        }}
      />
    </div>
  );
}
