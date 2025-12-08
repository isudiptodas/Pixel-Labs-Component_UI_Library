import BottomSlide from "@/ui/components/drawer/BottomSlide"
import ExpandFromMiddle from "@/ui/components/drawer/ExpandFromMiddle"
import TopSlide from "@/ui/components/drawer/TopSlide"

export const drawerComponent = [
    {
        name: `Expand from Middle`,
        desc: `A drawer which expands from middle of the screen when enabled.`,
        codePage: `src/components/ExpandFromMiddle.tsx`,
        codePath: 'src/ui/components/drawer/ExpandFromMiddle.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
        ],
        demo: <ExpandFromMiddle />,
        usage: `import <ExpandFromMiddle/> from '@/components/ExpandFromMiddle.tsx'`,
    },
    {
        name: `Top Slide`,
        desc: `A drawer which slides from top of the screen.`,
        codePage: `src/components/TopSlide.tsx`,
        codePath: 'src/ui/components/drawer/TopSlide.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
        ],
        demo: <TopSlide />,
        usage: `import <TopSlide/> from '@/components/TopSlide.tsx'`,
    },
    {
        name: `Bottom Slide`,
        desc: `A drawer which slides from bottom of the screen.`,
        codePage: `src/components/BottomSlide.tsx`,
        codePath: 'src/ui/components/drawer/BottomSlide.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
        ],
        demo: <BottomSlide />,
        usage: `import <BottomSlide/> from '@/components/BottomSlide.tsx'`,
    },
]