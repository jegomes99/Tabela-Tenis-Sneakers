const tenis = [
    {
      nome: "Nike Air Force 1 '07",
      categoria: "Casual",
      quantidade: 20,
      preco: 759.99
    },
    {
        nome: "Nike Dunk Low Retro",
      categoria: "Casual",
      quantidade: 22,
      preco: 854.99
    },
    {
        nome: "Air Jordan 1 Retro Low OG",
      categoria: "Casual",
      quantidade: 7,
      preco: 1234.99
    },
    {
        nome: "Air Jordan 4 x J Balvin",
      categoria: "Casual / Colecionável",
      quantidade: 3,
      preco: 1899.99
    },
    {
        nome: "Air Jordan 1 Low x Travis Scott Mocha",
      categoria: "Casual / Colecionável",
      quantidade: 2,
      preco: 9999.00
    },
    {
        nome: "Adidas Samba OG",
      categoria: "Casual",
      quantidade: 30,
      preco: 799.99
    },
    {
        nome: "Adidas Superstar",
      categoria: "Casual",
      quantidade: 20,
      preco: 599.99
    },
    {
        nome: "Pharrell Williams x Adidas Adistar Jellyfish",
      categoria: "Casual / Colecionável",
      quantidade: 5,
      preco: 2799.90
    },
    {
        nome: "New Balance 550",
      categoria: "Casual",
      quantidade: 27,
      preco: 599.99
    },{
        nome: "New Balance 9060",
      categoria: "Casual",
      quantidade: 15,
      preco: 1299.99
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let t of tenis){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${t.nome}</td>
        <td>${t.categoria}</td>
        <td>${t.quantidade}</td>
        <td class="preco">${t.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }