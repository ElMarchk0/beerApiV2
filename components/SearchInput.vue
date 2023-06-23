<script setup lang="ts">
import { beerStore } from "../store/index";
const router = useRouter();
const route = useRoute();
const query = ref("");

async function search() {
  const store = beerStore();
  try {
    if (route.path !== "/search") {
      await router.push({ path: "/search", query: { q: query.value } });
      await store.searchBeers(query.value);
    } else {
      await router.replace({ path: "/search", query: { q: query.value } });
      await store.searchBeers(query.value);
    }
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
  <form @submit.prevent="search()">
    <input type="text" placeholder="Search" v-model="query" class="br" />
    <button
      class="bg-blue-500 m-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      @click.prevent="search()"
    >
      Search
    </button>
  </form>
</template>
../store/beer
