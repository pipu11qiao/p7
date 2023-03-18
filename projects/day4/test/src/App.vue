<script>
import PButton from "p-ui/lib/button";
import PHeader from "p-ui/lib/header";
import "p-ui/lib/styles/button.css";
import "p-ui/lib/styles/header.css";
export default {
  name: "APP",
  components: {
    PButton,
    PHeader,
  },
};
</script>

<template>
  <div>
    <p-header>头部组件</p-header>
    <p-button type="primary">我是按钮</p-button>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
