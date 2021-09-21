# Dragon ball manager challenge

Esta é uma aplicação para você poder invocar Shenlong, porém ela tem alguns probleminhas, e além desses probleminhas pra serem resolvidos vocês precisam adicionar testes.

Ja temos o [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) e [Cypress](https://www.cypress.io/) instalados. Todas essas libs são ferramentas de testes

Aqui vão alguns casos para testar porém você pode ir além:

* Testar o filtro no select para exibir todas as esferas, as esferas que eu tenho e as que eu não tenho
* Se eu tiver todas as esferas tenho que conseguir invocar o shenlong
* ... O que mais você desejar! Solte a imaginação!

Para fazer este repositório funcionar você deve clonar este repositório

Instalar as dependências e rodar:

```
  yarn 
  yarn start
```

Para rodar os testes com testing library
```
  yarn test
```

Para rodar os testes com Cypress
```
  yarn cy:run
```


**HAVE FUN AND CODE!**

## Testes criados
#### Balls
- Renderizar quando há problemas com a renderização ds esferas;
- Renderizar filtro todas as esferas encontradas e não encontradas, quando existem esferas encontradas e não encontradas;
- Renderizar filtro todas as esferas encontradas e não encontradas, quando existem apenas esferas encontradas;
- Renderizar filtro todas as esferas encontradas e não encontradas, quando existem apenas não encontradas;
- Renderizar filtro apenas esferas encontradas, quando existem esferas encontradas;
- Renderizar filtro apenas esferas encontradas, quando não existem esferas encontradas;
- Renderizar filtro apenas esferas que não tenho, quando existem esferas não encontradas;
- Renderizar filtro apenas esferas que não tenho, quando não existem esferas não encontradas;

#### Actions
