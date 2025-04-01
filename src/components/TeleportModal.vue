<template>
  <div class="teleport-demo">
    <button @click="showModal = true">Open Modal</button>

    <!-- Teleporting the Modal to a different part of the DOM -->
    <Teleport to="body">
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
          <h2>This is a Teleported Modal</h2>
          <p>Content that is rendered outside its parent using Teleport.</p>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.teleport-demo {
  text-align: center;
  margin-top: 50px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.modal button:hover {
  background-color: #2980b9;
}
</style>
