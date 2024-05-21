<template>
  <div class="ubi-helpPage">
    <Menu />
    <div class="boddy">
      <div class="Columm1">
        <div class="help-message">
          <div class="ubi-title"> {{ $t('helpPage.title') }}</div>
          <div class="help-text">
            {{ $t('helpPage.helpMessage') }}
          </div>
        </div>
        <div class="contact-us">
          <div class="contact-item">{{ $t('helpPage.contactMessage') }}</div>
          <div class="contact-item">{{ $t('helpPage.emailMessage') }}</div>
          <div class="contact-item"><img src="../assets/email_icon.svg" class="icon">
            {{ $t('helpPage.email') }}</div>
          <div class="contact-item">{{ $t('helpPage.callCenter') }}</div>
          <div class="contact-item"><img src="../assets/phone_icon.svg" class="icon">
            {{ $t('helpPage.ubiNumber') }}</div>
        </div>
      </div>
      <div class="ubi-banner">
        <div class="img">
          <img src="../assets/ContactUs.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu
  }
}
</script>

<style lang="scss" scoped>
.ubi-helpPage {
  display: grid;
  grid-template-columns: 10% 90%;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-family: $primary-font;
}

.boddy {
  display: flex;
  align-items: center;
}

.ubi-title {
  text-align: center;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.help-message {
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  align-items: center;
  text-align: center;
  //box-sizing: border-box;
}

.help-text {
  display: flex;
  text-align: center;
  padding-right: 10%;
  padding-inline-end: 5%;
  padding-block-start: 10%;
  width: 74%;
  padding-bottom: 50%;
  font-size: 21px;
}

.ubi-banner {
  display: flex;
  flex-direction: column;
  //align-items: flex-end;
  width: 100%;
  padding-left: 20%;
}

.contact-us {
  align-items: start;
  display: flex;
  flex-direction: column;
}

.contact-item {
  font-family: $secondary-font;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 1%;
}

.icon {
  margin-right: 5px;
}
.Columm1{
  display: flex;
  flex-direction: column;
  margin-left: 15%;
}
</style>