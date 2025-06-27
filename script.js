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

// 課表資料定義
// 以物件形式儲存每個學期的課表資料
// 鍵為學期值 (與下拉選單的 value 屬性一致)
// 值為一個陣列，每個元素代表一列 (<tr>)，其中包含該列的所有單元格 (<td>) 內容
const semesterSchedules = {
    "112-1": [ // 112學年第一學期
        ["8:10 - 9:00", "微積分甲(一)", "", "", "網球 體育", ""],
        ["9:10 - 10:00", "微積分甲(一)", "", "", "網球 體育", ""],
        ["10:20 - 11:10", "大一英文", "python程設", "", "", "社會通識"],
        ["11:20 - 12:10", "大一英文", "python程設", "", "", "社會通識"],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "", "", "", "", ""],
        ["14:10 - 15:00", "機率學", "計算機概論", "python程設", "", ""],
        ["15:20 - 16:10", "機率學", "計算機概論", "python程設", "", ""],
        ["16:20 - 17:10", "機率學", "計算機概論", "", "", "中文"],
        ["17:20 - 18:10", "", "微積分甲(一)", "微積分甲(一)", "", "中文"],
        ["18:20 - 19:10", "", "", "", "", ""]
    ],
    "112-2": [ // 112學年第二學期
        ["8:10 - 9:00", "微積分甲(二)", "", "", "網球 體育", ""],
        ["9:10 - 10:00", "微積分甲(二)", "", "C++程設", "網球 體育", "邏輯設計實驗"],
        ["10:20 - 11:10", "大一英文", "", "大一英文", "社會媒體素養 通識", "邏輯設計實驗"],
        ["11:20 - 12:10", "大一英文", "", "大一英文", "社會媒體素養 通識", "邏輯設計實驗"],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "", "", "", "", ""],
        ["14:10 - 15:00", "全民國防", "C++程設", "", "離散數學", ""],
        ["15:20 - 16:10", "全民國防", "C++程設", "", "離散數學", ""],
        ["16:20 - 17:10", "邏輯設計", "C++程設", "", "離散數學", "中文"],
        ["17:20 - 18:10", "邏輯設計", "微積分甲(二)", "微積分甲(二)", "", "中文"],
        ["18:20 - 19:10", "邏輯設計", "", "", "", ""]
    ],
    "113-1": [ // 113學年第一學期 (範例資料，請替換為實際課表)
        ["8:10 - 9:00", "", "", "", "", ""],
        ["9:10 - 10:00", "線性代數", "", "電子電路學", "組合語言", "人文永續議題 通識"],
        ["10:20 - 11:10", "線性代數", "", "電子電路學", "組合語言", "人文永續議題 通識"],
        ["11:20 - 12:10", "線性代數", "", "電子電路學", "組合語言", "人文永續議題 通識"],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "", "高爾夫 體育", "", "", ""],
        ["14:10 - 15:00", "物件導向分析", "高爾夫 體育", "", "", "硬體描述語言"],
        ["15:20 - 16:10", "物件導向分析", "", "人文價值思辨 通識", "", "硬體描述語言"],
        ["16:20 - 17:10", "物件導向分析", "", "人文價值思辨 通識", "", "硬體描述語言"],
        ["17:20 - 18:10", "", "", "", "", ""],
        ["18:20 - 19:10", "", "", "", "", ""]
    ],
    "113-2": [ // 113學年第二學期
        ["8:10 - 9:00", "", "", "", "", ""],
        ["9:10 - 10:00", "資訊安全概論", "", "系統程式", "", ""],
        ["10:20 - 11:10", "資訊安全概論", "", "系統程式", "", "經濟學"],
        ["11:20 - 12:10", "資訊安全概論", "", "系統程式", "", "經濟學"],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "", "高爾夫 體育", "", "資料結構", ""],
        ["14:10 - 15:00", "計算機網路", "高爾夫 體育", "自然通識", "資料結構", ""],
        ["15:20 - 16:10", "計算機網路", "數據分析資料工程", "自然通識", "資料結構", ""],
        ["16:20 - 17:10", "計算機網路", "數據分析資料工程", "", "", ""],
        ["17:20 - 18:10", "", "數據分析資料工程", "大數據分析程式設計", "", ""],
        ["18:20 - 19:10", "", "", "大數據分析程式設計", "", ""]
    ],
    "114-1": [ // 114學年第一學期
        ["8:10 - 9:00", "", "", "", "", ""],
        ["9:10 - 10:00", "", "", "", "", ""],
        ["10:20 - 11:10", "", "", "", "", ""],
        ["11:20 - 12:10", "", "", "", "", ""],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "", "", "", "", ""],
        ["14:10 - 15:00", "", "", "", "", ""],
        ["15:20 - 16:10", "", "", "", "", ""],
        ["16:20 - 17:10", "", "", "", "", ""],
        ["17:20 - 18:10", "", "", "", "", ""],
        ["18:20 - 19:10", "", "", "", "", ""]
    ],
    "114-2": [ // 114學年第二學期
        ["8:10 - 9:00", "", "", "", "", ""],
        ["9:10 - 10:00", "", "", "", "", ""],
        ["10:20 - 11:10", "", "", "", "", ""],
        ["11:20 - 12:10", "", "", "", "", ""],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "", "", "", "", ""],
        ["14:10 - 15:00", "", "", "", "", ""],
        ["15:20 - 16:10", "", "", "", "", ""],
        ["16:20 - 17:10", "", "", "", "", ""],
        ["17:20 - 18:10", "", "", "", "", ""],
        ["18:20 - 19:10", "", "", "", "", ""]
    ],
    "115-1": [ // 115學年第一學期
        ["8:10 - 9:00", "", "", "", "", ""],
        ["9:10 - 10:00", "", "", "", "", ""],
        ["10:20 - 11:10", "", "", "", "", ""],
        ["11:20 - 12:10", "", "", "", "", ""],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "", "", "", "", ""],
        ["14:10 - 15:00", "", "", "", "", ""],
        ["15:20 - 16:10", "", "", "", "", ""],
        ["16:20 - 17:10", "", "", "", "", ""],
        ["17:20 - 18:10", "", "", "", "", ""],
        ["18:20 - 19:10", "", "", "", "", ""]
    ],
    "115-2": [ // 115學年第二學期
        ["8:10 - 9:00", "", "", "", "", ""],
        ["9:10 - 10:00", "", "", "", "", ""],
        ["10:20 - 11:10", "", "", "", "", ""],
        ["11:20 - 12:10", "", "", "", "", ""],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "", "", "", "", ""],
        ["14:10 - 15:00", "", "", "", "", ""],
        ["15:20 - 16:10", "", "", "", "", ""],
        ["16:20 - 17:10", "", "", "", "", ""],
        ["17:20 - 18:10", "", "", "", "", ""],
        ["18:20 - 19:10", "", "", "", "", ""]
    ]
    // 您可以在這裡添加更多學期的課表資料
};

