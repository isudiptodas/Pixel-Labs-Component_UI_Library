import ExtendedInfo from "@/ui/components/dropdown/ExtendedInfo"
import MultiSelect from "@/ui/components/dropdown/MultiSelect"
import SingleSelect from "@/ui/components/dropdown/SingleSelect"

export const dropdownComponent = [
    {
        name: `Single Select`,
        desc: `A dropdown list with single entry selection.`,
        codePage: `src/components/SingleSelect.tsx`,
        codePath: 'src/ui/components/dropdown/SingleSelect.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install react icons library`, command: `npm i react-icons` }
        ],
        demo: <SingleSelect />,
        usage: `import <SingleSelect/> from '@/components/SingleSelect.tsx'`,
        props: [
            {name: `SelectOption`, desc: `Pass a callback function to access the selected value from dropdown component to the parent component`, example: `const selectOptionCallback = (option: string) => {\n setOption(option)}`}
        ]
    },
    {
        name: `Multi Select`,
        desc: `A dropdown list with multiple selection.`,
        codePage: `src/components/MultiSelect.tsx`,
        codePath: 'src/ui/components/dropdown/MultiSelect.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install react icons library`, command: `npm i react-icons` }
        ],
        demo: <MultiSelect />,
        usage: `import <MultiSelect/> from '@/components/MultiSelect.tsx'`,
        props: [
            {name: `SelectOption`, desc: `Pass a callback function to access the selected value arrays from dropdown component to the parent component`, example: `const selectOptionCallback = (list: string[]) => {\n setSelectedOptions(list)}`}
        ]
    },
    {
        name: `Extended with Info`,
        desc: `A dropdown list with single option selection with short description`,
        codePage: `src/components/ExtendedInfo.tsx`,
        codePath: 'src/ui/components/dropdown/ExtendedInfo.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install react icons library`, command: `npm i react-icons` }
        ],
        demo: <ExtendedInfo />,
        usage: `import <ExtendedInfo/> from '@/components/ExtendedInfo.tsx'`,
        props: [
            {name: `SelectOption`, desc: `Pass a callback function to access the selected value from dropdown component to the parent component`, example: `const selectOptionCallback = (option: string) => {\n setOption(option)}`}
        ]
    },
]