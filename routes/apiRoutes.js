const notesData = require('../db/db.json');
const path = require('path');
const fs = require('fs');

module.exports = (app) => {

    // Get all notes
    app.get('/api/notes', (req, res) => res.json(notesData));

    // Add a note 
    app.post('/api/notes', (req, res) => {
        console.log(`Request body: ${req.body.newTitle}`); 
        fs.appendFile(path.join(__dirname, '../db/db.json'), JSON.stringify(req.body), (err) => {
            if (err) throw err;
        });
    });

    app.post('/api/clear', (req, res) => {
        // Empty out the arrays of data
        notesData.length = 0;
        res.json({ ok: true });
    });
};
