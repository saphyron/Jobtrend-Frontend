import React from "react";
import img1 from "../images/Billede1.jpg";
import img2 from "../images/Billede2.jpg";
import img3 from "../images/Billede3.jpg";

export default function Cominfo() {

  const url = window.location.href;
  return (
    <div className="addinfo flexColumn">
   
      <div className="jobinfotext">
      <span className="url">{url}</span>
        <h2>Key Accont Manager til Nomeco HealthCare Logistics</h2>
        <p>Tecsys er en fleksibel og initiativrig virksomhed</p>
      </div>
      <div className="addwrap flexRow">
        <div className="addtext">
          <h4>Bliv en del af Tecsys</h4>
          <p>
            Tecsys er en <span> fleksibel og initiativrig </span>virksomhed med en dynamisk og flad
            ledelsesstruktur præget af tæt kontakt{" "}
            <span>mellem ledelse og ansatte, og hvor tillid</span> og åbenhed præger samarbejdet på
            alle niveauer.
          </p>
          <p>
            Som en del af Tecsys kommer du til at arbejde med tekniske og faglige udfordringer i et
            højt tempo, men der er altid tid til at samles omkring frokosten og tale om løst og
            fast. Der er fokus på medarbejderen, som den vigtigste ressource i virksomheden.
          </p>
          <p>
            Derfor har vi en meget <span>aktiv medarbejderklub</span>, som løbende afholder
            spændende sociale aktiviteter som fx svæveflyvning, kanosejlads, golf, go-cart og meget
            andet. Vi driver en succesfuld forretning, fordi vi har kompetente og engagerede
            medarbejdere! Det opnår vi gennem målrettet at styre fagligheden ved kurser,{" "}
            <span>efteruddannelse og certificeringer </span>.
          </p>
          <p>
            Vores selvstændige medarbejdere tør tage ansvar i den form, en konkret sag måtte kræve:
            Ansvar for kunden, ansvar for løsningen og for vores værdier både internt og eksternt.
          </p>
          <p>Uopfordrede ansøgninger kan sendes til: DK-job@tecsys.com.</p>
          <p>Se aktuelle jobopslag på Jobindex</p>
        </div>
        <div className="addimages">
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
          <img src={img3} alt="img3" />
        </div>
      </div>
    </div>
  );
}
