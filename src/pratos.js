
const totalComanda = document.querySelector('#total-comanda');

export const listaPratos = [];

/**
 * Função para atualizar o valor total da comanda.
 * Calcula a soma dos subtotais dos pratos e exibe no rodapé.
 */
export function valorComanda() {
    let total = 0;

    // Soma dos pedidos na lista de pratos
    for (let prato of listaPratos) {
        total += prato.quantidade * prato.preco;
    }

    // Atualiza o rodapé com o valor total formatado em reais, acho que isso kkkk
    totalComanda.innerText = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
