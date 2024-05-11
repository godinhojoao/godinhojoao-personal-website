import { BlogPost } from "./types/BlogPost";

export const fetchStaticData = {
  async blogPosts() {
    try {
      const response = await fetch(
        "https://dev.to/api/articles?username=godinhojoao"
      );
      const blogPosts: BlogPost[] = await response.json();
      return blogPosts;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
};
