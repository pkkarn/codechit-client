<template>
  <div id="main">
    <div>
      <!-- Navbar -->
      <Navbar/>
      <div class="main__view">
        <router-view></router-view>
      </div>
      <!-- MainPage -->
      <!-- <MainPage/> -->
      <!-- Footer -->
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
// import MainPage from '@pages/MainPage.vue'

</script>

<style lang="scss">
@import '@/assets/sass/_global.scss';
#main {
  background: $main-color;
  color: $main-text-color;
  min-height: 100vh;
  font-family: $main-font;
  font-weight: 400;
}
.main {
  &__view {
    background: $primary-color;
    min-height: 100vh;
    padding: $general-padding * 2;
  }
}
</style>