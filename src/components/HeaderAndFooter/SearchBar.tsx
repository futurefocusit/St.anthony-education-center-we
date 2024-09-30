"use client";
import { LuSearch } from "react-icons/lu";
// import { useContext } from "react";
import { useAppContext } from "@/context/appContext";

const SearchBar = () => {

    const context = useAppContext()
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