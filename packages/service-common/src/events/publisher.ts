import { Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";

// define an event interface to enforce type of listener
interface Event {
  subject: Subjects;
  data: any;
}

// it takes T as a generic, so the event type can be passed in to the publisher
// this generic syntax gives typescript support when publishing events
export abstract class Publisher<T extends Event> {
  // channel to publish the event to
  abstract subject: T["subject"];

  // make it protected so that if sub classes need to publish events, they can access it (makes testing easier)
  // the client which holds the channels/topics
  protected client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  // method used to publish the message to the topic/channel
  publish(data: T["data"]): Promise<void> {
    // wrap it in a promise so that the publish can be awaited
    return new Promise((resolve, reject) => {
      //publish the message to the topic
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err);
        }

        resolve();
      });
    });
  }
}
