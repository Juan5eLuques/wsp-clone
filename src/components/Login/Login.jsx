import { useState } from 'react';
import { useAuth } from '../../context/useChat';
import { Loader } from '../Loader/Loader';
import './Login.css';

export const Login = () => {
  const { isAuthenticated, isLoading, login, finishLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Completá todos los campos');
      return;
    }

    if (username === 'admin' && password === '1234') {
      login(username);
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  // No mostrar nada si ya está autenticado y terminó de cargar
  if (isAuthenticated && !isLoading) {
    return null;
  }

  // Mostrar loader cuando está cargando
  if (isLoading) {
    return <Loader onFinish={finishLoading} />;
  }

  // Mostrar formulario de login
  return (
    <div className="login-page">
      <div className="login-card">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
        <h2>WhatsApp Web</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Usuario</label>
            <input
              type="text"
              placeholder="Ingresá tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-field">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingresá tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="login-error">{error}</p>
          <button className="login-btn" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
