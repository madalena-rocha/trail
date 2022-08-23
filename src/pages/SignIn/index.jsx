import './styles.css'
import * as React from 'react'
import signin__img from '../../assets/images/img-signin.png'
import Container from '../../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { useProfile } from '../../hooks/useProfile'

export default function SignIn() {

    const { signIn, setUser } = useProfile()

    const navigate = useNavigate()

    const [form, setForm] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (signIn(form)) {
            localStorage.setItem('token', true)
            navigate('/home')
        } else {
            alert('E-mail ou senha inválidos!')
        }
    }

    return (
        <Container>
            <section className="sign-in">
                <form
                    className="sign-in__form"
                    onSubmit={handleSubmit}
                >
                    <h1 className="sign-in__title">Login</h1>

                    <label htmlFor="email" className="sign-in__label">
                        E-mail
                    </label>
                    <input
                        id="email"
                        className="sign-in__input"
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="password" className="sign-in__label">
                        Senha
                    </label>
                    <input
                        id="password"
                        className="sign-in__input"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <div className="sign-in__button__group">
                        <button className="sign-in__button">Login</button>

                        <Link to="/sign-up" className="sign-up__link">
                            <button className="sign-up__button">Cadastre-se</button>
                        </Link>
                    </div>
                </form>

                <img className='sign-in__img' src={signin__img} alt='Pessoa de costas observando a aurora boreal.' />
            </section>
        </Container>
    )
}