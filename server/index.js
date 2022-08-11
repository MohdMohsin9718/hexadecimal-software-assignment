const express = require('express');
const Request = require('request');
const cors = require('cors');
const port = 5000;

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

let list = [];
const getList = () => {
  Request.get(
    'https://jsonplaceholder.typicode.com/users',
    (error, res, body) => {
      if (error) {
        return console.log(error);
      }
      return (list = JSON.parse(body));
    }
  );
};

getList();

app.get('/api/list', async (req, res) => {
  res.status(200).json(list);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
