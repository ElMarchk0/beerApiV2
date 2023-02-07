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
    async fetchBeers(query: string) {
      try {
        const { data } = await axios.get(`${beerApiSearchUrl}/${query}`);
        this.beerList = data;
      } catch (e) {
        console.error(e);
      }
    },
    async fetchOneBeer(beerId: string) {
      try {
        const { data } = await axios.get(`${beerUrl}/${beerId}`);
        this.beer = data[0];
      } catch (e) {
        console.error(e);
      }
    },
  },
});
