'use client';

import { ComponentExample } from '@/components/example/component-example';
import { ComponentHeading, ComponentSubHeading } from '@/components/heading';

import { Tabs } from '@/components/tabs/tabs';
import { useState } from 'react';

export default function ButtonPage() {
    const [activeTab, setActiveTab] = useState('preview');
    const exampleCode = `
import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button variant="primary">Click me</Button>;
} 
`;

    return (
        <section className="mb-18">
            <ComponentHeading title="Button">
                <p className="lg:text-md mb-6 text-sm">
                    Buttons allow users to perform actions and choose with a
                    single tap.
                </p>
            </ComponentHeading>

            <ComponentSubHeading title="Usage" />
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <ComponentExample code={exampleCode} activeTab={activeTab}>
                <div className="p-6">
                    <button>click me</button>
                </div>
            </ComponentExample>
        </section>
    );
}
