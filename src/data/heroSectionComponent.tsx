import Type1 from "@/ui/components/hero-section/Type1";
import Type2 from "@/ui/components/hero-section/Type2";
import Type3 from "@/ui/components/hero-section/Type3";
import Type4 from "@/ui/components/hero-section/Type4";

export const heroSectionComponent = [
    {
        name: `Type 1`,
        desc: ``,
        codePage: `src/components/Type1.tsx`,
        codePath: 'src/ui/components/hero-section/Type1.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
        ],
        demo: <Type1 />,
        usage: `import <Type1/> from '@/components/Type1.tsx'`,
    },
    {
        name: `Type 2`,
        desc: ``,
        codePage: `src/components/Type2.tsx`,
        codePath: 'src/ui/components/hero-section/Type2.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
        ],
        demo: <Type2 />,
        usage: `import <Type2/> from '@/components/Type2.tsx'`,
    },
    {
        name: `Type 3`,
        desc: ``,
        codePage: `src/components/Type3.tsx`,
        codePath: 'src/ui/components/hero-section/Type3.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
        ],
        demo: <Type3 />,
        usage: `import <Type3/> from '@/components/Type3.tsx'`,
    },
    {
        name: `Type 4`,
        desc: ``,
        codePage: `src/components/Type4.tsx`,
        codePath: 'src/ui/components/hero-section/Type4.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
        ],
        demo: <Type4 />,
        usage: `import <Type4/> from '@/components/Type4.tsx'`,
    },
]