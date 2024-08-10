import iconMenuToggler from '../assets/icons/menu/menu-icon.png'
import iconTask from '../assets/icons/menu/task-icon-inactive.png'
import iconTaskActive from '../assets/icons/menu/task-icon-active.png'
import iconChat from '../assets/icons/menu/chat-icon-inactive.png'
import iconChatActive from '../assets/icons/menu/chat-icon-active.png'
import { useState } from 'react'

const menuItems = [
    {
        id: 1,
        name: 'Chat',
        icon: iconChat,
        iconActive: iconChatActive,
        classActive: '!bg-indicator-purple'
    },
    {
        id: 2,
        name: 'Task',
        icon: iconTask,
        iconActive: iconTaskActive,
        classActive: '!bg-indicator-orange'
    },
    // {
    //     id: 3,
    //     name: 'Other',
    //     icon: iconTask,
    //     iconActive: iconTaskActive,
    //     classActive: 'bg-indicator-orange'
    // }
];

function QuickMenu() {
    const menuItemDistanceToToggler = 90;
    const menuItemWidth = 60;
    const menuItemGap = 20;
    let inactiveMenuCounter = 0;

    const [menuExpanded, setMenuExpanded] = useState(false);
    const [menuActiveIndex, setMenuActive] = useState(0);

    function handleExpandMenu() {
        setMenuExpanded(!menuExpanded);
        setMenuActive(0);
    }

    return (
        <>
            <div className="fixed bottom-[15px] right-[15px] h-[68px]">
                <div className={`flex items-center justify-center h-[68px] w-[68px] cursor-pointer bg-primary-blue
                                    bg-white absolute top-0 right-0 z-[1] rounded-full transition-all duration-200
                                    ${menuActiveIndex ? ` z-0 bg-primary-dark-grey !h-[60px] !w-[60px] top-[4px] right-[15px] cursor-default` : ''}
                                    `} onClick={handleExpandMenu}>
                    <img className="w-[18px] h-[32px]" src={iconMenuToggler}></img>
                </div>
                <div className={`flex flex-row-reverse gap-[15px] relative h-auto ${menuExpanded ? '' : ` group is-collapsed`}`}>
                    {
                        menuItems.map((item, index) => {
                            const isMenuActive = menuActiveIndex === item.id;
                            let rightOffset = isMenuActive ? 0 : menuItemDistanceToToggler + ((menuItemWidth + menuItemGap) * inactiveMenuCounter);

                            if (!isMenuActive) {
                                inactiveMenuCounter++;
                            }

                            return (
                                <div className={`flex items-center justify-center h-[60px] w-[60px] cursor-pointer bg-[#ffffff]
                                    bg-white absolute top-[4px] right-0 rounded-full transition-all duration-200 
                                    group-[.is-collapsed]:!right-0 ${isMenuActive ? item.classActive + " z-[1]" : ''}`} key={index} style={{ right: rightOffset }}
                                    onClick={() => setMenuActive(item.id)} title={item.name}>
                                    <img src={isMenuActive ? item.iconActive : item.icon}></img>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default QuickMenu;