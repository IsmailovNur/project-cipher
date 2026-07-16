import express, { Request, Response } from 'express';
import * as caesarSalad from 'caesar-salad';

const vigenereRouter = express.Router();
const { Vigenere } = caesarSalad;

vigenereRouter.post('/encode', (req: Request, res: Response): void => {
  const { password, message } = req.body;

  if (!password || !message) {
    res.status(400).send({ error: 'Invalid request!' });
    return;
  }
  const encodedMessage = Vigenere.Cipher(String(password)).crypt(String(message));
  res.send({ encoded: encodedMessage });
});

vigenereRouter.post('/decode', (req: Request, res: Response): void => {
  const { password, message } = req.body;

  if (!password || !message) {
    res.status(400).send({ error: 'Invalid request!' });
    return;
  }
  const decodedMessage = Vigenere.Decipher(String(password)).crypt(String(message));

  res.send({ decoded: decodedMessage });
});

export default vigenereRouter;