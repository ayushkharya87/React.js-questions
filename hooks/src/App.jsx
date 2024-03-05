import React from 'react'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Pagination from './components/Pagination'
import Auth from './components/Auth/Auth'
import { AuthProvider } from './components/Auth/AuthContext'

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Pagination /> */}

      {/* ---- */}
      <AuthProvider>
        <Auth />
      </AuthProvider>
      {/* ----- */}
      
    </div>
  )
}

export default App