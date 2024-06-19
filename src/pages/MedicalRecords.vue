<template>
  <div class="ubi-medicalRecords">
    <UbiMenu />
    <RegisterMedicalRecord v-if="form"/>
    <div v-else class="ubi-emptyState">
      <div class="ubi-empty-title">Deseja criar uma nova ficha médica?</div>
      <div class="ubi-empty-subtitle">Crie clicando no botão abaixo!</div>
      <div class="ubi-buttonContainer">
        <UbiButton
          label="Nova ficha"
          :handleClick="() => showForm()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UbiMenu from '../components/Menu.vue';
import UbiButton from '../components/Button.vue';
import RegisterMedicalRecord from './RegisterMedicalRecord.vue';

export default {
  components: { UbiMenu, UbiButton, RegisterMedicalRecord },
  data() {
    return {
      form: false,
    };
  },
  methods: {
    showForm() {
      this.form = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.ubi-medicalRecords {
  display: flex;
}
.ubi-emptyState {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ubi-empty-title {
  font-family: "Archivo Black", sans-serif;
  font-size: 24px;
  margin-bottom: 32px;
}
.ubi-empty-subtitle {
  font-size: 24px;
  margin-bottom: 64px;
}
.ubi-buttonContainer {
  width: 15%;
}
</style>
