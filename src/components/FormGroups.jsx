import './FormGroup.css'

export default function FormGroups(){
  return(
    <div className="form-items">
        <form class="form-content" action="*">
            <input type="email" name="email" placeholder="Введите почту..." />
        </form>
        <form action="*" className="form-content">
            <input type="password" name="password" placeholder="Введите пароль..." />
        </form>
        <button className="enter">Войти в аккаунт</button>
        <a href="" className="forgot-password">Забыли пароль?</a>
    </div>
  )
}