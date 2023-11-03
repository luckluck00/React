

function TabButton({children, onSelect, isSelected}) {

    return (
        <li>
            <button className="add" onClick={onSelect}>{children}</button>
        </li>
    );
}

export default TabButton