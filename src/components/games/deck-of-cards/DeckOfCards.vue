<template>
    <div>
        <!-- Go Fish Modals -->
        <div id="goFishModal" class="modal">
            <div id="goFishModal-box" class="modal-box">
                <h2>You are set up to play Go Fish!</h2>
                <h3>Would you like to play?</h3>
                <div id="goFishModalOptions" class="modal-boxSub">
                    <button id="goFishYes">Yes</button>
                    <button id="goFishNo">No</button>
                </div>
            </div>
        </div>

        <div id="askForModal" class="modal">
            <div id="askForModal-box" class="modal-box">
                <h2>What Would you like to ask for</h2>
                <div id="askForOptions" class="modal-boxSub">
                </div>
            </div>
        </div>

        <div id="computerSaysModal" class="modal">
            <div id="computerSays-box" class="modal-box">
                <h2>Computer Says:</h2>
                <div id="computerSaysModalSub" class="modal-boxSub">
                </div>
                <button id="goFish">Draw From Deck</button>
            </div>
        </div>

        <div id="noMatch" class="modal">
            <div id="noMatch-box" class="modal-box">
                <h2>You dont have any!</h2>
                <div id="computerSaysModalSub" class="modal-boxSub">
                    Computer draws a card.
                </div>
                <button id="beginTurn">Begin Your Turn</button>
            </div>
        </div>

        <div id="computerTurnModal" class="modal">
            <div id="computerTurnModal-box" class="modal-box">
                <h2>Computer asks for:</h2>
                <div id="computerTurnModalSub" class="modal-boxSub">
                </div>
                <button id="give">Give Card</button>
            </div>
        </div>
        <!-- War Modals -->
        <div id="warModal" class="modal">
            <div id="warModal-box" class="modal-box">
                <h2>You are set up to play War!</h2>
                <h3>Would you like to play?</h3>
                <div id="warOptions" class="modal-boxSub">
                    <button id="warYes">Yes</button>
                    <button id="warNo">No</button>
                </div>
            </div>
        </div>

        <!-- Select Deck Modal -->

        <div id="modal" class="modal">
            <div id="modal-box" class="modal-box">
                <h2>Select Your Deck</h2>
                <div id="carouselContainer">
                    <button id="previous">&lt;</button>
                    <div id="carousel-images">
                        <img src="./deckimgs/card-back1.png" alt="cardback-1" class="carouselImages" />
                        <img src="./deckimgs/card-back2.png" alt="cardback-2" class="carouselImages" />
                        <img src="./deckimgs/card-back3.png" alt="cardback-3" class="carouselImages" />
                        <img src="./deckimgs/card-back4.png" alt="cardback-4" class="carouselImages" />
                        <img src="./deckimgs/card-back5.jpg" alt="cardback-5" class="carouselImages" />
                        <img src="./deckimgs/card-back6.png" alt="cardback-6" class="carouselImages" />
                    </div>
                    <button id="next">></button>
                </div>
                <button id="selectDeck">Select</button>
            </div>
        </div>

        <!-- Main Content -->
        <div>Left click on deck to deal to yourself</div>
        <div>Right click on deck to deal across the table</div>
        <div>Left click on a card to discard</div>
        <div class="mainContainer">
            <div class="container" id="computer">
            </div>
            <button id="reset">Reset</button>
            <button id="war" class="button">War</button>
            <button id="nextRound">Next Round</button>
            <div class="pileContainer">
                <div id="center">
                    <div id="cardzz">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Card_back_10.svg/1280px-Card_back_10.svg.png"
                            alt="card back" id="cardBack" />
                        <div id="discardPile">
                            <span id="discardPileTitle">Discard Pile:</span>
                            <div id="discardPileSub">
                            </div>
                        </div>

                    </div>
                    <div id="battlefield">
                        <div id="userWar">
                            <h2>Your Card and <span id="userScore"></span></h2>

                        </div>
                        <div id="computerWar">
                            <h2>Computer Card and <span id="computerScore"></span></h2>
                        </div>
                    </div>
                    <div id="buttons">
                        <button id="shuffle" class="button">Shuffle</button>
                        <button id="dealCards" class="button">Deal Hand</button>
                    </div>
                </div>
            </div>
            <button id="openModal">Select Deck</button>
            <div class="container" id="user">
            </div>
        </div>
    </div>
