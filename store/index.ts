import { defineStore } from "pinia";
import { Beer } from "../interfaces";
import { Review } from "../interfaces";

export const beerStore = defineStore("beer", {
  state: () => ({
    beerList: [] as Beer[],
    beer: {} as Beer,
    reviewList: [] as Review[],
    review: {} as Review,
  }),
  getters: {
    getBeers(state) {
      return state.beerList;
    },
    getBeer(state) {
      return state.beer;
    },
    postReview(state) {
      return state.review;
    },
    getReviews(state) {
      return state.reviewList;
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
        const data = await $fetch<Beer>(`/api/beers/id/${beerId}`, {
          method: "GET",
          params: {
            id: beerId,
          },
        });
        this.beer = data;
      } catch (e) {
        console.error(e);
      }
    },
    async postReview(beerId: string, review: Review) {
      try {
        const date = new Date();
        const data = await $fetch<Review>(`/api/reviews`, {
          method: "POST",
          body: { ...review, beerId: beerId, createdAt: date },
        });
        this.review = data;
      } catch (e) {
        console.error(e);
      }
    },
    async fetchReviews(beerId: string) {
      try {
        const data = await $fetch<Review[]>(`/api/reviews/${beerId}`, {
          method: "GET",
          params: {
            beerId: beerId,
          },
        });
        this.reviewList = data;
      } catch (e) {
        console.error(e);
      }
    },
  },
});
