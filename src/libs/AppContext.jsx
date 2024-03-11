import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {},
  });
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = () => {
	const [theme, setTheme] = useState("");

	const toggleTheme =  (type) => {
		setTheme(type == "dark" ? "dark" : "light");
	}

	return (
		<ThemeContext.Provider value={{
			theme,
			toggleTheme
		}}>
			{children}
		</ThemeContext.Provider>
	)
}

const AppProvider = ({children}) => {
	const [lists, setLists] = useState([]);
	const removeList = item => {
		let newLists = [...lists];

		lists.map((list, id) => {
			return list === item && newLists.splice(id, 1);
		});

		setLists(newLists);
	}

	return (
    <AppContext.Provider value={{
      lists,
      addToLists: (newItem) => setLists([...lists, newItem]),
      deleteFromList: (item) => removeList(item),
    }}>
		{children}
    </AppContext.Provider>
  )
}

export default AppProvider;