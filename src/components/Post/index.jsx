import React from 'react' 

export default ( props ) => {
  return (
    <li className="post uk-text-left">
      <a className="uk-accordion-title">{ props.postTitle }</a>
      <div className="uk-accordion-content">
        <p>{ props.postBody } </p>
      </div>
    </li>    
    )
}
