// 確保 DOM 內容載入完畢後再執行腳本
document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有導航按鈕元素
    const indexButton = document.getElementById("indexButton");
    const timetableButton = document.getElementById("timetableButton");
    const myselfButton = document.getElementById("myselfButton");
    const contactButton = document.getElementById("contactButton");
    const planButton = document.getElementById("planButton");
    const progressButton = document.getElementById("progressButton");

    // 為每個按鈕添加點擊事件監聽器
    if (indexButton) {
        indexButton.onclick = function() {
            window.location.href = "index.html";
        };
    }

    if (timetableButton) {
        timetableButton.onclick = function() {
            window.location.href = "timetable.html";
        };
    }

    if (myselfButton) {
        myselfButton.onclick = function() {
            window.location.href = "myself.html";
        };
    }

    if (contactButton) {
        contactButton.onclick = function() {
            window.location.href = "contact.html";
        };
    }

    if (planButton) {
        planButton.onclick = function() {
            window.location.href = "plan.html";
        };
    }

    if (progressButton) {
        progressButton.onclick = function() {
            window.location.href = "progress.html";
        };
    }
});