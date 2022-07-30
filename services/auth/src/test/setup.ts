import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import app from "../app";

let mongo: any;

// declare global to be used in any test file
declare global {
  var signup: () => Promise<string[]>;
}

jest.mock("../nats-wrapper");

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
  await mongoose.disconnect();
});

global.signup = async () => {
  const email = "testemail@test.com";
  const password = "password";

  const signupres = await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(201);

  return signupres.get("Set-Cookie");
};
