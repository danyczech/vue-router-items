<template>
  <nav id="nav">
    <router-link to="/list">List</router-link>
  </nav>
</template>

<style>
#nav {
  padding: 1rem;
  background: #58004d;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px groove #4e6c71;
  z-index: 2;
}
#nav a {
  display: inline-block;
  margin-right: 20px;
  font-weight: bold;
  color: white;
  opacity: 0.7;
  transition: 0.2 ease color;
  text-decoration: none;
}
#nav a.router-link-active,
#nav a:hover {
  opacity: 1;
}
</style>
