---
title: "Multi-locatie CRM huisartsenpraktijk: één patiëntenbestand"
slug: multi-locatie-crm-huisartsenpraktijk-patientenbestand
date: "2026-07-28"
excerpt: "Twee of meer vestigingen, en niemand weet wat de andere locatie al met een patiënt heeft afgesproken. Wat je centraal zet en wat je bewust apart houdt."
image: "/images/blog/multi-locatie-crm-huisartsenpraktijk-patientenbestand.jpg"
authorSlug: "tim-van-der-lee"
tags: ["Automatisering", "CRM", "Praktijkmanagement", "Bereikbaarheid"]
cluster: "automatisering"
---

Een patiënt belt op donderdag jullie tweede vestiging. Hij heeft dinsdag op de hoofdlocatie gebeld over een herhaalrecept, kreeg te horen dat er teruggebeld zou worden, en dat is niet gebeurd. De assistente die hem nu aan de lijn heeft, ziet daar niets van. Ze kan alleen zeggen dat hij de andere praktijk moet bellen. Twee minuten later hangt er een geïrriteerde patiënt op en staat er een terugbelverzoek op een geeltje dat straks weer bij de verkeerde locatie ligt.

Dit is het moment waarop groepspraktijken met twee tot vijf vestigingen gaan zoeken naar "één patiëntenbestand". Begrijpelijk, maar het is de verkeerde vraag, en het antwoord erop kan je in de problemen brengen. De goede vraag is: welke laag van je patiëntinformatie hoort over de vestigingen heen te lopen, en welke laag juist niet. Hieronder staat die scheiding, wat je concreet per laag vastlegt, en hoe je het met [workflow automatisering voor huisartsen](/automatisering) inricht zonder dat het een IT-project van een half jaar wordt.

## In het kort

- "Eén patiëntenbestand" klinkt als één systeem waar alles in staat. Dat is niet wat je wilt en meestal ook niet wat mag.
- Er zijn twee lagen: de **dossierlaag** (medisch, in het HIS, toegang volgt de behandelrelatie) en de **contactlaag** (wie belde waarover, wat staat er nog open, welke voorkeuren gelden).
- De contactlaag mag over je vestigingen heen lopen en is precies de laag die nu op geeltjes en in losse mailboxen zit.
- De dossierlaag voeg je niet samen omdat het handig zou zijn. Wat wel of niet mag, is een vraag voor je functionaris gegevensbescherming, niet voor een softwareleverancier.
- Begin bij de telefoon. Daar is de schade het grootst en het effect het snelst zichtbaar.

## Waarom "één patiëntenbestand" de verkeerde vraag is

De meeste artikelen over CRM in de zorg maken dezelfde denkfout: ze noemen het patiëntendossier de centrale bron in je CRM. Dat is een prettige zin voor een leverancier en een risico voor jou. Het medisch dossier is geen klantgegeven dat je vrij over locaties kunt uitrollen omdat het efficiënter werkt. Toegang tot dat dossier hangt aan een behandelrelatie, en die relatie stopt niet bij de grens van je eigen organisatie maar bij de individuele zorgverlener.

Tegelijk is het probleem waar je tegenaan loopt echt, en het gaat helemaal niet over medische inhoud. De assistente die de donderdagbeller aan de lijn had, hoefde niets van zijn dossier te weten. Ze had één ding moeten kunnen zien: dat er dinsdag contact is geweest en dat er nog een terugbelverzoek openstaat. Dat is geen medisch gegeven, dat is een werkafspraak.

Zodra je die twee uit elkaar trekt, wordt de oplossing klein in plaats van groot. Je hoeft geen dossiers samen te voegen. Je moet je contactadministratie ophouden te verspreiden over twee gebouwen.

## De twee lagen, uit elkaar gehaald

**De dossierlaag.** Klachten, diagnoses, medicatie, uitslagen, correspondentie van specialisten, journaalregels. Dit leeft in je HIS en blijft daar. Uitwisseling hiertussen kent eigen regels en eigen routes, en dat is nadrukkelijk niet iets wat je via een CRM oplost. Wil je hier iets veranderen, dan begint dat bij je functionaris gegevensbescherming en bij de richtlijnen van je beroepsvereniging, niet bij een systeemkeuze.

**De contactlaag.** Wie belde wanneer, via welk kanaal, met welk soort verzoek, wat er is toegezegd en wat er nog openstaat. Welk telefoonnummer klopt, welke taal iemand spreekt, of er een tolk nodig is, of iemand slechthorend is, en of hij toestemming heeft gegeven voor herinneringen per sms. Aan welke vestiging en welke arts hij verbonden is.

