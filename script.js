
const user = ['J.S. 🧔🏻‍♂️', 'A.S. 🧔🏻‍♂️', 'M.P. 👩🏼', 'P.S. 🧑🏼‍🦲'];
const statusIcon = ['✅', '🚫', '🚀', '🤝'];
const prio = ['wichtig', 'unwichtig', 'mittel', 'irgendwann'];
let counter = 0;

/* ÖFFNEN & SCHLIE?EN DES MODALS */

const modalOeffnen = () => {
    document.getElementById('wrapper').style.visibility = 'visible';
}

const modalSchliessen = () => {
    document.getElementById('wrapper').style.visibility = 'hidden';
}


/* COUNTER FUNKTION */


const countUp = () => {
    let newCount;

    console.log(counter.toString().length)

    if (counter.toString().length === 1) {
        newCount = `00${counter}`;
    }
    if (counter.toString().length === 2) {
        newCount =  `0${counter}`;
    }
    if (counter.toString().length === 3) {
        newCount = counter;
    }

    
    counter += 1; 
   
    return newCount
};





/* LISTEN ELEMENT ERSTELLEN */



const createHtml = () => {

    /* SAMMELN ALLER DATEN*/


    let objekt = document.getElementById('objekt-input').value;
    console.log(objekt)

    let title = document.getElementById('title-input').value;
    console.log(title)

    let text = document.getElementById('info-text-area').value;


    const dateNow = new Date();

    let deadline = document.getElementById('deadline').value;

    let prio = document.getElementById('prioritaet').value;
    
    let sendmail = document.getElementById('send-mail');
    

    /* SAMMELN ALLER DATEN*/
 
    
    if (sendmail.checked == true){
        document.location = 'mailto:containerkid@gmail.com?subject=Auftrag'+ objekt +'&body='+ text;
    }

    /* ZUWEISUNG*/
    let mitarbeiterAS = document.getElementById('mitarbeiter-checker-andreas');
    let mitarbeiterJS = document.getElementById('mitarbeiter-checker-jesus');
    let mitarbeiterMP = document.getElementById('mitarbeiter-checker-michaela');

    let mitarbeiter = '';
    let mitarbeiterID  = '';

    if (mitarbeiterAS.checked == true){
        mitarbeiter = 'A.S. 🧔🏻‍♂️'
        mitarbeiterID = 'andreas';
    };

    if (mitarbeiterJS.checked == true){
        mitarbeiter = 'J.S. 🧔🏻‍♂️'
        mitarbeiterID = 'jesus';
    };

    if (mitarbeiterMP.checked == true){
        mitarbeiter = 'M.P. 👩🏼'
        mitarbeiterID = 'michaela';
    };

    let newNum = countUp();

    const neueSpalte = document.createElement('div');
    neueSpalte.className = 'table-element'
    neueSpalte.innerHTML = `

    <div class="auftrags-nummer">
        <p>${newNum}</p>
    </div>

    <div class="objekt">
        <p>${objekt}</p>
    </div>

    <div class="title">
        <p>${title}</p>
    </div>

    <div class="trelement">
        <p>🆕</p>
    </div>

    <div class="datum">
        <p>${dateNow.getDay()}.${dateNow.getMonth()}.${dateNow.getFullYear()}</p>
    </div>

    <div class="deadline">
        <p>${deadline}</p>
    </div>

    <div class="zugewiesen" id="${mitarbeiterID}">
        <p>${mitarbeiter}</p>
    </div>

    <div class="trelement option">

        <div class="option-button-select">
            <span>...</span>
        </div>

        <div class="option-button-delete">
            <span>X</span>
        </div>
    </div>

    <div class="trelement ${prio}">
    </div>

`;

    return neueSpalte
}

/* EINFÜGEN DES NEUEN LISTEN ELEMENTS */


const einfügen = (element) => {
   document.getElementById('table-content').append(element);
}





/* AUFTRAG ANLEGEN */

const resetModal = () => {
    document.getElementById('objekt-input').value = "";
    document.getElementById('title-input').value = "";
    document.getElementById('deadline').value = "";
    document.getElementById('prioritaet').value = "";
    document.getElementById('send-mail').checked = false;
    document.getElementById('mitarbeiter-checker-andreas').checked = false;
    document.getElementById('mitarbeiter-checker-jesus').checked = false;
    document.getElementById('mitarbeiter-checker-michaela').checked = false;
}
/* AUFTRAG ANLEGEN */

const neuerAuftrag = () => {

    const element = createHtml();
    einfügen(element);
    modalSchliessen();
    resetModal()

}

/*INSPECT*/

/*CHANGE / ADD INFO*/

/*DELETE*/

/*FILTER*/

const filter = () => {
    
}
