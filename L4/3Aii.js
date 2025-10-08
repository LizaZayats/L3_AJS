
pm.test(Status 200, () => pm.expect(pm.response.code).to.eql(200));
pm.test(Sorted by name, () => {
    const comments = pm.response.json();
    for (let i = 0; i < comments.length-1; i++) {
        pm.expect(comments[i].name <= comments[i+1].name).to.be.true;
    }
});
