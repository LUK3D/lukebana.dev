import { Header } from "../../components/header";
import { Hero } from "../../components/hero";

/**
 * ## Home Page Component
 * @returns ReactNode 
 */
 export const Home = ()=>(
<div className="w-scre h-screen bg-luk-600 flex flex-col overflow-y-auto overflow-x-hidden selection:bg-primary selection:bg-opacity-50">
    <Header></Header>
    <Hero></Hero>
</div>
);

