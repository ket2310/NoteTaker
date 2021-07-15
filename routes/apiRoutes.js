const notesData = require('../db/db.json');
const path = require('path');
const fs = require('fs');

module.exports = (app) => {
    console.log(notesData)
    // Get all notes
    app.get('/api/notes', (req, res) => res.json(notesData));

    // Add a note 
    app.post('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname, '../db/db.json'), function (err, data) {
            var json = JSON.parse(data);
            json.push(req.body);
            console.log(json);
            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(json), function (err) {
                if (err) throw err;
            })
        });
    });

    app.get('/api/notes/:noteId', (req, res) => {
        const chosen = req.params.noteId;

        console.log(chosen);

        // Check each character routename and see if the chosen character is the same as it's routename
        for (let i = 0; i < notesData.length; i++) {
            // If the statement is true, send it back as JSON
            if (chosen === i + 1) {
                return res.json(notesData[i]);
            }
        }
    });


    app.post('/api/clear', (req, res) => {
        // Empty out the arrays of data
        notesData.length = 0;
        res.json({ ok: true });
    });
};
