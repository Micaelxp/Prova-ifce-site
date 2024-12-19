// Função para criar o card do prato
export function criarCardPrato(pratoInfo) {
    let quantidade = 0;

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h3>${pratoInfo.titulo}</h3>
        <p>${pratoInfo.descricao}</p>
        <p class="price">R$ ${formatarPreco(pratoInfo.preco)}</p>
        <div class="actions">
            <button class="btn-diminuir">-</button>
            <span class="quantidade">0x pedidos</span>
            <button class="btn-aumentar">+</button>
        </div>
    `;

    const btnAumentar = card.querySelector('.btn-aumentar');
    const btnDiminuir = card.querySelector('.btn-diminuir');
    const spanQuantidade = card.querySelector('.quantidade');

    // Aqui vaiatualizar a quantidade
    function atualizarQuantidade() {
        spanQuantidade.textContent = `${quantidade}x pedidos`;
    }

    // Aqui vai aumentar a quantidade
    btnAumentar.addEventListener('click', () => {
        quantidade++;
        atualizarQuantidade();
    });

    // Aqui vai diminuir a quantidade
    btnDiminuir.addEventListener('click', () => {
        if (quantidade > 0) {
            quantidade--;
            atualizarQuantidade();
        }
    });

    return {
        nodeElem: card,
        info: pratoInfo,
        getQuantidade: () => quantidade
    };
}

// Aqui vai formatar o preço, jeff haha
export function formatarPreco(preco) {
    return preco.toFixed(2).replace('.', ',');
}

// Aqui calcular o subtotal de um prato
export function calcularSubtotal(prato) {
    return prato.info.preco * prato.getQuantidade();
}
