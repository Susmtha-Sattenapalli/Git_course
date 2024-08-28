import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/send-email', (req, res) => {
  // Handle email sending logic here
  res.status(200).send('Email sent successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
