import ListWithIcons from "@/ui/components/accordian/ListWithIcons"
import MultiOpen from "@/ui/components/accordian/MultiOpen"
import SingleOpen from "@/ui/components/accordian/SingleOpen"

export const accordianComponent = [
    { 
        name: `Single Open`,
        desc: `An accordian which will open one at a time.`,
        codePage: `src/components/SingleOpen.tsx`,
        codePath: 'src/ui/components/accordian/SingleOpen.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install framer motion library`, command: `npm i framer-motion` },
            { name: `5. Install react icons library`, command: `npm i react-icons` },
            { name: `6. Install react use measure library`, command: `npm install react-use-measure` }
        ],
        demo: <SingleOpen/>,
        usage: `import <SingleOpen/> from '@/components/SingleOpen.tsx'`
    },
    { 
        name: `Multi Open`,
        desc: `An accordian which can open multiple at a time.`,
        codePage: `src/components/MultiOpen.tsx`,
        codePath: 'src/ui/components/accordian/MultiOpen.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install framer motion library`, command: `npm i framer-motion` },
            { name: `5. Install react icons library`, command: `npm i react-icons` },
            { name: `6. Install react use measure library`, command: `npm install react-use-measure` }
        ],
        demo: <MultiOpen/>,
        usage: `import <MultiOpen/> from '@/components/MultiOpen.tsx'`
    },
    { 
        name: `List with Icons`,
        desc: `An accordian with icons to specity the information`,
        codePage: `src/components/ListWithIcons.tsx`,
        codePath: 'src/ui/components/accordian/ListWithIcons.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install framer motion library`, command: `npm i framer-motion` },
            { name: `5. Install react icons library`, command: `npm i react-icons` },
            { name: `6. Install react use measure library`, command: `npm install react-use-measure` }
        ],
        demo: <ListWithIcons/>,
        usage: `import <ListWithIcons/> from '@/components/ListWithIcons.tsx'`
    },
]