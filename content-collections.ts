import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { getReadingTime } from "./src/utils/reading";

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.{md,mdx}",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrettyCode],
    });
    return {
      ...document,
      mdx,
      readingTime: getReadingTime(document.content),
    };
  },
});

export default defineConfig({
  content: [posts],
});
