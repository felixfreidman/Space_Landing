const allCards = document.querySelectorAll('.card');
let flag = 0;

allCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('card-active');
    })
})

function scrollSpecial() {
    var windowTop = $(window).scrollTop();
    var elementTop = $('.card-special-content').offset().top;
    var leftPosition = windowTop - elementTop + 55;
    console.log(leftPosition);
    var leftPositionBy1 = 0;
    var leftPositionBy2 = 0;
    var initScale = 200;
    if (leftPosition < 1500) {
        leftPositionBy1 = leftPosition;
        leftPositionBy2 = leftPosition * 0.5;
        $('.card-special-content')
            .find('.special-bg')
            .css('background-position', `${-leftPositionBy1}px ${leftPositionBy2}px`);
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
};