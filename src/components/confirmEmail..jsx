import Header from "./Header";
import WelkomMessage from "./WelkomMessage";
import { ConfirmEmailMessage, RegisterMessage } from "../data";
import SocialItems from "./SocialItems"
import FormGroups from "./FormGroups"

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