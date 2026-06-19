import Pipe from "@/components/Pipe.jsx";
import {Card, HeadCard} from "@/components/Cards.jsx";
import {use, useEffect, useState} from "react";

function Home() {
    const [open, setOpen] = useState([])
    const [initial, setInitial] = useState(false)
    // tellen hoeveel opengeklapt zijn // ik was leu oke :)
    const cards = 10

    // Card openklappen
    // boolean om te kijken of ze zijn opengeklapt.
    useEffect(() => {
        if (localStorage.getItem('states')) {
            setOpen(JSON.parse(localStorage.getItem('states')));
        } else {
            setOpen([])
        }
    }, []);

    useEffect(() => {
        if (!initial) {
            setInitial(true)
            return;
        }
        localStorage.setItem('states', JSON.stringify(open))
    }, [open]);

    //andere useState om te kijken hoeveel (in Pipe)

    // niet gelijk dichtklappen
    // local storage
    return (
        <>

            <div className="fixed left-0">
                <Pipe open={open} cards={cards}>
                </Pipe>
            </div>
            <div className="  content-center max-w-[50%]  mx-auto flex flex-col gap-5 py-5">


                <HeadCard>
                    <div>
                        <h1>
                            Vormvrije signatuur:
                        </h1>
                        <h2>
                            Thomas van Bockel
                        </h2>
                    </div>
                </HeadCard>


                <Card title="TLE-3: Context" setOpen={setOpen} open={open} id='0'>
                    <div className="flex gap-3 flex-col">
                        <p>
                            In TLE-3 moesten we kiezen tussen front-end en back-end. Ik koos voor back-end omdat ik dat
                            op dat moment leuker vond. Als back-end moesten we voor twee teams hun back-end regelen. We
                            mochten niet bij elkaar zitten, zodat we makkelijk konden communiceren.
                        </p>
                        <p>
                            Onze opdracht voor TLE-3 was een gemeentewebsite maken waar de gebruikers via AI-suggesties
                            belangrijke en nuttige informatie konden krijgen. Hiervoor hadden we als back-end twee
                            AI-leads aangesteld, dat was ik niet.
                        </p>
                        <p>
                            Mijn taak was om de communicatie te regelen tussen mijn front-end team en de back-end. Ook
                            moest ik meewerken aan de ontwikkeling van de back-end API.
                        </p>
                    </div>
                </Card>

                <Card title="TLE-3: Tool box" setOpen={setOpen} open={open} id='1'>
                    <div className="flex gap-3 flex-col">
                        <p>
                            Ik heb voor TLE-3 een benchmarkonderzoek gedaan om te zien welke andere websites er waren
                            die op ons product leken. Dit was voor mij heel handig, omdat ik dan kon zien wat ik goed
                            vond en wat ik minder goed vond aan een website van een concurrent.
                        </p>
                        <p>
                            Tijdens TLE-3 hebben we met metaforen gewerkt. Dit vond ik persoonlijk een leuke manier om
                            de doelgroep meer te betrekken bij het product. Door een metafoor te tekenen wisten we beter
                            of we op één lijn zaten, maar ik denk niet dat ik het vaker ga gebruiken. Het is moeilijk
                            voor mij om een goed gesprek verder te laten lopen en tegelijkertijd te tekenen, waardoor
                            het soms ongemakkelijk was omdat ik niet goed luisterde.
                        </p>
                        <p>
                            De critical walkthrough vond ik heel nuttig. Het was een goede manier om te zien waar er op
                            werd gedrukt en wat nog niet duidelijk was. Vanuit de critical walkthrough kreeg ik meer
                            inzichten in wat logische keuzes waren en wat minder logische keuzes waren, waardoor we ons
                            prototype konden verbeteren.
                        </p>
                    </div>
                </Card>

                <Card title="TLE-3: Leerpunten" setOpen={setOpen} open={open} id='2'>
                    <div className="flex gap-3 flex-col">
                        <p>
                            In TLE-3 moest ik in een back-end team werken. Hier moesten we apart werken van onze
                            front-end teams. In ons back-end team hadden we geen goede rolverdeling gemaakt. Hierdoor
                            werd
                            het onduidelijk wat iedereen moest doen en waar iedereen mee bezig was.
                        </p>
                        <p>

                            In TLE-3 moesten we veel communiceren met de front-end teams, ik probeerde dat zo veel
                            mogelijk te doen met mijn front-end team, op het begin ging het minder goed. Daar kreeg ik
                            feedback op wat ik gelijk oppakte, daar kreeg ik ook positief feedback op. Alleen
                            ging het niet altijd even goed, de communicatie van mijn andere teamleden met mijn front-end
                            team ging minder goed waardoor er veel onduidelijkheden ontstonden. Door de onduidelijkheden
                            verliep het project soms stroefjes.
                        </p>
                        <p>
                            Als feedback van mijn team kreeg ik dat ik sneller vragen moest stellen aan docenten, dit
                            was nadat ik iets te lang voor me hield terwijl ik niet wist hoe ik het moest doen. Hierdoor
                            verloren we tijd en was ik langer bezig met een onderdeel wat de front-ends nodig had. Dit
                            heb ik proberen aan te pakken in TLE-4 door niet te lang te wachten met vragen aan docenten,
                            dit is ook goed uitpakt omdat ik hier niet opnieuw feedback over ontving. Een goed voorbeeld
                            van dat ik eerder naar docenten ga, is over de network errors tijdens mijn stress test, ik
                            ben snel naar de docent toegestapt zodat we achter konden komen of het door mijn code kwam
                            of door iets anders. Als ik niet naar de docent ben toegestapt zou ik uren langer verspilt
                            hebben aan iets waar ik niks aan kan doen.
                        </p>
                        <p>
                            Ook kreeg ik feedback dat ik niet altijd mijn vragen moest stellen aan een persoon, dit
                            vindt ik altijd moeilijk om aan te pakken omdat ik altijd vragen stel aan de persoon naast
                            me.
                        </p>
                    </div>
                </Card>

                <Card title="TLE-4: Context" setOpen={setOpen} open={open} id='3'>
                    <div className="flex gap-3 flex-col">
                        <p>
                            Tijdens TLE-4 hebben we Board-it gemaakt, Board-it is een website voor eerste jaars
                            studenten
                            op CMGT met ADHD. Board-it is een website waar studiegroepen gemaakt kunnen worden, in
                            studiegroepen
                            kunnen er hoofdtaken aangemaakt worden, elke persoon in de groep kunnen individuele subtaken
                            aanmaken op de hoofdtaken, zodat ze het kunnen afvinken. Ze kunnen ook momenten inplannen om
                            samen te studeren.
                        </p>
                        <p>
                            We hebben voor de back-end laravel gebruikt, dit hebben we gedaan omdat laravel al veel aan
                            ons geeft waardoor we minder tijd hoeven te besteden aan het back-end. De front-end hebben
                            we gemaakt in React,
                        </p>
                        <p>
                            In TLE-4 heb ik meer gewerkt aan de back-end voor Board-it, daarbij heb ik bijna alle
                            controllers, models en migrations aangemaakt. Ook heb ik een paar pagina's gemaakt voor de
                            front-end.
                        </p>
                        <p>

                        </p>
                    </div>
                </Card>

                <Card title="TLE-4: Tool box" setOpen={setOpen} open={open} id='4'>
                    <div className="flex gap-3 flex-col">
                        <p>
                            OVer Jobs to be done ben ik er nog niet over uit van wat ik er van vindt, op dit moment
                            vindt
                            ik het een hele interested manier om te bekijken wat de doelgroep nodig heeft, maar ik
                            snap het nog niet genoeg over. Dit wil ik ook veranderen door dit na school meer over te
                            leren en te gebruiken, en dan zoals aangeraden door mijn teamgenoten de jobs te laten keuren
                            door AI.
                        </p>
                        <p>
                            Ik vind de business model canvas een hele interested manier om het zakelijke gedeelte van
                            een website / app te maken. Natuurlijk wist ik dat er ook verdient moet worden aan
                            website's, maar tijdens mijn vorige TLE's hab ik er niet aan gedacht. De business model
                            canvas heeft me geholpen om daar over na te denken door bijvoorbeeld te bedenken hoe we geld
                            konden verdienen met Board-it. de business model canvas heeft het voor mij ook goed op een
                            rijtje gezet, ik weet niet zeker hoe ik het in de toekomst kan gebruiken voor PLE's want ik
                            ken de opdrachten niet maar ik denk zeker dat ik de business model canvas in de toekomst ga
                            gebruiken.
                        </p>
                        <p>
                            De waarde propositie vindt ik moeilijk, dit is omdat het veel te maken heeft met jobs to be
                            done, die
                            ik nogsteeds moeilijk vindt, maar ook omdat ik voor een (eerste) waarde propositie veel
                            moest nadenken als onze doelgroep om aannames te maken, wat we natuurlijk later bij de
                            doelgroep getest had. Dit zorgde er wel voor dat ik me meer richtte op de doelgroep, maar
                            het
                            koste me wel veel tijd. Ik denk dat ik de waarde propositie ga gebruiken in toekomstige
                            projecten zodat ik
                            mezelf goed nadenk over wat de doelgroep nodig heeft..
                        </p>
                        <p>
                            De learning en test cards vond ik persoonlijk niet heel fijn om mee te werken, het was voor
                            mij dubbel omdat ik altijd al opschreef wat we wilden weten, wat we denken waat er gaat
                            gebeuren en de
                            resultaten. Door de cards te gebruiken moest ik nu alles dubbel schrijven wat ik
                            niet heel handig vindt.
                        </p>
                    </div>
                </Card>
                <Card title="TLE-4: Leerpunten" setOpen={setOpen} open={open} id='5'>
                    <div className="flex gap-3 flex-col">
                        <p>
                            Voor TLE-4 ging het tot een gegeven moment heel goed met de communicatie en werk. Alleen
                            ging het in de laatste week stroef, dit kwam omdat we een belangrijk onderdeel miste, maar
                            dat niet konden krijgen omdat de communicatie met een zieke teamgenoot stroefs ging. Wat ik
                            hiervan geleerd heb is dat ik en het team sneller de beslissing moet maken om hun gedeelte
                            over te nemen zodat we nog goed op schema lopen.
                        </p>
                        <p>
                            Ook heb ik geleerd om nooit last minute alles te mergen en te proberen op de server te
                            zetten, dan zitten we in een hoge druk omstandigheid waar alleen maar meer fouten worden
                            gemaakt. In het vervolg moeten we daar rustig de tijd ervoor nemen.
                        </p>
                        <p>
                            Ik vond wel de team indeling beter dan TLE-3 dit is omdat ik een duidelijke rol had in het
                            team waar ik me aan kon houden (back-end). Hierdoor wist ik altijd waar ik aan toe was.
                        </p>
                        <p>
                            Iets waar ik me aan wil werken voor de toekomst zijn jobs to be done, ik weet nog niet goed
                            wat ik vind van jobs to be done omdat ik er nog niet naar mijn mening genoeg van begrijp. Ik
                            wil dit veranderen om daar meer aandacht aan te besteden thuis.
                        </p>
                    </div>
                </Card>

                <Card title="Boek: Context" setOpen={setOpen} open={open} id='6'>
                    <div className="flex gap-3 flex-col">
                        <p>
                            Ik heb het boek Homo Deos gelezen. Ik heb het boek gelezen omdat ik het intressant vond om
                            te
                            weten
                            wat de schrijver denkt wat de toekomst van de mens is.
                        </p>
                        <p>
                            De schrijver verteld dat de Homo
                            Sapiens
                            het
                            verhaal mens was, door verhalen te vertellen konden we veel meer mensen tot een doel
                            brengen
                            dan
                            andere mensen soorten. Andere mensen soorten konden alleen hun groep (familie en
                            vrienden)
                            samenbrengen, terwijl de Homo Sapiens miljoenen mensen samen kon brengen door verhalen.
                        </p>

                        <p>
                            De toekomstige mens is volgens de schrijver minder gericht op het schrijven en bedenken van
                            verhalen, dit is omdat AI dat ook kan doen, het maakt de mens niet meer uniek zoals het
                            vroeger wel was. De mens moet zich dus veranderen.
                        </p>
                        <p>
                            Homo Deus is de volgende mens met goddelijke krachten, door AI en algoritmes hebben ze
                            ouderdom en ziektes weggehaald. Alles is geoptimaliseerd waaronder ander emoties.
                        </p>
                        <p>
                            Ik vondt het boek heel intressant waardoor ik ook Homo Sapiens gekocht heb, het is alleen
                            nog niet aangekomen.
                        </p>

                    </div>
                </Card>

                <Card title="Boek: Leerpunten" setOpen={setOpen} open={open} id='7'>
                    <div className="flex gap-3 flex-col">

                        <p>
                            Ik heb veel van het boek geleerd over de toekomst van de mens, maar ook over het verleden
                            van
                            de mens. Het boek was dystopisch, maar dat is hoe mensen het best dingen kunnen onthouden.
                            Ik denk niet dat we bang moeten zijn voor AI, we moeten opletten hoe we AI gebruiken en wat
                            AI kan.
                        </p>
                        <p>
                            Dat is ook iets wat ik heb geleerd van het boek, wat ik verder ook wil gebruiken in
                            mijn projecten. Ik wil dat de mens de baas blijft over AI en niet data AI de baas wordt en
                            de mens bestuurd, dit kan ik doen door bijvoorbeeld AI niet verplicht te maken om te
                            gebruiken.
                        </p>
                        <p>
                            In de toekomst wil ik altijd voorzichtig omgaan met AI en mensen altijd de keuze laten maken
                            om geen AI te gebruiken, dit is ook gebeurt in Board-it, hier kan de gebruiker kiezen om AI
                            te gebruiken maar het is niet verplicht. Ik wil mezelf ook verder verdiepen in de toekomst,
                            hiervoor ben ik aan het kijken waar ik het boek Nexus kan lezen. Nexus gaat over de impact
                            van AI op onze samenleving.
                        </p>
                    </div>
                </Card>
                <Card title="Signatuur: Website" setOpen={setOpen} open={open} id='8'>
                    <div className="flex gap-3 flex-col">
                        <p>
                            Ik besloot om een website te maken omdat mij dat het leukst leek, en handig was voor de
                            toekomst. Een website kan ik gebruiken om toekomstige stages / bedrijven te vinden. Ik heb
                            de website met components gemaakt omdat ik mezelf daarin wilde verder ontwikkelen. Door het
                            gebruik van components kan ik de website ook makkelijk verder uitbreiden.
                        </p>
                        <p>
                            Ik heb express een progressie balk in de website gezet, omdat ik mezelf ook zag ontwikkelen
                            en progressie maken tijdens en na mijn TLE's. Ik heb gekozen om mijn tekst vlakken te laten
                            lijken op waarschuwingen, omdat ik dat goed overeen vond komen met Homo Deus, het is een
                            waarschuwing over de toekomst, van wat er kan gebeuren. Dit is niet altijd negatief door er
                            goed over na te denken kan ik ook impact hebben op de toekomst.
                        </p>
                    </div>
                </Card>
                <Card title="AI disclaimer" setOpen={setOpen} open={open} id='9'>
                    <div className="flex gap-3 flex-col">
                        <p>
                            Ik heb AI gebruikt om meer te leren over react, als ik niet wist hoe ik iets wilde doen heb
                            ik het eerst zelf proberen te maken en daarna het aan AI te vragen, alles wat ik heb
                            neergezet heb ik zelf geschreven. Mijn doel van dit project was meer te leren met het werken
                            met components en werken in react.
                        </p>
                        <p>
                            Ai heb ik ook geprobeerd gebruikt om mijn spelling te controleren, dat ging alleen niet goed
                            waardoor ik halverwege gestopt ben met het checken van spelling via AI. AI ging sommige
                            worden samenvoegen wat niet handig was. <a
                            href="https://chatgpt.com/c/6a352207-3b54-83eb-babb-5e35c94087df"
                            className="text-blue-700 underline">Link naar ChatGPT</a>
                        </p>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Home