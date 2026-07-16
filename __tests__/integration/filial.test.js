const {describe, test, expect, beforeAll, afterAll} = require ('@jest/globals')
const conexao = require ("../../src/database")
const ServiceFilial = require ("../../src/service/filial")



describe("Teste de integração de Filial", () => {  

    let transaction

    beforeAll(async () => {
        transaction =  await conexao.db.transaction()
    })

    afterAll(async () => {
        transaction.rollback()
        conexao.db.close()
    })

    test("Teste de criação de filial", async () => {
        const name = "Testt"
        const address = "endereco"
        const phone = "4799999999"
        const email = "batataa@test.com"
        
        const retorno = await ServiceFilial.Create(name, address, phone, email, transaction)

        
        expect(retorno.filial.name).toBe(name)
        expect(retorno.filial.email).toBe(email)
        expect(retorno.filial.address).toBe(address)
        expect(retorno.filial.phone).toBe(phone)

    })
    test("Teste de criação de filial sem telefone", async () => {
        const name = "joão"
        const address = "endereco"
        const phone = null
        const email = "batataaa@test.com"
        
        const retorno = () =>  ServiceFilial.Create(name, address, phone, email, transaction)
        
        expect(retorno).rejects.toThrow("Favor informar o campo telefone")
    })
    test("Teste de criação de filial sem email", async () => {
        const name = "joão"
        const address = "endereco"
        const phone = "4799999999"
        const email = null
        
        const retorno = () => ServiceFilial.Create(name, address, phone, email, transaction)
        
        expect(retorno).rejects.toThrow("Favor informar o campo email")
    })
    test("Teste de criação de filial sem nome", async () => {
        const name = null
        const address = "endereco"
        const phone = "4799999999"
        const email = "batataaa@test.com"
        
        const retorno = () => ServiceFilial.Create(name, address, phone, email, transaction)
        
        expect(retorno).rejects.toThrow("Favor informar o campo nome")
    })
    test("Teste de criação de filial sem endereço", async () => {
        const name = "joão"
        const address = null
        const phone = "4799999999"
        const email = "batataaa@test.com"
        
        const retorno = () => ServiceFilial.Create(name, address, phone, email, transaction)
        
        expect(retorno).rejects.toThrow("Favor informar o campo ")
    })
    
    test("Teste de atualização de nome", async () => {
        const id = 1
        const name = "joão"

        const retorno = await ServiceFilial.Update(id, name, transaction)

        expect(retorno.filial.name).toBe(name)

    })
   /* test("Teste de atualização de endereco", async () => {
        const id = 2
        const address = "endereco2"
        
        
        const retorno = () => ServiceFilial.Update(id, name, transaction)
        
        console.log(retorno)
        
    })
    test("Teste de atualização de telefone", async () => {
        const id = 2
        const phone = "4788888888"
        
        
        const retorno = () => ServiceFilial.Update(id, name, transaction)
        
        console.log(retorno)
        
    })
    test("Teste de atualização de email", async () => {
        const id = 2
        const email = "batata@test.com"
        
        
        const retorno = () => ServiceFilial.Update(id, name, transaction)
        
        console.log(retorno)
        
    })
    test("Teste de deletar filial", async () => {
        const id = 2

        const retorno = () => ServiceFililal.Delete(id, transaction)

        console.log(retorno)
    })*/
    
})

