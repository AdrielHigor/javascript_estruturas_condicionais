let teste = false

teste ? console.log('true') : console.log('false')

if (teste > 1 || teste < -1){
    console.log("Executou!")
} else {
    console.log("Executou Falso!")
}

switch (teste) {
    case true:
        console.log("Executou True!")
        break
    case false:
        console.log("Executou False!")
        break
    default:
        console.log('oi')
}
