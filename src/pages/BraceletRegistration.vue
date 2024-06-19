<template>
  <div class="ubi-bracelet">
    <div class="ubi-form">
      <div class="ubi-menu">
       <UbiMenu/>
      </div>
      <div class="ubi-content">
      <div class="ubi-title">{{ $t('bracelet.UBI') }}</div>
      <div class="ubi-message">{{ $t('bracelet.message') }}</div>
      <div class="ubi-inputs">
        <UbiInput 
          :label="$t('bracelet.label_name')" 
          :placeholder="$t('bracelet.placeholder_name')" 
          v-model="name"
          @input="getName"
        >
          <template #icon>
            <User/>
          </template>
        </UbiInput>
        <UbiInput 
          :label="$t('bracelet.label_code')" 
          :placeholder="$t('bracelet.placeholder_code')" 
          v-model="bracelet"
          @input="getBracelet">
            <template #icon>
            <Bracelet/>
          </template>
        </UbiInput>
        <UbiButton 
          :label="$t('bracelet.bracelet')" 
          :handleClick="registerBand"
          class="button-bracelet">
        </UbiButton>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import UbiMenu from '../components/Menu.vue';
import UbiInput from '../components/Input.vue';
import UbiButton from '../components/Button.vue';
import User from '../components/Icons/User.vue';
import Bracelet from '../components/Icons/Bracelet.vue';
import axios from 'axios';

export default {
  name: 'RegisterBracelet',
  components: {
    UbiInput,
    UbiButton,
    UbiMenu,
    User,
    Bracelet,
  },
  data() {
    return {
      name: '',
      bracelet: '',
    };
  },
  methods: {
    goTo() {
      this.$router.push('/');
    },
    getName(name) {
      this.name = name;
    },
    getBracelet(bracelet) {
      this.bracelet = bracelet;
    },
    async registerBand() {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios({
          method: 'post',
          url: 'http://ubi-backend.test/api/band',
          data: {
            IMEI: this.bracelet,
            name: this.name,
            latitude: -23.550520,
            longitude: -46.633308,
          },
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
.ubi-bracelet {
  display: grid;
  height: 100vh;
  width: 100%;
}
.ubi-form {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 50px 1fr;
}
.ubi-inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 48px;
  justify-content: center;
  width: 20%;
}
.ubi-menu {
  box-sizing: border-box;
}
.ubi-title {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.ubi-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ubi-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  font-size: 22px;
}
.ubi-input {
  display: flex;
  flex-direction: column;
  align-self: center;
}
.button-bracelet{
  margin-top: 30px;
}
</style>