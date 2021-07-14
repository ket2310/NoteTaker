const savNoteEl = document.querySelector('.save-note');
const addNoteEl = document.querySelector('.new-note');
const titleEl = document.querySelector('.note-title');
const noteEl = document.querySelector('.note-textarea');

const clearNote = () => {
  fetch('/api/clear', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      titleEl.value = '';
      noteEl.value = '';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};


savNoteEl.addEventListener('click', (e) => {
  e.preventDefault();

  let newNote = {
    title: titleEl.value.trim(),
    text: noteEl.value.trim()
  };

  console.log('savNoteEl -> newNote', newNote);

  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newNote),
  })
    .then((response) => response.json())
    .then((data) => {
      alert('Your note has been saved.');

    })
    .catch((error) => {
      console.error('Error:', error);
    });

});


titleEl.addEventListener('keyup', function () {
  noteEl.addEventListener('keyup', function () {
    if (titleEl.value !== '' && noteEl.value !== '') {
      //alert('it works')
      savNoteEl.setAttribute('style', 'display: inline');
    }
    else {
      savNoteEl.setAttribute('style', 'display: none');
    }
  });
});

addNoteEl.addEventListener('click', clearNote);

const runNoteQuery = () => {
  // Fetch function GET the data associated with it (initially set to localhost)
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((notesData) => {
      console.log('notesData', notesData);
      console.log('------------------------------------');

      for (let i = 0; i < notesData.length; i++) {
        // Get a reference to the tableList element and populate it with tables
        const notesListEl = document.getElementById('notesList');

        // Then display the fields in the HTML (Section Name, Date, URL)
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'mt-4');

        // Create elements for Table ID, ID, Name, Email, Phone
        const titleItemEl = document.createElement('h4');
        titleItemEl.textContent = notesData[i].title;

        listItem.appendChild(titleItemEl);
     
        // Append listItem to tableList
        notesListEl.appendChild(listItem);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

runNoteQuery();