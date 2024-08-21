import tested from 'log';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  tested.info('API request received');
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});