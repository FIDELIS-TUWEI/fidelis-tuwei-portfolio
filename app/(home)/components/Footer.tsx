import Navbar from "./Navbar";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="border-t mt-10">
            <Navbar className="flex-col gap-5"/>
            &copy; {currentYear} Fidelis Tuwei. All rights reserved.
        </div>
    )
}

export default Footer;