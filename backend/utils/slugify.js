// utils/slugify.js

/**
 * Slugify Function
 * Converts a given text into a URL-friendly slug
 * Example: "Men's T-Shirt Large" -> "mens-t-shirt-large"
 */
function slugify(text) {
  return text
    .toString()                 // Ensure it's a string
    .toLowerCase()               // Convert to lowercase
    .trim()                      // Remove extra spaces from start/end
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-');     // Replace multiple - with single -
}

module.exports = slugify;
