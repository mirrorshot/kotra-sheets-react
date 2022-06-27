import {useState} from "react";

function Job() {
    const [job, updateJob] = useState('');

    return (
        <div>
            <input type='text'
                   value={job}
                   onChange={(e) => updateJob(e.target.value)}
            />
            <p>Job</p>
        </div>
    );
}

export default Job;