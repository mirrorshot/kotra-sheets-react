import {useState} from "react";

function Item(){
    const [item, updateItem] = useState('');

    return (
        <div>
            <input type='text'
                   value={item}
                   onChange={(e) => updateItem(e.target.value)}
            />
            <p>Item</p>
        </div>
    );
}

export default Item;