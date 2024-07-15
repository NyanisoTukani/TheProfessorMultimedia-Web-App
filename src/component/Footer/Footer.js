import React,{Component} from 'react';
import './Footer.css'
import data from '../../data/index.json'
export class Footer extends Component{

    render(){

        return(

            <>
                <div className='footer-container'>
                <div class="footer">
                    <div className='socialcontainer'>
                        {data?.social.map((item,index) => (
                            <div key={index} className='socialhandles'>
                            <a href ={item['social-link']} >
                                <img src={item['social-icon']} alt="Social" width="30px"/>
                            </a>
                        </div>
                        ))}
                    </div>

                    <p>&copy; 2024 TheProfessor Multimedia. All rights reserved.</p>
                </div>
                </div>
            </>
        )
    }
}
export default Footer