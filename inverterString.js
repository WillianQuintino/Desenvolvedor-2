function inverterString(str) {
    let strInvertida = "";

    for (let i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i]; // Adiciona o caractere à nova string
    }

    return strInvertida; // Retorna a string invertida
  }

let minhaString = "Olá, Mundo!";

let stringInvertida = inverterString(minhaString);
console.log("String original: " + minhaString);
console.log("String invertida: " + stringInvertida);
