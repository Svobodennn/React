import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const LangContextProvider = ({ children }) => {

    const [lang, setLang] = useState("tr")
    const values = {
        lang,
        setLang
    }


    return <LangContext.Provider value={values}>
        {children}
    </LangContext.Provider>
}

//custom context
export const useLang = () => {
    const context = useContext(LangContext);

    if(context === undefined)
        throw new Error("useLang must be used within a LangProvider") //LangContext dışında kullanıılırsa anlaşılması için hata mesajı oluşturduk

    return context;
}

// export default LangContext; | dışarııda bu tanımı artık kullanmadığımızz için kaldırabiliriz