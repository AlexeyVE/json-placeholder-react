import React from 'react'

import Album from '../Album'

export default ( { albums } ) => {
  albums = albums.map( el => <Album key = { el.id }
                                    id = { el.id }
                                    title = { el.title }
                                    />)

  return (
    <div>
      <h3>Albums</h3>
      { albums }
    </div>
    )
}