import {
  IconSearch, IconBook, IconCopy, IconLayoutDashboard, IconVideo
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'ACTIVITIES',
  },
  {
    id: uniqueId(),
    title: 'Student Submissions',
    icon: IconBook,
    href: 'https://drive.google.com/drive/folders/1tLotKtt6kGV8nQnSHTsOutffTk6AGuxy?usp=sharing',
  },
  
  {
    navlabel: true,
    subheader: 'Connect',
  },
  {
    id: uniqueId(),
    title: 'Video Call',
    icon: IconVideo,
    href: 'https://talk.brave.com/ElQFR6Umnp9Bmlp2lspomyHfj8HlVzvGu04gROV4Ux4',
  },
  {
    id: uniqueId(),
    title: 'Chat Room',
    icon: IconCopy,
    href: '/sample-page',
  },
];

export default Menuitems;
