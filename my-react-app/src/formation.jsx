function Formation(){
    return(
        <div className='formation'>
           
            <h2>formation :</h2>
            <label htmlfor="bac"> type de baccalauréat : </label>
            <input type="text" id="bac" />
            <label htmlfor="mension"> mension: </label>
            <input type="text" id="mension" /><br />
            <label htmlfor="annee"> Anneé d'obtention du bac : </label>
            <input type="text" id="bac" />
            <label htmlfor="bac"> type de baccalauréat : </label>
            <input type="text" id="bac" /><br />
            <select name="diplome" id="diplome">
                <option value="deug">deug</option>
                <option value="dut">dut</option>
                <option value="dust">dust</option>
                <option value="licence">licence</option>
                <option value="master">master</option>
                <option value="doctorat">doctorat</option>
            </select><br />
            <textarea name="obj" id="obj" cols="30" rows="10">
                discription des objectifs personnels
            </textarea><br />
            <button id="submit">Submit</button>

            
        </div>
    );
}

export default Formation