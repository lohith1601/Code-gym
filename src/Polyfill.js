// src/polyfills.js
import { Buffer } from 'buffer';
window.Buffer = Buffer;
window.global = window;
import process from 'process';
window.process = process;
