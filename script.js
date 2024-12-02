// Lista de produtos e estado do carrinho
const produtos = [
    {
      foto: "imagens/camiseta-basic-latte/1.webp",
      nome: "Camiseta Basic - Latté",
      preco: 84.9,
      descricao: `
        Detalhe em Silk na parte da frente.
        Confeccionada com linha 100% poliéster (maior durabilidade na costura).
        Com reforço de ombro a ombro com viés.
        Composição: Malha 100% Algodão, fio 30.1 penteada.
        Cor predominante: Caffé Latté.
      `,
    },
    {
      foto: "imagens/camiseta-sirenes/1.webp",
      nome: "Camiseta - Sirenes",
      preco: 84.9,
      descricao: `
        Detalhe em Silk na parte de trás.
        Estampa frontal.
        Confeccionada com linha 100% poliéster.
        Composição: Malha 100% Algodão, fio 30.1 penteada.
        Cor predominante: Preto.
      `,
    },
    {
      foto: "imagens/camiseta-melt/1.webp",
      nome: "Camiseta - Melt",
      preco: 19.99,
      descricao: `
        Detalhe em Silk na parte da frente.
        Estampa em silk nas costas.
        Composição: Malha 100% Algodão, fio 30.1 penteada.
        Cor predominante: Branco.
      `,
    },
    {
        foto: "imagens/sueter-oversized-beetlejuice/1.webp",
        nome: "Suéter Oversized - Beetlejuice",
        preco: 229.99,
        descricao: `
          Suéter confeccionado em tecido de malha. Possui gola redonda, manga longa, acabamento em ribana e costura no tom.
          Detalhe em bordado no centro da peça. 
          *Ribana é um tecido canelado, muito utilizado para acabameto em mangas, punhos e barras de roupas. 
          Tamanhos: P ao GG;
          Cor: Listrado Preto e Branco.
          Material: Malha Retilínea;
          Composição: 50% Acrílico e 50% Algodão. 
        `,
      },
      {
        foto: "imagens/regata-nokken/1.webp",
        nome: "Regata - Nokken",
        preco: 69.99,
        descricao: `
          Estampa  em Silk-Screen.
          Confeccionada com linha 100% Poliéster (maior durabilidade na costura).
          Composição: Malha 100% Algodão, fio 30.1 penteada. 
          Cor: Preto.
        `,
      },
    
      {
        foto: "imagens/still-regata-drops/1.webp",
        nome: "Regata - Drops",
        preco: 69.99,
        descricao: `
          Estampa  em Silk-Screen.
          Confeccionada com linha 100% Poliéster (maior durabilidade na costura).
          Composição: Malha 100% Algodão, fio 30.1 penteada. 
          Cor: Preto.
        `,
      },
    
  ];
  
  let cart = [];
  
  // Exibir produtos na página
  function exibirProdutos() {
    const productListContainer = document.getElementById('productList');
    productListContainer.innerHTML = '';
  
    produtos.forEach((produto, index) => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <img src="${produto.foto}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho(${index})">Adicionar ao Carrinho</button>
      `;
      productListContainer.appendChild(productDiv);
    });
  }
  
  // Adicionar produto ao carrinho
  function adicionarAoCarrinho(index) {
    const produto = produtos[index];
    cart.push(produto);
    alert(`${produto.nome} foi adicionado ao carrinho.`);
    updateCart();
  }
  
  // Atualizar o carrinho
  function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    let total = 0;
  
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        <span>${item.nome}</span>
        <span>R$ ${item.preco.toFixed(2)}</span>
      `;
      cartItemsContainer.appendChild(itemDiv);
      total += item.preco;
    });
  
    const totalDiv = document.createElement('div');
    totalDiv.className = 'cart-item';
    totalDiv.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
    cartItemsContainer.appendChild(totalDiv);
  }
  
 // Exibir/ocultar o carrinho
function toggleCart() {
    const cartPopup = document.getElementById('cartPopup');
    cartPopup.classList.toggle('show');
    if (cartPopup.classList.contains('show')) {
        updateCart(); 
    }
}

// Garante que o carrinho começa fechado
document.addEventListener("DOMContentLoaded", function() {
    const cartPopup = document.getElementById('cartPopup');
    cartPopup.classList.remove('show'); 
});

  
  // Continuar comprando
  function continueShopping() {
    toggleCart();
    alert('Você será redirecionado para continuar comprando.');
  }
  
// Finalizar compra e enviar ao backend
function finalizePurchase() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio. Adicione itens antes de finalizar a compra.");
        return;
    }

    // itens do carrinho
    const nomes = [];
    const precos = [];
    const descricoes = [];
    
    cart.forEach((item) => {
        nomes.push(encodeURIComponent(item.nome));
        precos.push(encodeURIComponent(item.preco));
        descricoes.push(encodeURIComponent(item.descricao));
    });

    // Montar a URL com os parâmetros
    const queryParams = `nome[]=${nomes.join('&nome[]=')}&preco[]=${precos.join('&preco[]=')}&descricao[]=${descricoes.join('&descricao[]=')}`;
    const url = `http://localhost/Loja/loja_online.php?${queryParams}`;

    // Redirecionar para o servidor PHP
    window.location.href = url;
}
  
  // Inicializar a página
  document.addEventListener("DOMContentLoaded", exibirProdutos);
  