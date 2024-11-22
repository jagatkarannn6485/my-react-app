import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XMarkIcon } from '@heroicons/react/24/outline';
const processSteps = [
    {
        title: "Design Phase",
        description: "Creating the PCB layout using advanced CAD software",
        icon: "🎨",
        details: [
            "Schematic capture",
            "Component placement",
            "Route optimization",
            "DRC checks"
        ]
    },
    {
        title: "Material Preparation",
        description: "Selecting and preparing high-quality materials",
        icon: "🛠",
        details: [
            "Copper clad laminate selection",
            "Panel sizing",
            "Surface cleaning",
            "Photoresist application"
        ]
    },
    {
        title: "Manufacturing",
        description: "Precise manufacturing process with quality control",
        icon: "⚙️",
        details: [
            "UV exposure",
            "Chemical etching",
            "Drilling",
            "Plating process"
        ]
    },
    {
        title: "Quality Assurance",
        description: "Rigorous testing and inspection procedures",
        icon: "✓",
        details: [
            "Electrical testing",
            "Visual inspection",
            "Dimensional verification",
            "Final QC"
        ]
    }
];
export function ProcessModal({ isOpen, onClose }) {
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: _jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0", children: [_jsx("div", { className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75", onClick: onClose }), _jsxs("div", { className: "relative inline-block w-full max-w-4xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl", children: [_jsx("button", { onClick: onClose, className: "absolute top-4 right-4 text-gray-400 hover:text-gray-500", children: _jsx(XMarkIcon, { className: "w-6 h-6" }) }), _jsx("h2", { className: "text-3xl font-bold text-center mb-8 text-indigo-600", children: "Our PCB Manufacturing Process" }), _jsx("div", { className: "space-y-12", children: processSteps.map((step, index) => (_jsx("div", { className: "process-step opacity-0 animate-fadeIn", style: { animationDelay: `${index * 200}ms` }, children: _jsxs("div", { className: "flex items-start gap-6 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow", children: [_jsx("div", { className: "text-4xl", children: step.icon }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-xl font-bold mb-2", children: step.title }), _jsx("p", { className: "text-gray-600 mb-4", children: step.description }), _jsx("ul", { className: "grid grid-cols-2 gap-2", children: step.details.map((detail, idx) => (_jsxs("li", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-indigo-500 rounded-full" }), _jsx("span", { children: detail })] }, idx))) })] })] }) }, index))) })] })] }) }));
}
