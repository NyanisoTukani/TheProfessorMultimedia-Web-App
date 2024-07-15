import React, {Component} from "react";
import './Projects.css'
import data from '../../data/index.json';

export class Projects extends Component{

    render(){


        return(
            <>
                <div className="project-section">
                    <h1 className='project-heading-text'>Our Recent Projects</h1>
                    
                    <div className="project-container">
                        {data?.projects?.map((item,index) => (
                            <div  key={index} className="projects-card">
                                <div className="project-image">
                                    <img src={item["project-image"]} alt="Project Image" width="100%"/>
                                </div>
                                <div className="project-image-heading">
                                    <h1 className="image-heading">{item["project-heading"]}</h1>
                                    <div className="link">
                                        <a href={item.link}>View Demo</a>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </>
        )
    }
}
export default Projects