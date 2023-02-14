<script setup>
import { reactive } from 'vue'

//data
const post = reactive({
          author : "",
          content : "",
          previewText : "",
          thumbnail : "",
          title : "",
          updatedDate : ""
        });

// methods
function onSubmit() {
    console.log({...post, updatedDate: new Date()});
}
</script>

<template>
  <div class="container form-wrapper pt-5">
    <h3>Yazı Ekle</h3>
    <hr>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Yazar</label>
        <input v-model="post.author" type="text" class="form-control" placeholder="Yazar adını giriniz...">
      </div>
      <div class="form-group">
        <label>Başlık</label>
        <input v-model="post.title" type="text" class="form-control" placeholder="Yazının başlığını giriniz...">
      </div>
      <div class="form-group">
        <label>Görsel Bağlantısı</label>
        <input v-model="post.thumbnail" type="text" class="form-control" placeholder="Yazının görselini giriniz...">
      </div>
      <div class="form-group">
        <label>Önizleme Metni</label>
        <input v-model="post.previewText" type="text" class="form-control" placeholder="Yazının önizleme metnini giriniz...">
      </div>
      <div class="form-group">
        <label>Yazı</label>
        <textarea v-model="post.content" cols="30" rows="5" class="form-control" style="resize: none;"></textarea>
      </div>
      <div class="form-button-wrapper">
        <button @click="$router.push('/')" class="btn btn-danger">İptal</button>
        <button type="submit" class="btn btn-info">Kaydet</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-wrapper {
    max-width: 600px;

    .form-button-wrapper {
        margin-top: 10px;

        .btn {
            margin-right: 15px;
        }
    }
}
</style>