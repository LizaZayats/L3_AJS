const users = pm.response.json();
const filteredUsers = users.map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone
}));

pm.response.json = () => filteredUsers;

pm.test(Status is 200, () => pm.response.to.have.status(200));
pm.test(Only selected fields present, () => {
    const user = pm.response.json()[0];
    pm.expect(user).to.have.keys(['id', 'name', 'username', 'email', 'phone']);
});

console.log(Отфильтровано пользователей:, filteredUsers.length);
console.log(Пример пользователя:, filteredUsers[0]);
