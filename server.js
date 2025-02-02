import * as line from "@line/bot-sdk";
import express from "express";

// Mock Database
const db = {
  order: {
    name: null,
    price: null,
    image: null,
    type: null,
  },
  destination: {
    title: null,
    address: null,
  },
  dateTime: {
    date: null,
    time: null,
  },
};

// Configuration
const config = {
  channelSecret: "",
};

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: "",
});

// Create express application
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Starting application on port: ${port}`));

// register a webhook handler with middleware
app.post("/callback", line.middleware(config), async (req, res) => {
  try {
    const results = await Promise.all(req.body.events.map(handleEvent));
    res.send(results);
  } catch (err) {
    console.error("Error handling events:", err);
    res.status(500).send();
  }
});

async function handleEvent() {
  return "Successfully";
}
