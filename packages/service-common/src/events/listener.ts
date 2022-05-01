import { Message, Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";

// define an event interface to enforce type of listener
interface Event {
  subject: Subjects;
  data: any;
}

// T extends Event = pass the type of event as an argument, when extending this class
export abstract class Listener<T extends Event> {
  // abtract must be implemented by subclass
  abstract subject: T["subject"]; // name of topic/feed -> of type subject
  abstract queueGroupName: string; // name of group, so only 1 instance processes msg
  abstract onMessage: (data: T["data"], msg: Message) => void; // callback after msg parsed

  // make it protected so that if sub classes need to publish events, they can access it (makes testing easier)
  protected client: Stan; // initialised nats client
  protected ackWait = 5 * 1000; // protected CAN be overriden by subclass

  constructor(client: Stan) {
    this.client = client;
  }

  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable() // deliver all messages on startup (to catch missed ones)
      .setManualAckMode(true) // enable manual acknowledgement
      .setAckWait(this.ackWait) // how long to wait for ack before resending
      .setDurableName(this.queueGroupName); // only process messages which have not been dealt with
  }

  listen() {
    const subscription = this.client.subscribe(
      // set up subscription
      this.subject, // name of feed/topic
      this.queueGroupName, // name of queuegroup
      this.subscriptionOptions() // pass in the subscription options
    );

    subscription.on("message", (msg: Message) => {
      // handle incoming messages
      console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);

      const parsedData = this.parseMessage(msg); // parse the data
      this.onMessage(parsedData, msg); // run the callback
    });
  }

  parseMessage(msg: Message) {
    // helper function to deal with incoming messages
    const data = msg.getData();

    return typeof data === "string"
      ? JSON.parse(data) // parse strings
      : JSON.parse(data.toString("utf8")); // parse buffers
  }
}
