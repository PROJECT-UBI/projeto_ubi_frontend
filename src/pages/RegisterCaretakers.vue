<template>
  <div class="ubi-caretakers">
    <div class="ubi-registerCaretakers-ImageContainer">
      <div class="ubi-registerCaretakers-Image">
        <img src="../assets/register_caretakers.svg">
      </div>
      <div class="ubi-form">
        <div class="ubi-title">{{ $t('caretakers.UBI') }}</div>
        <div class="ubi-inputs">
          <div class="ubi-first-contact">{{ $t('caretakers.firstContact') }}</div>
          <UbiInput 
            :label="$t('caretakers.label_name')" 
            :placeholder="$t('caretakers.placeholder_name')" 
            v-model="name"
            @input="getName">
          </UbiInput>
          <UbiInput 
            :label="$t('caretakers.label_phone')" 
            :placeholder="$t('caretakers.placeholder_phone')" 
            v-model="phone"
            @input="getPhone">
          </UbiInput>
          <div class="ubi-second-contact">{{ $t('caretakers.secondContact') }}</div>
          <UbiInput 
            :label="$t('caretakers.label_email')" 
            :placeholder="$t('caretakers.placeholder_email')" 
            v-model="email"
            @input="getEmail">
          </UbiInput>
          <UbiInput 
            :label="$t('caretakers.label_second_name')" 
             :placeholder="$t('caretakers.placeholder_second_name')" 
            v-model="name"
            @input="secondName"></UbiInput>
          <UbiInput 
            :label="$t('caretakers.label_second_phone')" 
            :placeholder="$t('caretakers.placeholder_second_phone')"
            v-model="second_phone" 
            @input="secondPhone">
          </UbiInput>
          <div class="ubi-sync-bracelet">{{ $t('caretakers.syncBracelet') }}</div>
          <UbiInput 
            :label="$t('caretakers.label_sync_bracelet')" 
            :placeholder="$t('caretakers.placeholder_sync_bracelet')"
            v-model="bracelet" 
              @input="braceletCode">
          </UbiInput>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UbiInput from '../components/Input.vue';

export default {
  name: 'RegisterCaretakers',
  components: {
    UbiInput,
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      secondName: '',
      secondPhone: '',
      braceletCode: '',
    };
  },
  methods: {
    goTo() {
      this.$router.push('/');
    },
    getName(name) {
      this.name = name;
    },
    getPhone(phone) {
      this.phone = phone;
    },
    secondName(second_name) {
      this.second_name = second_name;
    },
    getEmail(email) {
      this.email = email;
    },
    secondPhone(second_phone) {
      this.second_phone = second_phone;
    },
    braceletCode(bracelet) {
      this.bracelet = bracelet;
    },
  },
};
</script>

<style lang="scss" scoped>
.ubi-caretakers {
  display: grid;
  grid-template-columns: 100%;
  height: 100vh;
  width: 100vw;
}
.ubi-registerCaretakers-ImageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ubi-registerCaretakers-Image {
  width: 60%;
}
.ubi-inputs {
  display: grid;
  gap: 20px;
  width: 100%;
}
.ubi-first-contact, .ubi-second-contact, .ubi-sync-bracelet {
  font-family: "Archivo Black", sans-serif;
  font-size: 16;
  color: #6F6C6C;
  text-align: center;
}
</style>
