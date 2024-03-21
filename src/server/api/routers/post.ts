import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

 
import { TRPCError } from "@trpc/server";
 
import { generateToken } from "~/libs/auth";


 
export const postRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      greeting: `Hello`,
    };
  }),

  signup: publicProcedure
    .input(
      z.object({
        name: z.string().min(3).max(50),
        email: z.string().email(),
        password: z.string().min(6),
      })
    )
    .mutation(async ({ ctx ,input}) => {
      const { name, email, password } = input;

       
      const user = await ctx.db.user.findFirst({
        where: { email:email }, // Correcting the 'where' clause to match the expected type
      });
      if (user) {
        throw new TRPCError({ code:'BAD_REQUEST', message: 'Email already exists' });
      }
 
      const newUser = await ctx.db.user.create({
        data: {
          name,
          email,
          password, // Remember to hash the password in production
        },
      });

      // Generate JWT token
      const token = generateToken({ name: newUser.name, email: newUser.email, password: newUser.password });


      return { token };
    }),

  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(6),
      })
    )
    .mutation(async ({ input,ctx }) => {
      const { email, password } = input;

      // Find user by email
      const user = await ctx.db.user.findFirst({
        where: { email },
      });

      // Check if user exists and password matches
      if (!user || user.password !== password) {
        throw new TRPCError({ code:'BAD_REQUEST', message: 'Invalid email or password' });
      }

      // Generate JWT token
      const token = generateToken({  name: user.name, email: user.email, password: user.password, });


      return { token };
    }),

  // secure: privateProcedure.mutation(({ ctx }) => {
  //   const { userId } = ctx;

  //   // Use userId for secure operations

  //   return { success: true };
  // }),

  temp:publicProcedure.input(z.string()).mutation(({ctx,input})=>{
    console.log(ctx,input)

    return true


  })
});