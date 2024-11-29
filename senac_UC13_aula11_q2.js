/**
 * Função que gerencia um estoque de itens.
 * 
 * Esta função inicializa um estoque com 4 itens, atualiza o segundo item no array 
 * e exibe a quantidade total de itens presentes no estoque.
 * 
 * @function
 * @returns {void} A função não retorna nenhum valor.
 */

function gerenciarEstoque() 
{
    let estoque = ["smartfone", "notebook", "fone", "tv"];
    estoque[1] = "tv";
    console.log("Número total de itens no estoque: " + estoque.length);
}
  gerenciarEstoque();
  
  