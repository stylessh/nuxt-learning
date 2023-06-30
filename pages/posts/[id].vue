<script setup lang="ts">
const route = useRoute();

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const id = ref(route.params.id);
const post = ref<Post | null>(null);
const user = ref<User | null>(null);

const { data, pending, error } = await useFetch<Post>(
  () => `https://jsonplaceholder.typicode.com/posts/${id.value}`
);

// get user
const {
  data: userData,
  pending: userPending,
  error: userError,
} = await useFetch<User>(
  () => `https://jsonplaceholder.typicode.com/users/${data.value?.userId}`
);

post.value = data.value;
user.value = userData.value;
</script>

<template>
  <main>
    <p v-if="pending">Fetching...</p>
    <p v-if="error">{{ error }}</p>

    <section v-if="post">
      <header class="mb-6" v-motion-fade>
        <p v-if="userError">{{ userError }}</p>

        <div>
          <h3 v-if="user" class="md:text-2xl font-medium">{{ user.name }}</h3>
          <p v-if="user" class="italic">@{{ user.username }}</p>
        </div>
      </header>

      <h1 class="text-xl md:text-4xl font-bold mb-6" v-motion-fade>{{ post.title }}</h1>
      <p v-motion-fade>{{ post.body }}</p>
    </section>
  </main>
</template>
