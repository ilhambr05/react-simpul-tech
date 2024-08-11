import loaderIcon from '../../assets/icons/UI/loader-blue.png';

function Connecting({children}) {
    return (
        <div className="flex flex-row justify-center items-center h-[55px] my-[15px] rounded-[5px] bg-stickers-light-blue">
            <img className='w-[34px] m-[10px]' src={loaderIcon} alt='loader'/>
            <div className="font-bold flex-grow text-primary-dark-grey text-[14px]">

            {children}
            </div>
        </div>
    )
}

export default Connecting;