import Borsjtj_1 from './assets/Borstjt_1.jpeg'
import Borsjtj_4 from './assets/Borsjtj_4.jpg'
import Borsjtj_5 from './assets/Borsjtj_5.avif'


export const App = () => {
 

  return (
    <div
      style={{
      maxWidth:1280,
      }}
    >
        <img
      src={Borsjtj_1}
      alt="Traditional Ukrainiane soup"
        style={{
      width: '100%',   
      height: 'auto',   
      display: 'block', 
    }}
    />
    <div   style={{
      height:1336,
      paddingTop:'48px',
      paddingLeft:'48px',
      paddingRight:'48px',
      paddingBottom:'64px',
      backgroundColor:'#FCFCFC',
      }}
    >
      <h1
      style={{
     marginTop:'0px',
     marginBottom:'24px',
    color:'#A10000',
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '28px',
    lineHeight: 1,
    letterSpacing: 0,
      }}>Recept på Borsjtj: Värmande soppa från Ukraina</h1>

      <div  style={{
      maxWidth:1184,
      padding:'16px 16px 16px 16px',
      backgroundColor:'#EBEBEB',
      }}>
        <p style={{
     margin:0,
      }}>Upptäck den rika smaken av Ukraina med detta enkla och traditionella borsjtj-recept.</p></div>


        <div style={{marginTop:'24px',}}>
      <h2 style={{marginTop:'0px',marginBottom:'16px'}}>Ingredienser</h2>
      <p style={{ fontFamily: "'Open Sans', sans-serif",
    fontWeight: 400,
    fontStyle: 'regular',
    fontSize: '16px',   lineHeight: 1,
    letterSpacing: 0,}}>För 4 portioner</p>
      <ul style={{paddingInlineStart:'25px', marginBottom:'0px'}}>
        <li>500 g fläskkött eller nötkött med ben</li>
        <li>2–3 potatisar</li>
        <li>1 medelstor rödbeta</li>
        <li>1 morot</li>
        <li>1 lök</li>
        <li>1/2 liten vitkål</li>
        <li>2–3 msk tomatpuré</li>
        <li>2–3 vitlöksklyftor</li>
        <li>2 msk olja</li>
        <li>Salt, peppar, lagerblad</li>
        <li>Färsk dill eller persilja</li>
        <li>Gräddfil (valfritt)</li>
      </ul>
    </div>

      <div style={{marginTop:'24px',}}>
      <h2 style={{marginTop:'0px',marginBottom:'16px'}}>Så här gör du</h2>
   <ol style={{paddingInlineStart:'20px',marginBottom:'0px'}}>
  <li>Koka köttet i kallt vatten (ca 2 l), skumma ytan och tillsätt lagerblad och lite salt. Koka i 40–50 minuter.</li>
  <li>Riv rödbeta grovt, morot fint och hacka löken. Skär potatis i tärningar och strimla vitkålen.</li>
  <li>Stek lök och morot i olja 2–3 minuter. Tillsätt rödbeta och tomatpuré och stek ytterligare 5–7 minuter.</li>
  <li>Ta upp köttet, skär i bitar och lägg tillbaka i buljongen. Tillsätt potatis, koka 5–7 minuter, sedan vitkål och de stekta grönsakerna i 10–15 minuter.</li>
  <li>Tillsätt salt, peppar och pressad vitlök. Smaka av och ta av från värmen.</li>
  <li>Servera i skålar med gräddfil och färska örter.</li>
</ol>

    </div>

          <div style={{marginTop:'24px',}}>
      <h2 style={{marginTop:'0px',marginBottom:'16px'}}>Serveringsförslag</h2>
      <div      
      style={{
      maxWidth:1184,height:516,
      display:'flex', gap:'16px'
      }}>
        <div  style={{
      width:580,
      height:350
      }}> <img
      src={Borsjtj_4}
      alt="Traditional Ukrainiane soup"
        style={{
      width: '100%',   
      display: 'block',  height:350
    }}
    /></div>

     <div  style={{
      width:580,height:350
      }}> <img
      src={Borsjtj_5}
      alt="Traditional Ukrainiane soup"
        style={{
      width: '100%',      
      display: 'block', height:350
    }}
    /></div>
        

      </div>
    </div>


    </div>



      
    </div>
  );
};
