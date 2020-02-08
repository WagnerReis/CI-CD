import React, { useState } from 'react'
import './App.css'

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'
import Counter from './Counter'

import { AuthProvider } from './auth'

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <SignInUser />
        <UserInfo />
        <Counter />
      </div>
    </AuthProvider>
  )
}

export default App
