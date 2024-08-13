import { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import expandIcon from '../../assets/icons/UI/expand_more_24px.png';

function TaskFilter() {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const [menuOpen, setMenuOpen] = useState(false);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
        placement: 'bottom',
    });

    const filterList = [
        "Personal Errands",
        "Urgent To-Do"
    ]

    function hideMenu() {
        // alert("hide menu");
        setMenuOpen(false);
    }

    function doFilter(filterName) {
        alert('Do filter ', filterName);
        // setMenuOpen(false);
    }
    function doDelete() {
        alert('Do Delete');
        // setMenuOpen(false);
    }

    return (
        <>
            <div ref={setReferenceElement} className='flex flex-row gap-3 cursor-pointer ml-20 text-primary-dark-grey font-bold px-3 py-2 bg-[#FFFFFF] border border-solid border-primary-dark-grey rounded-[5px]' onClick={() => setMenuOpen(!menuOpen)}>
                My Task
                <div className='self-center'>
                    <img className='w-[12px]' src={expandIcon} alt="expand icon" />
                </div>
            </div>

            {menuOpen && (
                <div className="flex flex-col mt-[5px]" ref={setPopperElement} style={styles.popper} {...attributes.popper} onMouseLeave={() => hideMenu()}>
                {
                    filterList.map((filter, index) => (
                        <button key={index} onClick={() => doFilter(filter)} className='text-primary-dark-grey font-bold w-[250px] px-3 py-2 text-left bg-[#FFFFFF] border border-solid border-primary-dark-grey first:rounded-t-[5px] first:border-b-0 last:rounded-b-[5px]'>{filter}</button>
                    ))
                }
                </div>
            )}
        </>
    );
};

export default TaskFilter;