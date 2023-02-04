<script setup>
const route = useRoute();
const routeQuery = route.query.query;
const { data } = await useFetch(`http://localhost:3004/beers?q=${routeQuery}`);
console.log("route object", route.query.query);
</script>
<template>
  <NuxtLayout name="default">
    <div>
      <ul v-for="(beer, index) in data" :key="index">
        <li>
          <p>{{ beer.name }}</p>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>
