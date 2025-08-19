<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
  
      <img alt="Vue logo" class="center" src="@/assets/medsync.png" width="75" height="50" />
      <h1>Login</h1>
      <div class="form-group">
        <label for="loginId">CNPJ ou CPF:</label>
        <input 
          type="text" 
          id="loginId" 
          v-model="loginId" 
          placeholder="Digite seu CNPJ ou CPF" 
          required 
        />
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          placeholder="Digite sua senha" 
          required 
        />
      </div>
      <div class="form-group">
        <button type="submit" class="login-button">ENTRAR</button>
      </div>
      <div class="form-group">
        <a href="#" @click.prevent="handleForgotPassword" class="forgot-password-link">Esqueceu sua senha?</a>
      </div>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter  } from "vue-router";

const loginId = ref('');
const password = ref('');
const errorMessage = ref(''); // Para exibir a mensagem de erro
const router = useRouter();

const handleLogin = () => {
  // Recuperar os dados do usuário armazenados no LocalStorage
  const storedUserData = JSON.parse(localStorage.getItem('users'));
  console.log(storedUserData);
  if (!storedUserData) {
    errorMessage.value = 'Nenhum dado cadastrado encontrado.';
    return;
  }

  for (let index = 0; index < storedUserData.length; index++) {
    const element = storedUserData[index];
     // Verificar se o loginId (CNPJ ou CPF) e a senha correspondem aos armazenados
    if (loginId.value === element.cpf && password.value === element.password) {
      // Se as credenciais estiverem corretas, redireciona para a página inicial
      router.push('/');
    }
    
  }
  // Caso contrário, exibe a mensagem de erro
  errorMessage.value = 'CNPJ/CPF ou senha incorretos.';
};

const handleForgotPassword = () => {
  // Lógica para recuperação de senha
  console.log('Recuperar senha');
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4; /* Cor de fundo para contraste */
}

.login-form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background: #1c0062;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(39, 0, 117);
  color: #f1f0f0;
}


img {
  max-width: 100%; /* Ajusta a largura da imagem para não exceder o contêiner */
  height: auto; /* Mantém a proporção da imagem */
  max-height: 150px; /* Ajusta a altura máxima conforme necessário */
}

h1 {
  text-align: center;
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: rgb(241, 240, 240);
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid rgb(0, 179, 255);
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #00c4d2;
  color: rgb(250, 250, 250);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.forgot-password-link {
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
