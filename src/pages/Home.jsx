import { useState } from "react";

const Home = () => {

    const [SearchStr, setSearchStr] = useState("");

    const onSearchInputChange = (ev) =>{
        setSearchStr(ev.target.value);
    };

    const onSearch =async(ev)=>{
        ev.preventDefault();

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${SearchStr}`)
        const body = await response.json();
        
        console.log(body)
        //https://api.tvmaze.com/search/shows?q=boys
    };
    
    return (
    <div> 

        <form onSubmit={onSearch}>
        <input type="text" value={SearchStr} onChange={onSearchInputChange}/>
        <button
            type="button"
            onClick={()=>{
                setInputValue("And");
            }}
        >Search
        </button>
       </form>
         </div>
    );
};

export default Home;