import { createContext, useState } from "react";
import { baseUrl } from "../BaseUrl";

// Understanding the concept of Context Api 

// step:1 -> Create a context
export const AppContext = createContext();

// step:2 -> Provide the context
export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(null);


    async function fetchingPageData(page = 1){
        setLoading(true)
        try{
            const data = await fetch(`${baseUrl}?page=${page}`);
            const response = await data.json();
            setPage(response.page);
            setPosts(response.posts);
            setTotalPages(response.totalPages);
            
        }catch(err){
            console.log("error aa gya hai"+ err);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchingPageData(page);
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchingPageData
    }

    // step:3 -> Consume the context

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>


}