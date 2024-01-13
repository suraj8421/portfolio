import React from 'react'
import {MdSchool}from "react-icons/md"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Education.css"

const Education = () => {
  return (
    <>
      <div className='container education' id='education'>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background:"white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2022 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
    >
    <h3 className="vertical-timeline-element-title">Full Stack devloper trainee</h3>
    <h4 className="vertical-timeline-element-subtitle">FunctionUp</h4>
   
  </VerticalTimelineElement>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background:"white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2019 - 2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
    >
    <h3 className="vertical-timeline-element-title">B.Tech<h5>In Civil</h5></h3>
    <h4 className="vertical-timeline-element-subtitle">AMGOI Kolhapur</h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background:"white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2016 - 2019"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
    >
    <h3 className="vertical-timeline-element-title">Diploma <h5>In Civil</h5></h3>
    <h4 className="vertical-timeline-element-subtitle">RIT Islampur</h4>
   
  </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
    </>
  )
}

export default Education
