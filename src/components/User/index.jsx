import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { randomUserPhoto } from '../../api/'
// import { connect } from 'react-redux'
// import { getCurrentUserPosts } from '../../reducers/'



export default ({ name, userId,address,email,phone}) => {
  return (
    <div className="uk-margin-big uk-height-big" >
      <div className="uk-card uk-card-default uk-card-small uk-card-hover card">
        <div className="uk-card-header ">
          <div className="uk-grid-small uk-flex-middle " uk-grid="true">
            <div className="uk-width-auto ">
              <img className="uk-border-circle" width="50" height="50" src = { randomUserPhoto() }alt="img"/>
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">{ name }</p>
            </div>
          </div>
        </div>
        <div className="uk-card-body uk-text-muted uk-text-small">
          <p>
            <span className="uk-margin-small-right uk-text-bottom " uk-icon="icon:home"></span>
              { address.street },{ address.suite },{ address.city }
          </p>
          <p>
            <span className="uk-margin-small-right uk-text-bottom" uk-icon="icon:mail"></span>
            { email }
          </p>
          <p>
            <span className="uk-margin-small-right uk-text-bottom" uk-icon="icon:receiver"></span>
            { phone }
          </p>
        </div>
        <div className="uk-card-footer">
          <NavLink className="uk-button uk-button-text" to = { `/profile/${userId}/${name}`} >
            More details
          </NavLink>
        </div>
      </div>
    </div>
)}



// <div className="uk-card uk-card-default uk-width-1-2@m">
//     <div className="uk-card-header">
//         <div className="uk-grid-small uk-flex-middle" uk-grid>
//             <div className="uk-width-auto">
//                 <img className="uk-border-circle" width="40" height="40" src="images/avatar.jpg"/>
//             </div>
//             <div className="uk-width-expand">
//                 <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
//                 <p className="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
//             </div>
//         </div>
//     </div>
//     <div className="uk-card-body">
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
//     </div>
//     <div className="uk-card-footer">
//         <a href="#" className="uk-button uk-button-text">Read more</a>
//     </div>
// </div>
// }
//     <div className = "uk-card uk-card-default uk-width-1-2@m">
     
//         <div className="uk-card-header">          
//           { name }          
//         </div>
//       </div>
//       <div className="uk-card-footer">
       
//       </div> 
// }
