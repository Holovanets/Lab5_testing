import { fetchPosts } from "../src/api";

test('Отримання постів зі стороннього API', async () => {
    const posts = await fetchPosts();
    expect(posts).toBeInstanceOf(Array);
    expect(posts.length).toBeGreaterThan(0); 
    expect(posts[0]).toHaveProperty('id'); 
});
