import { createContext, useContext, useState } from "react";

export const TaskContext = createContext()

export const useTask = ()=>{
    useContext(TaskContext)
}

export const TaskProvider = ({children})=>{
    const [data, setData] = useState('test')

    return <TaskContext.Provider value={{data, setData}}>{children}</TaskContext.Provider>
}