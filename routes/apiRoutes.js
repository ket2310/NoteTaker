const notesData = require('../db/db.json');
const path = require('path');
const fs = require('fs');

module.exports = (app) => {
    console.log(notesData)
    // Get all notes
    app.get('/api/notes', (req, res) => res.json(notesData));

    // Add a note 
    app.post('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname, '../db/db.json'), function(err, data) {
            var json = JSON.parse(data);
            json.push(req.body);
            console.log(json);
            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(json),  function(err) {
                if(err) throw err;
            })
        });

        /* 
fs.readFile('results.json', function (err, data) {
    var json = JSON.parse(data)
    json.push('search result: ' + currentSearchResult)

    fs.writeFile("results.json", JSON.stringify(json))
})*/
    });

    app.post('/api/clear', (req, res) => {
        // Empty out the arrays of data
        notesData.length = 0;
        res.json({ ok: true });
    });
};
