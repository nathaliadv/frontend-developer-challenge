# frontend-developer-challenge
Desafio para futuros desenvolvedores da Linx Impulse. 

**Link do layout desenvolvido**: https://nathaliadv-dev-challenge.netlify.app/

## Sobre o desafio

O desafio consistiu no desenvolvimento do *layout* de uma *landing page* com uma grade de produtos e um formulário de *newsletter*. O principal objetivo é transformar este *layout* em uma página funcional.

**Link do layout**: https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614

**Endpoint da API**: https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1

## Ferramentas utilizadas na construção do projeto:

* HTML
* CSS
* Javascript

### Comportamento:

Para preencher a página com as informações dos produtos foi realizada consultas a esta **[API](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1)** de forma paginada, sendo que cada página consultada retorna as informações de **8 produtos** e um **link para a próxima página**.

Assim que os dados foram obtidos, implementou-se os seguintes pontos:

- Para cada **produto** retornado pela API, um **card de produto** com as respectivas informações é criado na grade de produtos;
- Ao clicar no botão **Ainda mais produtos aqui!** a próxima página da API é consultada, gerando mais **8 produtos** na grade existente, abaixo dos produtos já carregados pela primeira requisição;
- O formulário de *newsletter* com o título **Compartilhe a novidade** deve ter seus campos de *input* validados de acordo com o conteúdo (ex: O campo de email deve conter um email válido);

