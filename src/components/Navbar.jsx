import React, { useContext } from 'react';
import SearchNote from '../utils/SearchNote';
import { DataContext } from '../App';

const Navbar = () => {
  const { isSearch, handleInputChange } = useContext(DataContext);
  return (
    <>
      <div className="note-app__header">
        <h1>Notes Avhira</h1>

        <SearchNote data={isSearch} handleInput={handleInputChange} />
      </div>
    </>
  );
};

export default Navbar;
