import React from 'react' 

export default ( props ) => {
  return (
    <div className = "post">
      <h4>{ props.postTitle }</h4>
      <p>{ props.postBody } </p>
    </div>  
    )
}