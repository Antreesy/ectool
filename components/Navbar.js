import Toggle from "./Toggle";

const Navbar = () => {
    const handleToggleChange = (isSelected) => {
        if (isSelected) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <nav className='px-4 py-2.5'>
            <div className='max-w-5xl mx-auto flex flex-wrap justify-end items-center'>
                <Toggle onChange={handleToggleChange}>Dark Mode</Toggle>
            </div>
        </nav>
    )
}

export default Navbar;