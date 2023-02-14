<script setup>
import Header from './components/Header.vue';

</script>

<template>
 <div class="container-fluid p-0">
   <Header></Header>
   <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
 </div>
</template>

<style scoped>
  .fade-enter{
    opacity: 0;
  }
  
  .fade-enter-active{
    transition: opacity .3s ease-in-out;
  }

  .fade-leave-active{
    transition: opacity .3s ease-in-out;
    opacity: 1;
  }
</style>
