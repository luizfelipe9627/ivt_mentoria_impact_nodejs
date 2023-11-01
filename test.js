/// <reference path="typings/mocha/mocha.d.ts"/>

var assert = require("assert");

describe("InvestTools - Exercícios", () => {
  it("1. Escreva um programa que imprima os números de 1 a 10.", () => {
    var exercise1 = (x) => {
      // O for recebe uma variável i que começa com o valor 1, e enquanto i for menor que 11, ele incrementa i em 1 e executa o código dentro do for.
      for (let i = 1; i < 11; i++) {
        x.push(i); // Adiciona o valor de i ao array x.
      }
      return x; // Retorna o array x.
    };
    assert.deepEqual(exercise1([]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("2. Escreva um programa que imprima os números pares de 1 a 20.", () => {
    var exercise2 = (x) => {
      // O for recebe uma variável i que começa com o valor 1, e enquanto i for menor que 21, ele incrementa i em 1 e executa o código dentro do for.
      for (let i = 1; i < 21; i++) {
        // Se o resto da divisão de i por 2 for igual a 0, significa que i é par e executa o if.
        if (i % 2 === 0) {
          x.push(i); // Adiciona o valor de i ao array x.
        }
      }
      return x; // Retorna o array x.
    };
    assert.deepEqual(exercise2([]), [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });

  it("3. Escreva um programa que calcula a soma de 1 a 100.", () => {
    var exercise3 = (x) => {
      // O for recebe uma variável i que começa com o valor 0, e enquanto i for menor que 101, ele incrementa i em 1 e executa o código dentro do for.
      for (let i = 0; i < 101; i++) {
        x += i; // Soma o valor de i a x.
      }
      return x; // Retorna o valor de x.
    };

    assert.equal(exercise3(0), 5050);
  });

  it("4. Escreva um programa que calcule o fatorial de um número.", () => {
    var exercise4 = (x) => {
      let result = 1; // Criado uma variável result com o valor 1.
      // O for recebe uma variável i que começa com o valor 1, e enquanto i for menor ou igual a x, ele incrementa i em 1 e executa o código dentro do for.
      for (let i = 1; i <= x; i++) {
        result *= i; // Multiplica o valor de i pela valor de result.
      }
      return result; // Retorna o valor de result.
    };
    assert.equal(exercise4(5), 120);
  });

  it("5. Escreva um programa que verifique se um número é primo.", () => {
    var exercise5 = (x) => {
      // O for recebe uma variável i que começa com o valor 2, e enquanto i for menor que x, ele incrementa i em 1 e executa o código dentro do for.
      for (let i = 2; i < x; i++) {
        // Se o resto da divisão de x por i for igual a 0, significa que x não é primo e executa o if.
        if (x % i === 0) {
          return false; // Retorna false.
        }
      }
      return true; // Retorna true.
    };
    assert.equal(exercise5(7), true);
  });

  it("6. Escreva um programa que calcule a média de um array de números.", () => {
    var exercise6 = (x) => {
      let media = 0; // Criado uma variável media com o valor 0.
      // O for recebe uma variável i que começa com o valor 0, e enquanto i for menor que o tamanho do array x, ele incrementa i em 1 e executa o código dentro do for.
      for (let i = 0; i < x.length; i++) {
        media += x[i]; // Soma o valor do item atual do array x a variável media.
      }
      return media / x.length; // Retorna a divisão da variável media pelo tamanho do array x.
    };
    assert.equal(exercise6([24, 92, 12, 4, 26]), 31.6);
  });

  it("7. Escreva um programa que encontre o maior elemento em um array.", () => {
    var exercise7 = (x) => {
      let result; // Criado uma variável result.
      // O forEach percorre por cada item do array x e armazena o valor do item atual na variável item e executa o código dentro do forEach.
      x.forEach((item) => {
        return (result = +item); // Soma o valor de item a result.
      });
      return result; // Retorna o valor de result.
    };
    assert.equal(exercise7([10, 30, 20, 40, 120]), 120);
  });

  it("8. Escreva um programa que inverta um string.", () => {
    var exercise8 = () => {};
    assert.equal(exercise8(), 0);
  });

  it("9. Escreva um programa que conte o número de vogais em um string.", () => {
    var exercise9 = () => {};
    assert.equal(exercise9(), 0);
  });

  it("10. Escreva um programa que remova elementos duplicados de um array.", () => {
    var exercise10 = () => {};
    assert.equal(exercise10(), 0);
  });

  it("11. Escreva um programa que verifique se um string é um palíndromo.", () => {
    var exercise11 = () => {};
    assert.equal(exercise11(), 0);
  });

  it("12. Escreva um programa que gere os primeiros n números da sequência de Fibonacci.", () => {
    var exercise12 = () => {};
    assert.equal(exercise12(), 0);
  });

  it("13. Escreva um programa que verifique se um número é par ou ímpar.", () => {
    var exercise13 = () => {};
    assert.equal(exercise13(), 0);
  });

  it("14. Escreva um programa que calcule a soma dos dígitos de um número.", () => {
    var exercise14 = () => {};
    assert.equal(exercise14(), 0);
  });

  it("15. Escreva um programa que calcule a área de um triângulo.", () => {
    var exercise15 = () => {};
    assert.equal(exercise15(), 0);
  });

  it("16. Escreva um programa que ordene um array de números em ordem crescente.", () => {
    var exercise16 = () => {};
    assert.equal(exercise16(), 0);
  });

  it("17. Escreva um programa que encontre o segundo menor elemento em um array.", () => {
    var exercise17 = () => {};
    assert.equal(exercise17(), 0);
  });

  it("18. Escreva um programa que calcule a raiz quadrada de um número.", () => {
    var exercise18 = () => {};
    assert.equal(exercise18(), 0);
  });

  it("19. Escreva um programa que calcule a potência de um número.", () => {
    var exercise19 = () => {};
    assert.equal(exercise19(), 0);
  });

  it("20. Escreva um programa que calcule o máximo divisor comum (MDC) de dois números.", () => {
    var exercise20 = () => {};
    assert.equal(exercise20(), 0);
  });
});
