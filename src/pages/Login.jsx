import React from "react"
import Header from '../components/Header'
import SocialItems from "../components/SocialItems"
import FormGroups from "../components/FormGroups"
import WelkomMessage from "../components/WelkomMessage"
import { LoginMessage } from "../data"
import './Login.css'

export default function Login() {
  return (
    <div>
      <Header />
      <main>
          <WelkomMessage {...LoginMessage[0]}/>
          <SocialItems />
          <FormGroups />
      </main>
    </div>
  )
}

 