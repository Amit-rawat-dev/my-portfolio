import React from 'react'
// import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (    
    <header className="bg-red-600">
        <div className="container mx-auto flex justify-between">
            <nav>
                <ul className="flex">
                    <li activeClassName="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">Home</li>
                    <li>Blog Posts</li>
                    <li>projects</li>
                    <li>About</li>
                </ul>
                {/* <NavLink to="/" exact>
                    Amit
                </NavLink>
                <NavLink to="/post">
                    Blog Posts
                </NavLink>
                <NavLink to="/project">
                    Projects
                </NavLink>
                <NavLink to="/about">
                    About Me!
                </NavLink> */}
            </nav>
        </div>
    </header>
  )
}




// import React from 'react'
// import {Link} from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <header>
//         <div>
//             <nav>
//                 <Link to="/" exact>
//                     Amit
//                 </Link>
//                 <Link to="/post">
//                     Blog Posts
//                 </Link>
//                 <Link to="/project">
//                     Projects
//                 </Link>
//                 <Link to="/about">
//                     About Me!
//                 </Link>
//             </nav>
//         </div>
//     </header>
//   )
// }
