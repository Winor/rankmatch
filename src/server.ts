import express from 'express';
import bodyparser from 'body-parser';

const app = express();
const port = 8080;

app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.static("frontend/dist"))
app.use(bodyparser.json())

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app
