import React from 'react';

const SearchNote = ({ data, handleInput }) => {
  return (
    <>
      <div className="note-search">
        <input type="search" placeholder="Cari catatan ..." name="cari" value={data} onChange={handleInput} />
      </div>
    </>
  );
};

export default SearchNote;
