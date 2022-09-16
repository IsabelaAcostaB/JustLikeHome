import Header from "../../components/Header/Index"
import SearchTemplate from "../../components/SearchPage/SearchTemplate"
import SearchBar from "../../components/Buscador/SearchBar"
import Footer from "../../components/Footer/Index"

const Search = () => {
    return(
        <div className="main">
        <Header/>
        <SearchBar/>
        <SearchTemplate/>

        </div>
    )
}

export default Search