import Review from "~~/server/db/models/review.models";

export default defineEventHandler(async (event) => {
  // get the beerId from url params
  const beerId = event.context.params?.beerId;
  // get the body of the review
  const body = event.context.body;

  // Post the review to the database
  try {
    if (beerId) {
      const data = await Review.create({
        beerId: beerId,
        content: body.content,
        rating: body.rating,
      });
      if (data) {
        event.node.res.statusCode = 200;
        return data;
      } else {
        event.node.res.statusCode = 404;
        return {
          code: 404,
        };
      }
    }
  } catch (e) {
    event.node.res.statusCode = 500;
    return {
      code: 500,
      error: e,
    };
  }
});
