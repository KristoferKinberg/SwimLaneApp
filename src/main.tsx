import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import StartView from "./Views/Start/StartView";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <StartView />
    </RecoilRoot>
  </React.StrictMode>,
)
