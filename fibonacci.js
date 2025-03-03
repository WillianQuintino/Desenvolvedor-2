function pertenceAFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    while (b < numero) {
      let temp = b;
      b = a + b;
      a = temp;
    }
  
    return b === numero || numero === 0;
}

let numero = 34;
if (pertenceAFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
