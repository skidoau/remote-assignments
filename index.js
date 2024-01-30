const express = require('express');
const app = express();

// 定义路由
app.get('/', (req, res) => {
    res.send('<h1>Hello, My Server!</h1>');
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});