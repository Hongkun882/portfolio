import React from 'react'

function Homelab() {
    return (
        <div className='border border-gray-300 rounded-md bg-gray-100 w-2/5 mt-3 p-3'>
            <h1 className='text-center text-2xl'><b>VM ware Homelab</b></h1>
            <figure>
                <img
                    src={"./asset/project/homelab.PNG"}
                    alt="Project"
                    className="m-3 min-h-[200px] min-w-[400px] max-w-[400px] max-h-[500px]"
                />
            </figure>
            
            <h2 className='text-xl'><b>Summary:</b></h2>
            <p>VMware-based homelab designed to simulate an enterprise IT environment
                for hands-on experience with system administration, networking, basic PowerShell scripting to automate common tasks
                and Active Directory management.

            </p>
            <br />
            <h2 className='text-xl'><b>Setup & Comfiguration:</b></h2>
            <ul>
                <li><b>Virtualization Platform:</b> Oracle VirtualBox</li>
                <li><b>Domian Controller:</b> Windows Server 2022</li>
                <li><b>Client Machines:</b> Windows 10</li>
                <li><b>Networking:</b> DHCP, VLANs</li>
                <li><b>Security & Administration:</b> User management, GPO configurations, remote access setup</li>
            </ul>
        </div>
    )
}

export default Homelab