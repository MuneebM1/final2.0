// import React, { useState } from 'react';

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

//   // Function to toggle the sidebar
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       {/* Button to toggle the sidebar */}
//       <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
//         {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
//       </button>

//       {/* Sidebar */}
//       <div className={`xs-sidebar-group info-group info-sidebar ${isSidebarOpen ? 'open-sidebar' : 'close-sidebar'}`}>
//         <div className="xs-overlay xs-bg-black"></div>
//         <div className="xs-overlay xs-overlay-2 xs-bg-black"></div>
//         <div className="xs-overlay xs-overlay-3 xs-bg-black"></div>
//         <div className="xs-overlay xs-overlay-4 xs-bg-black"></div>
//         <div className="xs-overlay xs-overlay-5 xs-bg-black"></div>
//         <div className="xs-sidebar-widget">
//           <div className="sidebar-widget-container">
//             <div className="widget-heading">
//               <a href="#" className="close-side-widget" onClick={toggleSidebar}>
//                 <i className="fa fa-times"></i>
//               </a>
//             </div>
//             <div className="sidebar-textwidget">
//               <div className="sidebar-info-contents">
//                 <div className="content-inner">
//                   <div className="logo">
//                     <a href="/">
//                       <img src="assets/images/logo.png" alt="" />
//                     </a>
//                   </div>
//                   <div className="content-box">
//                     <h4>About Us</h4>
//                     <p>
//                       Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
//                     </p>
//                     <p>Research oriented solutions for Data Science and Machine Learning business needs.</p>
//                     <a className="theme-btn btn-two" href="/about">About Us</a>
//                   </div>
//                   <div className="contact-info">
//                     <h4>Contact Info</h4>
//                     <ul>
//                       <li>Chicago 12, Melborne City, USA</li>
//                       <li>
//                         <a href="tel:+8801682648101">+88 01682648101</a>
//                       </li>
//                       <li>
//                         <a href="mailto:info@example.com">info@example.com</a>
//                       </li>
//                     </ul>
//                   </div>
//                   <ul className="social-box clearfix">
//                     <li>
//                       <a href="/">
//                         <i className="fa-brands fa-facebook"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/">
//                         <i className="fa-brands fa-square-twitter"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/">
//                         <i className="fa-solid fa-basketball"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/">
//                         <i className="fa-brands fa-youtube"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
