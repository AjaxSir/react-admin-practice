const Mock = require('mockjs')
const Random = Mock.Random

module.exports = () => {
    let data = []
    for (let i = 0; i < 10; i++) {
        data.push({
            name: Random.cname(), // 中文名
            id: Random.integer(10, 1000), // 初始值 12,
            age: Random.integer(20, 30),
            birthday: Random.datetime('yyyy-MM-dd'),
            img: Random.image('200x200'),
        })
    }
    console.log(data)
    let mockData = {
        news: data,
    }
    return mockData
}