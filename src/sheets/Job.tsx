import Settable from "./Settable";
import './Job.css';

function Job(props: {
    job: string,
    updateJob: Function
}) {

    return (
        <div className={'Job'}>
            <Settable
                label={'Job'}
                value={props.job}
                setValue={props.updateJob}/>
        </div>
    );
}

export default Job;