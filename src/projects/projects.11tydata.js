const isDev = process.env.ELEVENTY_ENV === "development";

export default {
  layout: "layouts/project.njk",
  tags: "project",
  eleventyComputed: {
    permalink: (data) => {
      // In production, prevent draft pages from being built
      if (!isDev && data.draft) return false;
      return data.permalink;
    },
    eleventyExcludeFromCollections: (data) => {
      if (!isDev && data.draft) return true;
      return data.eleventyExcludeFromCollections;
    },
  },
};
