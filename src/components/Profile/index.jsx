import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { getCurrentUserData } from '../../reducers'

import Posts from '../Posts/'
import Albums from '../Albums/'

const Profile = ( { getCurrentUserData, allPosts, allAlbums,...props } ) => {
  let userId = props.match.params.id,
      name = props.match.params.name
  useEffect(() => { getCurrentUserData( allPosts, allAlbums, userId ) },[ userId ])
  console.log(userId)
   return (
    <div className = "profile__wrapper uk-background-muted uk-height-viewport">
      { console.log('profile_render')}
          <div className= "uk-grid-match" uk-grid="true">
            <div className= "uk-width-1-3@l">
              <div className= "with__border uk-padding" >
                <h4 className = "uk-text-muted uk-text-center uk-margin-small-bottom">
                  { name }
                </h4>
                <img className = "uk-border-circle uk-align-center uk-margin-remove-top uk-margin-remove-bottom" src="https://randomuser.me/api/portraits/women/50.jpg" width="150" height="150" alt="no-image"/>
                <div className = "uk-grid uk-padding-small uk-paddin-remove-top post__albums__photos">
                <div className="uk-width-1-3 uk-text-center ">
                  <h4 className="uk-card-title uk-margin-remove-bottom">10</h4>
                  <p className="uk-text-meta uk-margin-remove-top">Posts</p>
                </div>
                <div className="uk-width-1-3 uk-text-center">
                  <h4 className="uk-card-title uk-margin-remove-bottom">10</h4>
                  <p className="uk-text-meta uk-margin-remove-top">Albums</p>
                </div>
                <div className="uk-width-1-3 uk-text-center">
                  <h4 className="uk-card-title uk-margin-remove-bottom">100</h4>
                  <p className="uk-text-meta uk-margin-remove-top">Photos</p>
                </div>
                </div>
                <div className = "uk-text-center profile__icons">
                  <a uk-icon="icon: facebook"></a>
                  <a uk-icon="icon: twitter"></a>
                  <a uk-icon="icon: google-plus"></a>
                  <a uk-icon="icon:instagram"></a>
                  <a uk-icon="icon:vimeo"></a>
                </div> 
                <h4 className = "uk-text-muted uk-text-center ">
                  Information
                </h4>
                <h4 className = "uk-text-muted uk-text-center">information</h4>
                <h4 className = "uk-text-muted uk-text-center">information</h4>
              </div>
            </div>
          <div className="with__border uk-padding uk-width-2-3@l">
            <div className="uk-margin-medium-top">
              <ul className="uk-subnav uk-subnav-pill uk-flex-center switcher__nav" uk-switcher="animation:uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                <li><a href="#">Posts</a></li>
                <li><a href="#">Albums</a></li>
                <li><a href="#">Todos</a></li>
              </ul>
              <div className="uk-background-default uk-switcher uk-margin uk-text-center switcher__wrapper ">
                <div className="uk-width-auto switcher-content">
                  <Posts posts = { props.currentUserPosts }/>
                </div>
                <div>
                  <Albums albums = { props.currentUserAlbums } />
                </div>
                <div>Todos</div>
              </div>
            </div>
          </div>  
        </div>
    </div>
    )
}

const mapStateToProps = ( state ) => {
  return {
    currentUserAlbums: state.allData.currentUserAlbums,
    currentUserPosts: state.allData.currentUserPosts,
    allPosts: state.allData.data.posts.data,
    allAlbums: state.allData.data.albums.data,
  }
}

export default compose( connect( mapStateToProps,{ getCurrentUserData } ), 
                        withRouter )(Profile)



    //   <NavLink to = "">-[ Back ]-</NavLink>
    //   <Posts posts = { props.currentUserPosts}/>
    //   <Albums albums = { props.currentUserAlbums }/>
    // </div>