let clickCount = localStorage.getItem("clickCount") || 0;

document.getElementById("clickCount").innerText = `Clicks: ${clickCount}`;

document.getElementById("clickButton").addEventListener("click", () => {
    clickCount++;
    localStorage.setItem("clickCount", clickCount);
    document.getElementById("clickCount").innerText = `Clicks: ${clickCount}`;
});