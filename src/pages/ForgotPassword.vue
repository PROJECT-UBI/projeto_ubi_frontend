<template>
  <div class="ubi-forgotPassword">
    <div class="ubi-forgotPassword-Form">
      <div class="ubi-forgotPassword-Title">
        {{ $t('forgot_password.UBI') }}
      </div>
      <div class="ubi-forgotPassword-Description">
        {{ $t('forgot_password.description') }}
      </div>
      <div class="ubi-forgotPassword-Email">
        <Input
          class="ubi-forgotPassword-Input"
          :placeholder="$t('forgot_password.placeholder_email')"
          type="email"
          v-model="email"
          @input="getEmail"
        >
          <template #icon>
            <Email/>
          </template>
        </Input>
        <Button :label="$t('forgot_password.button')" :handleClick="goTo"></Button>
        <div class="ubi-forgotPassword-Back" @click="goTo">
          <ChevronLeft :size="16"></ChevronLeft>
          {{ $t('forgot_password.back_login') }}
        </div>
      </div>
    </div>
    <div class="ubi-forgotPassword-ImageContainer">
      <div class="ubi-forgotPassword-Image">
        <img src="../assets/forgot_password.svg">
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue';
import Email from '../components/Icons/Email.vue';
import Button from '../components/Button.vue';
import ChevronLeft from '../components/Icons/ChevronLeft.vue';

export default {
  name: 'ForgotPassword',
  components: {
    Input, Email, Button, ChevronLeft,
  },
  methods: {
    goTo() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
.ubi-forgotPassword {
  display: grid;
  grid-template-columns: 40% 60%;
  height: 100vh;
  width: 100vw;
  font-family: "Abel", sans-serif;
}
.ubi-forgotPassword-Form {
  padding-left: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
}
.ubi-forgotPassword-Title {
  font-family: "Archivo Black", sans-serif;
  font-size: 32px;
  margin-bottom: 32px;
}
.ubi-forgotPassword-Description {
  font-family: "Abel", sans-serif;
  font-size: 16px;
  margin-bottom: 32px;
}
.ubi-forgotPassword-Email {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 32px;
}
.ubi-forgotPassword-Input {
  width: 100%;
}
.ubi-forgotPassword-ImageContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ubi-forgotPassword-Image {
  height: 90%;
  width: 80%;
  display: flex;
  justify-content: baseline;
}
.ubi-forgotPassword-Back {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.ubi-forgotPassword-Back:hover {
  color:#780000;
  text-decoration: underline;
}
</style>
