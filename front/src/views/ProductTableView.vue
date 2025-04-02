<script>
export default {
  setup() {
    const ClassGen = (image) => {
      let classTemp = `background: url(${image})`;

      return classTemp;
    };

    return { ClassGen };
  },
  data() {
    return {
      prods: [],
    };
  },
  mounted() {
    this.fetchProds();
  },
  methods: {
    async fetchProds() {
      try {
        this.prods = await (
          await fetch("https://fakestoreapi.com/products")
        ).json();

        console.log(this.prods);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>

<template>
  <div class="container mt-4">
    <!-- หัวข้อของตาราง -->
    <h2 class="mb-3">Product Table</h2>

    <!-- ตารางแสดงข้อมูลผู้ใช้ -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th style="width: 10%;">Title</th>
          <th style="width: 20%;">Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <!-- ใช้ v-for เพื่อวนลูปแสดงข้อมูลผู้ใช้แต่ละคน -->
        <tr v-for="p in prods" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.title }}</td>
          <td>{{ p.description }}</td>
          <td>${{ p.price }}</td>
          <td style="text-transform: capitalize;">{{ p.category }}</td>
          <td class="img-holder"><div :style="ClassGen(p.image)"></div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table * {
  text-align: center;
}

tr > td.img-holder > div {
  aspect-ratio: 1/1;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
}
</style>
