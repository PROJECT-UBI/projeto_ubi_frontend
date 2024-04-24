<template>
  <div
    class="ubi-menu"
    :class="[expanded ? 'expand' : '']"
  >
    <div
      class="item-container stroke"
      :class="{'selected': getActivePage('/home')}"
    >
      <MapIcon/>
      <span class="labels">{{ $t('menu.location') }}</span>
    </div>
    <div
      class="item-container stroke"
    >
      <File/>
      <span class="labels">{{ $t('menu.medical_records') }}</span>
    </div>
    <div class="item-container fill">
      <Bracelet/>
      <span class="labels">{{ $t('menu.bracelets') }}</span>
    </div>
    <div class="item-container stroke">
      <Users/>
      <span class="labels">{{ $t('menu.caretakers') }}</span>
    </div>
    <div class="item-container stroke">
      <Settings/>
      <span class="labels">{{ $t('menu.settings') }}</span>
    </div>
    <div
      class="item-container fill"
      :class="{'selected': getActivePage('/help')}"
      @click="goTo('/help')"
    >
      <Help/>
      <span class="labels">{{ $t('menu.help') }}</span>
    </div>
    <div class="item-container stroke" @click="goTo('/')">
      <Logout/>
      <span class="labels">{{ $t('menu.exit') }}</span>
    </div>
    <div class="item-container stroke icon-expand" @click="toggleMenu">
      <Expand/>
    </div>
  </div>
</template>

<script>
import MapIcon from './Icons/Map.vue';
import File from './Icons/File.vue';
import Bracelet from './Icons/Bracelet.vue';
import Users from './Icons/Users.vue';
import Settings from './Icons/Settings.vue';
import Help from './Icons/Help.vue';
import Logout from './Icons/Logout.vue';
import Expand from './Icons/Expand.vue';

export default {
  name: 'HomePage',
  components: {
    MapIcon, File, Bracelet, Users, Settings, Help, Logout, Expand,
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
      return this.expanded;
    },
    goTo(path) {
      this.$router.push(path);
    },
    getActivePage(path) {
      console.log('AQUI', this.$route.path, path);
      if (this.$route.path === path) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.ubi-menu {
  width: 110px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 28px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.2s ease-in;
}
.item-container {
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.item-container:hover {
  background-color: #780000;
  color: white;
  border-radius: 20px;
}
.expand {
  width: 250px;
  transition: 0.2s ease-out;
}
.labels {
  display: none;
}
.item-container:hover.stroke :deep(svg path){
  stroke: white;
}
.item-container:hover.fill :deep(svg path){
  fill: white;
}
.expand .item-container .labels {
  display: block;
}
.expand .item-container{
  box-sizing: border-box;
  justify-content: start;
  padding-left: 16px;
  gap: 24px;
}
.selected {
  background-color: #780000;
  color: white;
  border-radius: 20px;
}
.selected.stroke :deep(svg path){
  stroke: white;
}
.selected.fill :deep(svg path){
  fill: white;
}
.expand .item-container.icon-expand{
  transform: rotate(180deg);
  justify-content: end;
  padding-right: 16px;
}
</style>
