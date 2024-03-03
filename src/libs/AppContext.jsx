import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {},
  });
export const useTheme = () => useContext(ThemeContext);

const AppProvider = ({children}) => {
	const [theme, setTheme] = useState("");

	const [lists, setLists] = useState([]);
	const removeList = item => {
		let newLists = [...lists];

		lists.map((list, id) => {
			return list === item && newLists.splice(id, 1);
		});

		setLists(newLists);
	}

	const toggleTheme =  (type) => {
		setTheme(type == "dark" ? "dark" : "light");
	}

	return (
    <AppContext.Provider value={{
      lists,
      addToLists: (newItem) => setLists([...lists, newItem]),
      deleteFromList: (item) => removeList(item),

	  theme,
	  toggleTheme
    }}>
		<ThemeContext.Provider>
			{children}
		</ThemeContext.Provider>
    </AppContext.Provider>
  )
}

export default AppProvider;