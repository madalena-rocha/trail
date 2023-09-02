import "./styles.css";
import * as React from "react";
import signin__img from "../../assets/images/img-signin.png";
import { Link, useNavigate } from "react-router-dom";
import ContainerAccess from "../../components/ContainerAccess";

export default function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const [warning, setWarning] = React.useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = [];

    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));

      const user = users.find(
        (u) => u.email === form.email && u.password === form.password
      );

      if (user) {
        localStorage.setItem("token", user.email);
        setWarning(null);
        navigate("/profile");
      } else {
        setWarning("Usuário ou senha inválidos!");

        setTimeout(() => {
          setWarning(null);
        }, 3000);
      }
    } else {
      setWarning("Nenhum usuário cadastrado!");

      setTimeout(() => {
        setWarning(null);
      }, 3000);
    }
  };

  return (
    <ContainerAccess>
      <section className="sign-in">
        <form className="sign-in__form" onSubmit={handleSubmit}>
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

            {<span className="warning">{warning}</span>}

            <Link to="/sign-up" className="sign-up__link">
              <button className="sign-up__button">Cadastre-se</button>
            </Link>
          </div>
        </form>

        <img
          className="sign-in__img"
          src={signin__img}
          alt="Pessoa de costas observando a aurora boreal."
        />
      </section>
    </ContainerAccess>
  );
}
