# Registro de Testes de Software
Nota: Esse capítulo está em construção. Alguns testes já foram executados e são apresentados abaixo. No entanto, outros serão executados ao final do desenvolvimento.

## Registro dos testes unitários 

Os testes de requisições HTTP foram realizados com o auxílio do programa Insomnia. Nos testes foram verificadas as ações HttpGet, HttpPost, HttpPut, HttpDelete, para as rotas Restaurantes, Produtos, Usuários e Pedidos. Os resultados das requisições estão explicitados nas imagens abaixo: 

Cadastro do Usuário Gabriela Assis
![Cadastro do Usuário Gabriela Assis](img/Teste1.png)
Cadastro do Usuário Josué Gonçalves
![Cadastro do Usuário Josué Gonçalves](img/Teste2.png)
Cadastro do Funcionário André Matos
![Cadastro do Funcionário André Matos](img/Teste3.png)
Cadastro do Gerente Diogo Filho
![Cadastro do Gerente Diogo Filho](img/Teste4.png)
O método GetAll mostra todos os usuários cadastrados no sistema
![GetAll](img/Teste5.png)
Autenticação de usuário no sistema: Gerente
![Autenticação do Gerente](img/Teste6.png)
![Autenticação do Gerente](img/Teste7.png)
Autenticação de usuário no sistema: Funcionário
![Autenticação do Gerente](img/Teste8.png)
![Autenticação do Gerente](img/Teste9.png)
Autenticação de usuário no sistema: Cliente
![Autenticação do Cliente](img/Teste10.png)
![Autenticação do Cliente](img/Teste11.png)
![Autenticação do Cliente](img/Teste12.png)
![Autenticação do Cliente](img/Teste13.png)
Cadastro de restaurante: Varanda do Norte
![Varanda do norte](img/Teste14.png)
Cadastro de restaurante: Cafeteria Yollanda
![Cafeteria Yollanda](img/Teste15.png)
Cadastro de restaurante: Quiosque Marina
![Quiosque Marina](img/Teste16.png)
Cadastro de restaurante: Padaria Mustafá
![Padaria Mustafá](img/Teste17.png)
Método GetAll para listar todos os restaurente
![GetAll restaurantes](img/Teste18.png)
Método GetById
![GetById](img/Teste19.png)
Cadastro de produtos: Sushi
![Sushi](img/Teste20.png)
Cadastro de produtos: Frango no Balde
![Frango no Balde](img/Teste21.png)
Método GetAll para exibir todos os produtos cadastrados
![GetAll produtos](img/Teste22.png)
Cadastro de Pedidos
O cadastro de Pedidos é feito pelos usuários que já estão cadastrados no sistema, escolhendo os itens do cardápio de determinado restaurante e selecionando a quantidade de itens
O usuário José pediu frango no balde
![José - Frango no balde](img/Teste23.png)
A usuária Gabriela pediu sushi
![José - Frango no balde](img/Teste24.png)
O método GetAll exibe todos os pedidos feitos
![GetAll Pedidos](img/Teste25.png)

## Banco de Dados do Drive Express
Pedidos efetuados
![BD Pedidos](img/Teste26.png)
Produtos cadastrados por restaurante
![BD Produtos por restaurante](img/Teste27.png)
Restaurantes cadastrados
![BD Restaurantes cadastrados](img/Teste28.png)
Usuários cadastrados com senhas criptografadas
![BD Criptografia de senhas](img/Teste29.png)








###Notas sobre as próximas etapas - apagar quando concluídas
<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
