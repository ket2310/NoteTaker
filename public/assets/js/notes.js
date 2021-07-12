const savNoteEl = document.querySelector('#savNote');
savNoteEl.addEventListener('click', (e) => {
    e.preventDefault();

    let newNote = {
        newTitle: titleEl = document.querySelector('.note-title'),
        newNote: noteEl = document.querySelector('.note-textarea')
    };

    console.log('savNoteEl -> newNote', newNote);
});

const addNoteEl = document.querySelector('#addNote');





const clearNote = () => {
    alert('Clearing...');

    fetch('/api/clear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
        .then((data) => {
          let waitList = document.getElementById('waitList');
          waitList.innerHTML = '';

          let tableList = document.getElementById('tableList');
          tableList.innerHTML = '';
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
