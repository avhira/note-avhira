import React, { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { getInitialData } from './utils';

export const DataContext = createContext();

const App = () => {
  const datas = getInitialData();
  const [notes, setNotes] = useState(datas);
  const [formData, setFormData] = useState({
    judul: '',
    konten: '',
  });
  const [isSearch, setIsSearch] = useState('');
  const [sisaKarakter, setSisaKarakter] = useState(50);

  const updateSisaKarakter = (judul) => {
    const sisa = 50 - judul.length;
    setSisaKarakter(sisa);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'judul' && value.length <= 50) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      updateSisaKarakter(value);
    } else if (name === 'konten') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }

    if (name === 'cari') {
      setIsSearch(value.toLowerCase());
    }
  };

  const tambahNote = (e) => {
    e.preventDefault();
    const { judul, konten } = formData;

    if (judul.trim() === '' || konten.trim() === '') {
      alert('Judul atau konten tidak boleh kosong.');
      return;
    }

    const newCatatan = {
      id: +new Date(),
      title: judul,
      body: konten,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    setNotes([...notes, newCatatan]);
    setFormData({
      judul: '',
      konten: '',
    });
    setSisaKarakter(50);
  };

  const hapusNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleToggleArchive = (id) => {
    const arsipNote = notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
    setNotes(arsipNote);
  };

  const catatan = notes.filter((note) => !note.archived && note.title.toLowerCase().includes(isSearch.toLowerCase()));
  const arsipCatatan = notes.filter((note) => note.archived && note.title.toLowerCase().includes(isSearch.toLowerCase()));

  return (
    <DataContext.Provider value={{ catatan, arsipCatatan, formData, handleInputChange, sisaKarakter, tambahNote, hapusNote, handleToggleArchive, isSearch }}>
      <Navbar />
      <Content />
    </DataContext.Provider>
  );
};
export default App;
