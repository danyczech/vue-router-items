<template>
  <li class="item">
    <router-link :to="`/detail/${id}`">
      <h4
        :style="{
          textDecoration: isImportant ? 'underline overline #58004d' : 'none',
        }"
      >
        {{ title }}
      </h4>
    </router-link>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "isImportant"],
  emits: ["delete"],
};
</script>
<style>
.item {
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  align-items: center;
}

.item a {
  text-decoration: none;
  opacity: 0.8;
}

.item a:hover {
  opacity: 1;
}
</style>
