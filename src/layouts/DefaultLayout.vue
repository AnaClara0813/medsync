<template>
    <div>
        <Nav />
        <main>
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
/* Estilos para o layout */
main {
    min-height: calc(100vh - 160px);
    /* Ajuste para garantir que o footer fique no final */
    padding: 20px;
}

html {
    scroll-behavior: smooth;
}
</style>