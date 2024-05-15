import './App.css';
import main from './assets/images/rsz_2benin-main.jpg';
import flag from './assets/images/benin-flag.png';
import beach from './assets/images/levertbeach.webp';
import beninart from './assets/images/rsz_beninarts.jpg';
import wildlife from './assets/images/rsz_1wildlife.jpg';
import lion from './assets/images/rsz_1chetah.jpg';

function App() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <a href="/"><img src={flag} alt="flag"></img></a>
          </div>
        </nav>
        <img src={main} className="main-img" alt="background"></img>
        <div className="welcome-text"> Ẹ ku abọ si Benin</div>
        <button className="centered-button">Wo</button>
        
        <div className="banner">
        <h1 className="main-title">🇧🇯 Ṣawari Ẹwa ti Bẹ̀nẹ̀ 🇧🇯 </h1>
        </div>
      


       
         <div className="section-1">
           <img src={beach} className="benin-beach"></img>
         <div className="section-2"> 
         <h2 className="beaches-title"> Ṣawari Awọn Eti okun Alaragbayida </h2>
          <p className="beach-info"> Bẹ̀nẹ̀ jẹ́ ibùdó fún diẹ ninu àwọn etí òkun ẹlẹwà jùlọ àti àlàáfíà lórí
           etí òkun Atlantic. Bí o bá jẹ́ ẹni tí ó fẹ́ oorun ìbílẹ̀, ẹni tí ó fẹ́ ìtàn, tàbí ẹni tí ó fẹ́ ẹwà
            àdánidá, àwọn etí òkun Bẹ̀nẹ̀ ní ohun tí ó pẹ̀lú fún gbogbo ènìyàn.
          </p>
         </div>
         </div>

         <div className="section-3"> 
         <h1 className="arts-title"> Àwọn iṣẹ́ ọnà ìtàn </h1>
          <p className="arts-info"> Bẹ̀nẹ̀, ilé-ẹ̀jọ́ kan tí ó wà ní apá gúúsù ilẹ̀ Nàìjíríà lónìí, ní ìtàn 
          ìṣẹ̀dá iṣẹ́ ọnà tí ó wuni àti tí ó nira, tí ó ti fiyè sí àwọn akéwì ìtàn, àwọn afẹ́ iṣẹ́ ọnà, 
          àti àwọn akójọpọ̀ fún ọ̀pọ̀lọpọ̀ ọ̀rúndún. Ìjọba Bẹ̀nẹ̀, tí ó tànkálẹ̀ láti ọ̀rúndún kẹtàlá sí ọ̀rúndún 
          kẹ́sàán, jẹ́ olókìkí fún àwọn okúta bàronììsì aláragbayida rẹ̀, iṣẹ́ ìkànsí ekuru, àti àwọn iṣẹ́ ọnà
           mìíràn tí ó ń ṣe àfihàn ìmọ̀ àti ìgbéyàwó àṣà tí àwọn ènìyàn Ẹ̀dó ní.
          </p>
         </div>
         <div className="section-4">
          <img src={beninart} />
         </div>
      
   
          <div className="section-5">
         <h2 className="wild-title"> Eranko Igbo Aláragbayida </h2>
          <p className="wild-info"> Orílẹ̀-èdè Olómìnira Bẹ̀nẹ̀ jẹ́ òkùnkùn tí ó wọ̀pọ̀ fún àwọn olólùfẹ́ eranko 
          igbo. Orílẹ̀-èdè kékeré yìí tí ó ní òpọ̀lọpọ̀ èdá ayé ni ó ní ẹ̀kúnrẹ́rẹ́ àwọn èto ayé, láti àwọn sáfánà
          àti àwọn ilẹ̀ pápá omi dé igbo àti àwọn ẹkùn etí okun, gbogbo rẹ̀ ní wọn kún fún àwọn èweko àti 
          ẹranko aláìmọ́fúnní. Fun àwọn tí ó ń wá ìrírí eranko igbo tí ó jẹ́ gidi àti tí kò ní àwọn ènìyàn 
          púpọ̀, Bẹ̀nẹ̀ ń pèsè àjọpọ̀ aláragbayida ti ẹwà àdánidá àti eranko igbo tó yàtọ̀.
          </p>
          <div className="section-6">
            <img src={wildlife} />
            <img src={lion} />
          </div>

          </div>
          <footer className="footer">
            <div className="footer-info">
                <p>&copy; 2024 Benin Adventures</p>
            </div>
        </footer>
      

        
  
      </div>
    </>
  );
}

export default App;

