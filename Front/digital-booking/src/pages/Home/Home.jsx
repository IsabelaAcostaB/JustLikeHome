import React from "react";

import ListarCat from "../../components/categories/Categories";
import axios from 'axios';

import List from "../../components/List/Lists";

import SearchBar from "../../components/Buscador/SearchBar";


const Home = ()=>{
    const [data, setData] = useState({ List: [] });  
    useEffect(async () => { 
        const result = await axios.get(
          'http://localhost:8080/api/',
           );
    
        setData({List: result.data});
      }, [] ); 
     
    return(
        <div className="main">
            <SearchBar></SearchBar>
            <h1 className="category-title">Bienvenido a Just like Home</h1>
            
            <h2 className="category-title">Selecciona un tipo de alojamiento</h2>
           <ListarCat/>
            <h2 className="recommendation-h2">Recomendados</h2>
            <ul>
            
      {data && data.List.map(item => (
        <li key={item.ID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>

        </div>
    )
}

export default Home