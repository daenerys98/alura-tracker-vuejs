<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
    </header>
</template>

<script lang="ts"> // O TypeScript é um superconjunto de JavaScript que adiciona tipagem estática e outras funcionalidades ao JavaScript, proporcionando um desenvolvimento mais robusto e escalável. Neste contexto, você usará TypeScript para escrever a lógica do componente Vue.
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BarraLateral"
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
/* @@media only screen and (max-width: 768px)
 é uma consulta de mídia em CSS que aplica estilos apenas quando a largura da tela (ou janela do navegador) é igual ou inferior a 768 pixels. Essa regra é comumente usada para aplicar estilos específicos quando o layout precisa ser ajustado para dispositivos com telas menores, como smartphones ou tablets. */
</style>