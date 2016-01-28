'use strict';

import path from 'path';
import greeting from './greeting';

console.log(path.join(process.cwd(), 'hello'));
console.log(greeting('World'));
