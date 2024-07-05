import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from '../../api/axios';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState();

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);  
    }
    
    let query = useQuery();
    const searchTerm = query.get("q")
    
    useEffect(() => {
        if(searchTerm){
            fetchSearchMovie(searchTerm)
        }
    }, [searchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        try{
            const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
            setSearchResults(request.data.results)
            console.log(searchResults)
        }catch(error){
            console.log("error", error)
        }
    }

    return (
        <div>SEARCH PAGE</div>
    )
}

export default SearchPage