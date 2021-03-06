import React from 'react';
import GenderGraph from './ByGenderGraph/ByGenderGraph';
import EducationGraph from './ByEducationLevelGraph/ByEducationLevelGraph';
import POCGraph from './POCGraph/POCGraph';
import EmployedByGenderGraph from './EmployedByGender/EmployedByGender';
import WageGainData from './WageGainByTrack/WageGainByTrack';

const NumberTrained = (props) => {
    return <div>
        <div className="factsWrapperStudentGraphs">
            <GenderGraph
                trainingData={props.trainingData}
            />
            <EducationGraph
                trainingData={props.trainingData}
            />
            <POCGraph
                trainingData={props.trainingData}
            />
            <EmployedByGenderGraph
                trainingData={props.trainingData}
            />
            </div>
        <WageGainData
            wageGainData={props.wageGainData}
        />
    </div>
}

export default NumberTrained;