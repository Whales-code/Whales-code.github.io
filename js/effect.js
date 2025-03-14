// 代码雨效果（点击飘落代码片段）
document.addEventListener('click', (e) => {
    const codes = [
        'console.log("Hello, Code Galaxy!");',
        'async function hexoDeploy() { await exec("hexo d"); }',
        'for (let star of galaxy) { star.twinkle(); }'
    ];
    const code = codes[Math.floor(Math.random() * codes.length)];

    const div = document.createElement('div');
    div.className = 'code-drop';
    div.textContent = code;
    div.style.left = e.clientX + 'px';
    div.style.top = e.clientY + 'px';
    div.style.animation = 'fall 2s linear';
    document.body.appendChild(div);

    setTimeout(() => div.remove(), 2000);
});
