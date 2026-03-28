import React from 'react'
import { TinaCMS, TinaProvider } from 'tinacms'

export const TinaAdmin = () => {
  const cms = new TinaCMS({
    enabled: true,
    sidebar: true,
  })

  return (
    <TinaProvider cms={cms}>
      <div style={{ padding: '2rem' }}>
        <h1>TinaCMS Admin</h1>
      </div>
    </TinaProvider>
  )
}