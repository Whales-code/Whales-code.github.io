document.addEventListener('DOMContentLoaded', () => {
    // DOM 加载完成后执行的代码
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            console.log('按钮被点击了！');
        });
    }
});