Die tweede laag is nu het probleem. Hij bestaat wel, maar hij zit in de hoofden van vaste assistentes, in een gedeelde mailbox, op geeltjes en in een agenda-app die maar op één locatie gebruikt wordt. Daarom valt hij om zodra iemand ziek is, of zodra een patiënt de andere vestiging belt.

![Een stethoscoop en een sleutelring met twee gekleurde labels op een lichte keukentafel, met een witte doktersjas over de stoel op de achtergrond](/images/blog/multi-locatie-crm-huisartsenpraktijk-patientenbestand-2.jpg)

## Wat je wél centraal zet over de vestigingen heen

Houd het klein en concreet. Zes velden dekken vrijwel alles wat er nu misgaat:

1. **Contactgegevens en voorkeurskanaal.** Het nummer waarop iemand echt bereikbaar is, of hij liever gebeld of gemaild wordt, en welke taal hij spreekt.
2. **Contactmomenten, zonder inhoud.** Datum, kanaal, en de soort vraag in categorieën: terugbelverzoek, herhaalrecept, afspraak wijzigen, administratieve vraag. Geen medische omschrijving, geen vrije tekst over klachten.
3. **Openstaande acties met een eigenaar.** Wie moet wat doen, voor wanneer, en op welke locatie. Dit is het veld dat de donderdagbeller had gered.
4. **Toestemmingen en voorkeuren.** Mag je herinneringen sturen, per welk kanaal, en mag je een keer om een beoordeling vragen. Vastgelegd met datum, zodat je het kunt aantonen.
5. **Koppeling aan vestiging en vaste arts.** Zodat een verzoek automatisch bij de juiste agenda en de juiste persoon landt in plaats van bij de locatie die toevallig opnam.
6. **Praktische bijzonderheden.** Rolstoel, tolk nodig, moeilijk ter been, komt altijd met een mantelzorger. Dit maakt de service beter en is geen medisch gegeven.

Meer dan dit heb je niet nodig om het telefoonprobleem op te lossen, en elk veld dat je erbij verzint vergroot het risico dat er ongemerkt medische informatie in belandt.

## Wat je bewust niet samenvoegt

Even belangrijk, en dit is waar het in de praktijk misgaat.

Zet **geen vrije notitievelden** in je contactlaag waar iemand "hoesten sinds vorige week" in kan typen. Dat gebeurt gegarandeerd zodra het veld bestaat, en dan heb je medische gegevens in een systeem dat daar niet voor is ingericht en niet voor is beoordeeld. Werk met vaste categorieën in plaats van met een open tekstvak.

Zet **geen uitslagen, brieven of medicatieoverzichten** in de contactlaag, ook niet als bijlage en ook niet tijdelijk. En bouw **geen gedeelde inbox waar iedereen alles ziet**. Rollen en autorisatie horen bij de inrichting, niet bij een opruimactie achteraf: een baliemedewerker van locatie B ziet dat er een openstaand terugbelverzoek is en van wie, niet waar het over ging.

Wil je weten waar de grens tussen die twee systemen precies loopt bij een overstap of samenvoeging, dan is het [draaiboek voor een HIS-migratie](/blog/his-migratie-draaiboek-huisartsenpraktijk) het stuk waar de dossierkant uitgebreid in staat.

## Zo richt je het in zonder dat het een IT-project wordt

**Begin bij de telefoon.** Daar zit de pijn, daar merken patiënten het, en daar zie je binnen twee weken of het werkt. Kies één vestiging als pilot en laat de andere ongemoeid.

**Regel de rollen voordat je de eerste patiënt invoert.** Wie mag wat zien, per locatie en per functie. Achteraf dichttimmeren kost meer tijd dan het vooraf goed zetten, en in de tussentijd staat er informatie open die dat niet hoort.

**Betrek je functionaris gegevensbescherming vanaf dag één,** samen met de verwerkersovereenkomst met je leverancier. Niet omdat het moet op papier, maar omdat je hiermee vastlegt welke velden bestaan en dus welke er nooit bij mogen komen.

**Meet één getal:** hoe vaak een patiënt in een week wordt doorverwezen naar de andere vestiging omdat de locatie die opnam het niet kon afhandelen. Als dat getal na twee weken niet daalt, klopt je inrichting niet en niet je systeem. De praktische stappen van zo een invoering staan uitgewerkt in het stuk over een [CRM-implementatie in vijf dagen](/blog/crm-implementatie-huisartsenpraktijk).

## Bereikbaarheid is waar het het snelst pijn doet