</template>
  
<script>
// import AlienAttack from "./AlienAttack.vue";
import $ from 'jquery'

export default {
    name: "DeckOfCards",
    components: {},
    created() { },
    mounted() {


        //.ajax junk:
        const run = () => {
            $.ajax({
                url: 'https://deckofcardsapi.com/api/deck/new/'
            }).then(
                (deckinit) => {
                    // console.log(deck.deck_id);
                    getDeck(deckinit.deck_id);
                },
                (error) => {
                    console.log('error: ', error);
                })
            const getDeck = (deckID) => {
                $.ajax({
                    url: `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=52` //draws 52 cards from deck with unique deckID
                }).then(
                    (data) => {
                        // creates global deck variable
                        deck.cards = data.cards
                        console.log(deck, 'initial deck');
                    },
                    () => {
                        console.log('error');
                    })
            }
        }
        //Deck Piles (Global):
        let deck = {
            cards: []
        }
        let discardPile = {
            cards: []
        }

        //Functions:
        const shuffle = (array) => {
            // shuffledDeck.cards = []
            // console.log(shuffledDeck);
            // for (let i = deck.cards.length; i > 0; i--) {
            //   const cardNum = Math.floor(Math.random() * i)
            //   shuffledDeck.cards.push(deck.cards[cardNum])
            //   deck.cards.splice(cardNum, 1)
            // }
            // for (let i = deck.length; i > 0 ; i--) {
            //   let j = Math.floor(Math.random() * (i))
            //   [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]]
            // }
            // Durstenfeld shuffle http://thenewcode.com/1095/Shuffling-and-Sorting-JavaScript-Arrays :
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        const drawCardUser = (num) => {
            $('#user').css('visibility', 'visible')
            for (let i = 0; i < num; i++) {
                const $card = $('<img class = "card">').attr('src', deck.cards[0].image).attr('id', deck.cards[0].code).attr('srcimg', deck.cards[0].image).attr('value', deck.cards[0].value)
                $('#user').prepend($card)
                discardPile.cards.push(deck.cards.splice(0, 1)[0]);//since .splice returns array and only splilcing one object use [0] to select that object
                removeDeckImg()
            }
        }
        const drawCardComputer = (num) => {
            $('#computer').css('visibility', 'visible')
            for (let i = 0; i < num; i++) {
                const $card = $('<img class = "card">').attr('src', $('#carousel-images').children().eq(currentImgIndex)[0].attributes[0].nodeValue).attr('id', deck.cards[0].code).attr('srcimg', deck.cards[0].image).attr('value', deck.cards[0].value)
                $('#computer').prepend($card)
                discardPile.cards.push(deck.cards.splice(0, 1)[0]);//since .splice returns array and only splilcing one object use [0] to select that object
                removeDeckImg()
            }
        }
        const dealCards = (num, user, image, srcimg) => {
            $(user).css('visibility', 'visible')
            for (let i = 0; i < num; i++) {
                const $card = $('<img class = "card">').attr('src', image).attr('srcimg', srcimg).attr('id', deck.cards[0].code).attr('value', deck.cards[0].value)
                $(user).prepend($card)
                discardPile.cards.push(deck.cards.splice(0, 1)[0]);//since .splice returns array and only splilcing one object use [0] to select that object in the array
                removeDeckImg()
            }
        }
        const removeDeckImg = () => {
            if (discardPile.cards.length === 52) {
                $('#cardzz').children().eq(0).css('display', 'none')
                console.log('asdfasd');
            }
        }
        const discard = (event) => {
            $('#discardPile').css('display', 'flex')
            const $discardPile = $('#discardPileSub')
            // console.log(discardPile, 'disccardPile');
            $discardPile.prepend($(event.target).removeClass('card').addClass('cardDiscard').css('position', 'static').css('z-index', '0'))
            if ($('#buttons').children().eq(2).length === 0) {
                $('#buttons').append('<button id="shuffleDiscard" class="button">Shuffle Discard Pile</button>')
            } else {
                return
            }
        }
        const openModal = () => {
            $('#modal').css('display', 'flex')
        }
        const initGoFish = () => {
            if ($('#computer').children().length === 7 && $('#user').children().length === 7 && discardPile.cards.length === 14) {
                $('#goFishModal').css('display', 'flex')
                console.log('init go fish');
            }
        }
        const playGoFish = () => {
            const userTurn = () => {
                console.log('Play Go fish!');
                $('#askForModal').css('display', 'flex')
                $('#user').children().clone().removeClass().addClass('option').appendTo($('#askForOptions'))
                $('#askForOptions').on('click', '.option', (event) => {
                    console.log($(event.target)[0].id.charAt(0));
                    for (let i = 0; i < $('#computer').children().length; i++) {
                        if ($('#computer').children().eq(i)[0].id.charAt(0) === $(event.target)[0].id.charAt(0)) {
                            // console.log($('#computer').children().eq(i)[0].id.charAt(0), 'computer id');
                            // console.log($(event.target)[0].id.charAt(0), 'event target id');
                            $('#user').prepend($('#computer').children().eq(i).removeAttr('src').attr('src', $('#computer').children().eq(i)[0].attributes.srcimg.nodeValue))
                            $('#askForModal').css('display', 'none')
                            console.log('its a match');
                            return
                        } else {
                            $('#askForModal').css('display', 'none')
                            $('#computerSaysModal').css('display', 'flex')
                            $('#computerSaysModalSub').text('Go Fish!')
                            $('#goFish').on('click', () => {
                                drawCardUser(1)
                                $('#computerSaysModal').css('display', 'none')
                                computerTurn()
                            })
                            break
                        }
                    }
                })
            }
            const computerTurn = () => {
                let randomIndexNum = Math.floor(Math.random() * $('#computer').children().length - 1)
                let choice = $('#computer').children().eq(randomIndexNum)[0].id.charAt(0)
                $('#computerTurnModal').css('display', 'flex')
                $('#computerTurnModalSub').append($('<h1>').text(choice))
                $('#give').on('click', () => {
                    for (let i = 0; i < $('#user').children().length; i++) {
                        if (choice === $('#user').children().eq(i)[0].id.charAt(0)) {
                            $('#computer').prepend($('#user').children().eq(i))
                            $('#computerTurnModal').css('display', 'none')
                            // $('#computer').children().eq(0).removeAttr('src').attr('src', $('#carousel-images').children().eq(currentImgIndex)[0].attributes[0].nodeValue)
                            return
                        } else {
                            $('#computerTurnModal').css('display', 'none')
                            $('#noMatch').css('display', 'flex')
                            $('#beginTurn').on('click', () => {
                                drawCardComputer(1)
                                $('#noMatch').css('display', 'none')
                            })
                            break
                        }

                    }
                })
            }
            userTurn()
        }
        const initWar = () => {
            if ($('#computer').children().length === 26 && $('#user').children().length === 26) {
                $('#warModal').css('display', 'flex')
                console.log('init go fish');
            }
        }
        const playWar = () => {
            console.log('play war!');

            let userScore = 26
            let computerScore = 26

            const nextRound = () => {
                $('#userWar').append($('#user').children().eq(0).css('position', 'static').css('width', '100%').attr('src', $('#user').children().eq(0)[0].attributes[3].nodeValue))

                $('#computerWar').append($('#computer').children().eq(0).css('position', 'static').css('width', '100%').attr('src', $('#computer').children().eq(0)[0].attributes[3].nodeValue))

            }

            $('#war').on('click', () => {
                if ($('#user').children().eq(1)[0].attributes[4].nodeValue > $('#computer').children().eq(1)[0].attributes[4].nodeValue) {
                    alert('User Wins')
                    $('#userWar').children().eq(1).css('width', '8%').appendTo($('#user'))
                    $('#computerWar').children().eq(1).css('width', '8%').appendTo($('#user'))
                    userScore++
                    computerScore--
                } else if ($('#user').children().eq(1)[0].attributes[4].nodeValue < $('#computer').children().eq(1)[0].attributes[4].nodeValue) {
                    alert('Computer Wins')
                    $('#userWar').children().eq(1).css('width', '8%').appendTo($('#computer'))
                    $('#computerWar').children().eq(1).css('width', '8%').appendTo($('#computer'))
                    userScore--
                    computerScore++
                    $("#userScore")[0].innerHTML = "Score: " + userScore
                    $("#computerScore")[0].innerHTML = "Score: " + computerScore
                } else if ($('#user').children().eq(1)[0].attributes[4].nodeValue == $('#computer').children().eq(1)[0].attributes[4].nodeValue) {
                    alert('its a tie. Draw again')
                    $('#userWar').children().eq(1).css('width', '8%').appendTo($('#user'))
                    $('#computerWar').children().eq(1).css('width', '8%').appendTo($('#computer'))
                }
            })

            $('#nextRound').on('click', () => {
                nextRound()
            })

        }


        //Event listeners
        // open modal on click
        $('#openModal').on('click', openModal)
        // close modal and select deck on click
        $('#selectDeck').on('click', () => {
            $('#modal').css('display', 'none')
        })
        // shuffle deck
        $('#shuffle').on('click', () => {
            $('#cardBack').addClass('cardBackShuffle').delay(1001).queue(() => {
                $('#cardBack').removeClass('cardBackShuffle').dequeue()
            })
            shuffle(deck.cards)
            console.log(deck, 'deck shuffled')
        })
        // deal individual card to user on click
        $('#cardBack').on('click', () => {
            let num = 1
            dealCards(num, $('#user'), deck.cards[0].image, deck.cards[0].image)
            initGoFish()
            initWar()
        })
        // right click to deal top card to computer
        $('#cardBack').on('contextmenu', (event) => {
            event.preventDefault()
            let num = 1
            dealCards(num, $('#computer'), $('#carousel-images').children().eq(currentImgIndex)[0].attributes[0].nodeValue, deck.cards[0].image);
            initGoFish()
            initWar()
        })
        // deal x amount of cards to user
        $('#dealCards').on('click', () => {
            let num = prompt('How many cards do you want to deal?', 'enter a number')
            // dealCards(num, $('#user'), deck.cards.splice(0, 1)[0], deck.cards.splice(0, 1)[0].image)
            // console.log(deck.cards[0].image);
            // debugger;
            // dealCards(num, $('#computer'), $('#carousel-images').children().eq(currentImgIndex)[0].attributes[0].nodeValue, deck.cards.splice(0, 1)[0].image)
            drawCardUser(num)
            drawCardComputer(num)
            initGoFish()
            initWar()
        })
        // discard selected card from user container
        $('#user').on('click', '.card', () => {
            discard(event)
            $(event.target).css('transform', 'none')
        })
        // discard selected card from computer container
        $('#computer').on('click', '.card', () => {
            discard(event)
            $(event.target).css('transform', 'none')
            $(event.target).attr('src', $(event.target).attr('srcimg'))
        })
        // shuffle discard pile and re append shuffled imgs
        $('#buttons').on('click', '#shuffleDiscard', () => {
            shuffle(discardPile.cards)//shuffle discard array
            $('#discardPileSub').children().remove()//remove imgs from discard pile
            for (let i = 0; i < discardPile.cards.length; i++) { //append shuffled array imgs to discard pile
                const $discardPile = $('#discardPileSub')
                const $discardCard = $('<img>').attr('src', discardPile.cards[i].image).attr('id', discardPile.cards[i].code).addClass('cardDiscard')
                $discardPile.prepend($discardCard)
            }
            console.log(discardPile.cards, 'discard shuffled')
        })
        // scale cards on hover
        $('.mainContainer').on('mouseenter', '.card', (event) => {
            $(event.target).css('transform', 'scale(1.10)')
        })
        // makes cards scale(1.1x) on hover
        $('.mainContainer').on('mouseleave', '.card', (event) => {
            $(event.target).css('transform', 'none')
        })
        // reset deck
        $('#reset').on('click', () => {
            $('#user').children().remove()
            $('#computer').children().remove()
            $('#user').css('position', 'static')
            $('#computer').css('position', 'static')
            $('#discardPileSub').children().remove()
            $('#discardPile').css('display', 'none')
            $('#shuffleDiscard').remove()
            $('#cardzz').children().eq(0).css('display', 'inline')
            $('*').css('background-image', 'none')
            $('.modal-box').css('background-color', 'white')
            $('#warHeader').remove()
            $('#dealCards').css('display', 'inline-block')
            $('#shuffle').css('display', 'inline-block')
            $('#openModal').css('display', 'inline-block')
            $('#battlefield').css('display', 'none')
            $('#war').css('display', 'none')
            $('#nextRound').css('display', 'none')
            discardPile.cards = []
            deck.cards = []
            console.log(discardPile);
            console.log(deck);
            run()
        })

        //Carousel event listeners
        let currentImgIndex = 0;
        let lastImgIndex = $('#carousel-images').children().length - 1
        const display = (display) => {
            $('#carousel-images').children().eq(currentImgIndex).css('display', display)
        }
        $('#next').on('click', () => {
            display('none')
            if (currentImgIndex < lastImgIndex) {
                currentImgIndex++
            } else {
                currentImgIndex = 0
            }
            display('block')
        })
        $('#previous').on('click', () => {
            display('none')
            if (currentImgIndex > 0) {
                currentImgIndex--
            } else {
                currentImgIndex = lastImgIndex
            }
            display('block')
        })
        //select deck img
        $('#selectDeck').on('click', () => {
            const src = $('#carousel-images').children().eq(currentImgIndex)[0].attributes[0].nodeValue
            $('#cardzz').children().eq(0).removeAttr('src')
            $('#cardzz').children().eq(0).attr('src', src)
            $('#computer').children().attr('src', src)
        })

        //////////Go Fish Initiation////////////////////
        //Choose to play go Fish
        $('#goFishYes').on('click', () => {
            $('#goFishModal').css('display', 'none')
            playGoFish()
        })
        //Choose NOT to play go Fish
        $('#goFishNo').on('click', () => {
            $('#goFishModal').css('display', 'none')
        })

        //////////War Initiation////////////////////
        //Choose to play WAR!
        $('#warYes').on('click', () => {
            $('#warModal').css('display', 'none')
            $('#user').css('position', 'relative')
            $('#computer').css('position', 'relative')
            $('*').css('background-color', 'none')
            $('*').css('background-image', 'url("https://cdn.pixabay.com/photo/2013/07/13/12/05/army-159125_1280.png")')
            $('button').css('background-image', 'none').css('background-color', '#fffff1')
            $('body').prepend($('<h1 id = "warHeader">WAR!!!</h1>'))
            $('#dealCards').css('display', 'none')
            $('#shuffle').css('display', 'none')
            $('#openModal').css('display', 'none')
            $('#battlefield').css('display', 'flex')
            $('#war').css('display', 'inline-block')
            $('#computer').off('click', '.card')
            $('#nextRound').css('display', 'inline-block')

            for (let i = 0; i < 26; i++) {
                $('#user').children().eq(i).css('z-index', i.toString()).css('position', 'absolute').attr('src', $('#carousel-images').children().eq(currentImgIndex)[0].attributes[0].nodeValue)
                $('#computer').children().eq(i).css('z-index', i.toString()).css('position', 'absolute')
            }
            playWar()
        })
        //Choose NOT to war
        $('#warNo').on('click', () => {
            $('#warModal').css('display', 'none')
        })
        // On Load
        run()
        console.log(deck);

    },
    computed: {},
    data: () => {
        return {};
    },
    methods: {
    },
};
</script>
  
<style lang="scss">
@import '../../../styles/global.scss';
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');


body>h1 {
    background-image: url("https://cdn.pixabay.com/photo/2013/07/13/12/05/army-159125_1280.png");
    font-size: 5em;
    text-align: center;
    color: white;
}

/*Go Fish Modal */
.modal {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 1px solid black;
    z-index: 1;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.modal-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 50vh;
    border-radius: 5px;
    box-shadow: -4px 4px 5px rgba(0, 0, 0, 0.7);
}

.modal-boxSub {
    display: flex;
    justify-content: space-between;
}

#goFishModalOptions>button {
    margin: 1%
}

