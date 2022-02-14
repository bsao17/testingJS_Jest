export async function sleep (a){
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a)
        }, a*1000)
    }).then((r)=>{console.log(r)})
}
