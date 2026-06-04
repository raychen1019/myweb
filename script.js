function sendMessage() {
    // 1. 抓取表單欄位元件
    const nameInput = document.getElementById("userName");
    const emailInput = document.getElementById("userEmail");
    const msgInput = document.getElementById("userMsg");

    // 2. 驗證是否有未填寫的欄位
    if (!nameInput.value.trim() || !emailInput.value.trim() || !msgInput.value.trim()) {
        alert("請完整填寫所有欄位資訊！");
        return;
    }

    // 🚀 3. 新增原本的 JS 彈窗提示
    alert("您的訊息已成功送出！客服工單已在下方建立。");

    // 4. 抓取顯示區塊並解鎖隱藏
    const logSection = document.getElementById("messageLogSection");
    const container = document.getElementById("messageContainer");
    logSection.style.display = "block";

    // 5. 取得目前系統時間
    const now = new Date();
    const timeString = now.toLocaleString();

    // 6. 組合現代感的 HTML 結構並渲染到畫面上
    container.innerHTML = `
        <div class="msg-box">
            <p><strong>👤 訪客姓名：</strong> ${escapeHtml(nameInput.value)}</p>
            <p><strong>✉️ 電子郵件：</strong> ${escapeHtml(emailInput.value)}</p>
            <p><strong>💬 反饋內容：</strong><br>${escapeHtml(msgInput.value).replace(/\n/g, '<br>')}</p>
            <span class="time-stamp">⏰ 提交時間：${timeString}</span>
        </div>
    `;

    // 7. 送出後自動清空表單輸入框
    document.getElementById("feedbackForm").reset();
}

// 安全防護：防止使用者輸入 HTML 惡意原始碼導致網頁壞掉
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

document.getElementById("buyBtn").addEventListener("click", function () {
    alert("訂購成功！");
});
