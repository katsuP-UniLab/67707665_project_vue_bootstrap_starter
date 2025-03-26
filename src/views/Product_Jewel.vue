<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    let product = ref([]);

    const fetchData = async () => {
      let itemCall = await (
        await fetch("https://fakestoreapi.com/products/category/jewelery")
      ).json();

      product.value = itemCall;
      console.log(product.value);
    };

    onMounted(fetchData);

    const classGen = (image) => {
      let styleBased = `background: url(${image})`;

      return styleBased;
    };

    return {
      product, // ส่งออกตัวแปร products เพื่อใช้ใน Template
      classGen,
    };
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="item-container">
      <div class="card h-100" v-for="(prod, i) in product" :key="i">
        <div
          :style="classGen(prod.image)"
          class="card-img-top"
          alt="Product Image"
        />
        <div class="card-body">
          <h5 class="card-title">{{ prod.title }}</h5>
          <p class="card-text">{{ prod.description }}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Price: ${{ prod.price }}</small
          >&nbsp;
          <button type="button" class="btn btn-outline-primary">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.item-container {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  line-height: normal;

  .card {
    width: 18rem;
    aspect-ratio: 9/16;
    display: flexbox;

    .card-img-top {
      width: 100%;
      aspect-ratio: 1/1;
      background-position: center !important;
      background-size: contain !important;
      background-repeat: no-repeat !important;
    }
    
    .card-body {
      .card-title {
        width: 100%;
        text-overflow: ellipsis;
        overflow:hidden;
        white-space: nowrap;
      }
      .card-text {
        width: 100%;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
