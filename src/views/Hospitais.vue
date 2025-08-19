<template>
  <div class="container">
    <h1>Cadastro de Exames por Hospitais</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="hospital-name">Nome do Hospital</label>
        <input type="text" id="hospital-name" v-model="hospitalName" required>
      </div>
      <div class="form-group">
        <label for="patient-name">Nome do Paciente</label>
        <input type="text" id="patient-name" v-model="patientName" required>
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
        <input type="date" id="exam-date" v-model="examDate" required>
      </div>
      <div class="form-group">
        <label for="exam-details">Detalhes do Exame</label>
        <textarea id="exam-details" v-model="examDetails" rows="4" required></textarea>
      </div>
      <div class="form-group">
        <label for="exam-file">Anexar Arquivo do Exame</label>
        <input type="file" id="exam-file" @change="handleFileUpload" required>
      </div>
      <div class="form-group">
        <button type="submit">Enviar</button>
      </div>
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
      examFile: null
    };
  },
  methods: {
    handleFileUpload(event) {
      // Captura o arquivo selecionado
      this.examFile = event.target.files[0];
    },
    submitForm() {
      const formData = new FormData();
      formData.append('hospital_name', this.hospitalName);
      formData.append('patient_name', this.patientName);
      formData.append('exam_type', this.examType);
      formData.append('exam_date', this.examDate);
      formData.append('exam_details', this.examDetails);
      formData.append('exam_file', this.examFile);

      // Aqui você pode adicionar a lógica para enviar os dados do formulário
      // Por exemplo, usando fetch ou axios para fazer uma requisição POST para o servidor
      fetch('/submit-form', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
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
</style>
