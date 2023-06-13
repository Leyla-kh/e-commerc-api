("use strict");

//const stripe = require("stripe")(process.env.STRIPE_KEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::order.order")
/*
({ strapi }) => ({
  async create(cnx) {
    const { products } = cnx.request.body;
    const lineItems = await Promise.all(
      products.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product.id);

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.newPrice * 100,
          },
          quantity: product.quantity,
        };
      })
    );
    console.log(lineItems);
    try {
      console.log("p1");
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: `payment`,

        success_url: process.env.CLIENT_URL + `?success=true`,
        cancel_url: process.env.CLIENT_URL + `?success=false`,
      });
      console.log("done2");

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
      console.log("done3");
    } catch (error) {
      cnx.response.status = 500;
      console.log(error);
      return error;
    }
  },
}));
*/
