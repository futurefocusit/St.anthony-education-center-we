"use client";
import { LuSearch } from "react-icons/lu";
import { MyContext } from "./contextProvider";
import { useContext } from "react";

const SearchBar = () => {

    const context = useContext(MyContext);
    if (!context) {
        return null;
    }
    const { setValue } = context;

    return (
        <div>
            <LuSearch className="text-2xl cursor-pointer" onClick={() => setValue(true)} />
        </div>
    )
}

export default SearchBar;