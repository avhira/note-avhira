import React from 'react';
import { showFormattedDate } from '../utils';

const ListNote = ({ data, hapus, arsip }) => {
  return (
    <div>
      <div className="notes-list">
        {data && data.length > 0 ? (
          data.map((note) => (
            <div
              className="note-item"
              key={note.id}
            >
              <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                <p className="note-item__body">{note.body}</p>
              </div>
              <div className="note-item__action">
                <button
                  className="note-item__delete-button"
                  onClick={() => hapus(note.id)}
                >
                  Delete
                </button>
                <button
                  className="note-item__archive-button"
                  onClick={() => arsip(note.id)}
                >
                  {note.archived ? 'Pindahkan' : 'Arsipkan'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-message">
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListNote;
