<template>
  <div class="ubi-register">
    <div class="ubi-form">
      <div class="ubi-title">{{ $t('register.UBI') }}</div>
      <div class="ubi-toastContainer">
        <div class="ubi-toast">{{ this.error }}</div>
      </div>
      <div class="ubi-inputs">
        <UbiInput
          :label="$t('register.label_name')"
          :placeholder="$t('register.placeholder_name')"
          v-model="name"
          @input="getName"
        >
          <template #icon>
            <User/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('register.label_surname')"
          :placeholder="$t('register.placeholder_surname')"
          v-model="surname"
          @input="getSurname"
        >
          <template #icon>
            <User/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('register.label_email')"
          :placeholder="$t('register.placeholder_email')"
          type="email"
          v-model="email"
          @input="getEmail"
        >
          <template #icon>
            <Email/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('register.label_password')"
          :placeholder="$t('register.placeholder_password')"
          type="password"
          v-model="password"
          @input="getPassword"
        >
          <template #icon>
            <Locker/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('register.label_confirm_password')"
          :placeholder="$t('register.placeholder_confirm_password')"
          type="password"
          v-model="password_confirm"
          @input="confirmPassword"
        >
          <template #icon>
            <Locker/>
          </template>
        </UbiInput>
      </div>
      <UbiButton :label="$t('register.register')" :handleClick="register"></UbiButton>
      <div class="have-account">
        <span>{{ $t('register.have_account') }}</span>
        <span class="login" @click="goTo">{{ $t('register.login') }}</span>
      </div>
    </div>
    <div class="ubi-banner">
      <div class="img">
        <img src="../assets/banner.png">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UbiInput from '../components/Input.vue';
import UbiButton from '../components/Button.vue';
import User from '../components/Icons/User.vue';
import Email from '../components/Icons/Email.vue';
import Locker from '../components/Icons/Locker.vue';

export default {
  name: 'RegisterPage',
  components: {
    UbiInput,
    UbiButton,
    User,
    Email,
    Locker,
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      password_confirm: '',
      error: '',
    };
  },
  methods: {
    goTo() {
      this.$router.push('/');
    },
    getName(name) {
      this.name = name;
    },
    getSurname(surname) {
      this.surname = surname;
    },
    getEmail(email) {
      this.email = email;
    },
    getPassword(password) {
      this.password = password;
    },
    confirmPassword(password) {
      this.password_confirm = password;
    },
    async register() {
      if (!this.validadeForm()) {
        return false; 
      }

      if(!this.validateEmail(this.email)) {
        return false;
      }

      if(!this.validatePassword(this.password)) {
        return false;
      }

      if(!this.matchPasswords()) {
        return false;
      }

      try {
        const response = await axios({
          method: 'post',
          url: 'http://ubi-backend.test/api/user',
          data: {
            name: this.name,
            last_name: this.surname,
            email: this.email,
            password: this.password,
          },
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Credentials': true,
          },
        });
        return response;
      } catch (error) {
        this.error = error.response.data.message;
        return this.error;
      }
    },
    validadeForm() {
      if (!this.name || !this.surname || !this.email || !this.password || !this.password_confirm) {
        this.error = 'Por favor, preencha todos os campos';
        return false; 
      }
      this.error = '';
      return true;
    },
    validateName() {
      if (!this.name || !this.surname) {
        this.error = 'Preencha todos os dados';
        return false; 
      }
      this.error = '';
      return true;
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email) {
        this.error = 'Preencha todos os dados';
        return false;
      } else if (!emailPattern.test(this.email)) {
        this.error = 'E-mail inválido';
        return false;
      } else {
        this.error = '';
        return true;
      }
    },
    validatePassword() {
      const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
      if (!this.password) {
        this.error = 'Preencha todos os dados';
        return false;
      } else if (!passwordPattern.test(this.password)) {
        this.error = 'A senha deve conter no mínimo 8 caracteres, letra maiúscula e caracter especial';
        return false;
      } else {
        this.error = '';
        return true;
      }
    },
    matchPasswords() {
      if(this.password === this.password_confirm) {
        return true;
      }
      this.error = 'As senhas devem ser iguais';
      return false;
    }
  },
};
</script>

<style lang="scss" scoped>
.ubi-register {
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
.have-account {
  margin: 32px 0;
}
.login {
  color: #780000;
  cursor: pointer;
}
.ubi-toastContainer {
  display: flex;
  justify-content: center;
}
.ubi-toast {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(179, 9, 9);
  margin-bottom: 16px;
}
</style>
