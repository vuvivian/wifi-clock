/*
 * @Author: vuvivian
 * @Date: 2024-10-22 20:20:38 
 * @LastEditor: vuvivian
 * @LastEditTime: 2024-10-22 20:20:38 
 */
const { exec } = require('child_process');
const puppeteer = require('puppeteer');
const wifiName = '时光荏苒'; 
const wifiPassword = ''; 

function connectToWiFi() {
    return new Promise((resolve, reject) => {
        exec(`networksetup -setairportnetwork en0 "${wifiName}" "${wifiPassword}"`, (error, stdout, stderr) => {
            if (stderr) {
                reject(`连接失败: ${stderr.trim()}`); 
                return;
            }
            if (error) {
                reject(`连接失败: ${error.message}`);
                return;
            }
            resolve(stdout);
        });
    });
}

(async () => {
    // 1. 连接热点
    try {
        await connectToWiFi();
        console.log('成功连接到时光荏苒');
    } catch (error) {
        console.error(error);
        return;
    }

    // 2. 启动 Puppeteer
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // 3. 打开网页
    await page.goto('http://192.168.4.1/');

    // 4. 录入用户名和密码
    await page.type('#ssid', '234');
    await page.type('#pwd', 'xyjy804.');

    // 5. 点击提交
    await page.click('.save-button');

    // 等待一段时间以查看结果
    // await page.waitForTimeout(2000);

    // 关闭浏览器
    // await browser.close();
})();
