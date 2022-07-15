import React, { Component } from 'react'

import MetricCard from 'react-metric-card'
import 'react-metric-card/dist/index.css'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
class Card2 extends Component {
  render() {
    return (
        <MetricCard
        title='Treated Patients'
        fetching={false}
        cardClick={true}
        value={'34'}
        trend={{
          slope:1,
          description: 'This Week',
        
        }}
      icon={<AccessibilityNewIcon />} 
      iconColor='black'
      iconBgColor='lightBlue'
    />
    );
  }
}
export default Card2;