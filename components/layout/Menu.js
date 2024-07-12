import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
    const pathname = usePathname()

    return (
        <>
            <ul className="navigation clearfix">
                <li>
                    <Link href="/#">Cars</Link>
                </li>
                <li>
                    <Link href="/#">Bikes</Link>
                </li>
                <li>
                    <Link href="/#">Vans</Link>
                </li>
                <li>
                    <Link href="/#">Bus &<br/>Trucks</Link>
                </li>
                <li>
                    <Link href="/#">ECO<br/>Friendly</Link>
                </li>
                <li>
                    <Link href="/#">Luxury<br/>Vehicles</Link>
                </li>
                <li>
                    <Link href="/#">Utility<br/>Vehicles</Link>
                </li>
                
            </ul>
        </>
    )
}
