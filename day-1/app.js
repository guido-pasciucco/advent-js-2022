const gifts = ['cat', 'game', 'socks']
const wrappedGifts = []

gifts.forEach((e) => {
    wrappedGifts.push(wrap(e))
})

function wrap(gift){
    let wrappedGift = `
        **********
        **${gift}** 
        **********
    `
    return wrappedGift
}

console.log(gifts)
console.log(wrappedGifts.join(` \ `))

//console.log(wrappedGifts.forEach((g) => console.log(g)))
