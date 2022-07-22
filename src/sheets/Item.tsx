import Settable from "./Settable";
import './Item.css';

function Item(props: {
    item: string,
    setItem: Function
}) {
    return (
        <div className={'Item'}>
            <Settable label={'Item'} value={props.item} setValue={props.setItem}/>
        </div>
    );
}

export default Item;