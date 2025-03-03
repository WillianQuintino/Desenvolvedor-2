# Exercícios de JavaScript - Faturamento e Funções

Este repositório contém soluções para 5 exercícios de programação em JavaScript. Cada exercício foi implementado com o objetivo de resolver problemas comuns de manipulação de dados. As soluções são simples, diretas e sem o uso de bibliotecas externas.

## Estrutura do Projeto

O projeto é composto por 5 exercícios, cada um com um arquivo `.js` correspondente. Também há um arquivo `index.html` para facilitar o teste dos códigos diretamente no navegador.

### Exercícios

1. **Inverter os caracteres de uma string**:
   - Inverte os caracteres de uma string informada.
   - Arquivo: `inverterString.js`

2. **Calcular o percentual de representação por estado**:
   - Calcula o percentual de faturamento de cada estado em relação ao faturamento total.
   - Arquivo: `percentualEstado.js`

3. **Faturamento de uma distribuidora**:
   - Calcula o menor e maior faturamento, além de contar os dias com faturamento superior à média mensal.
   - Arquivo: `faturamentoDistribuidora.js`

4. **Verificar se um número pertence à sequência de Fibonacci**:
   - Verifica se um número pertence à sequência de Fibonacci.
   - Arquivo: `fibonacci.js`

5. **Faturamento de uma distribuidora (com JSON)**:
   - Analisa o faturamento mensal de uma distribuidora utilizando dados em formato JSON.
   - Arquivo: `faturamentoJSON.js`

## Como Rodar os Exercícios

### 1. **Testar os Exercícios no Navegador**
   - Baixe todos os arquivos `.js` e `index.html` para uma pasta local.
   - Abra o arquivo `index.html` com um navegador (Google Chrome, Firefox, etc.).
   - Use o console do navegador para ver os resultados ou interagir com a página (por exemplo, no caso do exercício de inverter a string, digite uma string no campo de texto e clique no botão).

### 2. **Testar os Exercícios no Node.js**
   - Para rodar os códigos no terminal usando o **Node.js**, siga estas etapas:
     - Certifique-se de ter o **Node.js** instalado. Caso não tenha, baixe e instale a partir de: https://nodejs.org.
     - Abra o terminal ou prompt de comando.
     - Navegue até a pasta onde você salvou os arquivos `.js`.
     - Execute o código com o comando:
       ```bash
       node nomeDoArquivo.js
       ```
     - Exemplo para o exercício 1 (inverter a string):
       ```bash
       node inverterString.js
       ```

### 3. **Entradas e Saídas**

- Cada código possui uma entrada de dados configurada diretamente no código JavaScript.
- A saída é exibida no console do navegador ou no terminal ao rodar com o Node.js.

### Exemplos de Resultados

1. **Inverter String**
   - Entrada: `"Olá, Mundo!"`
   - Saída no console: 
     ```
     String original: Olá, Mundo!
     String invertida: !odnuM ,álO
     ```

2. **Percentual de Representação por Estado**
   - Saída no console:
     ```
     Percentual de SP: 43.72%
     Percentual de RJ: 23.88%
     Percentual de MG: 18.81%
     Percentual de ES: 17.08%
     Percentual de Outros: 12.29%
     ```

3. **Faturamento de uma Distribuidora**
   - Saída no console:
     ```
     Menor faturamento: R$ 373.78
     Maior faturamento: R$ 48924.24
     Número de dias com faturamento superior à média mensal: 20
     ```

4. **Verificar se o número pertence à sequência de Fibonacci**
   - Entrada: `34`
   - Saída no console:
     ```
     34 pertence à sequência de Fibonacci.
     ```

5. **Faturamento de uma Distribuidora (com JSON)**
   - Saída no console:
     ```
     Menor faturamento: R$ 373.78
     Maior faturamento: R$ 48924.24
     Número de dias com faturamento superior à média mensal: 20
     ```

---

## Tecnologias Utilizadas

- **JavaScript**: A linguagem principal para resolver os problemas.
- **HTML**: Usado para criar uma interface simples para testar os exercícios no navegador.

## Contribuições

Sinta-se à vontade para contribuir, melhorar o código ou adicionar novos exercícios! Caso tenha dúvidas ou sugestões, abra uma _issue_ ou envie um _pull request_.

---

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
