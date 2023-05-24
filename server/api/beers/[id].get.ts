import Beer from "../../db/models/beer.model";

export default defineEventHandler(async (event) => {
  try {
    const data = Beer.find({});
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
