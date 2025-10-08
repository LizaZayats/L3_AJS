
const postsResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/posts');
const sortedPosts = postsResponse.json().sort((a, b) => b.title.length - a.title.length);
pm.environment.set("sortedPosts", JSON.stringify(sortedPosts));
console.log(` Posts отсортированы: ${sortedPosts.length} записей`);

const sortedPosts = JSON.parse(pm.environment.get("sortedPosts") || "[]");
if (sortedPosts.length > 0) {
    console.log("Проверка sortedPosts:");
    console.log("Первый пост:", sortedPosts[0].title);
    pm.test("Posts sorted by title length", () => {
        pm.expect(sortedPosts[0].title.length).to.be.greaterThan(sortedPosts[1].title.length);
    });
}

