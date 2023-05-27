import Beer from "../../../db/models/beer.model";

export default defineEventHandler(async (event) => {
  const beerId = event.context.params?.beerId;
  try {
    const data = Beer.find({ id: beerId });
    if (data) {
      event.node.res.statusCode = 200;
      return data;
    } else {
      event.node.res.statusCode = 404;
      return {
        code: 404,
      };
    }
  } catch (e) {
    event.node.res.statusCode = 500;
    return {
      code: 500,
    };
  }
});
