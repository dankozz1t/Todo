<template>
  <div class="modal__background" v-if="isShow" @click="closeModal">
    <div class="modal__content" @click.stop>
      <img
        class="modal__close"
        @click="closeModal"
        src="../../assets/close_icon.svg"
        alt="icon close"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "MyModal",
  mixins: [toggleMixin],
};
</script>

<style lang="scss">
.modal__background {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  z-index: 13;
}

.modal__content {
  position: relative;

  padding: 25px;

  background-color: var(--secondary-bg-cl);

  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  z-index: 14;
}

.modal__close {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 14px;

  transition: transform var(--transition-time) var(--transition-cubic);

  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
}
</style>
