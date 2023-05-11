import { useEffect, useState } from "react";

import "./auth.css"

function Auth({setAuth}) {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')

    const authHandler = (e) => {
        e.preventDefault()
        if (login === 'root' & pass === 'qualitypassword') {
            setAuth(true)
            localStorage.setItem('key', pass)
        } else {
            alert('Данные не верны')
        }
    }

    useEffect(() => {
        const key = localStorage.getItem('key')
        if (key === 'qualitypassword') {
            setAuth(true)
        }
    }, [])


    return (
        <div className="auth">
            <form action="" className="auth_form">
                <input type="text" value={login} onChange={(e)=>setLogin(e.target.value)} placeholder="  Логин" className="login_input" />
                <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="  Пароль" className="pass_input" />
                <div  className="auth_button" onClick={(e) => authHandler(e) }>Войти</div>
            </form>
        </div>
     );
}

export default Auth;