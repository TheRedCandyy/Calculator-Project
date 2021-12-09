import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operators = ['*', '/', '+', '-', '.'];

    const updateCalc = value => {
        if (operators.includes(value) && calc === '' || operators.includes(value) && operators.includes(calc.slice(-1))) {
            return;
        }
        setCalc(calc + value);
    }

    const backSpace = value => {
        setCalc(calc.slice(0,-1));
    }

    const fullclear = value => {
        setCalc('');
    }

    const calculate = value => {
        setCalc(eval(calc).toString());
    }

    return (
        <div className="container-fluid">
            <header className="App-header">
                <div className="text-start col-4 pt-1">
                    <img src={logo} alt={"Logo"} className={"App-logo"}/>
                </div>
            </header>

            <main className="py-5 w-25 container calculator">
                <div className="row">
                    <div className="col-12 text-end">
                        <h1>{result ? result : calc || 0}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('/')}><i class="fas fa-divide"></i></button>
                    </div>
                    <div className="col-3 text-center">
                        <button disabled>CE</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => fullclear()}>C</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => backSpace()}><i className="fas fa-backspace"></i></button>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('7')}>7</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('8')}>8</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('9')}>9</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('*')}><i class="fas fa-times"></i></button>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('4')}>4</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('5')}>5</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('6')}>6</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('-')}><i class="fas fa-minus"></i></button>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('1')}>1</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('2')}>2</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('3')}>3</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('+')}><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('0')}>0</button>
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={() => updateCalc('.')}>.</button>
                    </div>
                    <div className="col-6 text-center">
                        <button onClick={() => calculate()}><i class="fas fa-equals"></i></button>
                    </div>
                </div>
                
            </main>

            <footer className="footer mt-auto">
                <div className="text-center pt-3">
                    <p>
                        Classic calculator made with <i class="fab fa-react"></i> and stylized with <i class="fab fa-bootstrap"></i>.
                    </p>
                    <p>
                        By <a className={"App-link"} href="https://theredcandyy.github.io/portfolio/" target={"_blank"} rel={"noreferrer"} >Alex</a>.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
