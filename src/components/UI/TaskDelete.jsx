import { useState } from 'react';
import { usePopper } from 'react-popper';
import menuToggler from '../../assets/icons/UI/menu-toggler.png'

function TaskDelete() {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const [menuOpen, setMenuOpen] = useState(false);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
        placement: 'bottom-end',
    });

    function hideMenu() {
        setMenuOpen(false);
    }

    function doDelete() {
        alert('Do Delete');
        // setMenuOpen(false);
    }

    return (
        <>
            <div ref={setReferenceElement} className='flex flex-row p-[5px] cursor-pointer min-w-[20px]' onClick={() => setMenuOpen(!menuOpen)}>
                <img className='w-[15px]' src={menuToggler} alt="toggler icon" />
            </div>

            {menuOpen && (
                <div className="flex flex-col" ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                    <button onClick={doDelete} className='text-indicator-red px-[12px] py-[8px] text-[14px] text-left bg-[#FFFFFF] border border-solid border-primary-dark-grey rounded-[5px]'>Delete</button>
                </div>
            )}
        </>
    );
};

export default TaskDelete;