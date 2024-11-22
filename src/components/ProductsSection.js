import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import pcb1 from '../images/pcb1.jpg'; // Adjust the import path as needed
import pcb2 from '../images/pcb2.jpg';
import pcb3 from '../images/pcb3.jpg';
export function ProductsSection() {
    const products = [
        {
            title: "Single Sided PCBs",
            capacity: "3000 SQMTR/month",
            description: "High-quality single-sided PCBs for various applications",
            image: pcb1
        },
        {
            title: "Double Sided PCBs",
            capacity: "2000 SQMTR/month",
            description: "Advanced double-sided PCBs with superior performance",
            image: pcb2
        },
        {
            title: "Metal Core PCBs",
            capacity: "2500 SQMTR/month",
            description: "Specialized metal core PCBs for thermal management",
            image: pcb3
        }
    ];
    return (_jsx("section", { className: "py-16 bg-gray-50", id: "products", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-12", children: "Our Products" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: products.map((product, index) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105", children: [_jsx("img", { src: product.image, alt: product.title, className: "w-full h-64 object-cover rounded-t-lg mb-4" }), _jsx("h3", { className: "text-xl font-bold mb-2", children: product.title }), _jsx("p", { className: "text-gray-600 mb-4", children: product.description }), _jsxs("p", { className: "text-indigo-600 font-semibold", children: ["Production Capacity: ", product.capacity] })] }, index))) })] }) }));
}
