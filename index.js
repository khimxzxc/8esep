const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://github.com/khimxzxc');

    // Скриншот страницы
    await page.screenshot({ path: 'img.png' });

    // Извлекаем названия репозиториев
    let repoNames = await page.evaluate(() => {
        // Получаем все элементы, содержащие репозитории
        let repoElements = Array.from(document.querySelectorAll('.repo')); 
        
        // Извлекаем текст (названия репозиториев)
        return repoElements.map(el => el.innerText.trim());
    });

    console.log(repoNames);

    
})();
