import React from 'react';
import Navbar3 from '../components/Navbar3/Navbar3';
import Navbar4 from '../components/Navbar3/Navbar4';
import Navitem from '../components/Navbar3/Navitem';
import DropdownMenu from '../components/Navbar3/DropdownMenu';


const Compo = () => { 
    return (
        <div>
            <Navbar3>
                <Navitem title="Home"/>
                <Navitem title="About"/>
                <Navitem title="Services">
                    <DropdownMenu />
                </Navitem>
                <Navitem title="What we do"/>
            </Navbar3>
            
        </div>
    )
}


export default Compo;