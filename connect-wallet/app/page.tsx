import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <main       
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 12,
    }}
    >
     <ConnectButton/>
    </main>
  );
}
