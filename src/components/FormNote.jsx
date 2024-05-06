import React from 'react';

const FormNote = ({ data, tambah, handleInput, sisaChar }) => {
  return (
    <>
      <form>
        <p className="note-input__title__char-limit">Sisa karakter: {sisaChar}</p>
        <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." name="judul" value={data.judul} onChange={handleInput} />
        <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." name="konten" value={data.konten} onChange={handleInput}></textarea>
        <button type="submit" onClick={tambah}>
          Buat
        </button>
      </form>
    </>
  );
};

export default FormNote;
