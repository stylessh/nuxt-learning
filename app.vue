<script setup>
import { Moon, Sun } from "lucide-vue-next";
const color = useColorMode();

const toggleTheme = () => {
  if (color.preference === "light") {
    color.preference = "dark";
  } else {
    color.preference = "light";
  }
};
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen text-black dark:text-white">
    <nav class="p-4 border-b">
      <div class="container flex items-center gap-4">
        <nuxt-link to="/" class="font-bold text-lg">Nuxt</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>

        <button class="ml-auto" @click="toggleTheme">
          <Sun
            v-if="color.preference === 'light'"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1 }"
            :leave="{ opacity: 0 }"
          />
          <Moon
            v-else
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1 }"
            :leave="{ opacity: 0 }"
          />
        </button>
      </div>
    </nav>

    <div class="container py-12">
      <NuxtPage />
    </div>
  </div>
</template>
