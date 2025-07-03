import Header from "../components/Header";
import WelkomMessage from "../components/WelkomMessage";
import { ConfirmEmailMessage, RegisterMessage } from "../data";
import FormGroups from "../components/FormGroups"
import './Login.css'; 

export default function ConfirmEmail() {
    return(
        <div>
            <Header />
            <main>
                <WelkomMessage {...ConfirmEmailMessage[0]}/>
                <FormGroups />
            </main>
        </div>
    )
}