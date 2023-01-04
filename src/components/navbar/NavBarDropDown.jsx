import { useState } from "react"; 

function DropDownDivider (){
    return (<li>
                                  <hr className="dropdown-divider"/>
                              </li>);

}
function DropDownItem ({item}){
    return (
        <li>
                              <a className="dropdown-item" href={item.link}>{item.label}</a>
                          </li>
    );
}

export default function NavbarDropdown({img, items}){
    const [showDropdown, setShowDropdown] = useState(false);
    
    const toggleDropdown = () =>{
        setShowDropdown(!showDropdown)
    };
    return (
        <div>
            <div className="dropdown text-end">
              <a onClick={toggleDropdown} href className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
                <img src={img} alt="mdo" width="32" height="32" className="rounded-circle" />
              </a>
              <ul className={`dropdown-menu text-small end-0 ${showDropdown && 'show'}`}>
                  {items.map((item,index)=>{
                      if(item.label === '---')
                          return < DropDownDivider key = {`dropdown-item-${index}`} />                 
                      return < DropDownItem item ={item} key = {` dropdown-item-${index}`}/>
                  })}
              </ul>
            </div>
          </div>
    )
}