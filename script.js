function createNote() {
  const title = document.getElementById('noteTitle').value;
  const content = document.getElementById('noteContent').value;
  const notes = readNotes();
  const id = Date.now();
  notes.push({ id: id, title: title, content: content });
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteContent').value = '';
}

function readNotes() {
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : [];
}

function updateNote(id) {
    const notes = readNotes();
    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex !== -1) {
        const note = notes[noteIndex];
        document.getElementById('noteTitle').value = note.title;
        document.getElementById('noteContent').value = note.content;
        document.getElementById('saveButton').style.display = 'none';
        document.getElementById('updateButton').style.display = 'inline-block';
		document.getElementById('updateButton').setAttribute('data-id', id);
    }
}

function saveUpdatedNote() {
    const id = parseInt(document.getElementById('updateButton').getAttribute('data-id'));
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    const notes = readNotes();
    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex !== -1) {
        notes[noteIndex].title = title;
        notes[noteIndex].content = content;
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteContent').value = '';
        document.getElementById('saveButton').style.display = 'inline-block';
        document.getElementById('updateButton').style.display = 'none';
    }
}

function deleteNote(id) {
  let notes = readNotes();
  notes = notes.filter(note => note.id !== id);
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
}

function displayNotes() {
  const notes = readNotes();
  const notesContainer = document.getElementById('notesContainer');
  notesContainer.innerHTML = '';

  notes.forEach(note => {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <div class="note-buttons">
        <button onclick="updateNote(${note.id})">Update</button>
        <button onclick="deleteNote(${note.id})">Delete</button>
      </div>
    `;
    notesContainer.appendChild(noteDiv);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayNotes();

  document.getElementById('saveButton').addEventListener('click', createNote);
  document.getElementById('updateButton').addEventListener('click', saveUpdatedNote);
  document.getElementById('updateButton').style.display = 'none';
});
