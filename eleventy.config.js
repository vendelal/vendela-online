const isDev = process.env.ELEVENTY_ENV === "development";

export default function (eleventyConfig) {
  // Copy static assets and project images
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/projects/**/images");

  // Filter out draft projects in production
  eleventyConfig.addCollection("projects", (collectionApi) => {
    const all = collectionApi.getFilteredByGlob("src/projects/**/*.md");
    if (isDev) return all;
    return all.filter((item) => !item.data.draft);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
}
