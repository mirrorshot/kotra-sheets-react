import Settable from "./Settable";

function Item(props: {
    item: string,
    setItem: Function
}) {
    return (
        <div>
            <Settable label={'Item'} value={props.item} setValue={props.setItem}/>
        </div>
    );
}

export default Item;