Bij twee of meer vestigingen krijg je een probleem dat een solopraktijk niet kent: de telefoonlijn per locatie. Patiënten weten niet welk nummer bij welke vestiging hoort, bellen het nummer dat ze ooit hebben opgeslagen, en komen structureel bij de verkeerde assistente uit. Die moet dan doorverbinden of terugbellen laten regelen, en precies daar valt de informatie tussen wal en schip.

Een [ai telefonist voor huisartsen](/voice-ai) vangt dat op door elk gesprek dat binnenkomt uit te vragen en te routeren naar de juiste vestiging en de juiste agenda, ook als er tegelijk op beide locaties wordt gebeld. Het gesprek landt als contactmoment in dezelfde centrale laag, zodat de collega die morgen terugbelt ziet wat er is toegezegd.

Aan de kant van de website werkt hetzelfde principe. Een [ai chatbot voor huisartsen](/chatbot) die vraagt bij welke vestiging iemand is ingeschreven voordat hij een verzoek aanneemt, scheelt de balie het uitzoekwerk dat er nu bij komt. En de gegevens die daaruit komen, horen in dezelfde [crm voor huisartsen](/crm) te landen als de telefoongesprekken, want anders heb je het probleem alleen verplaatst naar een derde plek.

## Wat het oplevert

De winst zit niet in techniek maar in het aantal keren per dag dat iemand iets moet uitzoeken dat allang bekend was. Elke keer dat een patiënt zijn verhaal opnieuw doet omdat hij de andere locatie belt, kost dat de assistente tijd en de praktijk vertrouwen.

Voor de praktijkmanager is er een tweede winst die zwaarder weegt dan hij lijkt: je hoeft niet meer fysiek op beide locaties te zijn geweest om te weten wat er speelt. Wie de contactlaag over de vestigingen heen op orde heeft, kan op tijd naar huis zonder het gevoel dat er ergens een geeltje ligt met iets dat vergeten wordt.

## Veelgestelde vragen

**Mogen wij als groepspraktijk patiëntgegevens delen tussen onze eigen vestigingen?**
Dat hangt af van hoe je organisatie juridisch is ingericht en of er een behandelrelatie is. Het is geen vraag die je op basis van een blog beantwoordt en ook niet op basis van wat een leverancier zegt. Leg de casus voor aan je functionaris gegevensbescherming en houd de richtlijnen van je beroepsvereniging aan. Voor de contactlaag die hierboven staat, ligt dit doorgaans eenvoudiger dan voor het dossier, maar laat ook dat bevestigen.

**Vervangt zo een systeem ons HIS?**
Nee, en dat is precies de bedoeling. Het HIS blijft waar het medisch dossier leeft. De contactlaag ligt ernaast en raakt de inhoud van het dossier niet aan.

**Wij zijn met twee vestigingen. Is dit niet overdreven?**
Bij twee locaties begint het probleem al, want er is dan al een gesprek dat op de ene plek plaatsvindt en op de andere plek moet worden opgevolgd. Het verschil met vijf vestigingen is de omvang, niet het probleem zelf. Wel kun je bij twee locaties beginnen met alleen de openstaande acties en de contactmomenten, en de rest later toevoegen.

**Wat doen we met de patiënten die er nu al in ons oude systeem staan?**
Zet ze niet in één keer over. Begin met de patiënten die deze maand contact hebben, dan groeit je bestand vanzelf mee met wie er daadwerkelijk belt. Een volledige overzetting kost weken en levert een bestand op dat voor een groot deel uit oude gegevens bestaat.

<p class="lees-ook my-5 px-4 py-3 rounded-3 fs-6 text-dark" style="background-color: rgba(193, 255, 114, 0.18);"><strong class="text-dark">Lees ook:</strong> <a href="/blog/griepvaccinatie-campagne-huisartsenpraktijk-6-weken-protocol" class="text-dark fw-semibold">Griepvaccinatie-campagne: 6-weken protocol voor 60-plus</a> →</p>

## Eén laag centraal, de rest waar hij hoort

Jij helpt patiënten, het systeem houdt bij wat er is afgesproken. De eerste stap is klein: schrijf een week lang op hoe vaak iemand naar de andere vestiging wordt doorverwezen omdat de informatie daar ligt. Dat getal is je zaak voor de inrichting hierboven.

Wil je weten waar bij jullie precies informatie tussen de locaties wegvalt? Doe de [gratis ai scan voor huisartsen](/gratis-scan), dan brengen we in kaart welke contactmomenten nu op geeltjes en in losse mailboxen leven. Onze Groei-of-Geld-Terug Garantie geldt vanaf Managed Groei Pro: word je binnen 6 maanden niet beter zichtbaar dan bij de start, dan krijg je je geld terug. Zichtbaarheid meten we bij SEO in Ahrefs en bij video en advertenties in views.