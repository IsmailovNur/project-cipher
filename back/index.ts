import express, { Request, Response } from 'express';
import caesarSalad from 'caesar-salad';
import cors from 'cors';

const {Vigenere} = caesarSalad;
const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

app.post('/encode', (req: Request, res: Response) => {
  const {password, message} = req.body;

  if (!password || !message) {
    res.status(400).send({error: 'Invalid request!'});
    return;
  }

  const encodedMessage = Vigenere.Cipher((password)).crypt((message));
  res.send({encoded: encodedMessage});
});

app.post('/decode', (req: Request, res: Response) => {
  const {password, message} = req.body;

  if (!password || !message) {
    res.status(400).send({error: 'Invalid request!'});
    return;
  }

  const decodedMessage = Vigenere.Decipher((password)).crypt((message));
  res.send({decoded: decodedMessage});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})