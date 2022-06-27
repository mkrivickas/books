# books

// Bibliotekos knygų rezervacijos sistema

Atsidarome operacinės sistemos terminalą (PowerShell, iTerm2, ar pan.) ir patikriname ar
idiegtas irankis npm, komanda `npm -v`. Patikriname ar idiegtas Node.js komanda `node -v`. Jei įrankių nėra, juos atitinkamai susidiegiame šiomis komandomis:

`npm install [<package-spec> ...]` ir
`sudo apt install nodejs`

Susikuriame kompiuteryje lokalią direktorija:
`mkdir books`

Klonuojame repozitoriją į lokalią direktoriją komanda:

`git clone git@github.com:mkrivickas/books.git`

Pereiname i kataloga back komandos `cd back` pagalba ir sudiegiame priklausomybes komanda `npm i`.

Grįžę į pagrindinį katalogą komandos `cd ..`pagalba, vėl sudiegiame priklausomybes komanda `npm i`.

Viską sudiegę, atidarome katalogus back ir front atskiruose terminaluose ir paleidžiame projektą komandų `npm start`pagalba abiejuose terminaluose.

Atsidariusiame lange, kurio nuoroda: `http://localhost:3000`, matome registracijos ir prisijungimo formą.

Registruojame vartotoją po pavadinimu `Registracija` ir spaudžiame mygtuką `Registracija`.

Norėdami prisijungti prie bibliotekos rezervacijos sistemos, po pavadinimu `Prisijungimas`, įvedame registruoto vartotojo vardą ir registracijos slaptažodį; tuomet spaudžiame mygtuką `Prisijungti`. Jeigu veiksmai atlikti teisingai, lange turėtų pasirodyti pranešimas `Sveiki, <vartotojas>`.
