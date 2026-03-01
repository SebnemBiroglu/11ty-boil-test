module.exports = function(eleventyConfig) {
  // Ensure your folders are copied
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  // FIX: Define the missing tag
  eleventyConfig.addShortcode("missionBadge", function(location, status) {
    return `
      <div class="mission-badge" style="border: 1px solid #00d4ff; padding: 10px; margin: 20px 0; background: #0f172a;">
        <strong>LOCATION:</strong> ${location} | 
        <strong>STATUS:</strong> ${status}
      </div>`;
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes" 
    }
  };
};