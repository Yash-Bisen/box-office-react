import { useState } from "react";
import { searchForShows } from "./../api/tvmaiz";


const Home = () => {

    const [SearchStr, setSearchStr] = useState("");
    const [apiData, setApiData] = useState (null);
    const [apiDataError, setApiDataError] = useState(null);

    const onSearchInputChange = (ev) =>{
        setSearchStr(ev.target.value);
    };

    const onSearch =async (ev)=>{
        ev.preventDefault();

        try{
            setApiDataError(null);
            const result= await searchForShows(SearchStr);
            setApiData(result);

        }
        catch(error){
            setApiDataError(error);
        }  
    };

    const renderApiData =()=> {

        if(apiDataError){
            return <div>Error Occour: {apiDataError.message}</div>
        }

        if(apiData){
            return apiData.map((data)=>(
            <div key={data.show.id}> {data.show.name}</div>
        ));
       
        }
        return null;
    }
    
    return (
    <div> 

        <form onSubmit={onSearch}>
        <input type="text" value={SearchStr} onChange={onSearchInputChange}/>
        <button type="submit">Search</button>
       </form>

       <div>{renderApiData()}</div>

       
         </div>
    );
};

export default Home;