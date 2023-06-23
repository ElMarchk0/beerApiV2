<script lang="ts">
import { reviewStore } from "../store";

export default defineComponent({
  async setup() {
    const route = useRoute();
    const store = reviewStore();
    await store.fetchReviews(route.params.beerId as string);
    const reviews = computed(() => store.reviewList);
    return { reviews };
  },
});
</script>

<template>
  <div class="flex justify-center">
    <div>
      <ul>
        <li v-for="review in reviews">
          <p>{{ review.content }}</p>
          <p>{{ review.rating }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
