import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    const navigate = useNavigate();

    return (
        <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap" aria-label="Breadcrumb">
            <button
                onClick={() => navigate('/')}
                className="flex items-center hover:text-brand-500 transition-colors"
            >
                <Home className="w-4 h-4 mr-1" />
                <span className="sr-only">Home</span>
            </button>

            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <ChevronRight className="w-4 h-4 text-slate-700 flex-shrink-0" />
                    {item.href ? (
                        <button
                            onClick={() => navigate(item.href!)}
                            className="hover:text-brand-500 transition-colors"
                        >
                            {item.label}
                        </button>
                    ) : (
                        <span className="text-slate-300 font-medium truncate max-w-[200px]">
                            {item.label}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
