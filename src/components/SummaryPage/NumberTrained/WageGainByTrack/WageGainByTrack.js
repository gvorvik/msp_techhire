import React from 'react';
import Grid from '@material-ui/core/Grid';

const WageGainData = (props) => {
    return <div>
        <h1 className="summaryText">Wage Gain Data</h1>
            <Grid container spacing={32}>
                <Grid item xs={12} md={4}>
                    <div className="wageGrowthDivGreen">
                        <h3>Software Development Track</h3>
                        <p>Average Wage Pre Program: ${props.wageGainData.softwareDevelopment.preWage}</p>
                        <p>Average Wage Post Program: ${props.wageGainData.softwareDevelopment.postWage}</p>
                        <p>Average Wage Growth: ${props.wageGainData.softwareDevelopment.wageGrowth}</p>
                        <p>Average Wage Growth Percentage: {props.wageGainData.softwareDevelopment.wageGrowthPercentage}%</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="wageGrowthDivBlue">
                        <h3>Computer User Support Track</h3>
                        <p>Average Wage Pre Program: ${props.wageGainData.computerUserSupport.preWage}</p>
                        <p>Average Wage Post Program: ${props.wageGainData.computerUserSupport.postWage}</p>
                        <p>Average Wage Growth: ${props.wageGainData.computerUserSupport.wageGrowth}</p>
                        <p>Average Wage Growth Percentage: {props.wageGainData.computerUserSupport.wageGrowthPercentage}%</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="wageGrowthDivGreen">
                        <h3>Project Management Track</h3>
                        <p>Average Wage Pre Program: ${props.wageGainData.projectManagement.preWage}</p>
                        <p>Average Wage Post Program: ${props.wageGainData.projectManagement.postWage}</p>
                        <p>Average Wage Growth: ${props.wageGainData.projectManagement.wageGrowth}</p>
                        <p>Average Wage Growth Percentage: {props.wageGainData.projectManagement.wageGrowthPercentage}%</p>
                    </div>
                </Grid>
            </Grid>
        </div>

}

export default WageGainData;