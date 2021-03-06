const express = require('express');
const { v4: uuidv4 } = require('uuid'); 
const app = express();
const PORT = process.env.PORT || 3200;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
