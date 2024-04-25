<template>
  <div
    :class="[secondary ? 'button-secondary' : 'button']"
    @click="handleClick"
  >
    <slot name="icon"></slot>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'UbiButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#780000',
    },
    handleClick: {
      type: Function,
      default: () => {},
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  color: #FFFF;
  height: 40px;
  width: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -3px 5px 15px -8px rgba(127, 143, 164, 0.3);
  cursor: pointer;
  font-size: 20px;
  background-color: #780000;
}
.button-secondary {
  color: #FFFF;
  height: 40px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -3px 5px 15px -8px rgba(127, 143, 164, 0.3);
  cursor: pointer;
  font-size: 20px;
  background-color: #780000;
}
</style>
