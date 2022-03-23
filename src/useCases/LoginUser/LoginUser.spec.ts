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

    it("User passes invalid username", async () => {
        const response = await request(app).post("/users/login").send({
            username: "kenzinhoquenaoexiste",
            password: "1231231"
        })
        
        expect(response.statusCode).toBe(404)
    })

    it("User passes invalid password", async () => {
        const response = await request(app).post("/users/login").send({
            username: "wallace",
            password: "123123321"
        })
        
        expect(response.statusCode).toBe(401)
    })

    it("User passes keys invalid", async () => {
        const response = await request(app).post("/users/login").send({
            usernam: "wallace",
            password: "123123321"
        })

        expect(response.statusCode).toBe(400)

    })
})