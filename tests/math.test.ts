import { describe, expect, test} from "@jest/globals"
import { add, isPasswordValid } from "../src/logic"


describe('math', () => {
    test('Adding', () => {
        expect(add(2,3)).toBe(5)
        expect(add(-1,1)).toBe(0)
    })
})
describe('auth', () => {
    test('Password is valid?', () => {
        expect(isPasswordValid('password125253')).toBe(true)
        expect(isPasswordValid('lol')).toBe(false)
    })
    
})
