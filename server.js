import * as line from "@line/bot-sdk";
import express from "express";

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
  return res.send("Successfully");
});