/*Select Deck Modal */
#modal {
    display: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}

#modal-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 50vh;
    border-radius: 5px;
    box-shadow: -4px 4px 5px rgba(0, 0, 0, 0.7);
}

#modal-box>button,
#goFishModalOptions>button {
    width: 10vw;
    align-self: center;
    margin-bottom: 2%;
    border-radius: 100px;
    background-color: inherit;
}

#modal-box>h2 {
    background-color: inherit;
    font-size: 2rem;
}

#carouselContainer {
    display: flex;
    background-color: inherit;
}

#carouselContainer>button {
    width: 5vh;
    height: 5vh;
    align-self: center;
    margin: 5%;
    border-radius: 100px;
    background-color: inherit;
}

#carousel-images {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2%;
    /* border: 5px solid green; */
    background-color: inherit;
}

#previous,
#next {
    height: 10vh
}

#carousel-images img:first-of-type {
    display: block;
}

#carousel-images img {
    display: none;
}

.carouselImages {
    width: 100%;
    background-color: inherit;
    width: 100%;
    height: 100%;
}

/*askForModal*/
#askForModal {
    display: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

#askForModal-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 95vw;
    border-radius: 5px;
    box-shadow: -4px 4px 5px rgba(0, 0, 0, 0.7);
}

#askForOptions {
    width: 95%;
    display: flex;
    overflow: auto;
    overflow-y: hidden;
    justify-content: space-around;
}

