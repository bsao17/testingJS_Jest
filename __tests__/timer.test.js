import { timer } from "../timer";

describe('timer test', ()=>{
    it("should test timer", ()=>{
        expect(timer(1)).toBe(1)
    })
})