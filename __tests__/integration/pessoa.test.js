const {describe, test, expect, beforeAll, afterAll} = require ('@jest/globals')
const conexao = require ("../../src/database")
const ServicePessoa = require ("../../src/service/pessoa")

describe("Teste de integração de Pessoa", () => {  

    let transaction

    beforeAll(async () => {
        transaction =  await conexao.db.transaction()
    })

    afterAll(async () => {
        transaction.rollback()
        conexao.db.close()
    })

    test("Teste de criação de filial", async () => {
        const filialId = 1
        const name =  "Jõao"
        const email = "test@batata.com"
        const password = "123456"
        const role = 'admin'
        
        const retorno = await ServicePessoa.Create(filialId, name, email, password, role, transaction)
    
        expect(retorno.name).toBe(name)
        expect(retorno.email).toBe(email)
        expect(retorno.role).toBe(role)
    })
})