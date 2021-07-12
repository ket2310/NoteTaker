const notesData = require('../db/db.json');


module.exports = (app) => {

    // Get all notes
    app.get('/api/notes', (req, res) => res.json(notesData));

    // Add a note 
    app.post('/api/notes', (req, res) => {
        notesData.push(req.body);
    });

    app.post('/api/clear', (req, res) => {
        // Empty out the arrays of data
        notesData.length = 0;
        res.json({ ok: true });
    });
};
