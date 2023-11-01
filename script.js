document.addEventListener('DOMContentLoaded', () => {
    const usTimeElement = document.getElementById('us-time');
    const krUSTimeElement = document.getElementById('kr-us-time');
    const chinaTimeElement = document.getElementById('china-time');
    const japanTimeElement = document.getElementById('japan-time');
    const ukTimeElement = document.getElementById('uk-time');
    const indiaTimeElement = document.getElementById('india-time');
    const toggleDarkModeButton = document.getElementById('toggle-darkmode');

    // 모든 시계를 업데이트하는 함수
    const fetchAllTimes = () => {
        // 미국 시간
        const usTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false });
        usTimeElement.textContent = "미국 시간: " + usTime;

        // 한국 시간
        const krUSTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Seoul', hour12: false });
        krUSTimeElement.textContent = "한국 시간: " + krUSTime;

        // 중국 시간
        const chinaTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai', hour12: false });
        chinaTimeElement.textContent = "중국 시간: " + chinaTime;

        // 일본 시간
        const japanTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour12: false });
        japanTimeElement.textContent = "일본 시간: " + japanTime;

        // 영국 시간
        const ukTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour12: false });
        ukTimeElement.textContent = "영국 시간: " + ukTime;

        // 인도 시간
        const indiaTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false });
        indiaTimeElement.textContent = "인도 시간: " + indiaTime;
        
        setTimeout(fetchAllTimes, 1000); // 1초마다 모든 시계 업데이트
    };

    fetchAllTimes();

    // 다크 모드 전환 함수
    let isDarkMode = false;
    toggleDarkModeButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
        document.body.style.color = isDarkMode ? '#fff' : '#333';
    });
});
