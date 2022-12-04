<template>
  <TheNavigation />

  <router-view />
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Jost", sans-serif;
  margin: 0;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form,
.detail {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 0.3rem auto;
  border-radius: 10px;
  padding: 0.3rem 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app h3 {
  font-size: 1.3rem;
  color: #58004d;
  margin: 1rem;
  text-align: center;
}

#app h4 {
  font-size: 1.1rem;
  color: #58004d;
  margin: 0.5rem 1rem;
  text-align: center;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  border-radius: 5px;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
