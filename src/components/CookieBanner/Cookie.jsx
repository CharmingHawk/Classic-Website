import RealCookies from "universal-cookie"; 

function close() {
  var cookieElem = document.querySelector(".Cookie"); 
  cookieElem.style.display = "none";
}

function handleAccept() {
  close(); 
  const rc = new RealCookies();
  rc.set("name", "inhalt", {path:"/"}); 
  console.log("Cookie erfolgreich gespeichert");
}

function handleNotAccept() {
  close(); 
}


function change() {

}

export default function Cookie(props) {

  return <div className="Cookie"> 
    <h3>Cookie Header</h3>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
   </p>
    <div className="cookieCheckboxElemen">
      <label> 
        <input onChange={change} type="checkbox" checked  /> 
        Essentiell    
      </label>
      <label> 
        <input onChange={change} type="checkbox" /> 
        Alle 
      </label>
      <label> 
        <input onChange={change} type="checkbox" /> 
       Freiwillig 
      </label>
    </div>
    <div className="cookieButtonElemen">
      <div className="cookieButton" onClick={handleAccept}>Aktzeptieren</div>
      <div className="cookieButton" onClick={handleNotAccept}>Nicht Aktzeptieren</div>
    </div>
  </div>;
}
