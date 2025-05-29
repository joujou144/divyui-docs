'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ComponentExample = ({ activeTab, code, children }) => {
    return (
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            {activeTab === 'code' ? (
                <div className="bg-divy-night max-h-[400px] w-full overflow-auto text-sm">
                    <SyntaxHighlighter
                        wrapLines={true}
                        lineProps={{
                            style: {
                                wordBreak: 'break-all',
                                whiteSpace: 'pre-wrap',
                            },
                        }}
                        language="jsx"
                        style={vscDarkPlus}
                        customStyle={{
                            margin: 0,
                            padding: '0 2rem 1rem 2rem',
                        }}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            ) : (
                <>{children}</>
            )}
        </div>
    );
};
