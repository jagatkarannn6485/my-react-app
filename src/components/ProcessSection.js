import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ProcessSection() {
    const steps = [
        { title: 'Analysis', description: 'Understanding requirements' },
        { title: 'Design', description: 'Creating solutions' },
        { title: 'Development', description: 'Building robust code' },
        { title: 'Testing', description: 'Ensuring quality' }
    ];
    return (_jsx("section", { className: "py-12 bg-gray-50", id: "process", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-12", children: "Our Process" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: steps.map((step, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4 shadow-lg", children: _jsx("span", { className: "text-2xl font-bold text-indigo-600", children: index + 1 }) }), _jsx("h3", { className: "font-bold mb-2", children: step.title }), _jsx("p", { className: "text-gray-600", children: step.description })] }, index))) })] }) }));
}
