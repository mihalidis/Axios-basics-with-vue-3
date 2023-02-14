<script setup>
const props = defineProps({
    cardInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
)
</script>

<template>
    <div class="card m-1">
      <img class="card-img-top" :src="cardInfo.thumbnail" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ cardInfo.title }}</h5>
        <p class="card-text">{{  cardInfo.content }}</p>
      </div>
    </div>
</template>

<style>
  .card {
    width: 300px;
  }
</style>