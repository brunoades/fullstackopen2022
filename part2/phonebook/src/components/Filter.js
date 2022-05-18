const Filter = ({filter, handleSearchChange}) => {
    return (
        <>
            filter show with <input
            value={filter}
            onChange={handleSearchChange}
            />
        </>
    )
}

export default Filter;