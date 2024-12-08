import React from 'react';
import {createRoot} from 'react-dom/client';
import Greeter from "./Greeter";

const root = createRoot(document.getElementById('app')!);
root.render(<>
    <h1>Das hier ist React Code!</h1>
    Und dass hier ist Code aus einer Komponente: <Greeter></Greeter>
</>);
