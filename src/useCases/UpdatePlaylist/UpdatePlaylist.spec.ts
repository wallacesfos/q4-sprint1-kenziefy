import { describe, expect, it } from "@jest/globals";
import request  from "supertest";
import { app } from '../../app'

const user = {
    "password": "12345",
    "username": "wallacesfo"
}


describe("update Playlist", () => {
    it('users unatorization', async () => {
        const response = await request(app).put("/users/playlist?artist=Billie%20Eilish&song=therefore%20I%20am")

        expect(response.statusCode).toBe(401)
    })

    it('user create success', async () => {
        await request(app).post("/users/register").send(user)

        const users = await request(app).post("/users/login").send(user)

        await request(app).put("/users/playlist").set('authorization', `bearer ${users.text.split(':')[1].replace(/["{}]/g, '')}`).send({
            "Billie Eilish": [
                {
                    title: "therefore I am",
                    duration: "2:53",
                    releasedDate: "12/11/2012",
                    genres: [
                        "pop", "dark pop"
                    ]
                }
            ]
        })

        const response = await request(app).put("/users/playlist?artist=Billie%20Eilish&song=therefore%20I%20am").set('authorization', `bearer ${users.text.split(':')[1].replace(/["{}]/g, '')}`)

        expect(response.statusCode).toBe(200)
    })

})