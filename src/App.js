import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { ProductsSection } from './components/ProductsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
// import { AdminLoginPage } from './components/AdminLoginPage'; // Import the AdminLoginPage
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen", children: [_jsx(Navbar, {}), _jsx(Header, {}), _jsx("main", { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(ProductsSection, {}), _jsx(ContactSection, {})] }) }) }) }), _jsx(Footer, {})] }) }));
}
export default App;
