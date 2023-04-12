const allCards = document.querySelectorAll('.card');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const links = document.querySelectorAll('.header-link');
let cardActiveMain = 0
let cardSection = 0
let flag = 0;
let indexSpecial = 1;
let touchstartY = 0
let touchendY = 0


if (window.innerWidth >= 1100) {
    console.log('hello');
    allCards.forEach(card => {
        card.addEventListener('click', () => {
            flag = 0;
            card.classList.add('card-active');
            main.classList.add('main--cardActive');
            cardActiveMain = document.querySelector('.card-active');
            cardSection = cardActiveMain.querySelector('.card-special-content');
            header.classList.remove('js--hidden')
            if (cardActiveMain.classList.contains('card--1')) {
                links[0].classList.add('header-link--active')
            } else if (cardActiveMain.classList.contains('card--2')) {
                links[1].classList.add('header-link--active')
            } else if (cardActiveMain.classList.contains('card--3')) {
                links[2].classList.add('header-link--active')
            } else if (cardActiveMain.classList.contains('card--4')) {
                links[3].classList.add('header-link--active')
            } else {
                links[4].classList.add('header-link--active')
            }
            allCards.forEach(inner_card => {
                if (!inner_card.classList.contains('card-active')) {
                    inner_card.classList.add('js--hidden-opacity');
                    inner_card.classList.add('maxWidthCard');
                }
            })
            cardSection.addEventListener('wheel', (event) => {
                console.log(flag);
                const cardActive = document.querySelector('.card-active');
                if (event.deltaY > 0 && flag < 7) {
                    flag++;
                } else if (event.deltaY < 0 && flag > -1) {
                    flag--;
                }

                if (flag == 0) {
                    cardActive.querySelector('.note2').classList.add('js--hidden');
                    cardActive.querySelector('.note3').classList.add('js--hidden');
                    cardActive.querySelector('.note1').classList.remove('js--hidden');
                    cardActive.querySelector('.special-note').classList.add('js--hidden');
                    cardActive.querySelector('.card-special-content').classList.remove('expanded');
                    cardActive.querySelector('.special-bg').classList.remove('expanded');
                    cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                    $('.card-active  .card-special-content')
                        .find('.special-bg')
                        .css('background-position', `0% 0%`);
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-size', '150%');
                } else if (flag == 2) {
                    cardActive.querySelector('.note1').classList.add('js--hidden');
                    cardActive.querySelector('.note3').classList.add('js--hidden');
                    cardActive.querySelector('.note2').classList.remove('js--hidden');
                    cardActive.querySelector('.special-note').classList.add('js--hidden');
                    cardActive.querySelector('.card-special-content').classList.remove('expanded');
                    cardActive.querySelector('.special-bg').classList.remove('expanded');
                    cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-position', `100% 70%`);
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-size', '150%');
                } else if (flag == 4) {
                    cardActive.querySelector('.note2').classList.add('js--hidden');
                    cardActive.querySelector('.note1').classList.add('js--hidden');
                    cardActive.querySelector('.note3').classList.remove('js--hidden');
                    cardActive.querySelector('.special-note').classList.add('js--hidden');
                    cardActive.querySelector('.card-special-content').classList.remove('expanded');
                    cardActive.querySelector('.special-bg').classList.remove('expanded');
                    cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-position', `50% 100%`);
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-size', '150%');
                }
                else if (flag == 6) {
                    cardActive.querySelector('.note2').classList.add('js--hidden');
                    cardActive.querySelector('.note1').classList.add('js--hidden');
                    cardActive.querySelector('.note3').classList.add('js--hidden');
                    cardActive.querySelector('.special-note').classList.remove('js--hidden');
                    cardActive.querySelector('.card-panel-section').classList.add('js--hidden');
                    cardActive.querySelector('.card-special-content').classList.add('expanded');
                    cardActive.querySelector('.special-bg').classList.add('expanded');
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-size', 'cover');
                }
            })
        })

    })

    links.forEach((link, index) => {
        link.addEventListener('click', () => {
            flag = 0;
            cardActiveMain = document.querySelector('.card-active');
            if (cardActiveMain.classList.contains('card--1')) {
                indexSpecial = 1;
            } else if (cardActiveMain.classList.contains('card--2')) {
                indexSpecial = 2;
            } else if (cardActiveMain.classList.contains('card--3')) {
                indexSpecial = 3;
            } else if (cardActiveMain.classList.contains('card--4')) {
                indexSpecial = 4;
            } else {
                indexSpecial = 5;
            }
            console.log(indexSpecial);
            console.log(index);
            links.forEach((inner_link,) => {
                inner_link.classList.remove('header-link--active');
            });
            link.classList.add('header-link--active');
            cardActiveMain.classList.add('js--hidden');
            cardActiveMain.classList.remove('card-active');
            document.querySelector(`.card--${index + 1}`).classList.add('card-active');
            document.querySelector(`.card--${index + 1}`).classList.remove('js--hidden-opacity');
            document.querySelector(`.card--${index + 1}`).classList.remove('js--hidden');
            flag = 0;
            cardActiveMain = document.querySelector('.card-active');
            cardSection = cardActiveMain.querySelector('.card-special-content');
            if (cardActiveMain.classList.contains('card--1')) {
                links[0].classList.add('header-link--active')
            } else if (cardActiveMain.classList.contains('card--2')) {
                links[1].classList.add('header-link--active')
            } else if (cardActiveMain.classList.contains('card--3')) {
                links[2].classList.add('header-link--active')
            } else if (cardActiveMain.classList.contains('card--4')) {
                links[3].classList.add('header-link--active')
            } else {
                links[4].classList.add('header-link--active')
            }
            allCards.forEach(inner_card => {
                if (!inner_card.classList.contains('card-active')) {
                    inner_card.classList.add('js--hidden-opacity');
                }
            })
            cardSection.addEventListener('wheel', (event) => {
                console.log(flag);
                const cardActive = document.querySelector('.card-active');
                if (event.deltaY > 0 && flag < 7) {
                    flag++;
                } else if (event.deltaY < 0 && flag > -1) {
                    flag--;
                }

                if (flag == 0) {
                    cardActive.querySelector('.note2').classList.add('js--hidden');
                    cardActive.querySelector('.note3').classList.add('js--hidden');
                    cardActive.querySelector('.note1').classList.remove('js--hidden');
                    cardActive.querySelector('.special-note').classList.add('js--hidden');
                    cardActive.querySelector('.card-special-content').classList.remove('expanded');
                    cardActive.querySelector('.special-bg').classList.remove('expanded');
                    cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                    $('.card-active  .card-special-content')
                        .find('.special-bg')
                        .css('background-position', `0% 0%`);
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-size', '150%');
                } else if (flag == 2) {
                    cardActive.querySelector('.note1').classList.add('js--hidden');
                    cardActive.querySelector('.note3').classList.add('js--hidden');
                    cardActive.querySelector('.note2').classList.remove('js--hidden');
                    cardActive.querySelector('.special-note').classList.add('js--hidden');
                    cardActive.querySelector('.card-special-content').classList.remove('expanded');
                    cardActive.querySelector('.special-bg').classList.remove('expanded');
                    cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-position', `100% 70%`);
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-size', '150%');
                } else if (flag == 4) {
                    cardActive.querySelector('.note2').classList.add('js--hidden');
                    cardActive.querySelector('.note1').classList.add('js--hidden');
                    cardActive.querySelector('.note3').classList.remove('js--hidden');
                    cardActive.querySelector('.special-note').classList.add('js--hidden');
                    cardActive.querySelector('.card-special-content').classList.remove('expanded');
                    cardActive.querySelector('.special-bg').classList.remove('expanded');
                    cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-position', `50% 100%`);
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-size', '150%');
                }
                else if (flag == 6) {
                    cardActive.querySelector('.note2').classList.add('js--hidden');
                    cardActive.querySelector('.note1').classList.add('js--hidden');
                    cardActive.querySelector('.note3').classList.add('js--hidden');
                    cardActive.querySelector('.special-note').classList.remove('js--hidden');
                    cardActive.querySelector('.card-panel-section').classList.add('js--hidden');
                    cardActive.querySelector('.card-special-content').classList.add('expanded');
                    cardActive.querySelector('.special-bg').classList.add('expanded');
                    $('.card-active .card-special-content')
                        .find('.special-bg')
                        .css('background-size', 'cover');
                }
            })
        })
    })
} else {
    allCards.forEach(card => {
        card.addEventListener('click', () => {
            flag = 0;
            card.classList.add('card-active');
            main.classList.add('main--cardActive');
            cardActiveMain = document.querySelector('.card-active');
            cardSection = cardActiveMain.querySelector('.card-special-content');
            header.classList.remove('js--hidden')
            if (cardActiveMain.classList.contains('card--1')) {
                links[0].classList.add('header-link--active')
            } else if (cardActiveMain.classList.contains('card--2')) {
                links[1].classList.add('header-link--active')
            } else if (cardActiveMain.classList.contains('card--3')) {
                links[2].classList.add('header-link--active')
            } else if (cardActiveMain.classList.contains('card--4')) {
                links[3].classList.add('header-link--active')
            } else {
                links[4].classList.add('header-link--active')
            }
            allCards.forEach(inner_card => {
                if (!inner_card.classList.contains('card-active')) {
                    inner_card.classList.add('js--hidden-opacity');
                    inner_card.classList.add('maxWidthCard');
                }
            })
            function checkDirectionCard() {
                if (touchendY < touchstartY) {
                    flag++;

                    const cardActive = document.querySelector('.card-active');
                    if (flag == 0) {
                        console.log('hello');
                        cardActive.querySelector('.note2').classList.add('js--hidden');
                        cardActive.querySelector('.note3').classList.add('js--hidden');
                        cardActive.querySelector('.note1').classList.remove('js--hidden');
                        cardActive.querySelector('.special-note').classList.add('js--hidden');
                        cardActive.querySelector('.card-special-content').classList.remove('expanded');
                        cardActive.querySelector('.special-bg').classList.remove('expanded');
                        cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                        $('.card-active')
                            .find('.special-image--mobile')
                            .css('transform', `translateX(0%)`);
                    } else if (flag == 1) {
                        cardActive.querySelector('.note1').classList.add('js--hidden');
                        cardActive.querySelector('.note3').classList.add('js--hidden');
                        cardActive.querySelector('.note2').classList.remove('js--hidden');
                        cardActive.querySelector('.special-note').classList.add('js--hidden');
                        cardActive.querySelector('.card-special-content').classList.remove('expanded');
                        cardActive.querySelector('.special-bg').classList.remove('expanded');
                        cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                        $('.card-active')
                            .find('.special-image--mobile')
                            .css('transform', `translateX(-30%)`);
                    } else if (flag == 2) {
                        cardActive.querySelector('.note2').classList.add('js--hidden');
                        cardActive.querySelector('.note1').classList.add('js--hidden');
                        cardActive.querySelector('.note3').classList.remove('js--hidden');
                        cardActive.querySelector('.special-note').classList.add('js--hidden');
                        cardActive.querySelector('.card-special-content').classList.remove('expanded');
                        cardActive.querySelector('.special-bg').classList.remove('expanded');
                        cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                        $('.card-active')
                            .find('.special-image--mobile')
                            .css('transform', `translateX(-45%)`);
                    }
                    flag++;
                    console.log(flag);
                }
                if (touchendY > touchstartY) {
                    flag--;

                    if (flag == 0) {
                        cardActive.querySelector('.note2').classList.add('js--hidden');
                        cardActive.querySelector('.note3').classList.add('js--hidden');
                        cardActive.querySelector('.note1').classList.remove('js--hidden');
                        cardActive.querySelector('.special-note').classList.add('js--hidden');
                        cardActive.querySelector('.card-special-content').classList.remove('expanded');
                        cardActive.querySelector('.special-bg').classList.remove('expanded');
                        cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                        $('.card-active')
                            .find('.special-image--mobile')
                            .css('transform', `translateX(0%)`);
                    } else if (flag == 1) {
                        cardActive.querySelector('.note1').classList.add('js--hidden');
                        cardActive.querySelector('.note3').classList.add('js--hidden');
                        cardActive.querySelector('.note2').classList.remove('js--hidden');
                        cardActive.querySelector('.special-note').classList.add('js--hidden');
                        cardActive.querySelector('.card-special-content').classList.remove('expanded');
                        cardActive.querySelector('.special-bg').classList.remove('expanded');
                        cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                        $('.card-active')
                            .find('.special-image--mobile')
                            .css('transform', `translateX(-30%)`);
                    } else if (flag == 2) {
                        cardActive.querySelector('.note2').classList.add('js--hidden');
                        cardActive.querySelector('.note1').classList.add('js--hidden');
                        cardActive.querySelector('.note3').classList.remove('js--hidden');
                        cardActive.querySelector('.special-note').classList.add('js--hidden');
                        cardActive.querySelector('.card-special-content').classList.remove('expanded');
                        cardActive.querySelector('.special-bg').classList.remove('expanded');
                        cardActive.querySelector('.card-panel-section').classList.remove('js--hidden');
                        $('.card-active')
                            .find('.special-image--mobile')
                            .css('transform', `translateX(-45%)`);
                    }
                }
            }
        });

        cardSection.addEventListener('touchstart', e => {
            touchstartY = e.changedTouches[0].screenX
        })

        cardSection.addEventListener('touchend', e => {
            touchendY = e.changedTouches[0].screenX
            checkDirectionCard()
        })
    })
}
// })

