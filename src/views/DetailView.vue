<template>
  <div>
    <h3>Detail</h3>
    <div class="detail">
      <h2>{{ item.title }}</h2>
      <p>{{ item.body }}</p>
      <p v-if="item.isImportant" class="detail-important">This is important!</p>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      id: this.$route.params.id,
      items: sourceData.items,
    };
  },
  computed: {
    item() {
      return this.items.find((el) => el.id == this.id);
    },
  },
};
</script>

<style>
.detail-important {
  text-align: left;
  color: #ff0077;
}
</style>
