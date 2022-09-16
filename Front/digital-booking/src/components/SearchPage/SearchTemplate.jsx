import React, { useContext, useState, useEffect } from "react";
import { FilterContext } from "../../components/FilterContext";
import Listar from "../../components/List/List";
import Url from "../../util/Url";
import axios from "axios";
import "./searchtemplate.css";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import CitiesSearch from "./CitiesSearch";
import { set } from "date-fns";

const SearchTemplate = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const { handleFilterData } = useContext(FilterContext);
  /* const [search, setSearch] = useState({
    cityCode: null,
    category: null,
    rangeOfDates: {
      checkIn: null,
      checkOut: null,
    },
  }); */




  

  useEffect(() => {
    let url = Url() + "/api/city";
    axios
      .get(url)
      .then((response) => setCities(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let url = Url() + "/api/category";
    axios
      .get(url)
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  const { filterData } = useContext(FilterContext);
  useEffect(() => {
    if (
      filterData.rangeOfDates.checkIn &&
      filterData.rangeOfDates.checkOut &&
      filterData.cityCode
    ) {
      const getProductsByCityAndDates = async () => {
        const url =
          Url() +
          `/api/product/${filterData.cityCode}/${filterData.rangeOfDates.checkIn}/${filterData.rangeOfDates.checkOut}`;
        const result = await axios.get(url);
        setProducts(result.data);
      };
      getProductsByCityAndDates();
    } else if (
      filterData.rangeOfDates.checkIn &&
      filterData.rangeOfDates.checkOut
    ) {
      const getProductsByDates = async () => {
        let checkIn = filterData.rangeOfDates.checkIn.replaceAll("/", "-");
        let checkOut = filterData.rangeOfDates.checkOut.replaceAll("/", "-");

        const url = Url() + `/api/product/${checkIn}/${checkOut}`;
        console.log(url);
        const result = await axios.get(url);

        setProducts(result.data);
      };
      getProductsByDates();
    } else if (filterData.cityCode && filterData.category) {
      /*          ACAAAAAAAAAAAAAAAAAAA               */
      console.log("ciudad y categoria");

      const getProductsByCityAndCategory = async () => {
        const url =
          Url() + `/api/product/productCity/id/${filterData.cityCode}`;
        const result = await axios.get(url);
        let results = result.data;
        console.log(results);
        let resultsFiltered = [];

        results.forEach((element) => {
          if (element.category.code === filterData.category) {
            resultsFiltered.push(element);
          }
          /* element.city.code == filterData.cityCode ? resultsFiltered.push(element) : null */
        });

        setProducts(resultsFiltered);
      };
      getProductsByCityAndCategory();
    } else if (filterData.category) {
      //console.log('por categoria')
      const getProductsByCategory = async () => {
        const url =
          Url() + `/api/product/productCategory/code/${filterData.category}`;
        const result = await axios.get(url);
        setProducts(result.data);
      };
      getProductsByCategory();
    } else if (filterData.cityCode) {
      const getProductsByCity = async () => {
        const url =
          Url() + `/api/product/productCity/id/${filterData.cityCode}`;
        const result = await axios.get(url);
        setProducts(result.data);
      };
      getProductsByCity();
    } else {
      const getAllProducts = async () => {
        const url = Url() + "/api/product";
        const result = await axios.get(url);
        setProducts(result.data);
      };
      getAllProducts();
    }
  }, [filterData]);

  function RenderFilters() {
    if (filterData.cityCode !== null && filterData.category !== null) {
      return (
        <ul type="none" className="filters-applied">
          <li>
            {filterData.cityCode}
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="no-filter"
              onClick={() => handleFilterData({ cityCode: null })}
            />
          </li>
          <li>
            {filterData.category}
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="no-filter"
              onClick={() => handleFilterData({ category: null })}
            />
          </li>
        </ul>
      );
    } else if (filterData.cityCode !== null) {
      return (
        <ul type="none" className="filters-applied">
          <li>
            {filterData.cityCode}
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="no-filter"
              onClick={() => handleFilterData({ cityCode: null })}
            />
          </li>
        </ul>
      );
    } else if (filterData.category !== null) {
      return (
        <ul type="none" className="filters-applied">
          <li>
            {filterData.category}
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="no-filter"
              onClick={() => handleFilterData({ category: null })}
            />
          </li>
        </ul>
      );
    }
    console.log(filterData);
  }

  return (
    <div className="page">
      <div className="filter-header">
        <h2>Resultados de tu búsqueda:</h2>
        <ul type="none" className="filters-applied">
          {/* <li>
            {filterData.cityCode}
            <FontAwesomeIcon icon={faCircleXmark} className="no-filter" onClick={() => handleFilterData({cityCode: null})}/>
          </li>
          <li>
            {filterData.category}
            <FontAwesomeIcon icon={faCircleXmark} className="no-filter" onClick={() => handleFilterData({category: null})}/>
          </li> */}
          <RenderFilters />
        </ul>
      </div>
      <div className="filters">
        <div className="filters-container">
          <div className="categories">
            <h3>Categorías</h3>
            <ul type="none">
              {categories.map((item) => (
                <li
                  key={item.code}
                  onClick={() => handleFilterData({ category: item.code })}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="cities">
            <h3>Ciudades</h3>
            <ul type="none">
              {cities.map((item) => (
                <li
                  key={item.code}
                  onClick={() => handleFilterData({ cityCode: item.code })}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Listar products={products} />
      </div>
    </div>
  );
};

export default SearchTemplate;
