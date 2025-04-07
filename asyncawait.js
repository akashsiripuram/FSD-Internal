// Function to fetch posts from a dummy API using async/await
async function fetchPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      
      // Wait for the response to be converted to JSON
      const posts = await response.json();
      
      console.log("Fetched Posts:");
      console.log(posts.slice(0, 5)); // Log first 5 posts
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  
  // Call the async function
  fetchPosts();
  