<template>
  <div class="container">
    <h1>Pesquisar Exames</h1>
    <form @submit.prevent="searchExams">
      <div class="form-group">
        <label for="patient-id">ID do Paciente</label>
        <input type="text" id="patient-id" v-model="patientId" placeholder="ID do paciente">
      </div>
      <div class="form-group">
        <label for="patient-name">Nome do Paciente</label>
        <input type="text" id="patient-name" v-model="patientName" placeholder="Nome do paciente">
      </div>
      <div class="form-group">
        <label for="exam-type">Tipo de Exame</label>
        <select id="exam-type" v-model="examType">
          <option value="">Selecione um tipo de exame</option>
          <option value="sangue">Sangue</option>
          <option value="urina">Urina</option>
          <option value="imagem">Imagem</option>
          <option value="outro">Outro</option>
        </select>
      </div>
          
      <div class="form-group">
        <button type="submit">Buscar Exames</button>
      </div>
    </form>
    <div v-if="exams.length > 0" class="results">
      <h2>Resultados da Pesquisa</h2>
      <ul>
        <li v-for="exam in exams" :key="exam.id">
          <strong>ID:</strong> {{ exam.id }}<br>
          <strong>Nome do Paciente:</strong> {{ exam.patientName }}<br>
          <strong>Tipo de Exame:</strong> {{ exam.examType }}<br>
          <strong>Data:</strong> {{ exam.examDate }}<br>
          <strong>Detalhes:</strong> {{ exam.examDetails }}<br>
          <strong>Arquivo:</strong> <a :href="exam.examFileUrl" target="_blank">Visualizar Arquivo</a>
        </li>
      </ul>
    </div>
    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Dados da pesquisa
const patientId = ref('');
const patientName = ref('');
const examType = ref('');
const examDateStart = ref('');
const examDateEnd = ref('');
const exams = ref<any[]>([]);
const error = ref<string | null>(null);

// Instância do roteador
const router = useRouter();

// Função para buscar exames
async function searchExams() {
  // Limpa os resultados e erros
  exams.value = [];
  error.value = null;

  try {
    // Construindo a URL com parâmetros de consulta
    const query = new URLSearchParams({
      patientId: patientId.value,
      patientName: patientName.value,
      examType: examType.value,
      examDateStart: examDateStart.value,
      examDateEnd: examDateEnd.value
    }).toString();

    // Simulando uma requisição para buscar exames
    // Substitua pela URL da sua API real
    const response = await fetch(`/api/exams?${query}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar exames.');
    }
    const data = await response.json();
    exams.value = data.exams; // Ajuste conforme a estrutura dos dados da sua API
  } catch (err) {
    error.value = err.message;
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(11, 158, 220, 0.1);
  box-sizing: border-box;
  height: 400px;
  overflow-y: auto;
}
@media (max-width: 600px) {
  .container {
    padding: 10px; /* Reduza o padding em telas menores */
    max-width: 100%; /* Garante que o contêiner use 100% da largura disponível */
  }
}

h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: inline;
  margin-bottom: 5px;
  color: rgb(84, 84, 84);
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group button {
  background-color: #5ECFD1;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.form-group button:hover {
  background-color: #161D54;
}

.results {
  margin-top: 20px;
}

.results ul {
  list-style: none;
  padding: 0;
}

.results li {
  margin-bottom: 15px;
}

.error {
  color: red;
  margin-top: 20px;
}
</style>
