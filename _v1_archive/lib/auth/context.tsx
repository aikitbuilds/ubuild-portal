"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
    User,
    onAuthStateChanged,
    signInWithPopup,
    signInAnonymously,
    GoogleAuthProvider,
    signOut as firebaseSignOut
} from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useRouter } from "next/navigation";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>;
    signInAsDemo: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    signInWithGoogle: async () => { },
    signInAsDemo: async () => { },
    signOut: async () => { },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check for local demo user
        const isDemo = localStorage.getItem('isDemoMode');
        if (isDemo) {
            setUser({
                uid: 'demo-user',
                email: 'demo@ubuild.pro',
                displayName: 'Demo User',
                emailVerified: true,
                isAnonymous: true,
                metadata: {},
                providerData: [],
                refreshToken: '',
                tenantId: null,
                delete: async () => { },
                getIdToken: async () => 'mock-token',
                getIdTokenResult: async () => ({
                    token: 'mock-token',
                    signInProvider: 'custom',
                    claims: {},
                    authTime: Date.now(),
                    issuedAtTime: Date.now(),
                    expirationTime: Date.now() + 3600,
                }),
                reload: async () => { },
                toJSON: () => ({}),
                phoneNumber: null,
                photoURL: null,
                providerId: 'firebase',
            } as unknown as User);
            setLoading(false);
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!localStorage.getItem('isDemoMode')) {
                setUser(user);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/dashboard");
        } catch (error) {
            console.error("Error signing in with Google", error);
            throw error;
        }
    };

    const signInAsDemo = async () => {
        try {
            // Bypass Firebase Auth for Demo Mode
            localStorage.setItem('isDemoMode', 'true');
            setUser({
                uid: 'demo-user',
                email: 'demo@ubuild.pro',
                displayName: 'Demo User',
                emailVerified: true,
                isAnonymous: true,
                metadata: {},
                providerData: [],
                refreshToken: '',
                tenantId: null,
                delete: async () => { },
                getIdToken: async () => 'mock-token',
                getIdTokenResult: async () => ({
                    token: 'mock-token',
                    signInProvider: 'custom',
                    claims: {},
                    authTime: Date.now(),
                    issuedAtTime: Date.now(),
                    expirationTime: Date.now() + 3600,
                }),
                reload: async () => { },
                toJSON: () => ({}),
                phoneNumber: null,
                photoURL: null,
                providerId: 'firebase',
            } as unknown as User);

            router.push("/tejas/dashboard");
        } catch (error) {
            console.error("Error signing in as Demo User", error);
        }
    };

    const signOut = async () => {
        try {
            localStorage.removeItem('isDemoMode');
            await firebaseSignOut(auth);
            setUser(null);
            router.push("/");
        } catch (error) {
            console.error("Error signing out", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, signInWithGoogle, signInAsDemo, signOut }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
