import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"}><Image  src="/logo.jpg" alt="Logo" width={100} height={100}/></Link>
    )
}

export default Logo;