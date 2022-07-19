import {useState} from "react";
import Settable from "./Settable";

function Item() {
    const [item, updateItem] = useState('');

    return (
        <div>
            <Settable label={'Item'} setValue={updateItem}/>
            <p>Item</p>
        </div>
    );
}

export default Item;