import searchIcon from '../../assets/icons/UI/search-dark.png'

function SearchBar() {
    return (
        <>
            <div className="flex items-center justify-around rounded-[5px] border border-solid border-primary-grey">
                <input type="text" className="min-w-[70%] py-[5px] border-none outline-none placeholder:text-primary-dark" placeholder="Search" ></input>
                <img className='w-[12px]' src={searchIcon} />
            </div>
        </>
    );
}

export default SearchBar;