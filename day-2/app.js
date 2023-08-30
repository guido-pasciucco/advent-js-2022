/* 

Un millonario ha comprado una red social y no trae buenas noticias.
Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo,
habrá que compensarlo con dos horas extra otro día de ese mismo año.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia
y están preparando un programa que les diga el número de horas extras que harían
en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes.
Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos,
devuelve el número de horas extra que se harían ese año:

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año
Cosas a tener en cuenta y consejos:

LISTO - El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, (((si fuese necesario.))) NO SE QUE ONDA ESTO

Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.

El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.

*/
const arrAnio = 2012
const arrDiasFestivos = ['01/06', '04/01', '12/6'] // formato MM/DD
//countHours(year, holidays) // 2 días -> 4 horas extra en el año


const checkAnioBisiesto = (y) => {
    return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
    ?
    console.log(y + " es año bisiesto") 
    :
    console.log(y + " NO es año bisiesto")
}

const checkDiaSemana = (fecha) => {
    return fecha.getDay()
}

const crearObjetosDate = (fecha) => {
    thisDate = new Date(fecha.getFullYear())
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

