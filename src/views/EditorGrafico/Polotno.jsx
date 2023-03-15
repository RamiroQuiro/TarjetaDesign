import { createStore } from 'polotno/model/store';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';
import { PageControls } from './Page-control';


const store = createStore({
    key: 'YMVjhLdfB3NRHacUXFjq', // you can create it here: https://polotno.com/cabinet/
    // you can hide back-link on a paid license
    // but it will be good if you can keep it for Polotno project support
    showCredit: true,
});
const page = store.addPage();

page.addElement({
  x: 50,
  y: 50,
  type: 'text',
  fill: 'black',
  text: 'hola men',
});

export default function Polotno() {
    return (
        <div className='w-full h-full flex items-center justify-between'>
        <PolotnoContainer style={{ width: '100%', height: '100vh' }} >
<div className='bg-slate-500'>
          <SidePanelWrap >
            <SidePanel  store={store} />
          </SidePanelWrap>

</div>
          <WorkspaceWrap >
            <div className='h-full w-full flex m-auto flex-1  relative'>
            <Toolbar store={store} downloadButtonEnabled />
            <Workspace store={store} backgroundColor="#ffaa11"  components={{PageControls}}/>
            <ZoomButtons store={store} />
            </div>
          </WorkspaceWrap>
        </PolotnoContainer>
        </div>
      );
}
