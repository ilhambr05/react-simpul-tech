import { useState } from 'react';
import { usePopper } from 'react-popper';
import menuToggler from '../../assets/icons/UI/menu-toggler.png'

function ChatMenuPopper() {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const [menuOpen, setMenuOpen] = useState(false);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
        placement: 'bottom-start',
    });

    function hideMenu() {
        // alert("hide menu");
        setMenuOpen(false);
    }

    function doEdit() {
        alert('Do edit');
        // setMenuOpen(false);
    }
    function doDelete() {
        alert('Do Delete');
        // setMenuOpen(false);
    }

    return (
        <>
            <div className='p-1 cursor-pointer' onClick={() => setMenuOpen(true)}>
                <img ref={setReferenceElement} className='w-[12px]' src={menuToggler} alt="menu icon" />
            </div>

            {menuOpen && (
                <div className='absolute top-0 left-0 w-screen h-screen bg-black/50 z-0'>
                    <div className="flex flex-col z-10" ref={setPopperElement} style={styles.popper} {...attributes.popper} onMouseLeave={() => hideMenu()}>
                        <button onClick={doEdit} className='text-primary-blue px-3 py-2 text-left bg-[#FFFFFF] border border-solid border-primary-light-grey w-20 rounded-t-[5px]'>Edit</button>
                        <button onClick={doDelete} className='text-indicator-red px-3 py-2 text-left bg-[#FFFFFF] border border-solid border-primary-light-grey border-t-0 w-20 rounded-b-[5px]'>Delete</button>
                        {/* <div ref={setArrowElement} style={styles.arrow} /> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatMenuPopper;