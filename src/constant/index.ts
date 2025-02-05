import { FaBook, FaChartBar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

import { IoLogOut } from "react-icons/io5";


export type IconType = {
    Icon: React.FC;
    title: string;
    href: string;
};

export type IconBottomType = {
    Icon: React.FC;
    title: string;
};

export const iconsTop: IconType[] = [
    { Icon: FaChartBar, title: "Dashboard", href: "admin/" },
    { Icon: FaMessage, title: "message", href: "admin/message" },
    { Icon: FaBook, title: "Course", href: "admin/course" },
];

export const iconsBottom: IconBottomType[] = [
    { Icon: IoLogOut, title: "Logout" },
];