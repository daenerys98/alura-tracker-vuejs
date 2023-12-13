<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column">
        <TemporizadorTarefa @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorTarefa from "./TemporizadorTarefa.vue";

export default defineComponent({
  name: "FormularioComponent",
  emits: ["aoSalvarTarefa"],
  components: {
    TemporizadorTarefa,
  },
  data() {
    return {
      descricao: "",
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
      });
      this.descricao = "";
    },
  },
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>

<!-- Importa as funções DefineComponent e defineComponent do pacote Vue. Estas são utilizadas para definir componentes Vue.-->
<!-- export default defineComponent({ ... });: Exporta um componente Vue definido com defineComponent. O default é usado porque este é o componente principal exportado do arquivo.-->
<!-- name: "Formulario": Define o nome do componente. O nome é útil para referenciar o componente em outros lugares, por exemplo, ao utilizá-lo em templates ou em outros componentes.-->