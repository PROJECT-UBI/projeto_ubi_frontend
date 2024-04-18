<template>
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 13.6875L13.6875 10.5M13.6875 10.5L10.5 7.3125M13.6875 10.5H2M2 5.451V5.4C2 4.21
        2 3.615 2.23162 3.16025C2.43562 2.75969 2.75969 2.43562 3.16025 2.23162C3.615 2 4.21 2
        5.4 2H15.6C16.79 2 17.385 2 17.8387 2.23162C18.2392 2.43562 18.5644 2.75969 18.7684
        3.16025C19 3.61394 19 4.20894 19 5.39681V15.6043C19 16.7921 19 17.3861 18.7684
        17.8398C18.5643 18.2397 18.2388 18.5647 17.8387 18.7684C17.385 19 16.7911 19 15.6032
        19H5.39681C4.20894 19 3.61394 19 3.16025 18.7684C2.76042 18.5646 2.43535 18.2396 2.23162
        17.8398C2 17.385 2 16.79 2 15.6V15.5469
      "
      :stroke="color"
      stroke-width="2.08333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
</svg>

</template>
<script>
export default {
  name: 'IconLogout',
  props: {
    size: { type: [String, Number], default: 19 },
    color: { type: String, default: '#545454' },
    colorHover: { type: String },
  },
};
</script>
