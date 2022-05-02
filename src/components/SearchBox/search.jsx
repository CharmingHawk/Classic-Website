import "./search.css"
import { useState} from 'react';
import ProfList from './proflist';
import BL from './BL';
import ProfListA from './ProfListA';
import {cats} from './assets/data';

function SearchBar(){
    const [state, setState] = useState({sw:'', cb:'', cat:'', clicked:false});

    let cl =[<option key={-1}></option>];

    for (let i=0; i<cats.length; i++) {

      cl.push(<option key={i} value={cats[i]}>{cats[i]}</option>);
    }
    

    function onOnclickHandler() {
      alert(document.getElementById('dInput').value); 
      setState({sw: document.querySelector('#dInput').value,
                clicked: true,
                cb: document.querySelector('#dCheckbox').checked,
                cat: document.querySelector('#dSelect').value
              });
    };
    return(
      <div id="sammelContainer">
      <div className="form-check">
          <input id="dCheckbox" className="form-check-input" type="checkbox" value="" />
          <label htmlFor="dCheckbox" className="form-check-label">nur lieferbare anzeigen</label>
      </div>
     
      <div>
          <select className="form-select" aria-label="Kategorien Auswahl" id="dSelect">
              {cl}
          </select>
    
        <div className="sucheC">
          <input type="text" placeholder="Suchwort" id="dInput"/>
          <button onClick={onOnclickHandler}>Suche</button>
        </div>
      </div>
  
        <ProfList suchwort= {state.sw} clicked={state.clicked} 
                  cat= {state.cat} checkbox={state.cb}/>
      </div>
    );
}

export default SearchBar;
