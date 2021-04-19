import React from 'react';
import './RecentWork.css'

const recentWork = [
    {
        title:'Happy Client',
        count:100
    },
    {
        title:'Running Project',
        count:75
    },
    {
        title:'Total project',
        count:257
    },
    {
        title:'Total project',
        count:257
    }
]

const RecentWork = () => {
    return (
        <div className="recentWork">
            <div className="container">
                <div className="row py-5">
                   {
                       recentWork.map(work =>  <div className="col-md-3">
                           <h4 className="mb-4">{work.title}</h4>
                           <h4>{work.count}+</h4>
                       </div>)
                   }
                </div>
            </div>
        </div>
    );
};

export default RecentWork;