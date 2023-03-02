import { defineStore } from "pinia";
import axios from "axios";
import { Beer } from "../interfaces";

export const beerStore = defineStore("beer", {
  state: () => ({
    beerList: [] as Beer[],
    beer: {} as Beer,
  }),
  getters: {
    getBeers(state) {
      return state.beerList;
    },
    getBeer(state) {
      return state.beer;
    },
  },
  actions: {
    async fetchBeers(query: string) {
      const runtimeConfig = useRuntimeConfig();
      try {
        const { data } = await axios.get(
          `${runtimeConfig.beerApiSearchUrl}/${query}`
        );
        this.beerList = data;
      } catch (e) {
        console.error(e);
      }
    },
    async fetchOneBeer(beerId: string) {
      const runtimeConfig = useRuntimeConfig();
      try {
        const { data } = await axios.get(`${runtimeConfig.beerUrl}/${beerId}`);
        this.beer = data[0];
      } catch (e) {
        console.error(e);
      }
    },
  },
});
