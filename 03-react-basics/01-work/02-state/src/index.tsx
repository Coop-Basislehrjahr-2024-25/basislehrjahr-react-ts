import React from 'react';
import {createRoot} from 'react-dom/client';
import {Counter} from "./Counter";


const root = createRoot(document.getElementById('app')!);
root.render(<Counter></Counter>);
