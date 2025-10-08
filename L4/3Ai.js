const responseData = pm.response.json();
const sortedData = responseData.sort((a, b) => b.title.length - a.title.length);
pm.response.json = () => sortedData;
pm.test(Status code is 200, function () {
    pm.expect(pm.response.code).to.eql(200);
});
pm.test(Data is sorted by title length, function () {
    const data = pm.response.json();
    for (let i = 0; i < data.length - 1; i++) {
        pm.expect(data[i].title.length).to.be.at.least(data[i + 1].title.length);
    }
});
