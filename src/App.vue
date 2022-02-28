<template>
  <div id="main">
    <div>
      <!-- Navbar -->
      <Navbar/>
      <router-view></router-view>
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

<style lang="scss" scoped>
#main {
  background: $main-color;
  color: $main-text-color;
  min-height: 100vh;
  font-family: $main-font;
  font-weight: 400;
}
</style>