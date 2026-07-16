const generatePassword = require ("../../src/fns/generate-password")
const {describe, test, expect, beforeAll, AfterAll} = require('@jest/globals')


    describe("Teste unitario", () => {


        let salt = 18
        
        test("Gerar senha nova", async () => {
            const senha = await generatePassword()

            console.log('SENHA AQUI >>>>>>>>>>>>>>>>>>>', senha)
        })
        test("Gerar Duas senhas diferentes", async () => {
            const senha = await generatePassword()
            const senha2 = await generatePassword()

            expect(senha).not.toBe(senha2)
        })
        test("Gerar senha nova", async () => {
            const senha = await generatePassword()

            expect(senha).toHaveLength(36)
        }) 
        test("Gerar senha nova", async () => {
            const senha = await generatePassword()

            expect(senha).toMatch(/^[0-9a-f]+$/)
        })

    })
