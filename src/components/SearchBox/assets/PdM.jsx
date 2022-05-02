import './PdM.css';
import {useEffect, useState} from 'react';


function PdM() {

  const [state, setState] = useState({sum:''});

  useEffect(() => {

    

    const endpoint = 'https://de.wikipedia.org/w/api.php?action=parse&origin=*&page=Isaac_Asimov&prop=text&format=json';

    /*fetch(endpoint)
    .then(response => response.json())
    //.then(data => console.log(data.parse.text['*']));
    .then (data => setState({sum: data.parse.text['*']}));*/

    async function wcall() {
      const response = await fetch(endpoint);
      const data = await response.json();

      let text = data.parse.text['*'];

      text = text.substring(0, text.indexOf('<h2 id="mw-toc-heading">Inhaltsverzeichnis</h2>'));

      setState({sum: text}) ;
    }
    wcall();
  
  }, [ ])

  return (
   
    

    <div className ="card">
        <div className ="card-header"> Autor des Monats</div>
        <div className ="card-body">
            <h5 className ="card-title">Isaac Asimov</h5>
            <p className ="card-text"><div dangerouslySetInnerHTML = {{__html: state.sum}} /></p>
        </div>
    </div>
  );
}

export default PdM;
