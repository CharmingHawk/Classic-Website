import './proflist.css';
import {profs} from './assets/data';

function ProfList({suchwort, clicked, checkbox, cat}) {
  
  let bl = [];
  for (let i = 0; i < profs.length; i++) {
    if (clicked) {
      if (
        (profs[i].autor=== suchwort || profs[i].titel.toLowerCase().includes(suchwort.toLowerCase()))
        &&(!checkbox || (checkbox && profs[i].lieferbar))
        &&(!cat || profs[i].kat === cat)
      ) 
      {
      bl.push(<div key={i} >{profs[i].autor}:&nbsp;
            <span className="btitel">{profs[i].titel} </span>&nbsp;
            {profs[i].preis}€</div>);
      }
    } 
  }
  

  return (
  <div >
    {bl}
  </div>
  );
}

export default ProfList;
