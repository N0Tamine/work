function Infoperso(){
    return(
        <div className="infoperso">
            <h2>informations personnelles :</h2>
            <label htmlFor="lname">Nom :</label>
            <input type="text" id="lname"/>
            <label htmlFor="name"> Prénom :</label>
            <input type="text" id="name"/><br />
            <label htmlFor="adresse"> Adresse:</label>
            <input type="text" id="adresse"/>
            <label htmlFor="age"> Age :</label>
            <input type="text" id="age"/><br />
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" />
            <label htmlFor="date"> Date :</label>
            <input type="date" id="date"/><br />
            <input type="radio" id="sit" />
            <label htmlFor="sit"> marié</label>
            <input type="radio" id="sit" />
            <label htmlFor="sit"> célebataire</label>
            <input type="radio" id="sit" />
            <label htmlFor="sit"> autre</label>
            
        </div>
    );
}

export default Infoperso