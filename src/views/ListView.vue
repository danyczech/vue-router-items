<template>
  <div>
    <h3>List of items</h3>
    <div class="buttons-sort">
      <button @click="sortDown">Sort &darr;</button>
      <button @click="sortUp">Sort &uarr;</button>
    </div>
    <ul>
      <ListItem
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :isImportant="item.isImportant"
        @delete="deleteItem"
      >
      </ListItem>
    </ul>
    <NewItem @add-item="addItem"></NewItem>
  </div>
</template>

<script>
import NewItem from "@/components/NewItem.vue";
import ListItem from "@/components/ListItem.vue";
import sourceData from "@/data.json";

export default {
  components: { ListItem, NewItem },
  data() {
    return {
      items: sourceData.items,
    };
  },
  methods: {
    deleteItem(itemId) {
      this.items = this.items.filter((item) => item.id !== itemId);
    },
    sortDown() {
      this.items.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase()
          ? 1
          : b.title.toLowerCase() > a.title.toLowerCase()
          ? -1
          : 0
      );
    },
    sortUp() {
      this.items.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase()
          ? 1
          : b.title.toLowerCase() < a.title.toLowerCase()
          ? -1
          : 0
      );
    },
    addItem(title, text, important) {
      const newItem = {
        id: new Date().toISOString(),
        title: title,
        body: text,
        isImportant: important,
      };
      this.items.push(newItem);
    },
  },
};
</script>

<style>
.buttons-sort {
  text-align: center;
}
.buttons-sort button {
  margin: 0 1rem;
}
</style>
