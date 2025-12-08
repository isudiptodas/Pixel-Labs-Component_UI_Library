import ExpandOnHover from "@/ui/components/button/ExpandOnHover";
import GradientButton from "@/ui/components/button/GradientButton";
import MultiColorBeam from "@/ui/components/button/MultiColorBeam";
import ShrinkOnClick from "@/ui/components/button/ShrinkOnClick";

export const buttonComponent = [
    { 
        name: `Expand On Hover`,
        desc: `Hover on the button to see a subtle scale effect with transition, made with react and
        tailwind classes.`,
        codePage: `src/components/ExpandOnHover.tsx`,
        codePath: 'src/ui/components/button/ExpandOnHover.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` }
        ],
        demo: <ExpandOnHover/>,
        usage: `import <ExpandOnHover/> from '@/components/ExpandOnHover.tsx'`
    },
    {
        name: `Multi Color Beam`,
        desc: `A simple button with multi color background gradient effect made with react and
        tailwind classes.`,
        codePage: `src/components/MultiColorBeam.tsx`,
        codePath: 'src/ui/components/button/MultiColorBeam.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` }
        ],
        demo: <MultiColorBeam/>,
        usage: `import <MultiColorBeam/> from '@/components/MultiColorBeam.tsx'`
    },
    {
        name: `Shrink On Click`,
        desc: `A simple button which will shrink on click with subtle transition effect made with react and
        tailwind classes.`,
        codePage: `src/components/ShrinkOnClick.tsx`,
        codePath: 'src/ui/components/button/ShrinkOnClick.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` }
        ],
        demo: <ShrinkOnClick/>,
        usage: `import <ShrinkOnClick/> from '@/components/ShrinkOnClick.tsx'`
    },
    {
        name: `Gradient`,
        desc: `A gradient button with 5 different color themes made with react and
        tailwind classes.`,
        codePage: `src/components/GradientButton.tsx`,
        codePath: 'src/ui/components/button/GradientButton.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` }
        ],
        demo: <GradientButton/>,
        usage: `import <GradientButton/> from '@/components/GradientButton.tsx'`,
        props: [
            {name: `Theme`, desc: `A string value which will determine the theme of the button`, example: `"red", "default", "green", "yellow", "blue"`}
        ]
    },
];