
import { useState } from 'react';
import './Dropdown.css';
import {Link} from 'react-router-dom';


 const serviceDropdown = [
    {
      id: 1,
      title: "Marketing",
      path: "/marketing",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Consulting",
      path: "/consulting",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Design",
      path: "/design",
      cName: "submenu-item",
    },
    {
      id: 4,
      title: "Development",
      path: "/development",
      cName: "submenu-item",
    },
  ];


const Dropdown = () => {

  const [dropdown, setDropdown] = useState(false)

  return (
   <>

    <ul className={dropdown ? "services-submenu clicked" : "services-submenu"}
     onClick={() => setDropdown(!dropdown)}>
        {serviceDropdown.map((item)=>{
            return(
                    <li key={item.id}>
                        <Link path={item.path} className={item.cName}
                        onClick={() => setDropdown(false)}
                        >{item.title}</Link>
                    </li>
            )
        })}
    </ul>


   </>
  )
}

export default Dropdown