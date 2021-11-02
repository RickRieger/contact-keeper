// With out Babel or Typescript, need to use 'common js' to bring in modules.
// -React uses es6 modules which allows the syntax 'import' to bring in modules.
const express = require('express');

// Initialize express into a variable called 'app'
const app = express();

//give app the method 'get'
app.get('/', (req, res) => res.json({ msg: 'Welcome to the contact api' }));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`server started on port ${PORT}`));
