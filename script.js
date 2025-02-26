
// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    // Recupera o carrinho do localStorage ou cria um novo array
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adiciona o item ao carrinho
    carrinho.push({ nome, preco });

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${nome} foi adicionado ao carrinho!`);
}

// Função para exibir os itens do carrinho na página do carrinho
function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.getElementById('carrinho');
    const totalElement = document.getElementById('total');

    // Limpa o conteúdo atual do carrinho
    carrinhoContainer.innerHTML = '';

    let total = 0;

    // Adiciona cada item ao carrinho
    carrinho.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('carrinho-item');
        itemElement.innerHTML = `
            <p>${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
            <button onclick="removerItem(${index})">Remover</button>
        `;
        carrinhoContainer.appendChild(itemElement);

        total += item.preco;
    });

    // Atualiza o total
    totalElement.textContent = total.toFixed(2).replace('.', ',');
}

// Função para remover item do carrinho
function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1); // Remove o item do array
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho(); // Atualiza a exibição do carrinho
}

// Função para finalizar a compra
function finalizarCompra() {
    const formaPagamento = document.querySelector('input[name="pagamento"]:checked').value;

    // Exibe a tela de carregamento
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('active');

    // Simula o processamento da compra
    setTimeout(() => {
        // Oculta a tela de carregamento
        loadingScreen.classList.remove('active');

        // Limpa o carrinho
        localStorage.removeItem('carrinho');
        exibirCarrinho(); // Atualiza a exibição do carrinho

        alert(`Compra finalizada com sucesso! Forma de pagamento: ${formaPagamento}.`);
    }, 3000); // Simula um processamento de 3 segundos
}

// Exibe o carrinho ao carregar a página
window.onload = exibirCarrinho;

document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    // Previne o envio imediato do formulário
    e.preventDefault();

    // Exibe a tela de carregamento
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('active');

    // Simula um processamento demorado (substitua isso pelo envio real do formulário)
    setTimeout(() => {
        // Oculta a tela de carregamento após o processamento
        loadingScreen.classList.remove('active');

        // Envia o formulário (substitua pelo envio real)
        alert('Formulário enviado com sucesso!');
        // this.submit(); // Descomente esta linha para enviar o formulário de verdade
    }, 3000); // Simula um processamento de 3 segundos
});

