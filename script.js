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
    "112-1": [ // 112學年第二學期 (範例資料，請替換為實際課表)
        ["8:10 - 9:00", "", "", "英文", "", ""],
        ["9:10 - 10:00", "物件導向程式設計", "", "英文", "數位邏輯", ""],
        ["10:20 - 11:10", "物件導向程式設計", "微積分", "國文", "數位邏輯", "物理"],
        ["11:20 - 12:10", "物件導向程式設計", "微積分", "國文", "", "物理"],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "演算法", "", "體育", "資料結構", ""],
        ["14:10 - 15:00", "演算法", "計算機結構", "體育", "資料結構", "資工導論"],
        ["15:20 - 16:10", "程式設計", "計算機結構", "", "", "資工導論"],
        ["16:20 - 17:10", "程式設計", "", "", "", ""],
        ["17:20 - 18:10", "", "", "", "", ""],
        ["18:20 - 19:10", "", "", "", "", ""]
    ],
    "112-2": [ // 112學年第二學期 (範例資料，請替換為實際課表)
        ["8:10 - 9:00", "", "", "英文", "", ""],
        ["9:10 - 10:00", "物件導向程式設計", "", "英文", "數位邏輯", ""],
        ["10:20 - 11:10", "物件導向程式設計", "微積分", "國文", "數位邏輯", "物理"],
        ["11:20 - 12:10", "物件導向程式設計", "微積分", "國文", "", "物理"],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "演算法", "", "體育", "資料結構", ""],
        ["14:10 - 15:00", "演算法", "計算機結構", "體育", "資料結構", "資工導論"],
        ["15:20 - 16:10", "程式設計", "計算機結構", "", "", "資工導論"],
        ["16:20 - 17:10", "程式設計", "", "", "", ""],
        ["17:20 - 18:10", "", "", "", "", ""],
        ["18:20 - 19:10", "", "", "", "", ""]
    ],
    "113-2": [ // 113學年第二學期
        ["8:10 - 9:00", "", "", "", "", ""],
        ["9:10 - 10:00", "資訊安全概論", "", "系統程式", "", ""],
        ["10:20 - 11:10", "資訊安全概論", "", "系統程式", "", "經濟學"],
        ["11:20 - 12:10", "資訊安全概論", "", "系統程式", "", "經濟學"],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "", "高爾夫 體育", "", "資料結構", "程式設計檢定"],
        ["14:10 - 15:00", "計算機網路", "高爾夫 體育", "自然通識", "資料結構", ""],
        ["15:20 - 16:10", "計算機網路", "數據分析資料工程", "自然通識", "資料結構", ""],
        ["16:20 - 17:10", "計算機網路", "數據分析資料工程", "", "", ""],
        ["17:20 - 18:10", "", "數據分析資料工程", "大數據分析程式設計", "", ""],
        ["18:20 - 19:10", "", "", "大數據分析程式設計", "", ""]
    ],
    "113-1": [ // 113學年第一學期 (範例資料，請替換為實際課表)
        ["8:10 - 9:00", "通識課程", "", "", "", ""],
        ["9:10 - 10:00", "資料庫系統", "高等微積分", "", "線性代數", ""],
        ["10:20 - 11:10", "資料庫系統", "高等微積分", "", "線性代數", "離散數學"],
        ["11:20 - 12:10", "", "", "計算機概論", "", "離散數學"],
        ["12:20 - 13:00", "", "", "", "", ""],
        ["13:10 - 14:00", "軟體工程", "", "網頁設計", "機率與統計", ""],
        ["14:10 - 15:00", "軟體工程", "組合語言", "網頁設計", "機率與統計", ""],
        ["15:20 - 16:10", "作業系統", "組合語言", "", "", "專題討論"],
        ["16:20 - 17:10", "作業系統", "", "", "", "專題討論"],
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