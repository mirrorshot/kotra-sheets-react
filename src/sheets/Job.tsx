import {useState} from "react";
import Settable from "./Settable";

function Job() {
    const [job, updateJob] = useState('');

    return (
        <div>
            <Settable
                label={'Job'}
                setValue={updateJob}/>
            <p>Job</p>
        </div>
    );
}

export default Job;