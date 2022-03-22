import { describe, expect, it } from "@jest/globals";
import request  from "supertest";
import { app } from '../../app'

const user = {
    "password": "12345",
    "username": "wallacesfo"
}


describe("create user tests", () => {
    it("The user must be able to register", async () => {
        const response = await request(app).post("/users/register").send(user)

        expect(response.statusCode).toBe(201)
    })

    it("Cannot have two users the same", async () => {
        await request(app).post("/users/register").send(user)
        const response = await request(app).post("/users/register").send(user)

        expect(response.statusCode).toBe(422)
    })

    it("Error user does not insert required keys", async () => {
        const response = await request(app).post("/users/register").send({name: "kenzinho321", password: "12345"})
        expect(response.statusCode).toBe(400)
    })
})