import React from 'react';
import {createRoot} from 'react-dom/client';
import {Counter} from "./Counter";
import Digit from "./Digit";


const root = createRoot(document.getElementById('app')!);
root.render(<>
    <Digit></Digit>
    <Counter></Counter>
</>);
