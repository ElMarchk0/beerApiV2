<script setup lang="ts">
import { computed } from "vue";
import { beerStore } from "../store";
const store = beerStore();

const beers = computed(() => store.beerList);
</script>
<template>
  <NuxtLayout name="default">
    <div class="flex flex-col text-center mx-auto w-1/4">
      <p v-if="beers.length === 0">Search for beer!</p>
      <ul v-else v-for="(beer, index) in beers" :key="index">
        <li class="my-2 w-auto cursor-pointer hover:text-blue-700">
          <NuxtLink :to="`/beer/${beer.beerId}`">
            <p class="font-bold text-lg w-18">
              {{ beer.name }}
            </p>
            <p class="italic text-slate-800">
              {{ beer.brand }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>
