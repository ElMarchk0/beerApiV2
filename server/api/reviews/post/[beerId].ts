import Review from "~~/server/db/models/review.models";

export default defineEventHandler(async (event) => {
  // get the beerId from url params
  const beerId = event.context.params?.beerId;
  // get the body of the review
  const body = await readBody(event);
  let data;
  // Post the review to the database
  try {
    // Create a new review with the beerId and the body of the review
    if (beerId) {
      data = await Review.create({
        beerId: beerId,
        ...body,
      });
      if (data) {
        event.node.res.statusCode = 200;
        return data;
      } else {
        event.node.res.statusCode = 404;
        return {
          code: 404,
          error: "Post not created",
        };
      }
    }
  } catch (e) {
    event.node.res.statusCode = 500;
    return {
      code: 500,
      error: "Internal Server Error",
    };
  }
});
