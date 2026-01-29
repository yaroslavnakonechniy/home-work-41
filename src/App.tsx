import './App.css'
import { Suspense } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMassage } from './components/messages/ErrorMassege';
import { Loading } from './components/messages/Loading';
import { Message } from './components/MessageComoponent/Message';

function App() {

  return (
    <>
      <ErrorBoundary fallback={<ErrorMassage/>} >
        <Suspense fallback={<Loading/>} >
          <Message shouldFail={true}/>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<ErrorMassage/>} >
        <Suspense fallback={<Loading/>} >
          <Message shouldFail={false}/>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
