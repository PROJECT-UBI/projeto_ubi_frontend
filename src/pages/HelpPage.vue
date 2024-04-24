<template>
  <div class="ubi-helpPage">
    <Menu/>
    <div>
      <div class="ubi-title"> {{ $t('helpPage.title') }}</div>
      <div class="help-message">   
        <div class="help-text">
          {{ $t('helpPage.helpMessage') }}
        </div>    
        <div class="ubi-banner">
          <div class="img">
            <img src="../assets/ContactUs.svg">
          </div>
        </div>
        <div class="contact-us">
          {{ $t('helpPage.contactMessage') }}
          <br>
          {{ $t('helpPage.emailMessage') }}
          <br>
          {{ $t('helpPage.email') }}
          <br>
          {{ $t('helpPage.callCenter') }}
          <br>
          {{ $t('helpPage.ubiNumber') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  components:{
    Menu
  }
}
</script>

<style lang="scss" scoped>
.ubi-helpPage {
  display: grid;
  grid-template-columns: 0% 90%;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-family: $primary-font;
}
.ubi-title {
  text-align: center; 
}
.help-message{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
}
.help-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 100%;
}
.ubi-banner{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
}
.contact-us{
  font-family: $secondary-font;
  font-size: 15px;
  
}
</style>