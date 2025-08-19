<template>
  <div class="icon-content">
    <header>
      <router-link :to="{ name: 'contato' }" class="icon-link">
        <img :src="contatoImg" alt="Icon contato" class="icon">
      </router-link>
      <router-link :to="{ name: 'pacientes' }" class="icon-link">
        <img :src="pacientesImg" alt="Icon pacientes" class="icon">
      </router-link>
      <router-link :to="{ name: 'hospitais' }" class="icon-link">
        <img :src="hospitaisImg" alt="Icon hospital" class="icon">
      </router-link>
      <router-link :to="{ name: 'medicos' }" class="icon-link">
        <img :src="medicosImg" alt="Icon medicos" class="icon">
      </router-link>
    </header>
    <main>
     
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

// Importando imagens
import contatoImg from '@/assets/CONTATO.png';
import pacientesImg from '@/assets/pacientes.png';
import hospitaisImg from '@/assets/hospitais.png';
import medicosImg from '@/assets/medicos.png';

// Instância do roteador
const router = useRouter();

// Função de logout

</script>

<style scoped>
/* Estilos específicos para o componente */
header {
  display: flex;
  justify-content: center; /* Centraliza os ícones horizontalmente */
  gap: 80px; /* Espaço entre os ícones */
  padding: 10px 1;
  background-color: hsl(0, 0%, 100%); /* Cor de fundo opcional */
}

.icon-link {
  display: flex;
  align-items: center; /* Alinha os ícones verticalmente ao centro */
}
.icon-link {
  display: flex;
  align-items: center; /* Alinha os ícones verticalmente ao centro */
}


.icon {
  width: 100px; /* Define a largura dos ícones */
  height: auto; /* Define a altura dos ícones */
  transition: transform 0.2s; /* Adiciona uma transição suave ao hover */
}

.icon:hover {
  transform: scale(1.4); /* Aumenta ligeiramente o ícone ao passar o mouse */
}

main {
  text-align: center;
  margin-top: 20px;
}



</style>
