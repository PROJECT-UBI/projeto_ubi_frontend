<template>
  <div class="ubi-home">
    <div class="ubi-menu">
      <UbiMenu/>
    </div>
    <div class="ubi-home-content">
      <div class="ubi-title">{{ $t('home.UBI') }}</div>
      <div class="ubi-subtitle">{{ $t('home.subtitle') }}</div>
      <UbiButton
        :label="$t('home.home')"
        :handleClick="goTo"
        class="button-home">
      </UbiButton>
    </div>
  </div>
</template>

<script>
import UbiMenu from '../components/Menu.vue';
import UbiButton from '../components/Button.vue';

export default {
  name: 'HomePage',
  components: {
    UbiMenu,
    UbiButton,
  },
  methods: {
    goTo(){
      this.$router.push('/bracelet')
    }
  }
};
</script>

<style lang="scss" scoped>
.ubi-home {
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 35% 35%;
}
.ubi-home-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.ubi-subtitle{
  font-family: $primary-font;
  font-size: 25px;
  margin-bottom: 50px;
  margin-top: 10px;
}
.button-home{
  width: 60%;
}
</style>
