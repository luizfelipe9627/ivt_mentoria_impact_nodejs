InvestTools - Exercícios
=================

Clone o projeto
```
git clone https://github.com/luizfelipe9627/ivt_mentoria_impact_nodejs.git
```

Entre na pasta do projeto
```
cd ivt_mentoria_impact_nodejs
```

Instale o mocha
```
npm i
```

Rode os testes
```
npm run test
```

Ajuste os blocos de código no arquivo ```test.js``` para que os testes passem.

Todos os ajustes devem ser feitos criando funções puras.

Funções puras:

1. Não criam side-effects

2. O output é gerado apenas pelo(s) input(s)

3. Sempre retorna o mesmo resultado dados os mesmos parâmetros

Exemplo:


```javascript
var name = "Luiz";

// impura
var helloName = function() {
    name = "Olá " + name;
    return name;
};

// pure
var helloName = function(name) {
    return "Olá " + name;
};
```
