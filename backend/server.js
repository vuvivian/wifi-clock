/*
 * @Author: juan.wang 
 * @Date: 2024-10-22 20:37:01 
 * @LastEditor: juan.wang 
 * @LastEditTime: 2024-10-22 20:37:01 
 */
const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

// 提供静态文件
app.use(express.static(path.join(__dirname, '../frontend'))); // 指向前端文件夹

// 创建一个 API 端点
app.get('/run-test', (req, res) => {
    exec('npm run test', (error, stdout, stderr) => {
        if (error) {
            return res.status(500).send(`Error: ${error.message}`);
        }
        if (stderr) {
            return res.status(500).send(`stderr: ${stderr}`);
        }
        res.send(`stdout: ${stdout}`);
    });
});

app.listen(PORT, () => {
    console.log(`服务器正在运行在 http://localhost:${PORT}`);
});