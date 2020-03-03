import React from 'react'

import Album from '../Album'

export default ( { albums } ) => {
  const albumsList = albums.map( el => <Album key = { el.id }
                                    id = { el.id }
                                    title = { el.title }
                                    />)

  return (
    <div>
      <ul className="uk-tab-left" uk-tab="true">
        { albumsList }
      </ul>
    </div>
    )
}