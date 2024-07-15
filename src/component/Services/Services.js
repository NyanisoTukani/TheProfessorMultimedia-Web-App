import React, { Component } from 'react';
import data from '../../data/index.json';
import './Services.css';

export class Services extends Component {
    render() {
        return (
            <>
                <h1 className='service-heading'>Services Built for any Business</h1>
                <div className='services-section'>
                    {data?.services?.map((item, index) => (
                        <div key={index} className='services-details'>
                            <div className='services-text'>
                                <div className='services-detail-heading'>
                                    <h1>{item.heading}</h1>
                                </div>
                                <div className='services-detail-sentence'>
                                    <p>{item.sentence}</p>
                                </div>
                            </div>
                            <div className='services-image'>
                                <img src={item.image} alt='service-image' />
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Services;
