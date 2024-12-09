import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { jobtitledata } from './data/options.js';

export default function Joblist() {
  // Define the columns for the table
  const columns = [
    {
      accessorKey: 'jobtitle',
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
    <div className="joblist">
      <h3>Jobtitler</h3>
      <MaterialReactTable
        columns={columns}
        data={jobtitledata}
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
