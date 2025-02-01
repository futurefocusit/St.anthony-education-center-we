import { FaChartBar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";

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
    { Icon: FaChartBar, title: "Dashboard", href: "/" },
    { Icon: FaMessage, title: "message", href: "/message" },
    { Icon: HiUsers, title: "Team", href: "/team" },
];

export const iconsBottom: IconBottomType[] = [
    { Icon: IoLogOut, title: "Logout" },
];