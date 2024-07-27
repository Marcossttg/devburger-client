import React from "react";
import ReactDOM from "react-dom/client";

// Biblioteca de feedback de eventos
import { ToastContainer } from 'react-toastify';

import Routes from "./routes/routes";
import GlobalStyles from "./styles/globalStyles"

//UseContext hook do react para compartilhar dados sem precisar do props.
import AppProvider from "./hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		<AppProvider>
			<Routes />
		</AppProvider>
		<ToastContainer autoClose={3000} theme="colored" />
		<GlobalStyles />
	</>
);
