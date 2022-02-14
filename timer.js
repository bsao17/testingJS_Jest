export async function sleep(t) {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(t)
        }, t*1000)
    })
}