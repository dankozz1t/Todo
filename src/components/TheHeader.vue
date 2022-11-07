<template>
  <header class="header">
    <nav class="navigation">
      <router-link class="navigation__link" to="/">Home</router-link> |
      <router-link class="navigation__link" to="/contacts"
        >Contacts</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: block;
  background-color: var(--secondary-bg-cl);
}

.navigation {
  padding: 30px;
}

.navigation .navigation__link {
  font-weight: bold;
  color: var(--main-text-cl);
}

.navigation .navigation__link.router-link-exact-active {
  color: var(--secondary-accent-cl);
}
</style>
