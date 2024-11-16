import React, { createContext } from 'react'
import Data from '../Data';

const DataContext = createContext();

export const DataProvider=({children})=>{

    return(
        <>
        <DataContext.Provider value={Data}>
            {children}
        </DataContext.Provider>
        </>
    )

}
export default DataContext