import { setRequestLocale } from 'next-intl/server';
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Experience from "@/components/Experience";

export default async function Home({
                                       params
                                   }: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="font-sans text-dark antialiased selection:bg-primary selection:text-white relative min-h-screen">
            <CustomCursor />
            <main>
                <Hero />
                <About />
                <Experience />
                {/* <Projects /> */}
                <Skills />
                <Contact />
            </main>
            {/*<Footer />*/}
        </div>
    );
}
