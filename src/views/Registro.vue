<template>
  <div class="register-container">
    <!-- Formulário de Cadastro -->
    <form @submit.prevent="handleRegister" class="register-form">
      <h1>Cadastro</h1>

      <!-- Mensagem de sucesso -->
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>

      <div class="form-group">
        <label for="name">Nome:</label>
        <input 
          type="text" 
          id="name" 
          v-model="name" 
          placeholder="Digite seu nome" 
          required 
        />
      </div>
      <div class="form-group">
        <label for="dob">Data de Nascimento:</label>
        <input 
          type="date" 
          id="dob" 
          v-model="dob" 
          required 
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          placeholder="Digite seu e-mail" 
          required 
        />
      </div>
      <div class="form-group">
        <label for="cpf">CPF:</label>
        <input 
          type="text" 
          id="cpf" 
          v-model="cpf" 
          placeholder="Digite seu CPF" 
          required 
        />
      </div>
      <div class="form-group">
        <label for="address">Endereço:</label>
        <input 
          type="text" 
          id="address" 
          v-model="address" 
          placeholder="Digite seu endereço" 
          required 
        />
      </div>
      <div class="form-group">
        <label for="gender">Gênero:</label>
        <select id="gender" v-model="gender" required>
          <option value="" disabled>Selecione o gênero</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div class="form-group">
        <label for="phone">Telefone:</label>
        <input 
          type="tel" 
          id="phone" 
          v-model="phone" 
          placeholder="Digite seu telefone" 
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
        <button type="submit" class="register-button">Cadastrar</button>
      </div>
    </form>

    <!-- Lista de usuários cadastrados -->
    <div class="user-list">
      <h2>Usuários Cadastrados</h2>
      <ul>
        <li v-for="(user, index) in users" :key="index">
          <strong>Nome:</strong> {{ user.name }} <br>
          <strong>Data de Nascimento:</strong> {{ user.dob }} <br>
          <strong>Email:</strong> {{ user.email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Variáveis de dados do formulário
const name = ref('');
const dob = ref('');
const cpf = ref('');
const address = ref('');
const gender = ref('');
const phone = ref('');
const email = ref('');
const password = ref('');
const successMessage = ref(''); // Variável para armazenar a mensagem de sucesso

// Variável para armazenar os usuários cadastrados
const users = ref([]);

// Função para carregar os usuários do localStorage ao montar o componente
onMounted(() => {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    users.value = JSON.parse(storedUsers);
  }
});

const handleRegister = () => {
  const newUser = {
    name: name.value,
    dob: dob.value,
    cpf: cpf.value,
    address: address.value,
    gender: gender.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
  };

  // Adicionar o novo usuário à lista de usuários
  users.value.push(newUser);

  // Salvar a lista atualizada no localStorage
  localStorage.setItem('users', JSON.stringify(users.value));

  // Definir mensagem de sucesso
  successMessage.value = 'Cadastro realizado com sucesso!';

  // Limpar o formulário
  name.value = '';
  dob.value = '';
  cpf.value = '';
  address.value = '';
  gender.value = '';
  phone.value = '';
  email.value = '';
  password.value = '';
};
</script>

<style scoped>
.register-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;
}

.register-container h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #100049;
  text-align: center;
}

.register-form {
  max-width: 800px;
  width: 100%;
  padding: 20px;
  background: #ebebeb;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input,
select {
  width: 100%;
  padding: 12px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

input:focus,
select:focus {
  border-color: #07191c;
  outline: none;
}

.register-button {
  width: 100%;
  padding: 12px;
  background-color: #048fb9;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-button:hover {
  background-color: #0056b3;
}

.success-message {
  text-align: center;
  color: green;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
</style>
