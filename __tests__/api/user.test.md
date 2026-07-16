const app = require ("../../index");
const request = require( "supertest");
const database = require("../../src/database");

describe("Teste de api pra Pessoa",() => {

    
    let token = ""
    
    

    test("Criar um usuário novo", async () => {
        const body = {
            name: "Jõao",
            email: "test@batata.com",
            password: "123456",
            role: 'admin'
        }


        const resposta = await request(app)
        .post('/api/v1/user')
        .set("Authorization", token)
        .send(body)

        console.log(resposta.body);
    })
});