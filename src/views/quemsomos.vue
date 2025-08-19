<template>
    <div class="icon-content">
      <!-- Seção "Quem Somos" -->
      <main>
        <section id="quem-somos" class="quem-somos-section">
          <h2>Quem Somos</h2>
          <p>
            Somos uma plataforma de gestão de saúde digital que permite a médicos e pacientes acessarem e gerenciarem o histórico médico de forma integrada e segura, utilizando CPF e CRM para autenticação e acesso.
          </p>
          <!-- Imagem da enfermeira sobreposta ao background azul -->
          <img :src="enfermeira" alt="Enfermeira" class="enfermeira-img" />
        </section>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  import enfermeira from '@/assets/enfermeira.png';
  // Instância do roteador
  const router = useRouter();
  </script>
  
  <style scoped>
  .quem-somos-section {
    position: relative;
    margin-top: 50px;
    padding: 50px;
    background-color: #0f2851;
    color: #fff;
    border-radius: 50%; /* Torna o fundo mais oval */
    text-align: center;
    font-size: 2rem;
    z-index: 1; /* Certifica que a imagem fica sobreposta */
  }
  
  .quem-somos-section h2 {
    margin-bottom: 20px;
  }
  
  .quem-somos-section p {
    text-align: justify; /* Justifica o texto */
    max-width: 600px; /* Limita a largura do texto */
    margin: 0 auto; /* Centraliza o texto */
    font-size: 1.2rem; /* Tamanho de fonte menor para facilitar a leitura */
    line-height: 1.6; /* Melhor espaçamento entre linhas */
  }
  
  .enfermeira-img {
    position: absolute;
    top: -80px; /* Ajuste a posição vertical para ficar fora do background azul */
    left: -20px; /* Ajuste a posição horizontal para ficar fora do background */
    width: 350px; /* Aumenta o tamanho da imagem */
    height: auto;
    z-index: 2; /* Garante que a imagem fique sobreposta */
  }
  </style>
  