<script setup>
const posts = ref([]);

const { data, pending, error } = await useFetch(
  () => "https://jsonplaceholder.typicode.com/posts"
);

posts.value = await data.value;
</script>

<template>
  <main>
    <p v-if="pending">Fetching...</p>
    <p v-if="error">{{ error }}</p>

    <section v-if="posts.length > 0">
      <h1 class="text-4xl font-bold mb-6">Posts</h1>
      <ul class="flex flex-col gap-y-4">
        <li
          v-for="(post, i) in posts"
          :key="post.id"
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0 } "
          :delay="200"
          class="transition-colors"
        >
          <nuxt-link :to="`/posts/${post.id}`">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </section>
  </main>
</template>
