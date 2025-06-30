import './Header.css' 

export default function Header(){
  return(
    <header>
        <div className="header-container">
            <div className="header-left">
                <h5>LIVEDUNE</h5>
            </div>
            <div class = "header-right">
                <p className="mobile-hidden">У вас нет аккаунта?</p>
                <button class = "registration">Регистрация</button>
            </div>
        </div>
        
    </header>
  )
}