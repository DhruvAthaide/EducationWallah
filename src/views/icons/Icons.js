import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const Icons = () => {
  return (
    <PageContainer title="Video Call" description="Video Calling">

      <DashboardCard title="Video Calls">
      <a href='https://talk.brave.com/ElQFR6Umnp9Bmlp2lspomyHfj8HlVzvGu04gROV4Ux4' target='_blank' rel='noreferrer'>Click to Video Call!</a>
      </DashboardCard>
    </PageContainer>
  );
};

export default Icons;
