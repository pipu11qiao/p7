<template>
  <!-- <div>
    hello
    <div class="test">world</div>
    <p-button>aaa</p-button>
    <p-button type="info">bbb</p-button>
    <p-button type="primary" size="large">bbb</p-button>
  </div> -->
  <div class="test">
    <p-header> 头部 </p-header>
    <p-container>
      <p-aside width="200px"> 菜单 </p-aside>
      <p-main>
        <p-button type="warning" size="large">自定义按钮</p-button>
      </p-main>
    </p-container>
  </div>
</template>
<script></script>
<style lang="scss">
html,
body,
#app,
.test {
  height: 100%;
  display: flex;
  flex-direction: column;
}
body {
  margin: 0;
  padding: 0;
}
.p-header {
  background-color: aqua;
}
.p-aside {
  background-color: blue;
}
.p-main {
  background-color: maroon;
}
</style>
