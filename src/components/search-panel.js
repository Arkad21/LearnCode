import React from 'react'; 
const SearchPanel = () =>{
    const searchText = 'Type here to search'
    return( <input type="text" placeholder={searchText} autoComplete=""/>)
}
export default SearchPanel;