// src/app/register/page.js
'use client'; // Mark as Client Component

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabaseBrowserClient";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();
    const supabase = createSupabaseBrowserClient();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);
        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            // Redirect to login page after success register
            router.auth('/login');
        }
    };

    return (
        <div className="max-w-md mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Buat Akun Baru</h1>
            <form 
                onSubmit={handleSignUp}
                className="space-y-4"
            >
                <div>
                    <label className="block font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700"
                >
                    Daftar
                </button>
                {error && <p className="text-red-500 text-center">{error}</p>}

            </form>
        </div>
    );

}