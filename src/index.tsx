import React from "react";
import ReactDOM from "react-dom";
import { UseInstallPromptProvider } from "@useweb/use-install-prompt";

import Router from "./pages/router";
import Theme from "./theme/theme";

function App() {
  return (
    <UseInstallPromptProvider>
      <Theme>
        <Router />
      </Theme>
    </UseInstallPromptProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
