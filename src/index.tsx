import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/styles.scss';
import { App } from './components/App';

const ROOT = document.querySelector('.container');

ReactDOM.render(<App name="LT" />, ROOT);