function calcularFaturamento(faturamento) {
    let menorFaturamento = Math.min(...faturamento); // Menor valor de faturamento
    let maiorFaturamento = Math.max(...faturamento); // Maior valor de faturamento

    let totalFaturamento = 0;
    let diasComFaturamento = 0;
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i] > 0) {  // Ignora faturamento 0 (caso existam)
        totalFaturamento += faturamento[i];
        diasComFaturamento++;
        }
    }

    let mediaMensal = totalFaturamento / diasComFaturamento;

    let diasAcimaDaMedia = 0;
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i] > mediaMensal) {
        diasAcimaDaMedia++;
        }
    }

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

let faturamento = [1500, 2200, 0, 1800, 2100, 2400, 2000, 2300, 0, 1900, 2000, 2100, 2200, 2300, 0];

let resultado = calcularFaturamento(faturamento);

console.log(`Menor faturamento: R$ ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: R$ ${resultado.maiorFaturamento}`);
console.log(`Número de dias com faturamento superior à média mensal: ${resultado.diasAcimaDaMedia}`);
