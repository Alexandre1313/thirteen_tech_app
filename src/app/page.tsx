"use client";
import { useState } from "react";
import styles from '../styles/divLogin.module.css'

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para autenticar o usuário
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className={`flex items-center justify-center h-[90vh] bg-[url('/images/clockBG.jpg')]
         bg-no-repeat bg-cover bg-top ${styles.divLogin}`}>
            <form
                className={`bg-[#d9d8e0] shadow-2xl rounded-md px-8 pt-6 pb-8 mb-4 z-10`}
                onSubmit={handleSubmit}
            >
                <div className={`mb-4`}>
                    <label className={`block text-slate-900 text-sm font-bold mb-2`} htmlFor="email">
                        Email
                    </label>
                    <input
                        className={`shadow appearance-none border rounded-md w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        id="email"
                        type="email"
                        placeholder="Email"
                        autoComplete="current-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={`mb-6`}>
                    <label
                        className={`block text-slate-900 text-sm font-bold mb-2`}
                        htmlFor="password"
                    >
                        Senha
                    </label>
                    <input
                        className={`shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        autoComplete="current-password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={`flex items-center justify-center`}>
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 
                        rounded-md focus:outline-none focus:shadow-outline`}
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
