import express from 'express';

const app = express();
const port = 8080;

app.use('/', express.static(__dirname + '/build'));

const server = app.listen(port, () => {
  console.log('Express listening on port', port);
});
