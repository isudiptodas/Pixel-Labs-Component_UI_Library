import FormWithFileUpload from "@/ui/components/form/FormWithFileUpload"
import MultiStep from "@/ui/components/form/MultiStep"
import SimpleData from "@/ui/components/form/SimpleData"

export const formComponent = [
    {
        name: `Simple Data`,
        desc: `A very basic form component with fields like : name, email, contact, address.`,
        codePage: `src/components/SimpleData.tsx`,
        codePath: 'src/ui/components/form/SimpleData.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` },
            { name: `4. Install react icons library`, command: `npm i react-icons` }
        ],
        demo: <SimpleData />,
        usage: `import <SimpleData/> from '@/components/SimpleData.tsx'`,
    },
    {
        name: `Multi Step`,
        desc: `A form divided by steps`,
        codePage: `src/components/MultiStep.tsx`,
        codePath: 'src/ui/components/form/MultiStep.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` }
        ],
        demo: <MultiStep />,
        usage: `import <MultiStep/> from '@/components/MultiStep.tsx'`,
    },
    {
        name: `Form with File Upload`,
        desc: `A form component with basic input fields and file upload section.`,
        codePage: `src/components/FormWithFileUpload.tsx`,
        codePath: 'src/ui/components/form/FormWithFileUpload.tsx',
        steps: [
            { name: `1. Create a NextJs project by`, command: `npx create-next-app@latest` },
            { name: `2. or a ReactJs project using`, command: `npm create vite@latest` },
            { name: `3. Install and setup tailwindCSS` }
        ],
        demo: <FormWithFileUpload />,
        usage: `import <FormWithFileUpload/> from '@/components/FormWithFileUpload.tsx'`,
    },
]