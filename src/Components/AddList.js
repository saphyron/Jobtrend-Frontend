import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { useNavigate } from 'react-router-dom';
import { addlist } from './data/options.js';

export default function Addlist() {
  const navigate = useNavigate();

  const columns = [
    {
      accessorKey: 'headline', // Matches the key in the data
      header: 'Annoncer',
    },
  ];

  const handleRowClick = () => {
    navigate('/addpage');
  };

  return (
    <div className="addlist">
      <MaterialReactTable
        columns={columns}
        data={addlist} // Pass the data
        initialState={{
          sorting: [{ id: 'headline', desc: false }],
        }}
        muiTableBodyRowProps={{
          onClick: handleRowClick,
          sx: { cursor: 'pointer' },
        }}
        localization={{
          noRecordsFound: 'Der er ikke flere oplysninger',
          noResultsFound: 'Der er ikke noget match',
        }}
      />
    </div>
  );
}
