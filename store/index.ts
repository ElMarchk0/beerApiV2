import { defineStore } from "pinia";
import axios from "axios";
import { Beer } from "../interfaces";
import { beerUrl, beerApiSearchUrl } from "../utils";

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
    async searchBeers(searchQuery: string) {
      try {
        const data = await $fetch<Beer[]>(`/api/beers/query/${searchQuery}`, {
          method: "GET",
          params: {
            query: searchQuery,
          },
        });
        this.beerList = data;
      } catch (e) {
        console.error(e);
      }
    },
    async fetchOneBeer(beerId: string) {
      try {
        const data = await $fetch<Beer>(`/api/beers/id/${beerId}`);
        this.beer = data;
      } catch (e) {
        console.error(e);
      }
    },
  },
});
