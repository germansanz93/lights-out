// const path = require('path');
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// const publicPath = path.join(__dirname, '..', 'public');



// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`server is up on port ${port}`);
// })

const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});

