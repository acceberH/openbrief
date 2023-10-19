const cursor = document.querySelector(".cursor");
const title = document.querySelector(".title");

document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x', (e.clientX + window.scrollX) + 'px');
    document.documentElement.style.setProperty('--y', (e.clientY + window.scrollY) + 'px');
}
document.querySelector(".navbar").addEventListener("mouseenter", () => {
    cursor.style.width = "80px";  
    cursor.style.height = "80px";
});

document.querySelector(".navbar").addEventListener("mouseleave", () => {
    cursor.style.width = "60px";  
    cursor.style.height = "60px";
});