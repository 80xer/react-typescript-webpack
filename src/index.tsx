import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/styles.scss';
import { Header } from './app/Header';
import { SideNav } from './app/SideNav';

const ROOT = document.querySelector('.app-body');

ReactDOM.render([<Header />, <SideNav />], ROOT);
