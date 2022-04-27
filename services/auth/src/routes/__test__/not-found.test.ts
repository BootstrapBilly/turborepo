import request from "supertest";
import app from "../../app";

it("returns a not found error when no route was matched", async () => {
  const cookie = await signup();

  const res = await request(app)
    .get("/api/users/no-existo")
    .set("Cookie", cookie)
    .send()
    .expect(404);

  const errorMessage = res.body.errors[0].message;

  expect(errorMessage).toBe("Not found");
});