#askForOptions>img {
    width: 10%;
    height: auto;
    margin: 1%
}


.mainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */
}

.container {
    /* border: 1px solid black; */
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95vw;
    height: 25vh;
    flex-wrap: wrap;
    overflow: auto;
    overflow-x: hidden;
}

#reset {
    border-radius: 50px
}

.cardBackShuffle {
    width: 25%;
    align-self: center;
    animation: shuffle;
    animation-duration: 1s;
}

@keyframes shuffle {
    0% {
        transform: rotate(10deg);
    }

    5% {
        transform: rotate(-10deg);
    }

    10% {
        transform: rotate(5deg);
    }

    15% {
        transform: rotate(-5deg);
    }

    20% {
        transform: rotate(10deg);
    }

    25% {
        transform: rotate(-10deg);
    }

    30% {
        transform: rotate(5deg);
    }

    35% {
        transform: rotate(-5deg);
    }

    40% {
        transform: rotate(10deg);
    }

    45% {
        transform: rotate(-10deg);
    }

    50% {
        transform: rotate(5deg);
    }

    55% {
        transform: rotate(-5deg);
    }

    60% {
        transform: rotate(10deg);
    }

    65% {
        transform: rotate(-10deg);
    }

    70% {
        transform: rotate(5deg);
    }

    75% {
        transform: rotate(-5deg);
    }

    80% {
        transform: rotate(10deg);
    }

    85% {
        transform: rotate(-10deg);
    }

    90% {
        transform: rotate(5deg);
    }

    95% {
        transform: rotate(-5deg);
    }

    100% {
        transform: rotate(10deg);
    }
}

