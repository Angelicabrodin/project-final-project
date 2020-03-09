import React from 'react'
import { logout, isLogin } from './utils'
import { Link } from 'react-router-dom'

export const Home = () => {

    constructor(props) {
        super(props)

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }
    return (
        <div>
            <h1>Home</h1>

            {this.state.isLogin ?
                <button onClick={() => this.handleLogout()}>Click here to log out</button>
                : <Link to="/signin">Go to sign in page</Link>
            }
        </div>
    )
}




// import React from 'react'

// import './css/home.css'

// export const Home = () => {
//     return (
//         <div className="home-container">
//             <div className="home-list">
//                 <ul>
//                     <li>bla bla bla</li>
//                     <li>bla bla bla</li>
//                     <li>bla bla bla</li>
//                     <li>bla bla bla</li>
//                     <li>bla bla bla</li>
//                 </ul>
//             </div>
//         </div>

//     )
// }