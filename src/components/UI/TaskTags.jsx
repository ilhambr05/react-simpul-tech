const tags = {
    "Important ASAP" : "bg-stickers-light-blue",
    "Offline Meeting" : "bg-stickers-light-brown",
    "Virtual Meeting" : "bg-stickers-light-yellow",
    "ASAP" : "bg-stickers-dark-green",
    "Client Related" : "bg-stickers-light-green",
    "Self Task" : "bg-stickers-dark-purple",
    "Appointments" : "bg-stickers-light-purple",
    "Court Related" : "bg-stickers-dark-blue",
}

function TaskTags() {
    return (
        <div className='flex flex-col gap-[10px] p-[10px] border border-primary-light-grey rounded-[5px]'>
            {Object.keys(tags).map((tagName, index) => (
                <div key={index} className={`cursor-pointer p-[5px] rounded-[5px] ${tags[tagName]}`}>{tagName}</div>
            ))}
        </div>
    )
}

export default TaskTags;