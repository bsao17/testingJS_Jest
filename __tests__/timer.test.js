import { sleep } from "../timer";

describe('timer test', ()=>{
    it("should test timer", ()=>{
        const date = new Date.now().toLocaleString()
        expect(date).toBeGreaterThan(3)
    })
})