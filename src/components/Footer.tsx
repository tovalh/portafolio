import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-darker py-8 border-t border-slate-800">
            <div className="container mx-auto px-4 text-center">
                <p className="text-slate-500 font-mono text-sm">
                    Designed & Built by Toval Dev © {new Date().getFullYear()}.
                    <span className="hidden sm:inline mx-2">|</span>
                    <span className="block sm:inline mt-2 sm:mt-0 text-slate-600">Powered by React & Tailwind.</span>
                </p>
            </div>
        </footer>
    );
};
