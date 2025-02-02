import express from "express";
import * as line from "@line/bot-sdk";
// import * as dotenv from "dotenv"

// dotenv.config()

function getClient() {
    //console.log(process.env.LINE_TOKEN)
  return new line.messagingApi.MessagingApiClient({
    channelAccessToken: process.env.LINE_TOKEN || "",
  });
}

// const client = getClient();

export async function callback(req: express.Request, res: express.Response) {
  try {
    const results = await Promise.all(req.body.events.map(handleEvent));
    res.send(results);
  } catch (err) {
    console.error("Error handling events:", err);
    res.status(500).send();
  }
   // return res.send("Successfully");
 }
async function handleEvent(event) {
  switch (event.message.type) {
    case "text":
        console.log(event.message)
      sendArigato(event);
      break;
    default:
      return null;
  }
}
function sendArigato(event) {
  const message: line.messagingApi.Message = {
    type: "text",
    text: "ขอบคุณครับ",
  };

  return getClient().replyMessage({
    replyToken: event.replyToken,
    messages: [message,message,message,message,message],
  });
}
export function test (req: express.Request, res: express.Response){
  res.status(200).json({success:true})
}
