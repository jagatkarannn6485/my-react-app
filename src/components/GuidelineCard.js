import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircleIcon } from '@heroicons/react/24/solid';
export function GuidelineCard({ title, description, items }) {
    return (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md hover-card", children: [_jsx("h2", { className: "text-xl font-bold mb-2 text-gray-800", children: title }), _jsx("p", { className: "text-gray-600 mb-4", children: description }), _jsx("ul", { className: "space-y-2", children: items.map((item, index) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckCircleIcon, { className: "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "text-gray-700", children: item })] }, index))) })] }));
}
