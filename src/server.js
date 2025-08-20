// const express = require('express');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// // Start the server and store the server instance
// const server = app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// // Export both app and server
// module.exports = { app, server };


const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Your routes and middleware
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
