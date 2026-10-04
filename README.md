# Zangavond

Een eenvoudige, mobielvriendelijke website om tijdens een zangavond liedjes te zoeken en teksten te bekijken. De website gebruikt alleen HTML, CSS en JavaScript en werkt zonder backend. Alle liedgegevens staan in `liedjes.js`.

De vormgeving gebruikt een warme, donkere Worship Night-sfeer met een eigen achtergrondfoto. Alleen de liederen met een vetgedrukte titel uit de aangeleverde setlist zijn opgenomen, in dezelfde volgorde.

## Liedjes beheren

Open `liedjes.js`. Ieder lied heeft een nummer, een titel en de volledige tekst. De huidige setlist bevat 12 liederen.

### 1. Een nieuw lied toevoegen

Voeg binnen de `window.LIEDJES`-lijst een object toe met deze drie velden:

```js
{
  nummer: "14",
  titel: "Titel van het lied",
  tekst: `Eerste regel van de tekst.
Tweede regel.

Een lege regel scheidt coupletten.`
}
```

Zet een komma tussen dit object en het volgende lied. Gebruik een uniek nummer. Sla `liedjes.js` op; de website leest dit bestand automatisch in.

### 2. Een liedtekst wijzigen

Zoek in `liedjes.js` het lied op aan de hand van het nummer of de titel. Pas alleen de waarde van `tekst` aan en sla het bestand op. Laat de aanhalingstekens en komma's staan.

### 3. Een lied verwijderen

Verwijder in `liedjes.js` het hele object van het lied, inclusief de komma die bij dat object hoort. Laat de vierkante haken van `window.LIEDJES = [ ... ];` staan.

### 4. De volgorde wijzigen

Verplaats de volledige liedobjecten binnen `liedjes.js` naar de gewenste volgorde. De lijst op de website volgt dezelfde volgorde.

## Lokaal bekijken

1. Bewaar alle bestanden in dezelfde map.
2. Open `index.html` in een moderne browser. Meestal werkt dat direct.
3. Als je browser lokale bestanden beperkt, open dan een terminal in deze map en voer `python -m http.server 8000` uit.
4. Bezoek `http://localhost:8000` in je browser. Stop de lokale server met `Ctrl+C`.

## Publiceren via GitHub Pages

### 5. Het project op GitHub zetten

1. Maak of open een GitHub-account op [github.com](https://github.com/).
2. Maak een nieuwe repository, bijvoorbeeld `zangavond`. Voor een openbare website moet de repository publiek zijn.
3. Upload de inhoud van deze map naar de hoofdmap van de repository. `index.html` moet direct in die hoofdmap staan, naast `style.css`, `script.js` en `liedjes.js`.
4. Sla de wijzigingen op GitHub op (commit ze naar de standaardbranch, meestal `main`).

### 6. GitHub Pages activeren

1. Open de repository op GitHub en kies **Settings**.
2. Kies in het menu **Pages**.
3. Kies bij de bron **Deploy from a branch**.
4. Selecteer de standaardbranch (meestal `main`) en de map **/(root)**; klik op **Save**.
5. Wacht tot GitHub de eerste publicatie heeft afgerond. Dat kan een paar minuten duren.

### 7. De publieke URL vinden

Open opnieuw **Settings → Pages**. GitHub toont daar de gepubliceerde website. Bij een projectrepository is het adres meestal `https://<gebruikersnaam>.github.io/<repositorynaam>/`.

### 8. Een QR-code maken

Kopieer de publieke URL en plak die in een QR-codegenerator die je vertrouwt. Download de QR-code en druk hem af of toon hem op het scherm tijdens de zangavond. Test de QR-code met een telefoon voordat je hem deelt.

### 9. Later liedjes publiceren met dezelfde QR-code

Pas alleen `liedjes.js` aan en sla het gewijzigde bestand op in GitHub (commit de wijziging naar dezelfde branch). GitHub Pages werkt de bestaande website bij. De publieke URL blijft hetzelfde, dus de QR-code hoeft niet opnieuw gemaakt te worden. Het kan kort duren voordat de update zichtbaar is.

## Bestanden

- `index.html` — pagina en navigatie
- `style.css` — vormgeving voor telefoon, tablet en computer
- `script.js` — zoeken, lijst en liedweergave
- `liedjes.js` — alle liednummers, titels en teksten
- `favicon.svg` — klein website-icoon
- `worship-night-bg.png` — sfeerfoto bovenaan de website
