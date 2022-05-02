import React, { useState } from "react";
import "../../Style.scss";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ data }){
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {

        const searchWord = event.target.value;
        setWordEntered(searchWord);

        const newFilter = data.filter((value) => {
          return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }


      };
    
      const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };

    


    return(
        <div>
            <div className="search-box">
                 <input id= "inputSearch" type="text" placeholder= "Gebe deine Suche ein..." value={wordEntered} onChange={handleFilter}/>
                 <div className="searchIcon">
                     {filteredData.length === 0 ? (
                     <SearchIcon />) : (
                     <CloseIcon id="clearBtn" onClick={clearInput} />)}</div>
                 <div>
                 {filteredData.length !== 0 && (
                 <div className="dataResult">
                     {filteredData.slice(0, 15).map((value, key) => {
                         return (
                         <a className="dataItem" href={value.link}>
                             <p>{value.name} </p>
                             </a>
                             );
                             })}
                 </div> )}
                 </div>
                 </div>
                 
                 <div className="filter-outer">
                    <div class="form-check form-check-inline"> 
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1"  value="IIB"/>
                        <label class="form-check-label" for="inlineCheckbox1">IIB</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2"  value="WIB"/>
                        <label class="form-check-label" for="inlineCheckbox2">WIB</label>
                    </div>
                </div>
        </div>
        );

}

export default SearchBar;