// 確保 DOM 內容載入完畢後再執行腳本
document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有導航按鈕元素
    const indexButton = document.getElementById("indexButton");
    const timetableButton = document.getElementById("timetableButton");
    const myselfButton = document.getElementById("myselfButton");
    const contactButton = document.getElementById("contactButton");
    const planButton = document.getElementById("planButton");
    const progressButton = document.getElementById("progressButton");

    // 獲取下拉選單和課表表格元素
    const semesterSelect = document.getElementById("semesterSelect");
    const scheduleTableBody = document.querySelector("#scheduleTable tbody");

    // 為每個按鈕添加點擊事件監聽器 (保持不變)
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

    // 渲染課表表格的函數
    function renderSchedule(semesterId) {
        // 清空現有表格內容
        scheduleTableBody.innerHTML = '';

        const scheduleData = semesterSchedules[semesterId];

        if (scheduleData) {
            scheduleData.forEach(rowData => {
                const row = document.createElement('tr');
                rowData.forEach(cellData => {
                    const cell = document.createElement('td');
                    cell.textContent = cellData;
                    row.appendChild(cell);
                });
                scheduleTableBody.appendChild(row);
            });
        } else {
            // 如果沒有找到該學期的資料，顯示提示
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 6; // 跨越所有列
            cell.textContent = "查無該學期課表資料。";
            row.appendChild(cell);
            scheduleTableBody.appendChild(row);
        }
    }

    // 當下拉選單的值改變時，更新課表
    if (semesterSelect) {
        semesterSelect.addEventListener('change', function() {
            const selectedSemester = semesterSelect.value;
            renderSchedule(selectedSemester);
        });

        // 頁面載入時，根據預設選中的學期渲染課表
        renderSchedule(semesterSelect.value);
    }
});