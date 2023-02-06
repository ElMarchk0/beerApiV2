<script lang="ts">
import { beerStore } from "../../store";

export default defineComponent({
  async setup() {
    const route = useRoute();
    const store = beerStore();
    await store.fetchOneBeer(route.params.beerId as string);
    const beer = computed(() => store.beer);
    return { beer };
  },
});
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex justify-center">
      <div>
        <p class="font-bold text-3xl mb-2">{{ beer.name }}</p>
        <p class="text-xl italic">{{ beer.brand }}</p>
        <p>{{ beer.description }}</p>
        <p>ABV: {{ beer.ABV }} %</p>
      </div>
    </div>
  </NuxtLayout>
</template>
