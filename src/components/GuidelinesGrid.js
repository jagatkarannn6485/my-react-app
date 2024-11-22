import { jsx as _jsx } from "react/jsx-runtime";
import { GuidelineCard } from './GuidelineCard';
import { guidelines } from '../data/guidelines';
export function GuidelinesGrid() {
    return (_jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: guidelines.map((guideline, index) => (_jsx(GuidelineCard, { title: guideline.title, description: guideline.description, items: guideline.items }, index))) }));
}
