import { useState } from "react";
import { GoogleLogo } from "phosphor-react";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";

import { auth } from "../../services/firebase";
import "./styles.scss";

export function Signin() {
  const [user, setUser] = useState<User>();

  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    try {
      const { user } = await signInWithPopup(auth, provider);

      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="user">
        {user?.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
        <strong>{user?.displayName}</strong>
        <small>{user?.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social, por exemplo, autenticação com a Google
        você <br />
        facilita a vida do usuário permitindo utilizar sua aplicação sem fazer
        cadastro.
      </span>

      <button type="button" className="button" onClick={handleGoogleSignIn}>
        <GoogleLogo /> Entrar com Google
      </button>
    </div>
  );
}
