---
title: "AI telefonist trainen: medicijnnamen en terugbelverzoeken"
slug: ai-telefonist-trainen-huisartsenpraktijk-medicijnnamen
date: "2026-07-27"
excerpt: "Een AI telefonist is pas bruikbaar als hij medicijnnamen en patiëntnamen foutloos vastlegt. Welke data je praktijk nodig heeft, en de rollout in vier weken."
image: "/images/blog/ai-telefonist-trainen-huisartsenpraktijk-medicijnnamen.jpg"
authorSlug: "tim-van-der-lee"
tags: ["Voice AI", "Bereikbaarheid", "AVG"]
cluster: "voice-ai"
---

Een patiënt belt op maandagochtend voor een herhaalrecept en noemt zijn middel. Amlodipine en amitriptyline zijn twee volstrekt verschillende medicijnen, maar door de telefoon, met een verkoudheid en een beetje ruis op de lijn, schelen ze een paar klanken. Als het systeem daar zelf een keuze in maakt, ligt er een verkeerd verzoek op de goedkeurstapel van de arts.

Dat is precies de reden waarom "de AI is getraind op huisartsenpraktijken" een lege belofte is. De vraag is niet of hij vriendelijk klinkt. De vraag is of hij de woorden die in jouw praktijk voorbijkomen correct vastlegt, en of hij het toegeeft wanneer hij iets niet zeker weet. Een [ai telefonist voor huisartsen](/voice-ai) verdient dus voorwerk, en dat voorwerk is minder dan je denkt.

Hieronder staat welke data je praktijk daarvoor nodig heeft, welke woordenlijst alleen jij kunt maken, en hoe je het in vier weken invoert zonder dat je patiënten proefkonijn zijn.

## Eerst de grens: vastleggen is niet beoordelen

De belangrijkste instelling is geen technische, maar een afspraak. De telefonist neemt aan, vraagt uit, legt vast en bevestigt. Het beoordelen blijft bij je assistente en je arts. Dat geldt voor de urgentie van een klacht, voor de vraag of een herhaalrecept verantwoord is, en voor alles wat daarna komt.

Die grens is ook precies wat de serieuze aanbieders in de Nederlandse markt zelf hanteren: de urgentiebepaling blijft bij de praktijk, en een receptverzoek gaat als gestructureerde samenvatting naar de praktijk ter goedkeuring. Hoe je de scheiding tussen spoed en routine aan de telefoon inricht, staat uitgewerkt in ons artikel over [het schiften van spoed en routine aan de praktijktelefoon](/blog/spoed-triage-telefoon-huisartsenpraktijk). Dit artikel gaat over de laag eronder: of wat er wordt vastgelegd ook klopt.

