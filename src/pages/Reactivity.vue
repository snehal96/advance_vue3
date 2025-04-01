<script setup>
import { ref, reactive, shallowRef, shallowReactive, watch } from 'vue';

// 🟢 ref() - Works with both primitives & objects but requires `.value`
const refCount = ref(0);
const refUser = ref({ name: "John", age: 25 });

// 🟠 reactive() - Works only with objects and deeply tracks changes
const reactiveUser = reactive({
  name: "Alice",
  details: { age: 30, city: "LA" }
});

// 🔵 shallowRef() - Only tracks `.value` changes, does NOT track object property changes
const shallowRefUser = shallowRef({ name: "Emma", age: 35 });

// 🟣 shallowReactive() - Tracks only **top-level properties**, but not nested ones
const shallowReactiveUser = shallowReactive({
  name: "Mike",
  details: { age: 40, city: "NYC" }
});

// 🛠 Methods to update values
const updateRef = () => {
  refCount.value++; // ✅ Updates
  refUser.value.age++; // ✅ Updates because ref() wraps the object
  console.log("Updated ref():", refUser.value);
};

const updateReactive = () => {
  reactiveUser.details.age++; // ✅ Updates because reactive() is deep
  console.log("Updated reactive():", reactiveUser);
};

const updateShallowRef = () => {
  shallowRefUser.value.age++; // ❌ NO update in UI (shallowRef does NOT track inner object changes)
  console.log("Updated shallowRef():", shallowRefUser.value);
};

const updateShallowReactive = () => {
  shallowReactiveUser.details.age++; // ❌ NO update in UI (shallowReactive does NOT track nested changes)
  console.log("Updated shallowReactive():", shallowReactiveUser);
};

// 🔍 Watchers to track reactivity behavior
watch(refUser, () => console.log("🔄 refUser updated!"));
watch(reactiveUser, () => console.log("🔄 reactiveUser updated!"));
watch(shallowRefUser, () => console.log("🔄 shallowRefUser updated!"));
watch(shallowReactiveUser, () => console.log("🔄 shallowReactiveUser updated!"));

</script>

<template>
  <div class="container">
    <h1>Vue 3 Reactivity Differences</h1>

    <!-- ref() Example -->
    <div class="card">
      <h2>🔵 ref()</h2>
      <p>Primitive Count: <span class="highlight">{{ refCount }}</span></p>
      <p>Object Age: <span class="highlight">{{ refUser.age }}</span></p>
      <button @click="updateRef">Update ref()</button>
    </div>

    <!-- reactive() Example -->
    <div class="card">
      <h2>🟠 reactive()</h2>
      <p>Name: <span class="highlight">{{ reactiveUser.name }}</span></p>
      <p>Age (Nested): <span class="highlight">{{ reactiveUser.details.age }}</span></p>
      <button @click="updateReactive">Update reactive()</button>
    </div>

    <!-- shallowRef() Example -->
    <div class="card">
      <h2>🔵 shallowRef()</h2>
      <p>Name: <span class="highlight">{{ shallowRefUser.name }}</span></p>
      <p>Age: <span class="highlight">{{ shallowRefUser.age }}</span></p>
      <p class="note">*❌ Inner properties are NOT reactive</p>
      <button @click="updateShallowRef">Update shallowRef()</button>
    </div>

    <!-- shallowReactive() Example -->
    <div class="card">
      <h2>🟣 shallowReactive()</h2>
      <p>Name: <span class="highlight">{{ shallowReactiveUser.name }}</span></p>
      <p>Age (Nested): <span class="highlight">{{ shallowReactiveUser.details.age }}</span></p>
      <p class="note">*❌ Only top-level properties are reactive</p>
      <button @click="updateShallowReactive">Update shallowReactive()</button>
    </div>
  </div>
</template>

<style scoped>
/* Container */
.container {
  width: 90%;
  max-width: 700px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  text-align: center;
}

/* Cards */
.card {
  background: white;
  padding: 20px;
  margin: 15px 0;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Headings */
h1 {
  font-size: 24px;
  margin-bottom: 15px;
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

/* Highlighted Text */
.highlight {
  font-weight: bold;
  color: #007BFF;
}

button:hover {
  background-color: #0056b3;
}

/* Note */
.note {
  font-size: 0.85em;
  color: #888;
  font-style: italic;
}
</style>
