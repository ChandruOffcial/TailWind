import Hero from "./components/Hero";
import "./app.css";
import Snippets from "./components/Snippets";
import Features from "./components/Features";
import Access from "./components/Access";
import SuperCharge from "./components/SuperCharge";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Hero />
            <Snippets />
            <Features />
            <Access />
            <SuperCharge />
            <CTA />
            <Footer />
        </>
    );
}
