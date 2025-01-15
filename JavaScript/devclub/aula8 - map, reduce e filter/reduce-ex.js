//const  numeros = [1,2,3,4,5]

//const soma = numeros.reduce((acumulador, atual) => {
    //const total = acumulador + atual

    //return total 
//}, 10)

//console.log(soma)


const totalVendas = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco * produto.quantidade 
}, 0)

console.log(totalVendas.toLocaleString('pt-br', {
    style: 'currency', 
    currency: 'BRL'
}),)