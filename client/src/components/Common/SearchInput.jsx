import search from '../../assets/mainSVG/search.svg'
const SearchInput = () => {
  return (
    <div className="w-[838px] h-[54px] px-2 rounded-lg shadow border border-cyan-800 justify-start items-center gap-2 flex">
        <img src={search} />
        <input type='search' placeholder="Search" className="w-full h-full relative outline-none" />
      </div>
  )
}

export default SearchInput
