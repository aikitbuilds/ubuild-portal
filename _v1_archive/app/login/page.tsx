"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth/context";
import { Logo } from "@/components/brand/Logo";
import { Loader2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
    const { signInWithGoogle, signInAsDemo } = useAuth();
    const [isLoading, setIsLoading] = useState<"google" | "demo" | null>(null);

    const handleGoogleLogin = async () => {
        setIsLoading("google");
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error("Google Login Error:", error);
            toast.error("Login Failed", {
                description: "If you have an ad blocker, please disable it and try again."
            });
        } finally {
            setIsLoading(null);
        }
    };

    const handleDemoLogin = async () => {
        setIsLoading("demo");
        try {
            await signInAsDemo();
        } finally {
            setIsLoading(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w"
                        alt="Tejas Trails"
                        className="h-24 w-auto object-contain mb-4"
                    />
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold tracking-tight text-white">
                            Welcome to Tejas Admin
                        </h1>
                        <p className="text-sm text-gray-400">
                            Sign in to access your race director dashboard
                        </p>
                    </div>
                </div>

                <div className="space-y-4 pt-4">
                    <Button
                        variant="outline"
                        className="w-full h-12 bg-white text-black hover:bg-gray-100 font-semibold border-0"
                        onClick={handleGoogleLogin}
                        disabled={!!isLoading}
                    >
                        {isLoading === "google" ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                            </svg>
                        )}
                        Sign in with Google
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#0a0a0a] px-2 text-gray-500">
                                or try the demo
                            </span>
                        </div>
                    </div>

                    <Button
                        className="w-full h-12 bg-[#E67E22] hover:bg-[#D35400] text-white font-bold tracking-wide"
                        onClick={handleDemoLogin}
                        disabled={!!isLoading}
                    >
                        {isLoading === "demo" ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <>
                                Enter Demo Mode
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </div>

                <p className="px-8 text-center text-xs text-gray-500">
                    By clicking continue, you agree to our{" "}
                    <a href="#" className="underline hover:text-white">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline hover:text-white">
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
