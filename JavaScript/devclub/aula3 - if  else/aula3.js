// codigo atualizado 

const cidades = [ 
    { nome: "diadema", população: "300.000.000"},
    { nome: "cicero-dantas", população: "1000"}
]

cidades.forEach(function(item) {
    if(item.população < 20000) {
            console.log(`${item.nome} é uma cidade flopada`)
    }  else {
        console.log(`${item.nome} é babadeira`)
    }
    
});