De verwachtingen kloppen daarmee ook beter. De LHV zette de [verwachtingen rond AI in de huisartsenpraktijk](https://www.lhv.nl/wp-content/uploads/2024/12/AI-in-de-huisartsenpraktijk-DD2406_08-11.pdf) op een rij, en de winst zit vooral in de ondersteunende taken zoals telefonie en administratie. Niet in het consult zelf. Wie een lichtere spreekuuragenda verwacht, meet straks het verkeerde.

## De vier bronnen die je praktijk al heeft

Je hebt geen dataset nodig. Je hebt vier dingen nodig die al bestaan.

**1. Je praktijkinformatie, exact zoals je hem aan de telefoon geeft.** Openingstijden, spreekuurindeling, hoe het werkt met de huisartsenpost buiten kantooruren, welke apotheken je gebruikt, waar patiënten parkeren. Niet de tekst van je website, maar de manier waarop je assistente het zegt.

**2. De vijftien vragen die je assistente het vaakst herhaalt.** Schrijf een week lang turven wat er binnenkomt. In vrijwel elke praktijk zit het gros van het belverkeer in een handvol vragen: uitslag, herhaalrecept, afspraak maken, afspraak verzetten, verwijzing, en de vraag of iets nog vandaag kan.

**3. Je agenda-regels.** Welke afspraaktypen bestaan er, hoe lang duren ze, hoeveel plekken houd je vrij voor dezelfde dag, en wie mag wat inplannen. Zonder deze laag boekt een systeem afspraken die op papier passen en in de praktijk vastlopen.

**4. Je terugbelprotocol.** Wat er in een terugbelverzoek moet staan voordat het bruikbaar is, en binnen welke termijn er wordt teruggebeld. Dit is het belangrijkste van de vier, want het overgrote deel van wat de telefonist oplevert is geen afspraak maar een verzoek dat een mens afmaakt.

Bij elkaar kost dit een dagdeel. De tijd zit niet in het verzamelen maar in het besluiten: welke gesprekken wil je dat hij zelfstandig afhandelt, en welke gaan altijd naar een mens.

## De woordenlijst die alleen jouw praktijk kan maken

Dit is de laag die geen enkele leverancier kant-en-klaar levert, omdat hij afhangt van je patiëntenpopulatie, je wijk en je formularium. Reken op een uur, samen met je assistente.

| Categorie | Wat erin hoort | Waarom het anders misgaat |
|---|---|---|
| Medicijnnamen | de middelen die in jouw praktijk het vaakst herhaald worden, merknaam en stofnaam | namen die op elkaar lijken worden fonetisch verkeerd gegokt |
| Doseringen | de schrijfwijze die jij wilt zien, inclusief eenheden | gesproken getallen en eenheden lopen makkelijk door elkaar |
| Apotheken | alle apotheken in je verzorgingsgebied, met hun spreektaalnaam | een verkeerde apotheek betekent een tweede belronde |
| Klachten in spreektaal | hoe patiënten hun klacht zelf benoemen, inclusief dialect | spreektaal staat niet in een standaardmodel |
| Namen van de praktijk en artsen | inclusief de manier waarop patiënten ze verkeerd uitspreken | de beller hoort meteen of dit een echte lijn is |
| Straten, wijken en plaatsen | het hele verzorgingsgebied, ook de kleine kernen | een verkeerd verstaan adres kost een terugbelactie |

![Handgeschreven woordenlijst met medicijnnamen naast een telefoon op de balie van een huisartsenpraktijk](/images/blog/ai-telefonist-trainen-huisartsenpraktijk-medicijnnamen-2.jpg)

Zet bij de woorden die het vaakst misgaan ook de fonetische variant. Een systeem dat weet hoe patiënten een middel in de praktijk uitspreken, maakt die fout één keer.

## Drie terugkoppelingen die altijd verplicht zijn

Een woordenlijst verkleint de kans op een fout. Bevestiging haalt hem eruit. Zet daarom drie momenten hard in de gespreksflow, ongeacht hoe goed het systeem klinkt.

**Naam en geboortedatum, altijd teruglezen.** Twee patiënten met dezelfde achternaam is in elke praktijk regel, geen uitzondering. De geboortedatum is de controle.

**Medicijn en dosering letterlijk herhalen, en laten bevestigen.** Niet samengevat, maar terug zoals het is opgegeven. Twijfelt de patiënt, dan noteert het systeem de twijfel en gaat het verzoek als onzeker naar de assistente. Een gemarkeerde onzekerheid kost tien seconden. Een stille aanname kost veel meer.

**De apotheek van voorkeur benoemen.** Kort, en met de naam zoals patiënten hem gebruiken.

Het principe erachter geldt breder: een [voice ai voor huisartsen](/voice-ai) hoort zichtbaar te maken wat hij niet zeker weet. Een systeem dat alles met dezelfde stelligheid noteert, verplaatst de controlelast naar je assistente en levert dus niets op.

## In vier weken invoeren

Begin niet op een maandagochtend en niet in het griepseizoen. Dit ritme houdt de risico's klein.

| Week | Wat de telefonist doet | Wat de praktijk doet |
|---|---|---|
| 1 | Alleen buiten openingstijden, met verwijzing naar de huisartsenpost bij spoed | Elke samenvatting nalezen, woordenlijst aanvullen |
| 2 | Ook tijdens de lunchpauze en na sluitingstijd | Corrigeren wat verkeerd wordt uitgevraagd, terugbelprotocol bijstellen |
| 3 | Overloop tijdens de ochtendpiek, als alle lijnen bezet zijn | Steekproef van tien gesprekken per dag |
| 4 | Vaste eerste lijn, met doorschakeling naar de assistente | Alleen nog de gemarkeerde onzekerheden bekijken |

Meet in week 4 twee dingen: hoeveel gesprekken zonder menselijke correctie zijn afgehandeld, en hoeveel verzoeken als onzeker zijn gemarkeerd. Dat tweede getal hoort niet nul te zijn. Nul betekent meestal dat het systeem te stellig is afgesteld, niet dat het perfect luistert.

## Wat je rond het gesprek zelf vastlegt

Telefoongesprekken in een huisartsenpraktijk gaan over gezondheid, en dat zijn bijzondere persoonsgegevens. Drie dingen horen daarom vooraf geregeld te zijn: een verwerkersovereenkomst met je leverancier, duidelijkheid over waar de gespreksdata wordt verwerkt en bewaard, en een bewaartermijn die niet langer is dan nodig. Wil je gesprekken opnemen om het systeem bij te sturen, meld dat dan aan het begin van het gesprek. Bespreek dit met de partij die je kiest voordat je live gaat, niet erna.

## Wat er na het gesprek gebeurt

Een goed vastgelegd terugbelverzoek is pas de helft. De andere helft is de opvolging: de bevestiging naar de patiënt, het verzoek dat bij de juiste persoon terechtkomt, de herinnering voor de afspraak. Juist die categorie telefoontjes, mensen die bellen om te vragen of hun verzoek is aangekomen, verdwijnt zodra de bevestiging automatisch gaat. Hoe je [klantcommunicatie automatiseert als huisarts](/automatisering) bepaalt of de winst aan de telefoon ook echt in de praktijk landt.

Wil je eerst weten hoe een praktijk de chatkant vult met eigen informatie, dan is [het voeden van een praktijk-chatbot met eigen bronnen](/blog/ai-chatbot-trainen-huisartsenpraktijk-data) de tekstversie van hetzelfde verhaal. Aan de telefoon komt de spraaklaag erbij.

## Veelgestelde vragen

**Hoe lang duurt het voordat dit bruikbaar is?**
Met de vier bronnen hierboven staat de eerste versie in enkele dagen. Betrouwbaar op je eigen patiëntenpopulatie ben je na ongeveer vier weken meeluisteren en bijsturen.

**Moet ik gesprekken laten opnemen?**
Dat hoeft niet voor de inrichting zelf. Opnames helpen bij het bijsturen. Kies je ervoor, meld het dan aan het begin van het gesprek en leg de bewaartermijn vast.

**Wat gebeurt er als een middel toch verkeerd wordt verstaan?**
Bij een goede inrichting wordt het verzoek als onzeker gemarkeerd en gaat het naar een mens. Daarnaast voeg je het woord toe aan de lijst, inclusief hoe de patiënt het uitsprak.

**Merken patiënten dat ze een AI aan de lijn hebben?**
Vaak wel. In de praktijk weegt zwaarder dat er direct wordt opgenomen en dat het verzoek klopt. Een [ai telefoonbeantwoorder voor huisartsen](/voice-ai) die netjes bevestigt, wordt beter beoordeeld dan een wachtrij.

<p class="lees-ook my-5 px-4 py-3 rounded-3 fs-6 text-dark" style="background-color: rgba(193, 255, 114, 0.18);"><strong class="text-dark">Lees ook:</strong> <a href="/blog/avondbandje-huisartsenpost-kosten-uitleggen" class="text-dark fw-semibold">Wat je avondbandje moet zeggen over de huisartsenpost</a> →</p>

## Conclusie: hij is zo goed als je voorwerk

Je hebt geen enorme dataset nodig. Je hebt je praktijkinformatie nodig, de vijftien vragen die je assistente dagelijks herhaalt, je agenda-regels en je terugbelprotocol. Plus die ene woordenlijst die niemand anders kan maken: de medicijnnamen, apotheken en straatnamen die in jouw praktijk voorbijkomen. En daarbovenop de afspraak die alles draagt: de telefonist legt vast en bevestigt, de praktijk beoordeelt.

Jij helpt patiënten, wij regelen de bereikbaarheid. Wil je eerst zien welke oproepen je praktijk nu misloopt en op welke momenten, vraag dan een [gratis ai scan voor huisartsen](/gratis-scan) aan. Met de Groei-of-Geld-Terug Garantie van HuisartsenAI zit je nergens aan vast als het niets oplevert.
