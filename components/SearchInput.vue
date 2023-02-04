<script setup lang="ts">
const searchTerm = ref("");

const navigate = async () => {
  return await navigateTo({
    path: "/search",
    query: {
      query: searchTerm.value,
    },
  });
};
</script>
<template>
  <form @submit.prevent="navigate()">
    <input type="text" placeholder="Search" v-model="searchTerm" />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      @click.prevent="navigate()"
    >
      Search
    </button>
  </form>
</template>
