
import "/public/assets/css/magnific-popup.min.css"
import "/public/assets/css/style.css"


import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-main-family",
    display: 'swap',
})
const dm = DM_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-btn-family",
    display: 'swap',
})
// const pacifico = Pacifico({
//     weight: ['400'],
//     subsets: ['latin'],
//     // variable: "--nunito-font-family",
//     display: 'swap',
// })

export const metadata = {
    title: 'GoWheels - Car Dealer, Rental & Listing',
    description: 'Qatar No. 1 Vehicle Portal',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`body counter-scroll ${dm.variable} ${jakarta.variable}`}>{children}</body>
        </html>
    )
}
