import React from "react"
import Header from '../components/Header'
import FormGroups from "../components/FormGroups"
import WelkomMessage from "../components/WelkomMessage"
import { SendMessageText } from "../data"
import './Login.css'

export default function SendMessage() {
  return (
    <div>
      <Header />
      <main>
          <WelkomMessage {...SendMessageText[0]}/>
          <FormGroups />
      </main>
    </div>
  )
}
