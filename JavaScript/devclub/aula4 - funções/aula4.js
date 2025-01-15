// FUNCOES

// void (vazia)

function digaMinhaIdade() {
    console.log("seventeen")
    console.log("ten")
}

digaMinhaIdade()

// parametros  

function  digaQualquerNome(name){
    console.log(name)
}

digaQualquerNome("Dior")
digaQualquerNome("Sam")
digaQualquerNome("Aizhs")


function soma(numero1, numero2, numero3) { 
    const resultado = numero1 + numero2 / numero3 

    console.log(resultado)
}

soma(377,987,3)
soma(1,2,3)

//return (retornar)

function soma(numero1, numero2) { 
    const resultado = numero1 / numero2 

    return resultado
}

const resultadoDaSoma = soma(23013, 149138)

console.log(resultadoDaSoma)


//att pratica do return 

function fodidoEndividado(receitaF, gastosG) {
    if(receitaF > gastosG) {
        return "Ai sim"
    } 

    else {
        return "Vishkkkkkkkkk"
    }
}

const FULANA = fodidoEndividado(600, 4000)
const WESLEY = fodidoEndividado(70000, 3000)

console.log(FULANA)
console.log(WESLEY)

// arrow function (funcao flexa)

function abacate() {} // classica

const digaMeuNome = () => { //forma moderna
    console.log("Veronika")
}

digaMeuNome()

// ??????












    


