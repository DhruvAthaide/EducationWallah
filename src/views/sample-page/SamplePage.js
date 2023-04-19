import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="Chat Room" description="This is the Chat Room">

      <DashboardCard title="Chat Room">
        <Typography style={{marginLeft:'50px'}}>This is the Chat Room!</Typography>
        <iframe title='deadsimplechat' src='https://deadsimplechat.com/Pv0g68xdf' style={{width:"1000px",height:"450px",marginLeft:'50px'}}></iframe>
        <br></br>
        <a href='https://deadsimplechat.com/dashboard' style={{marginTop:'30px',marginLeft:'50px'}}>Chat Room Admin Access </a>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
