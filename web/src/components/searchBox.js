import React from 'react';

function SearchBox() {

    return(

        <form>
            <div className = "input-block">
                <label htmlFor="name">Pesquisar</label>
                <input
                    name="search"
                    id="search"
                    required />
                
                <button type="submit">Pesquisar</button>
            </div>
        </form>
    );   

}

export default SearchBox;