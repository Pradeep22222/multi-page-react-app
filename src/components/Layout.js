import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({children}) => {
  return (
      <div>
          <Header></Header>
          <div>{ children}</div>
          <Footer></Footer>
    </div>
  )
}
