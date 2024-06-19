<template>
  <div class="cxm-Radio">
    <label class="cxm-Radio-Container">
      <div>
        <div
          class="cxm-Radio-ContainerInput"
        >
          <input
            ref="radio"
            type="radio"
            class="cxm-Radio-Input"
            :checked="shouldBeChecked"
            :val="value"
            :disabled="disable"
            @change="updateChecked"
            @blur="handleBlur"
            @focus="handleFocus"
          >
          <div
            class="cxm-RadioCustom"
            :class="classStatus"
          >
            <span />
          </div>
        </div>
      </div>

      <div>
        <div
          class="cxm-Radio-LabelTitle"
          :class="classStatus"
        >
          {{ label }}
        </div>
        <div
          class="cxm-Radio-Label"
          :class="classStatus"
        >
          {{ helpText }}
        </div>
      </div>
    </label>
  </div>
</template>
<script>
export default {
  name: 'RadioButton',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: '',
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    helpText: {
      type: String,
      default: '',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    callback: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    shouldBeChecked() {
      return this.modelValue === this.value;
    },
    classStatus() {
      return {
        disabled: this.disable,
        focused: this.focused,
      };
    },
  },
  methods: {
    updateChecked() {
      this.$emit('change', this.value);
      this.callback(this.value);
    },
    handleBlur() {
      this.focused = false;
    },
    handleFocus() {
      this.focused = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.cxm-Radio {
  position: relative;
}
.cxm-Radio-Container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cxm-Radio-ContainerInput {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-right: 4px;
  &.disabled {
    cursor: not-allowed;
  }
}
.cxm-Radio-Input {
  position: absolute;
  opacity: 0;
}
.cxm-RadioCustom {
  width: 16px;
  height: 16px;
  border: 0.7px solid #ABABAB;
  border-radius: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-sizing: border-box;
  &.disabled {
    border-color: #ABABAB;
  }
}
.cxm-Radio input:checked ~ .cxm-RadioCustom {
  border-color: #ABABAB;
  &.disabled {
    border-color: #ABABAB;
  }
}
.cxm-Radio input:checked ~ .cxm-RadioCustom span {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 600px;
  background-color: #595959;
  &.disabled {
    background-color: #ABABAB;
  }
}
.cxm-Radio input:checked ~ .cxm-RadioCustom.disabled span {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 600px;
  background-color: #ABABAB;
}
.cxm-Radio-LabelTitle {
  color: #595959;
  line-height: 140%;
  &.disabled {
    color: #ABABAB;
  }
}
// .cxm-Radio-Label {
//   color: var(--track-color-bluegray-80);
//   font-family: var(--track-font-family-base);
//   font-size: var(--track-font-size-xxs);
//   font-weight: var(--track-font-weight-medium);
//   line-height: 140%;
//   &.disabled {
//     color: var(--track-color-bluegray-40);
//   }
// }
</style>
