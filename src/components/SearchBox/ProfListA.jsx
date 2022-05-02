import './ProfListA.css';
//import {profs} from './data';
import profs from './jdataProfs.json';

function ProfListA({suchwort, clicked, checkbox, cat}) {
  if (clicked) {
    if (
      (books[i].autor=== suchwort || books[i].titel.toLowerCase().includes(suchwort.toLowerCase()))
      &&(!checkbox || (checkbox && books[i].lieferbar))
      &&(!cat || books[i].kat === cat)
    ) 
    {
  
  let bl = [];
  for (let i = 0; i < profs.length; i++) {
    bl.push(<div className="accordion-item" key={i}>
            <h2 className="accordion-header" id={"heading"+i}>
              <button className="accordion-button collapsed" type="button" 
                  data-bs-toggle="collapse" data-bs-target={"#collapse"+i} 
                  aria-expanded="false" aria-controls={"collapse"+i}>
                      {profs[i].autor}: &nbsp;
                      <span className="btitel">Das ist ein Buch </span> &nbsp;
                      {profs[i].preis}€
              </button>
            </h2>
            <div id={"collapse"+i} className="accordion-collapse collapse" 
                  aria-labelledby={"heading"+i} data-bs-parent="#profsAccordion">
              <div className="accordion-body">
                <strong>Hier stehen weitere Details.</strong> 
              </div>
            </div>
          </div>  );      
   }
  }
    }
  

  return (
  <div className="accordion" id="profsAccordion">
    {bl}
  </div>
  );
}

export default ProfListA;
