<template>
  <div class="ubi-reset">
    <div class="ubi-banner">
      <div class="resetpassword-img">
        <img src="../assets/reset-banner.svg">
      </div>
    </div>
    <div class="ubi-form">
      <div class="ubi-title">
        {{ $t('reset.UBI') }}
      </div>
      <div class="ubi-input">
        <UbiInput 
          :label="$t('reset.label_password')" 
          :placeholder="$t('reset.placeholder_password')" 
          type="password"
          v-model="password" 
          @input="getPassword"
        >
          <template #icon>
            <Locker />
          </template>
        </UbiInput>
        <UbiInput 
          :label="$t('reset.label_confirm_password')" 
          :placeholder="$t('reset.placeholder_confirm_password')"
          type="password" 
          v-model="password_confirm" 
          @input="confirmPassword"
        >
          <template #icon>
            <Locker />
          </template>
      </UbiInput>
      </div>
      <UbiButton 
        :label="$t('reset.reset')" 
        :handleClick="goTo" 
        class="button-reset"
      >
      </UbiButton>
      <ChooseLanguage />
    </div>
  </div>
</template>

<script>
import UbiInput from '../components/Input.vue';
import UbiButton from '../components/Button.vue';
import ChooseLanguage from '../components/ChooseLanguage.vue';
import Locker from '../components/Icons/Locker.vue';

export default {
  name: 'ResetPasswordPage',
  components: {
    UbiInput,
    UbiButton,
    ChooseLanguage,
    Locker,
  },
  data() {
    return {
      password: '',
      password_confirm: '',
    };
  },
  methods: {
    goTo() {
      this.$router.push('/');
    },
    getPassword(password) {
      this.password = password;
    },
    confirmPassword(password) {
      this.password_confirm = password;
    },
  },
};
</script>

<style lang="scss" scoped>
.ubi-reset {
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
  width: 100vw;
}
.ubi-form {
  padding-left: 35%;
  padding-right: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
}
.ubi-title{
  margin-bottom: 32px;
}
.ubi-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
  color: #373737;
}
.ubi-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 70%;
}
.button-reset {
  margin-bottom: 20px;
}
.resetpassword-img {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
