import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MDXContent } from '@content-collections/mdx/react';

const CustomLink = props => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props}> {props.children}</a>;
  }

  return (
    <a
      target="_blank"
      className="underline"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </a>
  );
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function CodeBlock({ children }) {
  return (
    <div className="prose dark:prose-neutral my-8 no-scrollbar">
      <pre className="my-8 overflow-x-scroll rounded-lg p-4 text-sm md:text-base">
        {children}
      </pre>
    </div>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  p: props => (
    <p
      className="mb-6 leading-relaxed text-neutral-950 dark:text-neutral-50 text-base md:text-lg"
      {...props}
    >
      {props.children}
    </p>
  ),
  pre: CodeBlock,
  h1: props => (
    <h1
      className="mb-4 mt-8 text-3xl text-neutral-950 dark:text-neutral-100 font-semibold tracking-tight"
      {...props}
    >
      {props.children}
    </h1>
  ),
  h2: props => (
    <h2
      className="mb-4 mt-8 text-2xl text-neutral-950 dark:text-neutral-100 font-semibold tracking-tight"
      {...props}
    >
      {props.children}
    </h2>
  ),
  h3: props => (
    <h3
      className="mb-4 text-2xl text-neutral-950 dark:text-neutral-100 font-semibold tracking-tight"
      {...props}
    >
      {props.children}
    </h3>
  ),
  h4: props => (
    <h4
      className="mb-2 text-xl  text-neutral-950 dark:text-neutral-100 font-semibold tracking-tight"
      {...props}
    >
      {props.children}
    </h4>
  ),
  ol: props => (
    <ol
      className="mb-6 list-inside list-decimal text-neutral-950 dark:text-neutral-100 tracking-tight"
      {...props}
    >
      {props.children}
    </ol>
  ),
  li: props => (
    <li
      className="mb-3 leading-relaxed text-neutral-950 dark:text-neutral-100 text-base md:text-lg"
      {...props}
    >
      {props.children}
    </li>
  ),
  ul: props => (
    <ul
      className="mb-6 list-inside list-disc text-neutral-950 dark:text-neutral-100"
      {...props}
    >
      {props.children}
    </ul>
  ),
  blockquote: props => {
    return (
      <blockquote
        className="mb-12 mt-10 border-l-4 border-neutral-300 pl-4 text-sm md:text-base dark:border-neutral-700 text-neutral-950 dark:text-neutral-100"
        {...props}
      >
        {props.children}
      </blockquote>
    );
  },
  code: props => (
    <code
      className="rounded-md text-neutral-950 dark:text-neutral-50 text-sm md:text-base"
      {...props}
    >
      {props.children}
    </code>
  ),
  table: props => (
    <div className="my-10 overflow-x-auto lg:-mx-24">
      <table className="mb-6 w-full" {...props}>
        {props.children}
      </table>
    </div>
  ),
  th: props => (
    <th
      className="border-y border-neutral-200 px-2 py-3 text-left text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:text-neutral-100"
      {...props}
    >
      {props.children}
    </th>
  ),
  td: props => (
    <td
      className="border-b border-neutral-200 px-2 py-3 text-xs text-neutral-500 dark:border-neutral-700 dark:text-neutral-100"
      {...props}
    >
      {props.children}
    </td>
  ),
  thead: props => <thead {...props}>{props.children}</thead>,
  tbody: props => <tbody {...props}>{props.children}</tbody>
};

const Mdx = ({ content }) => {
  return (
    <article>
      <MDXContent code={content} components={{ ...components }} />
    </article>
  );
};

export default Mdx;
