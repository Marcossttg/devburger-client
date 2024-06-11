import React from "react";
import ReactDOM from "react-dom/client";

// Biblioteca de feedback de eventos
import { ToastContainer } from 'react-toastify';

import Routes from "./routes/routes";
import GlobalStyles from "./styles/globalStyles"

//UseContext hook do react para compartilhar dados sem precisar do props.
import { UserProvider } from "./hooks/UserContext"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		<UserProvider>
			<Routes />
		</UserProvider>
		<ToastContainer autoClose={3000} theme="colored" />
		<GlobalStyles />
	</>
);
