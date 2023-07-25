import pokemonContext from "./Context"


export const Save = ({children}) => {
  return (
    <pokemonContext.Provider value={{
        numero: 0
    }}>
        {children}
    </pokemonContext.Provider>


    
        
  )
}
