import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Heading from '../components/Heading';
import Text from '../components/Text';
import UnorderedList from '../components/UnorderedList';
import ListItem from '../components/ListItem';
import Code from '../components/Code';
import MultiSelect from '../components/MultiSelect';
import inputScreenshot from '../public/screenshot_multi_select_input.png'

export default function Home() {
  const [ selectedKeys, setSelectedKeys ] = useState(['purple', 'red']);
  const options = [
    { key: 'red', name: 'Red' },
    { key: 'blue', name: 'Blue' },
    { key: 'ocean', name: 'Ocean' },
    { key: 'orange', name: 'Orange' },
    { key: 'yellow', name: 'Yellow' },
    { key: 'green', name: 'Green' },
    { key: 'purple', name: 'Purple' },
    { key: 'silver', name: 'Silver' }
  ]

  return (
    <div>
      <Head>
        <title>Code Challenge - Multi-Select</title>
        <meta name="description" content="Goal of this challenge is to implement a reusable multi-select input component with react and tailwindcss" />
      </Head>

      <main>
        <div className='max-w-4xl mx-auto'>
          <section className='p-4 text-center'>
            <Heading>Code Challenge:</Heading>
            <Heading variant='primary'>Create a multi-select input</Heading>
            <Text>Goal of this challenge is to implement a reusable multi-select input component with react and tailwindcss.</Text>
            <div className='mt-4 max-w-xl mx-auto'>
              <Image src={inputScreenshot} alt='Screenshot of multi-select input' />
            </div>
          </section>
          <section className='mt-2 p-4 text-center'>
            <Heading>Requirements:</Heading>
            <UnorderedList>
              <ListItem>Selected items should be displayed as dismissable badges</ListItem>
              <ListItem>Component must be styled with tailwindcss</ListItem>
              <ListItem>Selectable options should be passed as prop</ListItem>
              <ListItem>{'Selected items should be passed as prop (Controlled)'}</ListItem>
              <ListItem>{'Changes should be returned as event (Controlled)'}</ListItem>
              <ListItem>Installed npm packages should be used only</ListItem>
              <ListItem>{'(Optional) Input should be keyboard accessible'}</ListItem>
              <ListItem>{'(Optional) Input should be dark mode compatible'}</ListItem>
            </UnorderedList>
          </section>
          <section className='mt-2 p-4 text-center'>
            <Heading>Syntax:</Heading>
            <Code>
              {`<MultiSelect
                    label="Colors"
                    options={options}
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  ></MultiSelect>
              `}
            </Code>
          </section>
          <section className='mt-2 p-4 text-center'>
            <Heading>Instruction:</Heading>
            <Text>Extend the <Code size='small'>MultiSelect</Code> component in <Code size='small'>{'/components/MultiSelect.js'}</Code></Text>
          </section>
          <section className='mt-2 p-4 text-center'>
            <Heading>Playground:</Heading>
            <div className='max-w-5xl mx-auto bg-gray-100 text-gray-700 dark:text-gray-400 dark:bg-gray-800 border dark:border-gray-600 rounded text-left'>
              <div className='flex flex-col p-10 justify-center items-center '>
                <MultiSelect
                  label="Colors"
                  options={options}
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                ></MultiSelect>
              </div>
              <div className='py-2 px-4 border-t border-gray-300 dark:border-gray-500 bg-gray-200 dark:bg-gray-700'>
                selectedKeys: {JSON.stringify(selectedKeys,null,2)}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}