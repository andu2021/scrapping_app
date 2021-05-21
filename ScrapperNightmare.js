const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});

const selector = 'index:j_idt56_body'


function buyingRate(date = '19/04/2008') {
    nightmare
    .goto('https://www.nbs.rs/kursnaListaModul/inputPeriod.faces?lang=eng') //navigates to google
    .type('[id="inputPeriod:Od"]', '')
    .type('[id="inputPeriod:Od"]', date)
    .type('[id="inputPeriod:Do"]', '')
    .type('[id="inputPeriod:Do"]', date)
    .click('[name="inputPeriod:buttonShow"]')
    .wait(4000)
    .evaluate(selector => {
        // now we're executing inside the browser scope.
        return document.getElementById(selector).innerText
    }, selector) // <-- that's how you pass parameters from Node scope to browser scope
    .then(text => {
        console.log(text.substring(0,27))
    });
}

buyingRate()
