import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { comdata } from './data/options.js';

export default function Comlist() {
  // Define the columns for the table
  const columns = [
    {
      accessorKey: 'comtitle',
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
    <div className="comlist">
      <h3>Virksomheder</h3>
      <MaterialReactTable
        columns={columns}
        data={comdata}
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
