import React from 'react'
import SearchInput from './search-input'
import Categories from './categories'


interface Props{
  data:any
}

const SearchFilters = ({data}:Props) => {
  return (
    <div className="flex flex-col px-4 lg:px-12 py-8 border-b gap-4 w-full">
      
      <SearchInput/>
      <Categories data={data}/>
      
    </div>
  )
}

export default SearchFilters
