import { cn } from '@/utils';

export const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { key: 'preview', label: 'Preview' },
        { key: 'code', label: 'Code' },
    ];

    return (
        <ul className="mb-4 flex gap-4">
            {tabs.map(({ key, label }) => (
                <li key={key}>
                    <button
                        onClick={() => setActiveTab(key)}
                        className={cn(
                            'cursor-pointer border-b-2 p-1 text-sm',
                            activeTab === key
                                ? 'border-indigo-950'
                                : 'border-transparent text-slate-600'
                        )}
                    >
                        {label}
                    </button>
                </li>
            ))}
        </ul>
    );
};
