import './PL.css';
import {profs} from './assets/data.jsx';

function PL({suchwort, checkb ,clicked, cat}) {

  console.log("cat: "+cat);

  let bl = [];

  for (let  i=0; i<profs.length; i++) {

    if (clicked) {

      if (
          ((profs[i].autor === suchwort || 
              profs[i].titel.toLowerCase().includes(suchwort.toLowerCase()))
              && (!cat || profs[i].kat === cat )
              && (!checkb || (checkb && profs[i].lieferbar) ) )
          )      
      {

      bl.push(<div className="blc" key={i}> 
          <strong>{profs[i].kat}</strong> &nbsp;
          {profss[i].autor} &nbsp;
          <span className="bls">{profs[i].titel} </span>&nbsp;
          {profs[i].preis}€
          </div>);
      } 
    }       
  }

  return (
    <div>{bl}</div>
  );
}

export default PL;
