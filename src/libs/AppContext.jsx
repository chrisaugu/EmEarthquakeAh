import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {},
  });
export const useTheme = () => useContext(ThemeContext);

// const theme = {
//   global: {
//     font: {
//       family: "Roboto",
//       size: "18px",
//       height: "20px",
//     },
//   },
// };

const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prev) => prev == "light" ? "dark" : "light");
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

	const addToLists = (newItem) => setLists([...lists, newItem]);
	
	const deleteFromList = (item) => removeList(item);

	return (
    <AppContext.Provider value={{
      lists,
      addToLists,
      deleteFromList
    }}>
		<ThemeProvider>
			{children}
		</ThemeProvider>
    </AppContext.Provider>
  )
}

export default AppProvider;