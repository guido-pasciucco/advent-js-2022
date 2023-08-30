const arrAnio = 2012
const arrDiasFestivos = ['01/06', '04/01', '12/6']

const checkAnioBisiesto = (y) => {
    return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
    ?
    console.log(y + " es año bisiesto") 
    :
    console.log(y + " NO es año bisiesto")
}

const countHours = (y, h) => {
    checkAnioBisiesto(y)
    let cantDiasFestivos = h.length
    let hsExtra = cantDiasFestivos * 2
    console.log( `Año: ${y} - Días festivos: ${cantDiasFestivos} - Total horas extra en el año: ${hsExtra}`)
    return h.map(h => {
        let mm = h[0].slice(0, 2)
        let dd = h[0].slice(3) 
        let fechaAParsear = `${arrAnio}-${dd}-${mm}`
        let fechaParseada = Date.parse(fechaAParsear)
        let fecha = new Date(`${y}/${h}`)
    })
}

countHours(arrAnio, arrDiasFestivos)

