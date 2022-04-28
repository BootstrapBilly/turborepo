import request from "supertest";
import app from "../../app";

it("returns correct response when user signs out", async () => {
  const res = await request(app).get("/api/users/signout").expect(200);

  expect(res.body.currentUser).toBeNull();
});
