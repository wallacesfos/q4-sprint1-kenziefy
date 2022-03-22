import { describe, expect, it } from "@jest/globals";
import request  from "supertest";
import { app } from '../../app'


const user = {
    "password": "12345",
    "username": "wallace"
}

describe("Testes user login", () => {
    it("User must be able to login", async () => {
        await request(app).post("/users/register").send(user)

        const response = await request(app).post("/users/login").send(user)

        expect(response.statusCode).toBe(200)
    })

})