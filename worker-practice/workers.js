const squarePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = 8
        resolve(`The square of ${number} is ${number * number}`)
    }, 4000)
})

addEventListener("message", (message) => {
    if (message.data === 'calculate square') {
        squarePromise.then(result => postMessage(result))
    }
})