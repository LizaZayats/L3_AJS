
const commentsResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/comments');
        const sortedComments = commentsResponse.json().sort((a, b) => a.name.localeCompare(b.name));
        pm.environment.set("sortedComments", JSON.stringify(sortedComments));
        console.log(` Comments отсортированы: ${sortedComments.length} комментариев`);

const sortedComments = JSON.parse(pm.environment.get("sortedComments") || "[]");
if (sortedComments.length > 0) {
    console.log("Проверка sortedComments:");
    pm.test("Comments sorted by name", () => {
        pm.expect(sortedComments[0].name <= sortedComments[1].name).to.be.true;
    });
}

