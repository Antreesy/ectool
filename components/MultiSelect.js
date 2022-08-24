const MultiSelect = ({ label, options, selectedKeys, onSelectionChange }) => {
    
    // Replace this with your own implementation
    const handleChange = (e) => {
        onSelectionChange(Array.from(e.target.selectedOptions, option => option.value));
    }

    return (
        <div>
            <label htmlFor="select" className='mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200'>{label}</label>
            {/* Replace this with your own implementation */}
            <select
                id="select"
                className='dark:bg-gray-700 dark:text-gray-300'
                multiple
                defaultValue={selectedKeys}
                onChange={handleChange}
            >
                {options.map(option => (
                    <option key={option.key} value={option.key}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default MultiSelect;
