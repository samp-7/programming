const produtos = [
    { id: 1, nome: "Geladeira", preco: 3999.99, temDesconto: false, quantidade: 10 },
    { id: 2, nome: "Micro-ondas", preco: 699.99, temDesconto: true, quantidade: 5 },
    { id: 3, nome: "Máquina de lavar", preco: 2999.90, temDesconto: false, quantidade: 7 },
    { id: 4, nome: "Fogão", preco: 1099.50, temDesconto: true, quantidade: 3 },
    { id: 5, nome: "Aspirador de pó", preco: 399.99, temDesconto: false, quantidade: 15 },
    { id: 6, nome: "Lava-louças", preco: 2599.90, temDesconto: true, quantidade: 4 },
    { id: 7, nome: "Ar-condicionado", preco: 1999.99, temDesconto: false, quantidade: 6 },
    { id: 8, nome: "Liquidificador", preco: 149.99, temDesconto: true, quantidade: 12 },
    { id: 9, nome: "Cafeteira", preco: 249.99, temDesconto: false, quantidade: 8 },
    { id: 10, nome: "Secador de cabelo", preco: 129.90, temDesconto: true, quantidade: 20 }
];

//ARRAY FORMATANDO A MOEDA E DANDO DESCONTO AOS CLIENTES

const novosProdutos = produtos.map( produto => {

    //? = if. : = else (ternário) 

    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        }),
        quantidade: produto.quantidade
    }
})