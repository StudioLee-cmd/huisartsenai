---
title: "Huisartsenpraktijk no-shows: 3-kanaal herinnering-flow"
excerpt: "Een herinnering-flow via SMS, WhatsApp en telefoon die no-shows in drie maanden halveert zonder extra werk voor de assistente."
date: "2026-04-22"
cluster: "automatisering"
authorSlug: "tim-van-der-lee"
image: "/images/blog/huisartsenpraktijk-no-shows-herinnering-flow-drie-kanalen.jpg"
tags: ["Huisarts", "No-shows", "Patiëntcommunicatie", "Automatisering"]
---
Een gemiddelde huisartsenpraktijk in Nederland heeft een no-show-ratio tussen de 4 en 9 procent. Op 120 afspraken per dag zijn dat 5 tot 11 gaten per dag, wat neerkomt op 25 tot 55 uur aan verloren productiviteit per maand. Elke no-show kost de praktijk gemiddeld €18 aan directe middelen (assistentenuren, gereserveerd consult-tijd) plus indirecte kosten doordat de wachttijd voor andere patiënten langer wordt.

No-shows verminderen is daarom niet een administratief doel, maar een operationele noodzaak. In deze gids staat de drie-kanaal herinnering-flow die, goed geïmplementeerd, de no-show-ratio binnen drie maanden halveert (reken met een daling van 7 procent naar 3 procent) zonder dat de assistente er één minuut extra werk van heeft.

## Waarom één herinnering niet genoeg is

De klassieke herinnering is een SMS 24 uur voor de afspraak. Dat werkt voor patiënten die hun agenda op orde hebben en gewoon even een reminder nodig hebben. Dat is het grootste deel van de patiënten, die komen altijd al.

Voor de rest werkt één SMS niet. Het zijn mensen die:
- De SMS gemist hebben (zit vast in een volle inbox)
- De afspraak in het moment hebben vergeten
- Iets tussendoor hebben gekregen dat belangrijker voelt
- Onzeker zijn geworden of de afspraak nog wel nodig is

Deze groep is waar de no-shows vandaan komen. Een extra herinnering via een ander kanaal verandert direct de dynamiek.

## Het 3-kanaal systeem in detail

### Kanaal 1: SMS 48 uur vooraf

Eerste herinnering komt 48 uur vóór de afspraak per SMS. Dit is het "ver-genoeg-weg" moment waar de patiënt nog rustig kan herplannen als er iets tussenkomt.

**Inhoud:**
"Hoi [voornaam], je hebt een afspraak bij [praktijk] op [dag] om [tijd] bij [naam huisarts]. Klopt dit nog? Antwoord JA of NEE."

Dit is kort, duidelijk en vraagt één concrete actie. De respons-ratio op JA/NEE is hoog. De NEE-antwoorden komen vroeg genoeg binnen om de slot opnieuw te vullen via de wachtlijst of no-gap-flow.

### Kanaal 2: WhatsApp 2 uur vooraf

Tweede herinnering komt 2 uur vóór de afspraak via WhatsApp. Dit is het "last-call" moment waar patiënten die op het SMS-niet hebben gereageerd en die niet gekomen zouden zijn, alsnog een nudge krijgen.

**Inhoud:**
"Hi [voornaam], over 2 uur verwachten we je om [tijd] bij [naam huisarts]. Mocht er toch iets tussenkomen, laat het nu even weten via deze WhatsApp of bel [nummer]."

De toon is vriendelijk maar concreet. Het kanaal WhatsApp is belangrijk: de open-rate in Nederland ligt ver boven die van SMS, en die van SMS weer ver boven e-mail. Het bericht wordt écht gelezen. Ook de respons-ratio op dit bericht ligt hoog.

Een [AI chatbot](/chatbot) gekoppeld aan WhatsApp Business API kan deze reminders automatisch uitsturen met patiënt-specifieke variabelen.

### Kanaal 3: telefoontje bij "blauwe vinkjes maar geen reactie"

Derde stap, alleen voor patiënten die beide eerdere berichten hebben gelezen maar niet hebben gereageerd. Dit is het signaal dat er iets niet klopt, en het verschil tussen een lage en een hoge no-show-ratio zit in deze specifieke interventie.

**Wie belt:** een assistente of een [AI telefonist](/voice-ai) die het call-script uitvoert: "Hallo [naam], ik bel over je afspraak over een uurtje bij [huisarts]. Nog steeds aanwezig?", dat is een heel ander vertrouwenssignaal dan een SMS en triggert een eerlijk antwoord.

**Wat dit oplevert:** van de patiënten die tot dit punt niet hebben gereageerd, komt na dit telefoontje vrijwel iedereen toch of herplant op een betere dag. De rest zegt nu wel af zodat de slot opnieuw gevuld kan worden.

Deze stap is arbeidsintensief voor de assistente als je 100+ afspraken per dag hebt. Daarom automatiseren steeds meer praktijken dit met een Voice AI die de eenvoudige vragen zelf afhandelt en alleen bij complexiteit doorschakelt.

![Huisartsen praktijk intake balie met laptop, stethoscoop en patiënt notities](/images/blog/huisartsenpraktijk-no-shows-herinnering-flow-drie-kanalen-2.jpg)

## Slot-opvulling via wachtlijst

