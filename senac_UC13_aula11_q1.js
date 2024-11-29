  /**
 * Função que gerencia uma lista de tarefas.
 * 
 * A função cria um array de tarefas, adiciona três tarefas à lista, remove a última tarefa adicionada
 * e exibe o array final no console.
 * 
 * @returns {void} 
 */

function gerenciarTarefas() 
{
    let tarefas = [];
  
    tarefas.push("Ir ao curso");
    tarefas.push("Estudar JS");
    tarefas.push("Ir ao trabalho");

    tarefas.pop();
    console.log(tarefas);
}
  gerenciarTarefas();
  
