import { useEffect, useState } from 'react';
import tagIcon from '../../assets/icons/UI/tags.png'
import { usePopper } from 'react-popper';

const tags = {
    "Important ASAP": "bg-stickers-light-blue",
    "Offline Meeting": "bg-stickers-light-brown",
    "Virtual Meeting": "bg-stickers-light-yellow",
    "ASAP": "bg-stickers-dark-green",
    "Client Related": "bg-stickers-light-green",
    "Self Task": "bg-stickers-dark-purple",
    "Appointments": "bg-stickers-light-purple",
    "Court Related": "bg-stickers-dark-blue",
}

function TagItem({ tagName, bgClassName, setActiveTags, isActive }) {
    return (
        <div className={`cursor-pointer px-[8px] py-[5px] rounded-[5px] text-[12px] font-bold ${bgClassName} ${isActive ? 'border border-primary-blue border-solid' : ''}`} onClick={() => setActiveTags(tagName)}>{tagName}</div>
    )
}

function TaskTags({ activeTags, setActiveTags }) {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTagList, setActiveTagList] = useState(false);
    const [nonactiveTagList, setNonactiveTagList] = useState(false);

    useEffect(() => {
        const activeTagData = {};
        const nonactiveTagData = {};

        for (const [key, tag] of Object.entries(tags)) {
            if (activeTags.includes(key)) {
                activeTagData[key] = tag;
            } else {
                nonactiveTagData[key] = tag;
            }

        };
        setActiveTagList(activeTagData);
        setNonactiveTagList(nonactiveTagData);
    }, [activeTags]);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'bottom-start',
    });

    function hideMenu() {
        // alert("hide menu");
        setMenuOpen(false);
    }

    return (
        <>
            <div className='flex flex-row items-center gap-[15px] cursor-pointer' onClick={() => setMenuOpen(!menuOpen)} >
                <div className='min-w-[20px]'>
                    <img ref={setReferenceElement} className='w-[20px]' src={tagIcon} alt="Tag icon"/>
                </div>
                <div className='flex flex-grow flex-row flex-wrap gap-[10px] p-[10px] mr-[15px] min-h-[48px] bg-[#F9F9F9] rounded-[5px]'>
                    {/* Tags active */}
                    {Object.keys(activeTagList).map((tagName, index) => (
                        <TagItem key={index} tagName={tagName} bgClassName={tags[tagName]}/>
                    ))}
                </div>
            </div>

            {menuOpen && (
                <div className='flex flex-col gap-[10px] p-[10px] border border-primary-light-grey bg-[#F9F9F9] rounded-[5px] w-60 z-10 mt-3' ref={setPopperElement} style={styles.popper} {...attributes.popper} onMouseLeave={() => hideMenu()}>
                    {Object.keys(activeTagList).map((tagName, index) => (
                        <TagItem key={"active" + index} tagName={tagName} bgClassName={tags[tagName]} setActiveTags={setActiveTags} isActive={true} />
                    ))}
                    {Object.keys(nonactiveTagList).map((tagName, index) => (
                        <TagItem key={"nonactive" + index} tagName={tagName} bgClassName={tags[tagName]} setActiveTags={setActiveTags} />
                    ))}
                </div>
            )}
        </>
    )
}

export default TaskTags;