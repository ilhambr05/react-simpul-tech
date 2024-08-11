import loaderIcon from '../../assets/icons/UI/loader.png';

function Loader({children}) {
    return (
        <div className="flex flex-col flex-grow justify-center items-center h-min-[100%]">
            <img className='w-[85px]' src={loaderIcon} alt='loader'/>
            {children}
        </div>
    )
}

export default Loader;