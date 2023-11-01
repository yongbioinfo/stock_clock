document.addEventListener('DOMContentLoaded', () => {
    const usTimeElement = document.getElementById('us-time');
    const krUSTimeElement = document.getElementById('kr-us-time'); // 추가
    const toggleDarkModeButton = document.getElementById('toggle-darkmode');

    // 미국 주식 시장 시간을 가져오는 함수
    const fetchUSTime = () => {
        const usTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false });
        usTimeElement.textContent = "미국 시간: " + usTime;

        const krUSTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Seoul', hour12: false });
        krUSTimeElement.textContent = "한국 시간: " + krUSTime;
        
        setTimeout(fetchUSTime, 1000); // 1초마다 업데이트
    };
    fetchUSTime();

    // 다크 모드 전환 함수
    let isDarkMode = false;
    toggleDarkModeButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
        document.body.style.color = isDarkMode ? '#fff' : '#333';
    });
});
