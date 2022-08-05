import Settable from "./Settable";
import './Job.css';

export type JobData = {
    job: string,
    updateJob: (j: string) => void
};

export default function Job(props: JobData) {

    return (
        <div className={'Job'}>
            <Settable
                label={'Job'}
                value={props.job}
                setValue={props.updateJob}/>
        </div>
    );
}
