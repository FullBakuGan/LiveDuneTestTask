import React from "react"
import Header from '../components/Header'
import FormGroups from "../components/FormGroups"
import WelkomMessage from "../components/WelkomMessage"
import { NoEmailMessage } from "../data"
import './Login.css'

export default function NoEmail() {
  return (
    <div>
      <Header />
      <main>
          <WelkomMessage {...NoEmailMessage[0]}/>
          <FormGroups />
      </main>
    </div>
  )
}

 