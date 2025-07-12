// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function() {
    const lessonTitles = document.querySelectorAll('.lesson-title');

    lessonTitles.forEach(title => {
        title.addEventListener('click', function() {
            const lessonContent = this.nextElementSibling; // 다음 형제 요소인 .lesson-content를 선택

            this.classList.toggle('active'); // 제목 활성화 상태 토글

            // 내용의 펼치기/접기 로직
            if (lessonContent.style.maxHeight === '0px' || lessonContent.style.maxHeight === '') {
                lessonContent.style.maxHeight = lessonContent.scrollHeight + 'px'; // 콘텐츠의 실제 높이만큼 펼침
            } else {
                lessonContent.style.maxHeight = '0px'; // 다시 접음
            }
        });
    });
});