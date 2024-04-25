<template>
  <div class="register-medicalRecord">
    <div class="medicalRecord-image">
      <div class="medicalRecord-imageContainer">
        <img class="image" src="../assets/form.svg">
      </div>
    </div>
    <div class="medicalRecord-form">
      <div class="ubi-title">Ficha médica</div>
      <div class="ubi-subtitle">Paciente</div>
      <div v-if="!teste" class="ubi-form">
        <UbiInput
          label="Nome completo"
          placeholder="Nome"
          type="text"
        />
        <UbiInput
          label="Data de nascimento"
          type="date"
        />
        <UbiInput
          label="CPF"
          type="text"
        />
        <UbiInput
          label="Altura"
          type="text"
        />
        <UbiInput
          label="Peso"
          type="text"
        />
        <UbiInput
          label="Tipo sanguíneo"
          placeholder="Selecione o tipo sanguíneo"
        />
      </div>
      <div v-else class="ubi-form">
        <UbiInput
          label="Doenças"
          placeholder="Nome"
          type="textarea"
        />
        <UbiInput
          label="Plano de saúde"
          placeholder="Enter text"
          type="text"
        />
      </div>
      <div class="buttons-container">
        <div class="button">
          <UbiButton
            secondary
            :handleClick="() => nextPage()"
          >
            <template #icon>
              <ChevronRight/>
            </template>
          </UbiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UbiInput from '../components/Input.vue';
import UbiButton from '../components/Button.vue';
import ChevronRight from '../components/Icons/ChevronRight.vue';

export default {
  components: { UbiInput, UbiButton, ChevronRight },
  data() {
    return {
      teste: false,
    };
  },
  methods: {
    nextPage() {
      this.teste = !this.teste;
    },
  },
};
</script>

<style lang="scss" scoped>
.register-medicalRecord {
  width: 100%;
  display: flex;
}
.medicalRecord-image {
  width: 50%;
}
.medicalRecord-imageContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  width: 80%;
  height: auto;
}
.medicalRecord-form {
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 8%;
  padding-right: 10%;
  box-sizing: border-box;
}
.ubi-subtitle {
  font-family: "Archivo Black", sans-serif;
  color: #6F6C6C;
  font-size: 16px;
  margin-top: 24px;
}
.ubi-form {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
}
.buttons-container {
  width: 80%;
  display: flex;
  justify-content: end;
  margin-top: 32px;
}
.button {
  width: 8%;
}
</style>
