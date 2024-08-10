import Chat from "./components/Chat"
import ContentContainer from "./components/ContentContainer"
import QuickMenu from "./components/QuickMenu"

function App() {
  return (
    <>
      <ContentContainer>
        <Chat />
      </ContentContainer>
      <QuickMenu />
    </>
  )
}

export default App
