import React from 'react';
import img from '../assets/images/images.jpg';

const WorkFlow = () => {
    return (
        <div className='workflow'>
            <h2 className='fw-bold text-center'>Workflow</h2><br /><br /><br />
            <div className='px-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='defining-goal-span shadow'>
                            <h4>1. Defining Goal</h4>
                            <p>Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.</p>
                        </div>
                        <div className='workflow-text'><h4>2. Product Design</h4></div>
                        <div className='workflow-text'><h4>3. Development</h4></div>
                        <div className='workflow-text'><h4>4. Testing</h4></div>
                        <div className='workflow-text'><h4>5. Product Release</h4></div>
                        <div className='workflow-text'><h4>6. Maintenance Support</h4></div>
                    </div>
                    <div className='col-md-6'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkFlow;