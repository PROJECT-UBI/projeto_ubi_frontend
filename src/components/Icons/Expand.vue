<template>
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20
        11C20 6.02944 15.9706 2 11 2Z
      "
      :stroke="color"
      stroke-width="2.08333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 14L13 11L10 8"
      :stroke="color"
      stroke-width="2.08333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconExpand',
  props: {
    size: { type: [String, Number], default: 19 },
    color: { type: String, default: '#545454' },
    colorHover: { type: String },
  },
};
</script>
