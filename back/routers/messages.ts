import express, { Request, Response } from 'express';
import { promises as fs } from 'fs';
import { Message } from "../types"

const messagesRouter = express.Router();
const path = './messages';

messagesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const files = await fs.readdir(path);
    console.log(files);
    const lastFive = files.slice(-5);
    const messages: Message[] = [];

    for (const file of lastFive) {
      const fileMessage = await fs.readFile(`${path}/${file}`);
      const parsedMessage: Message = JSON.parse(fileMessage.toString());

      messages.push(parsedMessage);
    }
    res.send(messages);

  } catch (err) {
    console.error(err);
  }
});

messagesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const messageData = req.body as Message;
    const dateTime = new Date().toISOString();
    const safeDateTime = dateTime.replace(/:/g, "-");
    const fileName = `${path}/${safeDateTime}.txt`;

    messageData.datetime = dateTime;

    await fs.writeFile(fileName, JSON.stringify(messageData));

    res.send(messageData);

  } catch (err) {
    console.error(err);
  }
});

export default messagesRouter;