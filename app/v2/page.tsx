"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function Home() {
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme("tsuyu");
    }, [setTheme]);

    return (
        <main className="hidden">
            <div className="w-full">
                <h1 className="text-2xl font-bold">Ju-N1</h1>
                <p className="mt-4">Home page, youtube style</p>
                <p>Card type - post, project, art, design, videos...</p>
            </div>
            <div className="flex flex-col w-full min-h-full mt-8">
                <p>Home</p>
                <p>Blog - Imgs, Checklist, designs, arts, projects</p>
                <p>About/Contact</p>
            </div>
            <div className="w-full mt-8">
                <footer className="text-center">&copy; {new Date().getFullYear()} Yun Ji.</footer>
            </div>
        </main>
    );
}