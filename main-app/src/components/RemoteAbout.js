// main-app/components/RemoteAbout.js
import dynamic from 'next/dynamic';

const RemoteAbout = dynamic(() => import('remote/About'), {
  ssr: false,
  loading: () => <p>Loading About component...</p>,
});

export default RemoteAbout;