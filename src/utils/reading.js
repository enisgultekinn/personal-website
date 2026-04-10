const WORDS_PER_MINUTE = 200;

const stripMdx = (content) =>
  content
    .replace(/^---[\s\S]*?---/m, "") // frontmatter
    .replace(/```[\s\S]*?```/g, "") // fenced code blocks
    .replace(/`[^`]*`/g, "") // inline code
    .replace(/<[^>]+>/g, "") // HTML/JSX tags
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[.*?\]\(.*?\)/g, "") // links
    .replace(/^#{1,6}\s+/gm, "") // headings
    .replace(/[*_~`>]+/g, "") // bold, italic, strikethrough, blockquote
    .replace(/^\s*[-*+]\s+/gm, "") // unordered list markers
    .replace(/^\s*\d+\.\s+/gm, "") // ordered list markers
    .trim();

export const getReadingTime = (content) => {
  const strippedContent = stripMdx(content);
  const wordCount = strippedContent.split(/\s+/).length;
  return Math.ceil(wordCount / WORDS_PER_MINUTE);
};
