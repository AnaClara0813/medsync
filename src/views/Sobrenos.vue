<template>
  <div class="sobrenos">
    <template>
      <img :src="require('@/assets/redondo.png')" alt="Elips do sobrenos">
    </template>

    <h1>Sobre Nós</h1>
    <h3>Somos uma plataforma de gestão de saúde digital que permite a médicos e pacicentes acessarem e gerenciaremtodo
      histórico médico de forma integrada e segura, utilizando CPF e CRM para autenticação e acesso.</h3>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: inline;
    align-items: center;
  }
}
</style>
