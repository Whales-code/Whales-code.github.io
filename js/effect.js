// 代码雨特效（优化版）
document.addEventListener('click', (e) => {
    // 【新增】移动端点击穿透修复
    if (navigator.userAgent.match(/Mobile/)) return;
  
    // 【优化】代码库扩展（增加实用性）
    const codes = [
      '// 欢迎来到代码宇宙',
      'git commit -m "feat: 博客特效上线"', // Git 提交
      'hexo g && hexo d', // Hexo 部署命令
      'console.log(`点击坐标：x${e.clientX}, y${e.clientY}`);', // 显示点击坐标
      'let blog = { name: "你的博客名", theme: "Butterfly" };', // 博客配置对象
      'for (let i = 0; i < stars.length; i++) { stars[i].shine(); }' // 星空动画
    ];
  
    // 【优化】创建文档片段（提升性能）
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    div.className = 'code-drop';
    div.textContent = codes[Math.floor(Math.random() * codes.length)];
    div.style.cssText = `
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      animation: fall 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* 更顺滑的动画曲线 */
    `;
    fragment.appendChild(div);
    document.body.appendChild(fragment);
  
    // 【优化】自动清理（使用 requestAnimationFrame）
    let opacity = 1;
    const animate = () => {
      opacity -= 0.05;
      div.style.opacity = opacity;
      if (opacity > 0) requestAnimationFrame(animate);
      else div.remove();
    };
    requestAnimationFrame(animate);
  });