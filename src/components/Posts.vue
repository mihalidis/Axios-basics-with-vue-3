<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Card from './Card.vue';

const cardDataList = ref([]);

onMounted(async () => {
  await fetchData();
});

// methods
async function fetchData() {
  await axios.get('/posts.json')
  .then(response => {
    const dataKeys = Object.keys(response.data);
    dataKeys.forEach(key => {
      cardDataList.value.push({...response.data[key], id: key});
    });
  })
  .catch((e) => console.warn(e));
}
</script>

<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-start">
        <Card v-for="card in cardDataList" :key="card.id" :card-info="card" />
    </div>
  </div>
</template>

<style>

</style>