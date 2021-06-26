import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { signout } from '../../actions'

/**
* @author
* @function DashboardHeader
**/

const DashboardHeader = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(signout());
        history.push("/adminlogin")
    }
    return (
        // <div className="title bg_green py-3 mb-5 position-relative">
        //     <nav className="navbar navbar-expand-sm">
        //         <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#admin-menu" aria-controls="admin-menu" aria-expanded="false" aria-label="Toggle navigation">
        //             <i className="fas fa-ellipsis-v text-white" />
        //         </button>
        //         <div className="collapse navbar-collapse" id="admin-menu">
        //             <div className="container d-flex">
        //                 <h3 className="text-white m-0"><strong>{props.title}</strong></h3>
        //                 <ul className="m-0 p-0 d-flex ms-auto">
        //                     <li><Link to={'/admindashboard'}><div className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-user-tie me-1" /> Admin</div></Link></li>
        //                     <li><Link to={'/configuration'}><div className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-user-cog me-1" /> Configuration</div></Link></li>
        //                     <li onClick={handleLogout}><div className="text-white d-block py-2 ps-2 ms-2" ><i className="fas fa-sign-out-alt me-1" />Logout</div></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <div className="title bg_green py-3 mb-5 position-relative">
            <nav className="navbar- navbar-expand-sm-">
                {/* <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#admin-menu" aria-controls="admin-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-ellipsis-v text-white" />
                </button> */}
                <div className="collapse- navbar-collapse-" id="admin-menu">
                    <div className="container d-block d-md-flex">
                        <h3 className="text-white m-0"><strong>{props.title}</strong></h3>
                        <ul className="m-0 p-0 d-flex ms-auto">
                            <li><Link to={'/admindashboard'}><div className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-user-tie me-1" /> Admin</div></Link></li>
                            <li><Link to={'/configuration'}><div className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-user-cog me-1" /> Configuration</div></Link></li>
                            <li onClick={handleLogout}><div className="text-white d-block py-2 ps-2 ms-2" ><i className="fas fa-sign-out-alt me-1" />Logout</div></li>
                            <li><Link to={'/change_password'}><div className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-key me-1" /> Change Password</div></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default DashboardHeader