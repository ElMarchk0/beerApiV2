import Beer from "../../db/models/beer.model";

export default defineEventHandler(async (event) => {
  let data;

  const query = event.context.params.query;
  console.log(`/api/beers/${query}`);
  try {
    if (query) {
      data = await Beer.aggregate([
        {
          $search: {
            index: "beerSearch",
            text: {
              query: query,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      if (data) {
        console.log(data);
        return data;
      } else {
        event.node.res.statusCode = 404;
        return {
          code: 404,
        };
      }
    }
    return data;
  } catch (e) {
    event.node.res.statusCode = 500;
    return {
      code: 500,
      message: e,
    };
  }
});
