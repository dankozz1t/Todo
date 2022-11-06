<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--main-text-cl);
}

nav a.router-link-exact-active {
  color: var(--main-accent-cl);
}
</style>
