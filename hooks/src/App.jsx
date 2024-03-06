import React from 'react'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Pagination from './components/Pagination'
import Auth from './components/Auth/Auth'
import { AuthProvider } from './components/Auth/AuthContext'
import Drag from './components/Drag'
import Translation from './components/Translation/Translation'
import { TransProvider } from './components/Translation/TransContext'

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Pagination /> */}

      {/* ---- */}
      {/* <AuthProvider>
        <Auth />
      </AuthProvider> */}
      {/* ----- */}

      {/* <Drag /> */}

      {/* ----- */}
      <TransProvider>
        <Translation />
      </TransProvider>
      {/* ------ */}
      
      
    </div>
  )
}

export default App