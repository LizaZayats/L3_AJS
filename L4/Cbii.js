
const todosResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/todos');
        const incompleteTodos = todosResponse.json().filter(todo => !todo.completed);
        pm.environment.set("incompleteTodos", JSON.stringify(incompleteTodos));
        console.log(`Todos отфильтрованы: ${incompleteTodos.length} невыполненных задач`);

const incompleteTodos = JSON.parse(pm.environment.get("incompleteTodos") || "[]");
if (incompleteTodos.length > 0) {
    console.log("Проверка incompleteTodos:");
    pm.test("Only incomplete todos", () => {
        incompleteTodos.forEach(todo => pm.expect(todo.completed).to.be.false);
    });
}

