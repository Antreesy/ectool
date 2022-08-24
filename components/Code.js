const Code = ({ children, size='large' }) => {
    if (size==='large') {
        return (
            <code className='block max-w-xl mx-auto p-4 bg-gray-100 text-gray-700 dark:text-gray-400 dark:bg-gray-800 border dark:border-gray-600 rounded text-left whitespace-pre-line'>
                {children}
            </code>
        )
    } else {
        return (
            <code className='inline-block p-2 bg-gray-100 text-gray-700 dark:text-gray-400 dark:bg-gray-800 border dark:border-gray-600 rounded text-base text-left'>
                {children}
            </code>
        )
    }

}

export default Code;