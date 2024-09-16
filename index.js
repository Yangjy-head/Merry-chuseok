const messages = [
    "풍성하고 따뜻한 한가위 되시길 바라며, 가족과 함께 행복한 시간 보내세요🎉",
    "보름달처럼 풍요롭고 따뜻한 추석 연휴 되시길 진심으로 기원합니다⭐️",
    "가족과 함께하는 따뜻한 추석 명절, 행복과 건강 가득하시길 바랍니다🎉",
    "즐거운 추석 명절 보내시고, 모든 일들이 순조롭게 풀리시길 바랍니다🙏",
    "추석 연휴 동안 푹 쉬시고, 재충전하시어 건강하게 돌아오세요🎉",
    "풍성한 한가위 보내시고, 가족들과 함께 행복한 추억 많이 만드세요⭐️",
    "한가위 보름달처럼 밝고 풍요로운 명절 보내시길 바랍니다🌕",
    "추석 명절 동안 가족들과 따뜻한 시간 보내시고 건강 잘 챙기세요🌕",
    "행복한 추석 되시길 바라며, 모든 소망이 이루어지시길 기원합니다🙏",
    "따뜻하고 행복한 추석 보내시고, 늘 건강하시길 진심으로 바랍니다💪",
    "추석 연휴 동안 가족과 함께하는 소중한 시간 만끽하시길 바랍니다🎉",
    "풍성한 추석 보내시고, 가족들과 함께하는 시간 행복으로 가득하세요❤️",
    "한가위 명절, 가족들과 함께 따뜻하고 즐거운 시간 보내세요❤️",
    "추석 명절 동안 마음 편히 쉬시고, 행복한 연휴 보내시길 바랍니다❤️",
    "추석 연휴 동안 재충전하시고, 건강한 모습으로 다시 뵙길 바랍니다☺️",
    "풍요로운 한가위 되시고, 가족들과 행복한 시간 많이 보내세요🎉",
    "즐거운 추석 명절 보내시고, 평안하고 행복한 시간 되시길 바랍니다🥳",
    "따뜻한 명절 보내시고, 가족과 함께 행복한 추석 되시길 바랍니다🥳",
    "추석 연휴 동안 편안하게 쉬시고, 가족들과 즐거운 시간 보내세요❤️",
    "한가위 보름달처럼 마음도 풍성해지는 따뜻한 명절 보내세요❤️",
    "추석 명절 잘 보내시고, 가족들과 함께 행복한 시간 만드세요❤️",
    "풍성한 한가위 되시고, 모든 일들이 잘 풀리시길 기원합니다🙏",
    "따뜻하고 행복한 추석 보내시고, 가족들과 소중한 시간 보내세요❤️",
    "즐거운 추석 명절 되시길 바라며, 건강과 행복이 가득하시길 바랍니다🙏",
    "추석 연휴 동안 충분히 쉬시고, 행복한 시간 보내시길 바랍니다❤️",
    "풍요롭고 따뜻한 한가위 되시길 바라며, 가족들과 행복한 시간 되세요🙌",
    "보름달처럼 밝고 풍요로운 추석 연휴 되시길 진심으로 기원합니다🙏",
    "가족과 함께하는 따뜻한 한가위, 행복과 건강 가득하시길 바랍니다❤️",
    "즐거운 추석 명절 보내시고, 모든 소망이 이루어지시길 바랍니다❤️",
    "따뜻하고 행복한 한가위 보내시고, 항상 건강하시길 바랍니다💪"
];

let isAnimating = false; // 애니메이션 진행 상태 변수

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.
    isAnimating = true; // 애니메이션이 시작됨을 표시합니다.

    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';

    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false; // 애니메이션이 끝났음을 표시합니다.
            if (callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.

    const postcardElement = document.getElementById('postcard');
    const nameElement = document.querySelector('.p-name');

    toggleVisibility(postcardElement, false);
    toggleVisibility(nameElement, false);

    setTimeout(() => {
        typeMessage(() => {
            toggleVisibility(nameElement, true);
        });
        toggleVisibility(postcardElement, true);
    }, 500);
}

window.onload = () => {
    renewMessage(); 
};

// flip.js
let isFlipped = false;

function flipImage() {
    const postcardElement = document.getElementById('postcard');
    
    // 회전 상태에 따라 클래스 추가/제거
    if (isFlipped) {
        postcardElement.classList.remove('rotate-360');
        postcardElement.classList.add('rotate-0');
    } else {
        postcardElement.classList.add('rotate-360');
        postcardElement.classList.remove('rotate-0');
    }

    // 상태 반전
    isFlipped = !isFlipped;

    // 애니메이션 종료 후 최종 상태 설정
    postcardElement.addEventListener('transitionend', () => {
        if (isFlipped) {
            postcardElement.classList.remove('rotate-360');
            postcardElement.classList.add('rotate-180');
        } else {
            postcardElement.classList.remove('rotate-360', 'rotate-180');
            postcardElement.classList.add('rotate-0');
        }
    }, { once: true }); // 한 번만 실행되도록 설정

}

// music.js
// 배경 음악을 재생, 일시중지하는 함수예요. 버튼을 클릭하면 버튼 이름도 변경됩니다.
let isPlaying = false;

function controlBgm() {
    const bgmElement = document.querySelector('.btn-bgm');
    const bgm = document.getElementById('audio-bgm');
    
    if (isPlaying) {
        bgm.pause();
        bgmElement.innerText = '재생';
    } else {
        bgm.play();
        bgmElement.innerText = '일시중지';
    }

    isPlaying = !isPlaying;   
}

// share.js
// 웹 페이지를 공유하는 함수예요. 
// 이 함수는 Web Share API를 사용하고 있는데, 만약 사용자의 브라우저가 Web Share API를 지원하지 않는 경우, 경고 창을 통해 사용자에게 알립니다.
function shareMessage() {
    if (navigator.share) {
        try {
            const shareData = {
                title: 'Web Share Example',
                text: 'Check out this web share example!',
                url: window.location.href,
            };

            navigator.share(shareData)
                .then(() => console.log('공유 성공!'))
                .catch(error => console.error('공유 실패:', error.message));
        } catch (error) {
            console.error('공유 실패:', error.message);
        }
    } else {
        alert('해당 브라우저에서 Web Share API가 동작하지 않습니다.');
    }
}
