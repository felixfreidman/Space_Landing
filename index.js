const allCards = document.querySelectorAll('.card');
const main = document.querySelector('.main');
const cardSection = document.querySelector('.card-special-content');
let flag = 0;

allCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('card-active');
        main.classList.add('main--cardActive');
        allCards.forEach(inner_card => {
            if (!inner_card.classList.contains('card-active')) {
                inner_card.classList.add('js--hidden-opacity');
            }
        })
    })
})

cardSection.addEventListener('wheel', (event) => {
    if (event.deltaY > 0 && flag < 4) {
        flag++;
    } else if (event.deltaY < 0 && flag >= 0) {
        flag--;
    }

    if (flag == 0) {
        document.querySelector('.note2').classList.add('js--hidden');
        document.querySelector('.note3').classList.add('js--hidden');
        document.querySelector('.note1').classList.remove('js--hidden');
        document.querySelector('.special-note').classList.add('js--hidden');
        document.querySelector('.card-special-content').classList.remove('expanded');
        document.querySelector('.special-bg').classList.remove('expanded');
        document.querySelector('.card-panel-section').classList.remove('js--hidden');
        $('.card-special-content')
            .find('.special-bg')
            .css('background-position', `0% 0%`);
        $('.card-special-content')
            .find('.special-bg')
            .css('background-size', '150%');
    } else if (flag == 1) {
        document.querySelector('.note1').classList.add('js--hidden');
        document.querySelector('.note3').classList.add('js--hidden');
        document.querySelector('.note2').classList.remove('js--hidden');
        document.querySelector('.special-note').classList.add('js--hidden');
        document.querySelector('.card-special-content').classList.remove('expanded');
        document.querySelector('.special-bg').classList.remove('expanded');
        document.querySelector('.card-panel-section').classList.remove('js--hidden');
        $('.card-special-content')
            .find('.special-bg')
            .css('background-position', `100% 70%`);
        $('.card-special-content')
            .find('.special-bg')
            .css('background-size', '150%');
    } else if (flag == 2) {
        document.querySelector('.note2').classList.add('js--hidden');
        document.querySelector('.note1').classList.add('js--hidden');
        document.querySelector('.note3').classList.remove('js--hidden');
        document.querySelector('.special-note').classList.add('js--hidden');
        document.querySelector('.card-special-content').classList.remove('expanded');
        document.querySelector('.special-bg').classList.remove('expanded');
        document.querySelector('.card-panel-section').classList.remove('js--hidden');
        $('.card-special-content')
            .find('.special-bg')
            .css('background-position', `50% 100%`);
        $('.card-special-content')
            .find('.special-bg')
            .css('background-size', '150%');
    }
    else if (flag == 3) {
        document.querySelector('.note2').classList.add('js--hidden');
        document.querySelector('.note1').classList.add('js--hidden');
        document.querySelector('.note3').classList.add('js--hidden');
        document.querySelector('.special-note').classList.remove('js--hidden');
        document.querySelector('.card-panel-section').classList.add('js--hidden');
        document.querySelector('.card-special-content').classList.add('expanded');
        document.querySelector('.special-bg').classList.add('expanded');
        $('.card-special-content')
            .find('.special-bg')
            .css('background-size', 'cover');
    }
})

function scrollSpecial() {
    var windowTop = $(window).scrollTop();
    var elementTop = $('.card-special-content').offset().top;
    var leftPosition = windowTop - elementTop + 55;
    console.log(leftPosition);
    var leftPositionBy1 = 0;
    var leftPositionBy2 = 0;
    var initScale = 200;
    if (leftPosition < 10) {
        leftPositionBy1 = leftPosition;
        leftPositionBy2 = leftPosition * 0.5;
        $('.card-special-content')
            .find('.special-bg')
            .css('background-position', `0% 0%`);
    } else if (leftPosition < 120) {
        leftPositionBy1 = leftPosition;
        leftPositionBy2 = leftPosition * 0.5;
        $('.card-special-content')
            .find('.special-bg')
            .css('background-position', `100% 70%`);
    }
    else if (leftPosition < 300) {
        leftPositionBy1 = leftPosition;
        leftPositionBy2 = leftPosition * 0.5;
        $('.card-special-content')
            .find('.special-bg')
            .css('background-position', `50% -84%`);
    } else {
        console.log('hello');
        $('.card-special-content')
            .find('.special-bg')
            .css({ 'background-size': 'cover' })
        $('.card-active').css({ 'min-height': 'calc(100vh - 56px)' });
        $('.card-active').css({ 'overflow': 'hidden' });
        $('.card-special-content').css({ 'height': 'calc(100vh - 56px)' });
        $('.card-special-content').css({ 'overflow': 'hidden' });
        $('.special-bg').css({ 'min-height': 'calc(100vh - 56px)' });

    }
}

let touchstartY = 0
let touchendY = 0

function checkDirection() {
    if (touchendY < touchstartY) alert('swiped down!')
    if (touchendY > touchstartY) alert('swiped up!')
}

document.addEventListener('touchstart', e => {
    touchstartY = e.changedTouches[0].screenY

})

document.addEventListener('touchend', e => {
    touchendT = e.changedTouches[0].screenY
    checkDirection()
})
    ;