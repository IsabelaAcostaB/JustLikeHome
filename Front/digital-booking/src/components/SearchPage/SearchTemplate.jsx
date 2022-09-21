import React, { useContext, useState, useEffect } from "react";
import { FilterContext } from "../../components/FilterContext";
import Listar from "../../components/List/List";
import Url from "../../util/Url";
import axios from "axios";
import "./searchtemplate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import moment from "moment/min/moment-with-locales";
import { set } from "date-fns";

const SearchTemplate = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, isLoading] = useState(true);
  const { handleFilterData } = useContext(FilterContext);

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
      filterData.cityCode &&
      filterData.category
    ) {
      const getProductsByCityAndDatesAndCategory = async () => {
        const url =
          Url() +
          `/api/product/${filterData.cityCode}/${filterData.rangeOfDates.checkIn}/${filterData.rangeOfDates.checkOut}`;
        const result = await axios.get(url);
        let results = result.data;
        let resultsFiltered = [];
        setProducts(result.data);
        results.forEach((element) => {
          if (element.category.code === filterData.category) {
            resultsFiltered.push(element);
          }
        });
        setProducts(resultsFiltered);
      };

      getProductsByCityAndDatesAndCategory();
    } else if (
      filterData.rangeOfDates.checkIn &&
      filterData.rangeOfDates.checkOut &&
      filterData.cityCode
    ) {
      /* const getProductsByCityAndDates = async () => {
        const url =
          Url() +
          `/api/product/${filterData.cityCode}/${filterData.rangeOfDates.checkIn}/${filterData.rangeOfDates.checkOut}`;
        const result = await axios.get(url);
        setProducts(result.data);
      };
      getProductsByCityAndDates(); */
      const getProductsByDatesAndCity = async () => {
        let checkIn = filterData.rangeOfDates.checkIn.replaceAll("/", "-");
        let checkOut = filterData.rangeOfDates.checkOut.replaceAll("/", "-");

        const url = Url() + `/api/product/${checkIn}/${checkOut}`;
        const result = await axios.get(url);
        let results = result.data;
        let resultsFiltered = [];
        setProducts(result.data);
        results.forEach((element) => {
          if (element.city.code === filterData.cityCode) {
            resultsFiltered.push(element);
          }
        });
        setProducts(resultsFiltered);
      };
      getProductsByDatesAndCity();
    } else if (
      filterData.rangeOfDates.checkIn &&
      filterData.rangeOfDates.checkOut &&
      filterData.category
    ) {
      const getProductsByDatesAndCategory = async () => {
        let checkIn = filterData.rangeOfDates.checkIn.replaceAll("/", "-");
        let checkOut = filterData.rangeOfDates.checkOut.replaceAll("/", "-");

        const url = Url() + `/api/product/${checkIn}/${checkOut}`;
        const result = await axios.get(url);
        let results = result.data;
        let resultsFiltered = [];
        setProducts(result.data);
        results.forEach((element) => {
          if (element.category.code === filterData.category) {
            resultsFiltered.push(element);
          }
        });
        setProducts(resultsFiltered);
      };
      getProductsByDatesAndCategory();
    } else if (filterData.cityCode && filterData.category) {
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
    } else if (
      filterData.rangeOfDates.checkIn &&
      filterData.rangeOfDates.checkOut
    ) {
      const getProductsByDates = async () => {
        let checkIn = filterData.rangeOfDates.checkIn.replaceAll("/", "-");
        let checkOut = filterData.rangeOfDates.checkOut.replaceAll("/", "-");

        const url = Url() + `/api/product/${checkIn}/${checkOut}`;
        const result = await axios.get(url);

        setProducts(result.data);
      };
      getProductsByDates();
    } else if (filterData.cityCode && filterData.category) {
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
    let checkIn = filterData.rangeOfDates.checkIn;
    let checkOut = filterData.rangeOfDates.checkOut;

    function newDateFormatter(date) {
      const dateDayFirst = moment(date).locale("es");

      return dateDayFirst.format("DD/MM/YYYY");
    }

    function changeDates() {
      if (
        filterData.rangeOfDates.checkIn !== null &&
        filterData.rangeOfDates.checkOut !== null
      ) {
        checkIn = filterData.rangeOfDates.checkIn.replaceAll("-", "/");
        checkOut = filterData.rangeOfDates.checkOut.replaceAll("-", "/");
        checkIn = newDateFormatter(checkIn);
        checkOut = newDateFormatter(checkOut);
      }
    }
    changeDates();

    if (
      filterData.cityCode !== null &&
      filterData.category !== null &&
      filterData.rangeOfDates.checkIn !== null &&
      filterData.rangeOfDates.checkOut !== null
    ) {
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
          <li>
            {checkIn} -{checkOut}
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="no-filter"
              onClick={() =>
                handleFilterData({
                  rangeOfDates: {
                    checkIn: null,
                    checkOut: null,
                  },
                })
              }
            />
          </li>
        </ul>
      );
    } else if (
      filterData.cityCode !== null &&
      filterData.rangeOfDates.checkIn !== null &&
      filterData.rangeOfDates.checkOut !== null
    ) {
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
            {checkIn} -{checkOut}
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="no-filter"
              onClick={() =>
                handleFilterData({
                  rangeOfDates: {
                    checkIn: null,
                    checkOut: null,
                  },
                })
              }
            />
          </li>
        </ul>
      );
    } else if (
      filterData.category !== null &&
      filterData.rangeOfDates.checkIn !== null &&
      filterData.rangeOfDates.checkOut !== null
    ) {
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
          <li>
            {checkIn} -{checkOut}
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="no-filter"
              onClick={() =>
                handleFilterData({
                  rangeOfDates: {
                    checkIn: null,
                    checkOut: null,
                  },
                })
              }
            />
          </li>
        </ul>
      );
    } else if (filterData.cityCode !== null && filterData.category !== null) {
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
    } else if (
      filterData.rangeOfDates.checkIn !== null &&
      filterData.rangeOfDates.checkOut !== null
    ) {
      return (
        <ul type="none" className="filters-applied">
          <li>
            {checkIn} -{checkOut}
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="no-filter"
              onClick={() =>
                handleFilterData({
                  rangeOfDates: {
                    checkIn: null,
                    checkOut: null,
                  },
                })
              }
            />
          </li>
        </ul>
      );
    }
  }

  function RenderFilterDates() {
    let checkIn = filterData.rangeOfDates.checkIn;
    let checkOut = filterData.rangeOfDates.checkOut;

    function newDateFormatter(date) {
      const dateDayFirst = moment(date).locale("es");

      return dateDayFirst.format("DD/MM/YYYY");
    }

    function changeDates() {
      if (
        filterData.rangeOfDates.checkIn !== null &&
        filterData.rangeOfDates.checkOut !== null
      ) {
        checkIn = filterData.rangeOfDates.checkIn.replaceAll("-", "/");
        checkOut = filterData.rangeOfDates.checkOut.replaceAll("-", "/");
        checkIn = newDateFormatter(checkIn);
        checkOut = newDateFormatter(checkOut);
      }
    }
    changeDates();

    if (
      filterData.rangeOfDates.checkIn !== null &&
      filterData.rangeOfDates.checkOut !== null
    ) {
      return (
        <li>
          {checkIn} - {checkOut}
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="no-filter"
            onClick={() =>
              handleFilterData({
                rangeOfDates: {
                  checkIn: null,
                  checkOut: null,
                },
              })
            }
          />
        </li>
      );
    }
  }
  function RenderFilterCategory() {
    if (filterData.category !== null) {
      return (
        <li>
          {filterData.category}
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="no-filter"
            onClick={() => handleFilterData({ category: null })}
          />
        </li>
      );
    }
  }
  function RenderFilterCity() {
    if (filterData.city !== null) {
      return (
        <li>
          {filterData.cityCode}
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="no-filter"
            onClick={() => handleFilterData({ cityCode: null })}
          />
        </li>
      );
    }
  }




  return (
    <div className="page">
      <div className="filter-header">
        <h2>Resultados de tu búsqueda:</h2>
        <ul type="none" className="filters-applied">
           <RenderFilters /> 
          {/* <RenderFilterDates />
          <RenderFilterCategory />
          <RenderFilterCity />  */}
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
