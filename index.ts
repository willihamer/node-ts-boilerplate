import express from 'express';
import log from 'npmlog';


const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello Hamer!');
});

app.listen(port, () => {
  log.info('Server Started',`Example app listening at http://localhost:${port}`);
})
