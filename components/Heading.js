const Heading = ({ children, variant }) => {
    if (variant==='primary') {
        return (
            <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'>
                    {children}
                </span>
            </h1>
        )
    } else {
        return (
            <h2 className='mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl'>{children}</h2>
        )
    }

}

export default Heading;