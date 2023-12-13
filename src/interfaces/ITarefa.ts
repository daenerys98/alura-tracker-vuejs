export default interface ITarefa {
    duracaoEmSegundos: number,
    descricao: string
} // Tarefa executada.

/* ITarefa define a estrutura de uma tarefa, indicando que uma tarefa deve ter uma propriedade duracaoEmSegundos do tipo number e uma propriedade descricao do tipo string.

Portanto, ao usar as ITarefa[] na declaração de tarefas, você está indicando que espera-se que o array tarefas contenha objetos que seguem a estrutura definida pela interface ITarefa.

Assim, ao adicionar ou manipular elementos no array tarefas no componente Vue, o TypeScript reconhecerá que esses elementos devem aderir à estrutura especificada pela interface ITarefa */