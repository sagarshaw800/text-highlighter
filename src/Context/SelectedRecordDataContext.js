import React, { useState } from 'react'
export const selectedRecordDataContext = React.createContext();

const SelectedRecordDataContext = ({children}) => {

    const [selected, setSelected] = useState(0);

  return (
    <selectedRecordDataContext.Provider value={{selected: selected, setSelected: setSelected}}>
        {children}
    </selectedRecordDataContext.Provider>
  )
}

export default SelectedRecordDataContext