const pessoas = [ //array
    { nome: "João", idade: 25, telefone: "(11) 91234-5678" },
    { nome: "Maria", idade: 30, telefone: "(21) 98765-4321" },
    { nome: "Carlos", idade: 22, telefone: "(31) 99887-6543" },
    { nome: "Ana", idade: 9, telefone: "(47) 91222-3344" },
    { nome: "Pedro", idade: 29, telefone: "(85) 91234-0987" },
    { nome: "Laura", idade: 12, telefone: "(61) 98765-7788" },
    { nome: "Lucas", idade: 22, telefone: "(67) 91234-5566" },
    { nome: "Clara", idade: 5, telefone: "(31) 98765-9900" },
    { nome: "Rafael", idade: 30, telefone: "(73) 91234-9988" },
    { nome: "Bianca", idade: 14, telefone: "(41) 98765-6677" },
    { nome: "Miguel", idade: 27, telefone: "(11) 91234-7890" },
    { nome: "Sofia", idade: 9, telefone: "(22) 98765-5544" },
    { nome: "Felipe", idade: 21, telefone: "(88) 91234-1122" },
    { nome: "Julia", idade: 6, telefone: "(83) 98765-7788" },
    { nome: "Marcos", idade: 28, telefone: "(12) 91234-9900" },
    { nome: "Paula", idade: 15, telefone: "(98) 98765-4433" },
    { nome: "André", idade: 19, telefone: "(71) 91234-8899" },
    { nome: "Lívia", idade: 10, telefone: "(31) 98765-2211" },
    { nome: "Gabriel", idade: 24, telefone: "(15) 91234-4455" },
    { nome: "Carla", idade: 8, telefone: "(92) 98765-6677" }
  ];

pessoas.forEach(function(item, index) {
   if(item.idade < 18) {
    console.log(`Essa(e) cliente ${item.nome}, na posição ${index}, é menor de idade!!!!`)
   } else {
    console.log(`Essa(e) cliente ${item.nome}, na posição ${index}, é maior de idade eba`)
   }

   // fala o nome do cliente, sua posição e se é menor ou maior de idade
});




