import Settable from "./Settable";

function Job(props: {
    job: string,
    updateJob: Function
}) {

    return (
        <div>
            <Settable
                label={'Job'}
                value={props.job}
                setValue={props.updateJob}/>
        </div>
    );
}

export default Job;