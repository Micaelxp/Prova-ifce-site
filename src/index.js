import { criarCardPrato, calcularSubtotal } from "./components.js";
import { listaPratos } from "./pratos.js";

const principais = document.querySelector(".c-principais");
const sobremesas = document.querySelector(".c-sobremesas");
const totalComandaElem = document.getElementById("total-comanda");

let totalComanda = 0;

function atualizarTotal() {
    totalComanda = listaPratos.reduce((total, prato) => total + calcularSubtotal(prato), 0);
    totalComandaElem.textContent = `R$ ${totalComanda.toFixed(2).replace('.', ',')}`;
}

async function consultarWebAPI() {
    const url = "http://10.100.104.203:3001/menu";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        for (let pratoInfo of json.principais) {
            const prato = criarCardPrato(pratoInfo);
            listaPratos.push(prato);
            principais.append(prato.nodeElem);
        }

        for (let pratoInfo of json.sobremesas) {
            const prato = criarCardPrato(pratoInfo);
            listaPratos.push(prato);
            sobremesas.append(prato.nodeElem);
        }

        // Atualiza o total da comanda sempre que houver uma alteração
        document.addEventListener('click', atualizarTotal);

    } catch (error) {
        alert('A API Web parece estar offline');
        console.error(error.message);
    }
}

consultarWebAPI();
