<template>
  <div class="ubi-login">
    <div class="ubi-form">
      <div class="ubi-title">{{ $t('login.UBI') }}</div>
      <div class="ubi-inputs">

        <Input :label="$t('login.label_email')" :placeholder="$t('login.placeholder_email')" type="email"
          v-model="email" @input="getEmail">
        <template #icon>
          <Email />
        </template>
        </Input>
        <Input :label="$t('login.label_password')" :placeholder="$t('login.placeholder_password')" type="password"
          v-model="password" @input="getPassword">
        <template #icon>
          <Locker />
        </template>
        </Input>
        <div class="forgot-password" @click="goToForgotPassword">
          <span class="forgot" @click="goToForgotPassword">{{ $t('login.forgot') }}</span>
        </div>
      </div>

      <Button :label="$t('login.login')" :handleClick="login"></Button>
      <div class="no-account" @click="goToRegister">
        <span>{{ $t('login.no_account') }}</span>
        <span class="register" @click="goToRegister">{{ $t('login.register') }}</span>
      </div>
      <ChooseLanguage />
    </div>

    <div class="welcome-messages">
      <div class="welcome-back">
        {{ $t('login.welcome-back') }}
      </div>
      <div class="welcome">
        {{ $t('login.welcome') }}
      </div>

      <div class="ubi-banner">
        <div class="img">
          <img src="../assets/banner-login.png">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import ChooseLanguage from "../components/ChooseLanguage.vue";
import User from "@/components/Icons/User.vue";
import Email from "@/components/Icons/Email.vue";
import Locker from "@/components/Icons/Locker.vue";

export default {
  components: {
    Input,
    Button,
    ChooseLanguage,
    Email,
    Locker,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    goTo() {
      this.$router.push('/');
    },
    getEmail(email) {
      this.email = email;
    },
    getPassword(password) {
      this.password = password;
    },
    goToRegister() {
      this.$router.push('/register');
    },
    goToForgotPassword() {
      this.$router.push('/forgotpassword');
    }
  },
}
</script>

<style scoped>
.ubi-login {
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
  width: 100vw;
  font-family: "Abel", sans-serif;
}

.ubi-form {
  padding-left: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
}

.ubi-title {
  font-family: "Archivo Black", sans-serif;
  font-size: 32px;
  margin-bottom: 32px;
}

.ubi-inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
}

.ubi-banner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-account {
  color: #780000;
  cursor: pointer;
  margin: 32px 0;
}

.forgot-password {
  color: #780000;
  cursor: pointer;
  display: flex;
  align-items: end;
  justify-content: right;
}

.welcome-messages{
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.welcome-back{
  color: #9D9999;
  font-size: 20px;
  font-family: 'Abel', sans-serif;
}

.welcome{
  color: #780000;
  font-size: 35px;
  font-family: 'Archivo Black', sans-serif;
  margin-top: 17px;
}
</style>
