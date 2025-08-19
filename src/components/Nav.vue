<template>
    <header class="header">
        <img src="@/assets/medsync.png" alt="Logo Miniatura" class="logo" width="60" />
        <nav class="navbar">
            <ul>
                <li>
                    <router-link to="/">Início</router-link>
                </li>
                <li>
                    <router-link to="/duvidas">Dúvidas</router-link>
                </li>
                <li>
                    <router-link to="/quem-somos">Quem Somos</router-link>
                </li>
                <li>
                    <router-link to="/login" class="entrar-btn">Entrar</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
// Nenhuma lógica específica aqui por enquanto
</script>

<style scoped>
/* Estilos para o menu */
header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    background-color: #fff;
    z-index: 5;
}

nav {
    display: flex;
    justify-content: center;
    /* Centraliza o menu horizontalmente */
    align-items: center;
    /* Centraliza os itens do menu verticalmente */
    padding: 10px 0;
    /* Adiciona espaço ao redor do menu */
    font-family: 'Poppins', sans-serif;
}

nav ul {
    display: flex;
    justify-content: center;
    /* Garante que os itens dentro do menu sejam centralizados */
    padding: 0;
    margin: 0;
    list-style-type: none;
}

nav a {
    display: inline-block;
    padding: 0.5rem 2rem;
    /* Ajusta o espaçamento interno dos links */
    text-decoration: none;
    color: #1C2B5A;
    font-weight: bold;
    font-size: 1.2rem;
    transition: background-color 0.3s ease, color 0.3s ease;
    white-space: nowrap;
    /* Evita quebra de linha nos links */
    margin: 0 10px;
    /* Espaçamento horizontal entre os itens */
}

nav a.router-link-exact-active {
    color: #1C2B5A;
    font-weight: bold;
}

nav a:hover {
    background-color: rgba(33, 191, 157, 0.1);
    /* Cor de fundo no hover */
    border-radius: 10px;
}

nav a.entrar-btn {
    background-color: #1C2B5A;
    color: white;
    border-radius: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    padding: 0.5rem 1.5rem;
    /* Ajusta o espaçamento interno do botão */
    margin-left: 30px;
    /* Espaço à esquerda do botão "Entrar" */
}

nav a.entrar-btn:hover {
    background-color: #21BF9D;
    color: white;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    @media (max-width: 768px) {
        header {
            flex-direction: column;
        }

        .icon {
            width: 30px;
            height: 30px;
        }
    }

    .logo {
        margin: rem 0 0;
    }

    header .wrapper {
        display: inline;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav ul {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        padding: 16rem;
        margin: 0.1;
        font-weight: bold;
    }
}
</style>