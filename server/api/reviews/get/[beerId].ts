import Review from "~~/server/db/models/review.models";

export default defineEventHandler(async (event) => {
  // get the beerId from url params
  const beerId = event.context.params?.beerId;

  // Get the reviews from the database with the matching beerId
  try {
    if (beerId) {
      const data = await Review.find({ beerId: beerId });
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
    };
  }
});
