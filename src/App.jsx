import { useState } from "react";
// QuickMenu
import QuickMenu from "./components/QuickMenu"
import iconTask from './assets/icons/menu/task-icon-inactive.png'
import iconTaskActive from './assets/icons/menu/task-icon-active.png'
import iconChat from './assets/icons/menu/chat-icon-inactive.png'
import iconChatActive from './assets/icons/menu/chat-icon-active.png'

import ContentContainer from "./components/ContentContainer"
import Chat from "./components/Chat"
import Task from "./components/Task";

function App() {
  const [menuActiveIndex, setMenuActive] = useState(0);
  const menuItems = [
    {
      id: 1,
      name: 'Chat',
      icon: iconChat,
      iconActive: iconChatActive,
      classActive: '!bg-indicator-purple',
      elementActive: Chat,
    },
    {
      id: 2,
      name: 'Task',
      icon: iconTask,
      iconActive: iconTaskActive,
      classActive: '!bg-indicator-orange',
      elementActive: Task,
    },
    // {
    //     id: 3,
    //     name: 'Other',
    //     icon: iconTask,
    //     iconActive: iconTaskActive,
    //     classActive: 'bg-indicator-orange'
    // }
  ];

  const ActiveContent = menuItems.find((item) => item.id === menuActiveIndex)?.elementActive;

  return (
    <>
      {
        menuActiveIndex ?
          <ContentContainer>
            <ActiveContent/>
          </ContentContainer>
          : null
      }
      <QuickMenu setMenuActive={setMenuActive} menuActiveIndex={menuActiveIndex} menuItems={menuItems} />
    </>
  )
}

export default App
