<template>
  <div class="image-container">
    <!-- Imagem de fundo -->
    <img src="@/assets/semfundo.png" alt="Imagem ao centro" class="image-center" />
    <img src="@/assets/medico.png" alt="Imagem Sobreposta" class="image-overlay" />
    
    <!-- Texto sobreposto -->
    <div class="text-overlay">
      <h1>Conectando sua Saúde</h1>
      <h3 class="sub-title">Integrando Histórias,<br />Transformando Vidas.</h3>
      <router-link to="/cadastro" class="cadastro">Cadastrar</router-link>
    </div>
  </div>
  
  <!-- Botões para exibir as seções -->
  <div class="icon-content">
    <button @click="setActiveSection('contato')" class="icon-link">
      <img :src="contatoImg" alt="Icon contato" class="icon">
    </button>
    <button @click="setActiveSection('pacientes')" class="icon-link">
      <img :src="pacientesImg" alt="Icon pacientes" class="icon">
    </button>
    <button @click="setActiveSection('hospitais')" class="icon-link">
      <img :src="hospitaisImg" alt="Icon hospitais" class="icon">
    </button>
    <button @click="setActiveSection('medicos')" class="icon-link">
      <img :src="medicosImg" alt="Icon médicos" class="icon">
    </button>
  </div>

  <!-- Seções: Contato, Pacientes, Hospitais, Médicos com transições -->
  <transition name="fade" mode="out-in">
    <div v-if="activeSection === 'contato'" class="section section-parallax contato ">
      <div class="content-overlay">
        <h1>Contato</h1>
        <ContatoView /> <!-- Ou algum conteúdo sobre contato -->
      </div>
    </div>
  </transition>

  <transition name="fade" mode="out-in">
    <div v-if="activeSection === 'pacientes'" class="section pacientes">
      <h1>Pacientes</h1>
      <PacientesView /> <!-- Ou algum conteúdo sobre pacientes -->
    </div>
  </transition>

  <transition name="fade" mode="out-in">
    <div v-if="activeSection === 'hospitais'" class="section section-parallax hospitais">
      <div class="content-overlay">
        <h1>Hospitais</h1>
        <HospitaisView /> <!-- Ou algum conteúdo sobre hospitais -->
      </div>
    </div>
  </transition>

  <transition name="fade" mode="out-in">
    <div v-if="activeSection === 'medicos'" class="section medicos">
      <h1>Médicos</h1>
      <MedicosView /> <!-- Ou algum conteúdo sobre médicos -->
    </div>
  </transition>
</template>


<script setup>
import { ref } from 'vue';

// Importando componentes das views que você já possui
import ContatoView from '@/views/partes/Contato.vue';
import PacientesView from '@/views/partes/Pacientes.vue';
import HospitaisView from '@/views/partes/Hospitais.vue';
import MedicosView from '@/views/partes/Medicos.vue';

// Importando imagens
import contatoImg from '@/assets/contato.png';
import pacientesImg from '@/assets/pacientes.png';
import hospitaisImg from '@/assets/hospitais.png';
import medicosImg from '@/assets/medicos.png';

// Variável que controla a seção ativa
const activeSection = ref(''); // Começa sem nenhuma seção ativa

// Função para alterar a seção ativa
const setActiveSection = (section) => {
  activeSection.value = section;
};
</script>


<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in Vue <2.1.8 */ {
  opacity: 0;
}
.image-container {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.image-center {
  width: 100%;
  height: auto;
}

.image-overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  z-index: 1;
}

.text-overlay {
  position: absolute;
  top: 10%;
  left: 5%;
  color: #100049;
  padding: 5%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 2;
}

.cadastro {
  border-color: #100049;
  border-radius: 100px;
  background-color: #100049;
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  margin-left: 3rem;
  line-height: 1;
  width: 300px;
  display: grid;
}

/* Subir os botões */
.icon-content {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px 0; /* Ajuste do padding para aproximar mais da image-container */
  margin-top: 10px; /* Reduzido o espaço entre image-container e os botões */
}
.icon-link {
  display: flex;
  align-items: center;
  border: none; 
  background: none; 
  padding: 0; 
  cursor: pointer; 
}

.icon {
  width: 100px;
  height: auto;
  transition: transform 0.2s;
}

.icon:hover {
  transform: scale(1.4);
}

/* Estilos para as seções */
.section {
  padding: 40px;
  margin: 30px 0;
  border-radius: 8px;
  text-align: center;
  color: white; /* Texto branco para contraste */
}

.section-parallax {
  background-size: cover; /* Garante que a imagem de fundo cubra a seção */
  background-attachment: fixed; /* Efeito de parallax */
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* Garante que o conteúdo fique dentro da seção */
}

.section-parallax::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 139, 0.7); /* Azul escuro opaco */
  z-index: 1; /* Coloca o background-color abaixo do conteúdo */
}

.section-parallax .content {
  position: relative;
  z-index: 2; /* Coloca o conteúdo acima do background-color */
  color: white; /* Exemplo: coloca o texto em branco */
}

.section h1{
  font-weight: bold;
}


/* Background com imagem e efeito de paralaxe */
.contato {
  background-image: url('@/assets/background-home.jpg'); /* Imagem de fundo */
  position: relative;
}

.contato::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor opaca sobre a imagem */
  z-index: 1;
}

.contato .content-overlay {
  position: relative;
  z-index: 2; /* Garante que o conteúdo fique acima da camada opaca */
}

.hospitais {
  background-image: url('@/assets/background-home.jpg'); /* Mesma imagem de fundo */
}

.hospitais::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor opaca sobre a imagem */
  z-index: 1;
}

.hospitais .content-overlay {
  position: relative;
  z-index: 2; /* Garante que o conteúdo fique acima da camada opaca */
}

/* Seções sem fundo */
.pacientes {
  background-color: #ffffff;
  color: #333;
}

.medicos {
  background-color: #f7f7f7;
  color: #333;
}



/* Centralizando o conteúdo das seções */
.section h2 {
  margin-bottom: 20px;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
