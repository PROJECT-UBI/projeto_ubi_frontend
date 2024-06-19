<template>
  <div class="ubi-settings-container">
    <UbiMenu/>
    <div class="ubi-settings">
      <div class="ubi-select">
        <div class="ubi-select-container">
          <span class="ubi-title">{{ $t('settings.settings') }}</span>
          <div class="ubi-buttons">
            <div
              class="settings-options stroke"
              :class="{'selected' : showSettings === 'personal'}"
              @click="changeTab('personal')"
            >
              <User size="24" color="#780000"/>
              <span>{{ $t('settings.profile_title') }}</span>
            </div>
            <div
              class="settings-options fill"
              :class="{'selected' : showSettings === 'password'}"
              @click="changeTab('password')"
            >
              <Locker size="24" color="#780000"/>
              <span>{{ $t('settings.password_title') }}</span>
            </div>
            <div
              class="settings-options fill"
              :class="{'selected' : showSettings === 'language'}"
              @click="changeTab('language')"
            >
              <Globe size="23" color="#780000"/>
              <span>{{ $t('settings.language_title') }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showSettings === 'personal'" class="ubi-personal-settings">
        <span class="ubi-title">{{ $t('settings.profile_title') }}</span>
        <div class="ubi-form">
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
        </div>
      </div>
      <div v-else-if="showSettings === 'password'" class="ubi-password-settings">
        <span class="ubi-title">{{ $t('settings.password_title') }}</span>
        <div class="ubi-form-password">
          <UbiInput
            :label="$t('settings.current_password')"
            :placeholder="$t('register.placeholder_confirm_password')"
            type="password"
          >
            <template #icon>
              <Locker/>
            </template>
          </UbiInput>
          <div class="forgot-password" @click="forgotPassword">
            <span>{{ $t('settings.forgot_password') }}</span>
          </div>
          <UbiInput
            :label="$t('settings.new_password')"
            :placeholder="$t('register.placeholder_confirm_password')"
            class="input-newpassword"
            type="password"
          >
            <template #icon>
              <Locker/>
            </template>
          </UbiInput>
          <UbiInput
            :label="$t('settings.confirm_password')"
            :placeholder="$t('register.placeholder_confirm_password')"
            class="input-newpassword"
            type="password"
          >
            <template #icon>
              <Locker/>
            </template>
          </UbiInput>
          <UbiButton :label="$t('settings.reset_password')" :handleClick="goTo"/>
        </div>
      </div>
      <div v-else-if="showSettings === 'language'" class="ubi-language-settings">
        <span class="ubi-title">{{ $t('settings.language_title') }}</span>
        <div class="ubi-card">
          <span class="title-card">
            {{ $t('settings.display_language') }}
          </span>
          <div class="ubi-flags">
            <div class="ubi-language-container">
              <Flag
                class="ubi-language"
                image="src/assets/brazil_flag.png"
                :isSelected="$i18next.resolvedLanguage === 'pt'"
                @click="changeLanguage('pt')"
              />
              <div>
                <span>{{ $t('settings.portuguese') }}</span>
              </div>
            </div>
            <div class="ubi-language-container">
              <Flag
                class="ubi-language"
                image="src/assets/eua_flag.png"
                :isSelected="$i18next.resolvedLanguage === 'en'"
                @click="changeLanguage('en')"
              />
              <div>
                <span>{{ $t('settings.english') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="ubi-image">
        <span class="ubi-title">{{ $t('settings.settings') }}</span>
        <img class="img" src="../assets/settings.svg">
      </div>
    </div>
  </div>
</template>

<script>
import UbiMenu from '../components/Menu.vue';
import UbiButton from '../components/Button.vue';
import User from '../components/Icons/User.vue';
import Locker from '../components/Icons/Locker.vue';
import UbiInput from '../components/Input.vue';
import Email from '../components/Icons/Email.vue';
import Globe from '../components/Icons/Globe.vue';
import Flag from '../components/Flag.vue';
import axios from 'axios';

export default {
  name: 'SettingsaPage',
  components: {
    UbiMenu,
    UbiButton,
    User,
    Locker,
    UbiInput,
    Email,
    Flag,
    Globe,
  },
  data() {
    return {
      showSettings: '',
      name: '',
      surname: '',
      email: '',
      error: '',
      userData: {},
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    goTo() {
      this.$router.push('/');
    },
    forgotPassword() {
      this.$router.push('/forgotpassword');
    },
    changeTab(tab) {
      this.showSettings = tab;
    },
    changeLanguage(lang) {
      this.$i18next.changeLanguage(lang);
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
    async getUser() {
      console.log('GET USER');
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios({
          method: 'get',
          url: 'http://ubi-backend.test/api/user',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Credentials': true,
          },
        });
        this.userData = response.data;
        this.name = this.userData.name;
        this.surname = this.userData.last_name;
        this.email = this.userData.email;
      } catch (error) {
        this.error = error.response;
        return this.error;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.ubi-settings-container {
  display: flex;
}
.ubi-settings {
  display: grid;
  grid-template-columns: 40% 60%;
  height: 100vh;
  width: 100vw;
  font-family: "Abel", sans-serif;
}
.ubi-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 30%;
  box-sizing: border-box;
  align-items: center;
}
.img {
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 56px;
  margin-top: 48px;
}
.ubi-select {
  display: flex;
  padding-top: 35%;
  justify-content: center;
}
.ubi-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 48px;
}
.ubi-personal-settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 30%;
  box-sizing: border-box;
  align-items: center;
}
.ubi-form {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 32px;
  margin-top: 64px;
}
.ubi-form-password {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 64px;
}
.ubi-password-settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 30%;
  box-sizing: border-box;
  align-items: center;
}
.forgot-password {
  color: #780000;
  display: flex;
  justify-content: end;
  margin: 8px 0 32px 0;
  cursor: pointer;
}
.input-newpassword {
  margin-bottom: 32px;
}
.ubi-language-settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 30%;
  box-sizing: border-box;
  align-items: center;
}
.ubi-card {
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 56px;
}
.title-card {
  font-family: "Archivo Black", sans-serif;
  font-size: 14px;
  margin-bottom: 56px;
}
.ubi-flags {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.ubi-language-container {
  text-align: center;
  cursor: pointer;
}
.ubi-language {
  margin-bottom: 24px;
}
.settings-options {
  color: #780000;
  height: 40px;
  width: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  box-shadow: -3px 5px 15px -8px rgba(127, 143, 164, 0.3);
  gap: 8px;
  cursor: pointer;
  font-size: 20px;
  padding-left: 16px;
  &:hover {
    background-color: #780000;
    color: #FFFF;
    &.stroke :deep(svg path){
      stroke: white;
    }
    &.fill :deep(svg path){
      fill: white;
    }
  }
  & span {
    font-size: 20px;
  }
}
.ubi-select-container {
  text-align: center;
}
.selected {
  background-color: #780000;
  color: #FFFF;
}
.selected.stroke :deep(svg path){
  stroke: white;
}
.selected.fill :deep(svg path){
  fill: white;
}
</style>
