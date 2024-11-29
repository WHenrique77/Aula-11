# Questão 1
## O que foi pedido:

 - A questão pede que seja criado um "script" para gerenciar um estoque de itens.

## O que foi entregue:

 - A função "gerenciarEstoque()" foi criada para atender ao pedido da questão.
 
 ## JSdoc

```javascript
/**
 * Função que gerencia uma lista de tarefas.
 * 
 * A função cria um array de tarefas, adiciona três tarefas à lista, remove a última tarefa adicionada
 * e exibe o array final no console.
 * 
 * @returns {void} 
*/
```

--- 

# Questão 2
## O que foi pedido:

 - Crie um script que gerencie um estoque. O script deve:
    - Criar um array estoque com 4 itens iniciais.
    - Atualizar o segundo item no array.
    - Exibir o número total de itens no estoque usando .length.

## O que foi entregue:

 - Criação do array estoque com 4 itens iniciais:
     - O array estoque é inicializado corretamente com os itens: "smartfone", "notebook", "fone", "tv".

 - Atualização do segundo item:
    - O segundo item ("notebook") é atualizado para "tv". Embora a troca tenha sido feita, a escolha do novo valor ("tv") é válida, mas poderia ser mais diversificada para refletir um estoque variado.

 - Exibição do número total de itens no estoque:
    - A função utiliza o método .length corretamente para exibir o número total de itens. O tamanho do array permanece 4, pois a substituição de um item não altera a quantidade total.

## JSdoc
```javascript
/**
 * Função que gerencia um estoque de itens.
 * 
 * Esta função inicializa um estoque com 4 itens, atualiza o segundo item no array 
 * e exibe a quantidade total de itens presentes no estoque.
 * 
 * @function
 * @returns {void} A função não retorna nenhum valor.
 */
```
---

# Questão 3

## O que foi pedido:

 - Criar uma estrutura para armazenar as notas de três alunos.
 - Calcular a média de cada aluno.
 - Exibir as médias calculadas no console.

# O que foi entregue:

 - Estrutura para armazenar as notas:
    - Foi criado um array bidimensional chamado alunos, no qual cada subarray contém as notas de um aluno. Exemplo:

```javascript
const alunos = [
    [8, 7, 9], // Notas do aluno 1
    [6, 5, 7], // Notas do aluno 2
    [9, 9, 10] // Notas do aluno 3
];
```

 - Cálculo da média:
    - O script utiliza dois loops for:
    - O primeiro percorre os alunos (i).
    - O segundo percorre as notas de cada aluno (j) para calcular a soma de suas notas.
    - A média é calculada dividindo a soma pelo número de notas.

 - Exibição das médias:
    - A função exibe no console as médias de cada aluno formatadas com 2 casas decimais, utilizando toFixed(2).

## JSdoc

```javascript
/**
 * Calcula a média das notas de três alunos e exibe as médias.
 *
 * @returns {void}
 */
```
---

# Questão 4

## O que foi pedido:

 - Aceitar um array de palavras como entrada.
 - Exibir as palavras na ordem inversa (última palavra primeiro, primeira palavra por último).

## O que foi entregue:

 - Receber um array de palavras como parâmetro:

    - O script define a função exibirPalavrasReverso, que aceita um array de palavras (palavras) como argumento.
 
 - Exibir as palavras na ordem inversa:

    -  loop for inicia no último índice do array (palavras.length - 1) e decrementa até o índice zero (i >= 0).
    - As palavras são exibidas no console uma por uma usando console.log().

 - Chamar a função com uma lista de palavras:

    - O script chama a função com o array ["café", "livro", "código", "javascript", "aprendizado"].
    - As palavras são exibidas no console na ordem reversa: "aprendizado", "javascript", "código", "livro", "café".

# JSdoc

```javascript
/**
 * Exibe cada palavra de um array em ordem reversa.
 *
 * @param {string[]} palavras - Lista de palavras a ser exibida.
 *
 * @returns {void}
 */
```
---

# Questão 5 

## O que foi pedido:

 - Pelo código, podemos inferir que o objetivo era criar um jogo de adivinhação de números com as seguintes funcionalidades:

    - Gerar um número aleatório entre 1 e 10.
    - Solicitar ao jogador que adivinhe o número.

 - Continuar solicitando até que:

     - O jogador acerte o número.
     - O jogador opte por encerrar o jogo digitando "sair".

 - Dar feedback sobre as tentativas (correto ou incorreto) e exibir mensagens apropriadas.

# O que foi entregue:

- Gerar um número aleatório entre 1 e 10:

    - O número é gerado corretamente usando Math.random() e arredondado com Math.floor.

 - Solicitar entrada do usuário:

    - O script usa o método prompt() para solicitar uma tentativa do jogador. Se o jogador digitar "sair", o jogo termina com uma mensagem apropriada.

 - A entrada do jogador é tratada com:

    - Conversão para inteiro (parseInt) para validar se é um número.
    - Comparação com o número gerado para verificar se está correto.

 - Laço de repetição:

    - O loop while (true) é usado para repetir as tentativas até que o jogador acerte ou digite "sair".
    - O loop é encerrado com break em ambas as condições de término.

 - Mensagens de feedback:

    - O jogador é informado se acertou o número, errou ou digitou algo inválido.
    - Caso o jogador opte por sair, uma mensagem de despedida é exibida.

# Jsdoc

```javascript
/**
 * Jogo de adivinhação de número entre 1 e 10.
 *
 * @returns {void}
 */
```