.button {
    width: 10vw;
    align-self: center;
    margin: 5%;
    text-align: center;
    border-radius: 100px;
}

#openModal {
    width: 10vw;
    align-items: center;
    border-radius: 100px;
}

#battlefield {
    display: none;
    justify-content: space-between;
}

#userWar,
#computerWar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5%;
    width: 25vw;
    height: auto;
}

#userWar>h2,
#computerWar>h2 {
    color: white;
    font-size: 2rem;
}

#war {
    display: none;
    margin: 1%;
}

#nextRound {
    display: none;
    border-radius: 100px;
}

.card {
    height: 85%;
    width: auto;
    margin: 1%
}

.cardDiscard {
    display: flex;
    width: 100%;
    height: 100%;
}

#cardBack {
    width: 25%;
    align-self: center;
    margin: 1%;
}

.pileContainer {
    display: flex;
    height: 25%;
    justify-content: space-between;
    align-items: center;
}

#center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25%;
    /* border: 10px solid black; */
}

#buttons {
    display: flex;
    justify-content: center;
    /* margin: 1%; */
}

#cardzz {
    display: flex;
    justify-content: center;

}

#discardPile {
    display: none;
    flex-direction: column;
    width: 25%;
    height: 100%;
    align-self: center;
}

#discardPileSub {
    display: flex;
    align-self: center;
    margin: 1%;
    overflow: auto;
}

#discardPileTitle {
    text-align: center;
}

@media (max-width: 700px) {
    .card {
        width: 20%;
    }

    button {
        font-size: .5rem;
    }
}
</style>