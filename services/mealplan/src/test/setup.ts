import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

let mongo: any;

// declare global to be used in any test file
declare global {
  var signup: () => string[];
}

beforeAll(async () => {
  process.env.JWT_KEY = "testkey";

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signup = () => {
  // create a fake jwt
  const token = jwt.sign(
    {
      id: new mongoose.Types.ObjectId(),
      email: "test@test.com",
    },
    process.env.JWT_KEY!, // sign it with the key injected into the test env
  );

  const session = JSON.stringify({ jwt: token }); // create a session and stringify

  const base64Encoded = Buffer.from(session).toString("base64"); // encode it

  return [`session=${base64Encoded}`]; // return the fake cookie (signed using test env key)
};
