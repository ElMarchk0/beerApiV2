<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
<template>
  <nav
    class="fixed w-screen bg-slate-200 px-8 py-8 mx-auto md:flex md:justify-between md:items-center"
  >
    <div class="flex items-center justify-between">
      <div @click="showMenu = !showMenu" class="flex md:hidden">
        <button type="button" class="menu-btn" aria-label="toggle menu">
          <svg
            id="menu-button"
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
    >
      <li>
        <SearchInput />
      </li>
      <li class="link">
        <router-link to="/">Home</router-link>
      </li>
      <li class="link">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.link {
  @apply md:p-4 py-2 block hover:text-blue-400;
}
.menu-btn {
  @apply text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400;
}
</style>