Het herinnering-systeem werkt alleen optimaal als je de vrijkomende slots ook snel invult. Elke NEE-melding uit kanaal 1 of 2 moet automatisch een wachtlijst-alert triggeren: "Slot vrijgekomen op [datum+tijd]. Aanmelden via deze link: [link]". Patiënten op de wachtlijst zien dit direct en kunnen in seconden boeken.

**Wat je nodig hebt:**
- Een wachtlijst-systeem waar patiënten zich vrijwillig opgeven (meestal bij annulering van hun oorspronkelijke keuze)
- Automatische trigger van wachtlijst-alert bij vrije slot
- Korte tijdslimiet op de alert (bijvoorbeeld eerste patiënt die reageert binnen 30 minuten krijgt de slot)

Praktijken die dit correct inrichten, vullen het overgrote deel van de vrijgekomen slots binnen een uur. Dat betekent dat no-shows niet alleen worden voorkomen maar de operationele impact van de resterende no-shows ook wordt geneutraliseerd.

## Belangrijke randvoorwaarden voor GGZ-praktijken en specifieke patiëntgroepen

Niet alle herinneringen werken even goed voor alle patiëntgroepen. Voor praktijken die werken met ouderen (huisartsenpraktijk met veel 75+), werkt SMS niet goed, bellen is het primaire kanaal. Voor praktijken met veel laaggeletterde patiënten, moeten de berichten op B1-niveau geschreven zijn. Voor GGZ-praktijken spelen privacy-overwegingen die specifieke AVG-compliance eisen in hoe je herinneringen verstuurt (geen vermelding van "GGZ" of specifieke diagnose in berichten).

Een goed systeem kan per patiëntprofiel verschillende kanalen en berichten instellen. Dit is één van de concrete voordelen van een moderne praktijkmanagement-koppeling: één patiënt krijgt WhatsApp, een ander krijgt SMS+bellen, een derde krijgt alleen een e-mail.

## Wat dit concreet oplevert

Uitgangspunt: middelgrote huisartsenpraktijk met 3 huisartsen, 120 afspraken per dag, 20 werkdagen per maand = 2.400 afspraken per maand. No-show-ratio 7 procent = 168 no-shows per maand. Gemiddelde kosten per no-show (direct + indirect) €18 = €3.024 per maand verloren kosten.

Met het 3-kanaal systeem: no-show-ratio zakt naar 3,5 procent = 84 no-shows per maand. Bespaarde kosten: €1.512 per maand, oftewel €18.144 per jaar.

Plus de indirecte winst: kortere wachttijden voor patiënten, minder druk op de assistentie, betere patiëntbeleving bij de overige patiënten. Dat zijn onmogelijk-geldelijk-uit-te-drukken-maar-zeer-reëel voordelen die in patiëntbehoud en reviews hun weg vinden.

## Hoe je dit in 4 weken implementeert

Week 1: inventariseer je huidige herinnering-situatie. Welke kanalen gebruik je nu, welke no-show-ratio heb je feitelijk, welke patiëntgroepen zijn oververtegenwoordigd in de no-shows.

Week 2: koppel je praktijkmanagement-systeem (Promedico, Medicom, Mijn Gezondheid.net, etc.) aan een reminders-tool of HighLevel-achtig platform. Dit is typisch een half-dag werk met je ICT-leverancier.

Week 3: schrijf de drie berichten (SMS 48u, WhatsApp 2u, bel-script). Test op 20 patiënten via handmatige verzending om te zien welke taalversie het beste werkt.

Week 4: rol automatisering breed uit. Monitor eerste 2 weken op afwijkingen en pas bij.

Voor praktijken die dit volledig willen uitbesteden: in onze managed service zetten wij het volledige herinnering-systeem, koppeling met PMS, wachtlijst-automation en rapportage voor je op. Bekijk de [tarieven](/tarieven) voor huisartsenpraktijken.

## Wat de [website](/gratis-website) en [reviews](/reviews) hiermee doen

Een moderne huisartsenpraktijk-website toont niet alleen contactgegevens. Hij toont ook een wachtlijst-opgave formulier, een mogelijkheid om direct te herplannen bij afzegging, en een subtiele social-proof laag van reviews van patiënten. Al deze elementen samen, gekoppeld aan de herinnering-flow, maken het makkelijker voor patiënten om te komen én versterken het vertrouwen in de praktijk.

Een [gratis review-flow](/reviews) versterkt dit effect nog: patiënten die een consult hebben gehad krijgen 48 uur later een korte WhatsApp met een reviewverzoek, wat voor de praktijk zowel de online reputatie versterkt als patiëntbetrokkenheid aangeeft.

<div class="container"><div class="row justify-content-center"><div class="col-lg-10 col-xl-8 mx-auto"><p class="lees-ook my-5 px-4 py-3 rounded-3 fs-6 text-dark" style="background-color: rgba(193, 255, 114, 0.18);"><strong class="text-dark">Lees ook:</strong> <a href="/blog/klanttevredenheid-huisartsenpraktijk-verbeteren" class="text-dark fw-semibold">Klanttevredenheid meten als huisartsenpraktijk: zo verbeter je de patiëntervaring</a> →</p></div></div></div>

## Groei-of-Geld-Terug Garantie

Als je no-show-ratio na drie maanden niet meetbaar is gedaald, krijg je je investering terug. Vraag een [gratis scan](/gratis-scan) aan om je huidige herinnering-flow te laten analyseren. Jij ziet patiënten, wij regelen de rest.
