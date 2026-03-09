import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthProvider';
import '../../styles/index.css';

export default function Login() {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = await login(
        emailRef.current.value,
        passwordRef.current.value
      );


      if (usuario?.tipo_usuario === 'ADMINISTRADOR') {
        navigate('/admin', { replace: true });
      }

      if (usuario?.tipo_usuario === 'MOTORISTA' || usuario?.tipo_usuario === 'PASSAGEIRO') {
        navigate('/construcao', { replace: true });
      }

    } catch (err) {
      alert(err.response?.data?.message || 'Credenciais inválidas');
    }
  };

  return (
    <main className="main">
      <div className="login-container">
        <div className="login-form-wrapper">
          <div className="form-logo">
            <img src="/assets/img/icone_vdc_meio.png" alt="VaiDeCarona" className="form-logo-image" />
          </div>

          <form className="login-form" onSubmit={onSubmit}>
            <div className="input-group">
              <input ref={emailRef} type="email" className="form-input" placeholder="Email" required />
            </div>
            <div className="input-group">
              <input ref={passwordRef} type="password" className="form-input" placeholder="Senha" required />
            </div>
            <button type="submit" className="btn btn--primary">Entrar</button>
          </form>

          <div className="signup-link">
            <p className="signup-text">
              Não tem uma conta?
              <Link to="/register" className="signup-link-text">Cadastre-se</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}