import React, { useContext } from 'react';
import LabelNote from '../utils/LabelNote';
import ListNote from './ListNote';
import FormNote from './FormNote';
import { DataContext } from '../App';

const Content = () => {
  const { formData, tambahNote, handleInputChange, sisaKarakter, catatan, arsipCatatan, hapusNote, handleToggleArchive } = useContext(DataContext);
  return (
    <>
      <div className="note-app__body">
        <div className="note-input">
          <LabelNote label="Buat catatan" />
          <FormNote data={formData} tambah={tambahNote} handleInput={handleInputChange} sisaChar={sisaKarakter} />
        </div>
        <div>
          <LabelNote label="Catatan Aktif" />
          <ListNote data={catatan} hapus={hapusNote} arsip={handleToggleArchive} />
          <LabelNote label="Arsip" />
          <ListNote data={arsipCatatan} hapus={hapusNote} arsip={handleToggleArchive} />
        </div>
      </div>
    </>
  );
};

export default Content;
