<script setup>
import { ref, onMounted } from 'vue';

// 🛠 Custom Directive: v-highlight
const vHighlight = {
  mounted(el, binding) {
    // Set background color based on value
    el.style.backgroundColor = binding.value || 'yellow';

    // Modifier: If ".uppercase" is used, convert text to uppercase
    if (binding.modifiers.uppercase) {
      el.style.textTransform = 'uppercase';
    }

    console.log("🔹 v-highlight mounted:", binding);
  },
};

// 🛠 Custom Directive: v-focus (Auto-focus an input field)
const vFocus = {
  mounted(el) {
    el.focus();
    console.log("🔹 v-focus mounted:", el);
  },
};

// 🛠 Custom Directive: v-scroll (Detect scrolling)
const vScroll = {
  mounted(el, binding) {
    const onScroll = () => {
      console.log("🔹 Scrolled:", window.scrollY);
      if (binding.value) binding.value(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    el.__onScroll = onScroll;
  },
  unmounted(el) {
    window.removeEventListener('scroll', el.__onScroll);
  },
};

// 🟢 Reactive Data
const bgColor = ref('lightblue');
const scrollY = ref(0);

const handleScroll = (y) => {
  scrollY.value = y;
};
</script>

<template>
  <div class="container">
    <h1>Vue 3 Custom Directives</h1>

    <!-- v-highlight Example -->
    <div class="card" v-highlight="'lightgreen'">
      <h2>🟢 v-highlight</h2>
      <p>This div has a custom background color using v-highlight.</p>
    </div>

    <!-- v-highlight with Modifiers -->
    <div class="card" v-highlight.uppercase="'orange'">
      <h2>🔠 v-highlight.uppercase</h2>
      <p>This text is converted to UPPERCASE due to a modifier.</p>
    </div>

    <!-- v-focus Example -->
    <div class="card">
      <h2>🎯 v-focus</h2>
      <input v-focus placeholder="This input auto-focuses" />
    </div>

    <!-- v-scroll Example -->
    <div class="card" v-scroll="handleScroll">
      <h2>📜 v-scroll</h2>
      <p>Scroll the page to see the effect.</p>
      <p>Current Scroll Position: <span class="highlight">{{ scrollY }}</span></p>
    </div>

    <div class="dummy">

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

/* Input Field */
input {
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.dummy {
  min-height: 100vh;
}
</style>