links.forEach((link, index) => {
    link.addEventListener('click', () => {
        flag = 0;
        cardActiveMain = document.querySelector('.card-active');
        if (cardActiveMain.classList.contains('card--1')) {
            indexSpecial = 1;
        } else if (cardActiveMain.classList.contains('card--2')) {
            indexSpecial = 2;
        } else if (cardActiveMain.classList.contains('card--3')) {
            indexSpecial = 3;
        } else if (cardActiveMain.classList.contains('card--4')) {
            indexSpecial = 4;
        } else {
            indexSpecial = 5;
        }
        links.forEach((inner_link,) => {
            inner_link.classList.remove('header-link--active');
        });
        link.classList.add('header-link--active');
        cardActiveMain.classList.add('js--hidden');
        cardActiveMain.classList.remove('card-active');
        document.querySelector(`.card--${index + 1}`).classList.add('card-active');
        document.querySelector(`.card--${index + 1}`).classList.remove('js--hidden-opacity');
        document.querySelector(`.card--${index + 1}`).classList.remove('js--hidden');
        flag = 0;
        cardActiveMain = document.querySelector('.card-active');
        cardSection = cardActiveMain.querySelector('.card-special-content');
        if (cardActiveMain.classList.contains('card--1')) {
            links[0].classList.add('header-link--active')
        } else if (cardActiveMain.classList.contains('card--2')) {
            links[1].classList.add('header-link--active')
        } else if (cardActiveMain.classList.contains('card--3')) {
            links[2].classList.add('header-link--active')
        } else if (cardActiveMain.classList.contains('card--4')) {
            links[3].classList.add('header-link--active')
        } else {
            links[4].classList.add('header-link--active')
        }
    })
})
// }




