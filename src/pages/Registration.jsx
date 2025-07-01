import Header from "../components/Header";
import WelkomMessage from "../components/WelkomMessage";
import { RegisterMessage } from "../data";
import SocialItems from "../components/SocialItems"
import FormGroups from "../components/FormGroups"

export default function Registration(){
    return(
        <div>
            <Header />
            <main>
                <WelkomMessage {...RegisterMessage[0]}/>
                <SocialItems />
                <FormGroups />
            </main>
        </div>
    )
}