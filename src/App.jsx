import GlobalStyle from "./styles/globalStyles"
import theme from './styles/themes/theme'
import { ThemeProvider } from "styled-components"
import Menu from './components/Menu/Menu'
import CardDepoimento from "./components/Depoimentos"
import RoutesApp from "./routes"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <RoutesApp/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
