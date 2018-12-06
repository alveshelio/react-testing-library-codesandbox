import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { initialStoreState } from "./reducers"
import configureStore from "./store"
import { BrowserRouter as Router } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import App from "./App"

const store = configureStore(initialStoreState)

const theme = createMuiTheme({
  typography: {
    fontFamily: "hind, sans-serif;",
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
)
