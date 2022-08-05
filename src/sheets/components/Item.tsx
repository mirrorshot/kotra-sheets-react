import Settable from "./Settable";
import './Item.css';

export type ItemData = {
    item: string,
    setItem: (i: string) => void
};

export default function Item(props: ItemData) {
    return (
        <div className={'Item'}>
            <Settable label={'Item'} value={props.item} setValue={props.setItem}/>
        </div>
    );
}