// function scrollSpecial() {
//     var windowTop = $(window).scrollTop();
//     var elementTop = $('.card-special-content').offset().top;
//     var leftPosition = windowTop - elementTop + 55;
//     console.log(leftPosition);
//     var leftPositionBy1 = 0;
//     var leftPositionBy2 = 0;
//     var initScale = 200;
//     if (leftPosition < 10) {
//         leftPositionBy1 = leftPosition;
//         leftPositionBy2 = leftPosition * 0.5;
//         $('.card-special-content')
//             .find('.special-bg')
//             .css('background-position', `0% 0%`);
//     } else if (leftPosition < 120) {
//         leftPositionBy1 = leftPosition;
//         leftPositionBy2 = leftPosition * 0.5;
//         $('.card-special-content')
//             .find('.special-bg')
//             .css('background-position', `100% 70%`);
//     }
//     else if (leftPosition < 300) {
//         leftPositionBy1 = leftPosition;
//         leftPositionBy2 = leftPosition * 0.5;
//         $('.card-special-content')
//             .find('.special-bg')
//             .css('background-position', `50% -84%`);
//     } else {
//         console.log('hello');
//         $('.card-special-content')
//             .find('.special-bg')
//             .css({ 'background-size': 'cover' })
//         $('.card-active').css({ 'min-height': 'calc(100vh - 56px)' });
//         $('.card-active').css({ 'overflow': 'hidden' });
//         $('.card-special-content').css({ 'height': 'calc(100vh - 56px)' });
//         $('.card-special-content').css({ 'overflow': 'hidden' });
//         $('.special-bg').css({ 'min-height': 'calc(100vh - 56px)' });

//     }
// }
