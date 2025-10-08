const usersResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/users');
        const filteredUsers = usersResponse.json().map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
        pm.environment.set("filteredUsers", JSON.stringify(filteredUsers));
        console.log(` Users отфильтрованы: ${filteredUsers.length} пользователей`);

const filteredUsers = JSON.parse(pm.environment.get("filteredUsers") || "[]");
if (filteredUsers.length > 0) {
    console.log("Проверка filteredUsers:");
    pm.test("Users have only selected fields", () => {
        const user = filteredUsers[0];
        pm.expect(user).to.have.keys(['id', 'name', 'username', 'email', 'phone']);
    });
}

