import { describe, expect, it } from "@jest/globals";
import request  from "supertest";
import { app } from '../../app'



const user = {
    "password": "12345",
    "username": "wallace"
}

describe("Get Users", () => {
    it('Get all users unatorization', async () => {
        const response = await request(app).get("/users")

        expect(response.statusCode).toBe(401)
    })

    it('Get all users', async () => {
        await request(app).post("/users/register").send(user)

        const users = await request(app).post("/users/login").send(user)
        

        const response = await request(app).get("/users").set('authorization', `bearer ${users.text.split(':')[1].replace(/["{}]/g, '')}`)

        expect(response.statusCode).toBe(200)
    })
})