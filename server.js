import app from './app';

const port = 3333;
app.listen(port, () => {
  console.log();
  console.log(`Listen on port ${port}`);
  console.log(`CTRL + click on http://localhost:${port}`);
});
