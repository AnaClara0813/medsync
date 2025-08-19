<template>
  <div class="container">
    <div class="form-container">
      <h1>Pesquisar Exames</h1>
      <form @submit.prevent="searchExams">
        <div class="form-group">
          <label for="patient-name">Nome do Paciente</label>
          <input
            type="text"
            id="patient-name"
            v-model="patientName"
            placeholder="Digite o nome do paciente"
          />
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
    </div>

    <!-- Resultados da Pesquisa -->
    <div class="results" v-if="filteredExams.length > 0">
      <h2>Resultados da Pesquisa</h2>
      <ul>
        <li v-for="(exam, index) in filteredExams" :key="index">
          <strong>Nome do Paciente:</strong> {{ exam.patientName }}<br>
          <strong>Tipo de Exame:</strong> {{ exam.examType }}<br>
          <strong>Data do Exame:</strong> {{ exam.examDate }}<br>
          <strong>Detalhes do Exame:</strong> {{ exam.examDetails }}<br>
        </li>
      </ul>
    </div>
    <div v-if="filteredExams.length === 0 && searchPerformed" class="no-results">
      <p>Nenhum exame encontrado com os critérios informados.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const patientName = ref('');
const examType = ref('');
const filteredExams = ref([]);
const searchPerformed = ref(false);

const searchExams = () => {
  // Limpa os resultados anteriores
  filteredExams.value = [];
  searchPerformed.value = false;

  // Obtenha os dados de exames armazenados no localStorage
  const exams = JSON.parse(localStorage.getItem('exams')) || [];

  // Filtra os exames com base no nome do paciente e tipo de exame
  filteredExams.value = exams.filter(exam => {
    return (
      (!patientName.value || exam.patientName.toLowerCase().includes(patientName.value.toLowerCase())) &&
      (!examType.value || exam.examType === examType.value)
    );
  });

  // Marca que a pesquisa foi realizada
  searchPerformed.value = true;
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(11, 158, 220, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: inline-block;
  margin-bottom: 5px;
  color: #555;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
}

.results ul {
  list-style-type: none;
  padding: 0;
}

.results li {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e0f7fa;
  border-radius: 8px;
}

.no-results {
  color: red;
  text-align: center;
  margin-top: 20px;
}
</style>
