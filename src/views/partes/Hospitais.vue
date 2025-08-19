<template>
  <div class="container">
    <h1>Cadastro de Exames por Hospitais</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="hospital-name">Nome do Hospital</label>
        <input type="text" id="hospital-name" v-model="hospitalName" required />
      </div>
      <div class="form-group">
        <label for="patient-name">Nome do Paciente</label>
        <input type="text" id="patient-name" v-model="patientName" required />
      </div>
      <div class="form-group">
        <label for="exam-type">Tipo de Exame</label>
        <select id="exam-type" v-model="examType" required>
          <option value="">Selecione um tipo de exame</option>
          <option value="sangue">Sangue</option>
          <option value="urina">Urina</option>
          <option value="imagem">Imagem</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exam-date">Data do Exame</label>
        <input type="date" id="exam-date" v-model="examDate" required />
      </div>
      <div class="form-group">
        <label for="exam-details">Detalhes do Exame</label>
        <textarea id="exam-details" v-model="examDetails" rows="4" required></textarea>
      </div>
      <div class="form-group">
        <label for="exam-file">Anexar Arquivo do Exame</label>
        <input type="file" id="exam-file" @change="handleFileUpload" required />
      </div>
      <div class="form-group">
        <button type="submit">Enviar</button>
      </div>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hospitalName: '',
      patientName: '',
      examType: '',
      examDate: '',
      examDetails: '',
      examFile: null,
      successMessage: '', // Mensagem de sucesso
    };
  },
  methods: {
    handleFileUpload(event) {
      // Captura o arquivo selecionado
      this.examFile = event.target.files[0];
    },
    submitForm() {
      // Obtenha os exames já armazenados ou inicialize uma nova lista
      const exams = JSON.parse(localStorage.getItem('hospitalExams')) || [];

      // Adicione o novo exame à lista
      const newExam = {
        hospitalName: this.hospitalName,
        patientName: this.patientName,
        examType: this.examType,
        examDate: this.examDate,
        examDetails: this.examDetails,
        examFile: this.examFile ? this.examFile.name : '', // Apenas o nome do arquivo
      };
      exams.push(newExam);

      // Salve os dados no localStorage
      localStorage.setItem('hospitalExams', JSON.stringify(exams));

      // Limpa o formulário e exibe a mensagem de sucesso
      this.resetForm();
      this.successMessage = 'Exame cadastrado com sucesso!';
    },
    resetForm() {
      this.hospitalName = '';
      this.patientName = '';
      this.examType = '';
      this.examDate = '';
      this.examDetails = '';
      this.examFile = null;
      document.getElementById('exam-file').value = ''; // Limpar o campo de arquivo
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical;
}

.form-group button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.form-group button:hover {
  background-color: #0056b3;
}

.success-message {
  color: green;
  text-align: center;
  margin-top: 20px;
}
</style>
