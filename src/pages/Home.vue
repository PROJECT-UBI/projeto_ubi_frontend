<template>
  <div class="ubi-home">
    <UbiMenu/>
  </div>
</template>

<script>
import UbiMenu from '../components/Menu.vue';

export default {
  name: 'HomePage',
  components: { UbiMenu },
};
</script>

<style lang="scss" scoped>
.ubi-home {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: darkseagreen;
}
</style>
