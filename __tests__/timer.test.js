import {sleep} from "../timer.js";

describe('timer test', () => {
    it("should wait timer", async () => {
        const time = Date.now()
        await sleep(3)
        expect( Date.now() - time ).toBeGreaterThan(3000)
    })
})