import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/styles.sass';
import { Header } from './app/Header';
import { SideNav } from './app/SideNav';

const ROOT = document.querySelector('.app-body');

ReactDOM.render([<Header />, <SideNav />], ROOT);

module.hot.accept();
