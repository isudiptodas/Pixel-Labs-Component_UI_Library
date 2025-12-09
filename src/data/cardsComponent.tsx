import ExpandOnClickHorizontal from "@/ui/components/cards/ExpandOnClickHorizontal";
import ExpandOnClickVertical from "@/ui/components/cards/ExpandOnClickVertical";
import HoverInfo from "@/ui/components/cards/HoverInfo";
import HoverNameReveal from "@/ui/components/cards/HoverNameReveal";
import PricingInfo from "@/ui/components/cards/PricingInfo";

export const cardsComponent = [
    {
        name: `Horizontal Expand`,
        desc: `A horizontal list of image cards which expands on click.`,
        codePage: `src/components/ExpandOnClickHorizontal.tsx`,
        codePath: 'src/ui/components/cards/ExpandOnClickHorizontal.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install framer motion library`, command: `npm i framer-motion` },
        ],
        demo: <ExpandOnClickHorizontal/>,
        usage: `import <ExpandOnClickHorizontal/> from '@/components/ExpandOnClickHorizontal.tsx'`,
    },
    {
        name: `Vertical Expand`,
        desc: `A vertical list of image cards which expands on click.`,
        codePage: `src/components/ExpandOnClickVertical.tsx`,
        codePath: 'src/ui/components/cards/ExpandOnClickVertical.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install framer motion library`, command: `npm i framer-motion` },
        ],
        demo: <ExpandOnClickVertical />,
        usage: `import <ExpandOnClickVertical/> from '@/components/ExpandOnClickVertical.tsx'`,
    },
    {
        name: `Hover Info`,
        desc: `A card list stacked together shows details on hover(on desktop) default on mobile screens.`,
        codePage: `src/components/HoverInfo.tsx`,
        codePath: 'src/ui/components/cards/HoverInfo.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install framer motion library`, command: `npm i framer-motion` },
        ],
        demo: <HoverInfo />,
        usage: `import <HoverInfo/> from '@/components/HoverInfo.tsx'`,
    },
    {
        name: `Pricing Info`,
        desc: `A card component for displaying company pricing information.`,
        codePage: `src/components/PricingInfo.tsx`,
        codePath: 'src/ui/components/cards/PricingInfo.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
        ],
        demo: <PricingInfo />,
        usage: `import <PricingInfo/> from '@/components/PricingInfo.tsx'`,
    },
    {
        name: `Hover Name Reveal`,
        desc: `A card which displays name vertically and image on hover / clicked.`,
        codePage: `src/components/HoverNameReveal.tsx`,
        codePath: 'src/ui/components/cards/HoverNameReveal.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install framer motion library`, command: `npm i framer-motion` },
        ],
        demo: <HoverNameReveal />,
        usage: `import <HoverNameReveal/> from '@/components/HoverNameReveal.tsx'`,
    },
]