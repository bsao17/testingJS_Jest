import {sleep} from "../timer.js";

describe('timer test', () => {
    it("should wait timer", async () => {
        const date = Date.now()
        await sleep(3)
        expect(Date.now() - date).toBeGreaterThanOrEqual(3000)
    })
})