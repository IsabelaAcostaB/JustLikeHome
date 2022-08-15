import cities from "./co.json"
function SearchCities () {
    return (
        <select className="search_cities">
            {cities && cities.map(item => (
                <option key = {item.id} value = {item.city}>
                    {item.city}
                </option>
            ))}
        </select>
    )
}

export default SearchCities;