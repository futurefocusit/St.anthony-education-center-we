// "use client";
// import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// interface MyContextType {
//     value: boolean;
//     setValue: Dispatch<SetStateAction<boolean>>;
//     user: string;
//     setUser: Dispatch<SetStateAction<string>>;
// }

// export const MyContext = createContext<MyContextType | null>(null);

// const ContextProvider = ({ children }: { children: ReactNode }) => {
//     const [value, setValue] = useState(false);
//     const [user, setUser] = useState('');

//     return (
//         <MyContext.Provider value={{ value, setValue, user, setUser }}>
//             {children}
//         </MyContext.Provider>
//     );
// };

// export default ContextProvider;
