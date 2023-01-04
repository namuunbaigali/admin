import NavBarMenu from "./navbar/NavBarMenu"
import NavBarDropDown from "./navbar/NavBarDropDown"
import NavBarWrapper from "./navbar/NavBarWrapper";

export default function Navbar(){
    const menuItems = [
        {label: 'Home', link: "#"},
        {label: 'Articles', link: "#"},
        {label: 'Feedback', link: "#"},
        {label: 'Files', link: "#"},
    ]
    const dropdownItems = [
        {label: 'Home', link: "#"},
        {label: 'Inbox', link: "#"},
        {label: 'Settings', link: "#"},
        {label: '---', link: "#"},
        {label: 'Sign out', link: "#"}
    ]
    return(<>
    <NavBarWrapper>
        <navbarMenu title="Admin" items={menuItems} />
        <NavBarDropDown items = {dropdownItems} img='https://cdn5.vectorstock.com/i/1000x1000/09/49/pixel-art-bunch-grapes-icon-32x32-vector-30730949.jpg' />
    </NavBarWrapper>
    
</>)
}