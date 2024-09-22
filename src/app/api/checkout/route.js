
import { NextResponse } from "next/server";
import Stripe from "stripe";


export const POST = async (request) => {
      const stripe = new Stripe('sk_test_51Q0RoxHdejLmF0vtgrsQsSzmKC4NWeZ1VI3ZuFbffNRnlrKXb9k0UJIW1iHyEPlDDydjDzGs9z65e2aV4RyoFOxu00buuTvWVG');
      try {
            const reqBody = await request.json();
            const { email, item } = reqBody;

            const extractingItems = await item.map((item) => ({
                  quantity: item.quantity,
                  price_data: {
                        currency: "usd",
                        unit_amount: Math.round(item.price * 100),
                        product_data: {
                              name: item.name,
                              description: item.description,
                              images: [item.img],
                        },
                  },
            }));

            const session = await stripe.checkout.sessions.create({
                  payment_method_types: ["card"],
                  line_items: extractingItems,
                  mode: "payment",
                  success_url: `${process.env.NEXTAUTH_URL}/success`,
                  cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
                  metadata: {
                        email,
                  },
            });

            
            return NextResponse.json({
                  succes: true,
                  message: "server connected",
                  id: session.id
            })

      } catch (error) {
            console.log("error", error)

      }
}
