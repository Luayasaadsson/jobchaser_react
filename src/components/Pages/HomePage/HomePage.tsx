import Nav from "../../../components/Nav/Nav";
import styles from "./HomePage.module.css";
import ProfileCards from "./../../../components/ProfileCards/ProfileCards";
import ProfilePicture1 from "./../../../images/p1.jpg";
import ProfilePicture2 from "./../../../images/p2.jpg";
import ProfilePicture3 from "./../../../images/p3.jpg";
import ProfilePicture4 from "./../../../images/p4.jpg";

const HomePage = () => {
  const reviews = [
    {
      name: "Anna Andersson",
      text: "Fantastisk service, kommer definitivt att använda JobChaser igen!",
      description:
        "Jag är imponerad av Jobchaser för deras överlägsna service och användarvänlighet. Plattformen är utrustad med genomtänkta filter som effektiviserar sökprocessen, och deras notifikationssystem ser till att jag aldrig missar en passande jobbannons. Mitt perfekta jobb fann jag tack vare deras effektiva matchningstjänst – helt fantastiskt!",
      avatar: ProfilePicture1,
      rating: 5 
    },
    {
      name: "Lars Larsson",
      text: "Enastående plattform för jobbsökning!",
      description:
        "Jobchaser har verkligen överträffat alla andra jobbsökningsplattformar jag använt. Dess avancerade sökfunktioner och detaljerade filter gör att jag snabbt kan hitta relevanta jobberbjudanden. Notisfunktionen är också toppen – den uppdaterar mig kontinuerligt om nya jobb som passar mina önskemål. Jag lyckades få mitt ideala jobb inom bara några veckor tack vare Jobchaser. Otroligt tacksam för denna service!",
      avatar: ProfilePicture2,
      rating: 5
    },
    {
      name: "Joel Simonsson",
      text: "Utmärkt verktyg för jobbjägare!",
      description:
        "Jobchaser har varit en revolution för min karriär. Deras plattform erbjuder avancerade filter som gör det enkelt att sortera och välja bland jobberbjudanden, medan deras realtidsnotifikationer ser till att jag alltid är först med att veta om nya jobb som passar min profil. Jag fick mitt drömjobb inom kort efter att ha börjat använda Jobchaser. Verkligen en ovärderlig resurs!",
      avatar: ProfilePicture3,
      rating: 3.5
    },
    {
      name: "Ella Gustavsson",
      text: "Förstklassig jobbsökningssida!",
      description:
        "Efter att ha provat flera olika plattformar för jobbsökning, måste jag säga att Jobchaser är den bästa. Deras detaljerade sökfunktioner tillåter en precision i jobbsökandet som är oöverträffad, och deras alerter håller mig ständigt informerad om nya möjligheter. Det var här jag fann min drömanställning på rekordtid. Tack Jobchaser för en suverän upplevelse!",
      avatar: ProfilePicture4,
      rating: 4.5
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Vi hjälper dig att hitta ditt{" "}
            <span className={styles.jobspan}>drömjobb!</span>
          </h1>
          <p className={styles.description}>
            Hitta ditt drömjobb hos oss. Utforska tusentals jobbmöjligheter över
            hela världen.
          </p>
        </div>
      </div>
      <ProfileCards reviews={reviews} />
    </>
  );
};

export default HomePage;
