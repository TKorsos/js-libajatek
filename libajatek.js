let libajatekContainer = document.querySelector("#libajatek");
const dobokocka = [1, 2, 3, 4, 5, 6];
let jatekter = 63;
let jatekosHely = 1;
let dobokockaSzam = null;

function libaJatek() {

    libajatekContainer.innerHTML += '<div>A játékos a ' + jatekosHely + '. mezőn helyezkedik el.</div><hr>';

    for (let i = 0; i < 100; ++i) {
        let veletlenSzamIndex = Math.floor(Math.random() * dobokocka.length);
        dobokockaSzam = dobokocka[veletlenSzamIndex];

        if (jatekosHely === 6 || jatekosHely === 42 || jatekosHely === 58) {
            if (jatekosHely === 6) {
                jatekosHely = 12;
                jatekosHely += dobokockaSzam;
            }
            else if (jatekosHely === 42) {
                jatekosHely = 30;
                jatekosHely += dobokockaSzam;
            }
            else if (jatekosHely === 58) {
                jatekosHely = 1;
                jatekosHely += dobokockaSzam;
            }
        }
        else {
            if (jatekosHely + dobokockaSzam > jatekter) {
                let visszalepes = jatekosHely + dobokockaSzam - jatekter;
                jatekosHely = jatekter - visszalepes;
            }
            else {
                jatekosHely += dobokockaSzam;
            }
        }

        libajatekContainer.innerHTML += `<div><div>${i + 1}. dobás</div>`;
        libajatekContainer.innerHTML += `<div>A dobott szám értéke: ${dobokockaSzam}</div>`;
        if (jatekosHely === jatekter) {
            libajatekContainer.innerHTML += `<div>Gratulálok! Célbaértél így megnyerted a játékot!</div></div>`;
        }
        else if (jatekosHely === 6) {
            libajatekContainer.innerHTML += `<div>A játékos a ${jatekosHely}. mezőn helyezkedik el.</div></div>`;
            libajatekContainer.innerHTML += `<div>A játékos előrelépett a 12. mezőre.</div></div><hr>`;
        }
        else if (jatekosHely === 42) {
            libajatekContainer.innerHTML += `<div>A játékos a ${jatekosHely}. mezőn helyezkedik el.</div></div>`;
            libajatekContainer.innerHTML += `<div>A játékos visszacsúszott a 30. mezőre.</div></div><hr>`;
        }
        else if (jatekosHely === 58) {
            libajatekContainer.innerHTML += `<div>A játékos a ${jatekosHely}. mezőn helyezkedik el.</div></div>`;
            libajatekContainer.innerHTML += `<div>A játékos visszacsúszott a 1. mezőre.</div></div><hr>`;
        }
        else {
            libajatekContainer.innerHTML += `<div>A játékos a ${jatekosHely}. mezőn helyezkedik el.</div></div><hr>`;
        }

        if (jatekosHely >= jatekter) {
            break;
        }    
    }

}

libaJatek();