const moment = require('moment');

const start = moment('2025-01-01 11:00:00');
const end = moment('2025-05-14 11:00:00');

const daysBetween = end.diff(start, 'days');

console.log('開始日から何日経った？ → ' + daysBetween + '日');

