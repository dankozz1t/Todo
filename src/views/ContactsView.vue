<template>
  <main class="contacts">
    <h1>This is my contacts</h1>
    <ul class="contacts__list">
      <li class="contacts__item">
        <a href="https://github.com/dankozz1t" target="_blank">GitHub</a>
      </li>
      <li class="contacts__item">
        <a href="https://t.me/dankozz1" target="_blank"> Telegram</a>
      </li>
      <li class="contacts__item">
        <a href="https://www.linkedin.com/in/dankozz1/" target="_blank"
          >LinkedIn</a
        >
      </li>
    </ul>
  </main>
</template>

<script></script>

<style lang="scss">
.contacts__list {
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin-top: 50px;
}

.contacts__item {
  &:hover {
    color: var(--secondary-accent-cl);
  }
}
</style>
