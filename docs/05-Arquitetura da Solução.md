# Arquitetura da Solução

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

A **classe Pessoa** contém atributos comuns a todas as pessoas, como ID e Nome, e possui um construtor que inicializa esses atributos.

As **classes Cliente**, **Funcionário** e **Gerente** herdam da **classe Pessoa**. Elas também possuem atributos específicos para cada tipo de pessoa, como Endereco para clientes e Cargo para funcionários e gerentes. Os construtores dessas classes chamam o construtor da classe base Pessoa usando base(id, nome) para inicializar os atributos comuns.

As funções do **Cliente** são:
* RealizarPedido(List<Prato> pratos): Permite que o cliente faça um pedido online, passando a lista de pratos desejados.
* AcompanharStatusPedido(int numeroPedido): Permite que o cliente acompanhe o status de um pedido específico usando o número do pedido.
* AvaliarPrato(int numeroPedido, int estrelas): Permite ao cliente avaliar um prato em um pedido específico, atribuindo um número de estrelas.
* AvaliarServico(int numeroPedido, string avaliacao): Permite ao cliente avaliar o serviço prestado no pedido com um texto.

As funções do **Funcionário** são:
* AcompanharPedidos(List<Pedido> pedidos): Permite ao funcionário acompanhar a lista de pedidos feitos pelos clientes.
* AtualizarStatusPedido(Pedido pedido, string novoStatus): Permite ao funcionário atualizar o status de um pedido, indicando se está em preparação, pronto para entrega, entregue, etc.

As funções do **Gerente** são:
* GerarRelatorioFinanceiro(DateTime dataInicio, DateTime dataFim): Gera um relatório financeiro com base em um intervalo de datas específico.
* CadastrarPrato(Prato novoPrato): Permite ao gerente cadastrar um novo prato no menu do restaurante.
* DescadastrarPrato(Prato pratoExistente): Permite ao gerente remover um prato do menu do restaurante.
* GerarRelatorioEstoque(): Gera um relatório do estoque atual do restaurante.

As funções da classe **Pedido** são:
* CalcularTotal(): Calcula o total do pedido com base nos preços dos pratos selecionados.
* AdicionarPrato(Prato prato): Adiciona um prato ao pedido.
* RemoverPrato(Prato prato): Remove um prato do pedido.
* AlterarStatus(string novoStatus): Altera o status do pedido.
* AvaliarPrato(int estrelas): Permite ao cliente avaliar um prato no pedido.
* AvaliarServico(string avaliacao): Permite ao cliente avaliar o serviço prestado no pedido.

As funções da classe **Prato** são:
* AtualizarEstoque(int quantidade): Atualiza a quantidade disponível no estoque após a preparação de um pedido.
* ToString(): Retorna uma representação em string do prato, que pode ser usada para exibir informações do prato no menu.

As funções da classe **Estoque** são:
* AdicionarPrato(Prato prato, int quantidade): Adiciona uma quantidade especificada de um prato ao estoque.
* RemoverPrato(Prato prato, int quantidade): Remove uma quantidade especificada de um prato do estoque.
* ConsultarQuantidade(Prato prato): Retorna a quantidade disponível de um prato no estoque.

A **classe MetricasRestaurante** possui uma lista privada de pedidos para armazenar todos os pedidos feitos no restaurante. As suas funções são:
* AdicionarPedido: permite adicionar um pedido à lista de pedidos.
* QuantidadeProdutosVendidosNoMes: calcula a quantidade total de produtos vendidos no mês e ano especificados.
* SatisfacaoMediaPorPrato: calcula a satisfação média do cliente com cada prato com base nas avaliações dos clientes.
* PratosMaisVendidos e PratosMenosVendidos: retornam listas de pratos ordenados por quantidade vendida, de forma descendente e ascendente, respectivamente.

![Diagrama de Classes](img/DClasses.jpeg)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

Neste modelo conceitual
* Pessoa é uma entidade pai com uma relação de herança para as entidades Cliente, Funcionario e Gerente.
* Pedido tem uma relação com Cliente para indicar quem fez o pedido.
* Prato representa os pratos disponíveis, e Estoque controla a quantidade de cada prato disponível.
* MetricasRestaurante está relacionado com Pedido para calcular métricas relacionadas aos pedidos.

**Quanto à cardinalidade**
* Pessoa - Cliente, Pessoa - Funcionário, Pessoa - Gerente:

* A relação entre Pessoa (pai) e Cliente (filho) é uma relação "1 para 0 ou mais". Isso significa que uma pessoa pode ser um cliente ou nenhum cliente, e um cliente é uma pessoa.
* A relação entre Pessoa (pai) e Funcionário (filho) também é "1 para 0 ou mais". Isso significa que uma pessoa pode ser um funcionário ou nenhum funcionário, e um funcionário é uma pessoa.
* A relação entre Pessoa (pai) e Gerente (filho) também pode ser "1 para 0 ou mais" ou "1 para 1 ou mais". Isso significa que uma pessoa pode ser um gerente ou nenhum gerente, e um gerente é uma pessoa.

* Cliente - Pedido:
A relação entre Cliente e Pedido é "1 para 0 ou mais". Isso significa que um cliente pode fazer um ou mais pedidos, mas também pode não fazer nenhum pedido. Um pedido pertence a um único cliente.

* Pedido - Prato:
A relação entre Pedido e Prato é "Muitos para Muitos" (M:N), o que significa que um pedido pode conter muitos pratos, e um prato pode estar em muitos pedidos. Isso é comum em sistemas de pedidos de restaurantes, onde um pedido pode incluir vários pratos diferentes, e um prato pode ser solicitado em vários pedidos.

* Estoque - Prato:
A relação entre Estoque e Prato é "1 para 0 ou mais". Isso significa que um prato pode estar no estoque em uma quantidade específica, e pode haver vários pratos diferentes no estoque. Cada prato no estoque está relacionado a um único prato.

* MetricasRestaurante - Pedido:
A relação entre MetricasRestaurante e Pedido é "1 para 1 ou mais". Isso significa que um conjunto de métricas pode estar relacionado a um ou mais pedidos. Cada métrica está relacionada a um único pedido.

![Diagrama de Entidades e Relacionamento](img/DER.jpeg)

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
