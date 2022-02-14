export async function timer (a){
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(a)
        }, 1000)
    })
}

timer(1).then(r=>console.log(r))
