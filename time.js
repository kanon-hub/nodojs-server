// momentというライブラリを読み込む
const moment = require('moment');

// 今の日時を取得して、見やすい形で表示する
const now = moment().format('YYYY年MM月DD日 HH時mm分ss秒');

console.log('今の時間は：' + now);

// 1週間後の日付を表示する


const oneWeekLater = moment().add(7, 'days').format('YYYY年MM月DD日');
console.log('1週間後は：' + oneWeekLater);


// 3日前の日付を表示する


const threeDaysAgo = moment().subtract(3, 'days').format('YYYY/MM/DD');
console.log('3日前は：' + threeDaysAgo);

const birthday = moment('2003-03-24'); // 誕生日を設定（例：2008年5月14日）
const age = moment().diff(birthday, 'years');

console.log('あなたの年齢は：' + age + '歳です');

const start = moment('2025-01-01');
const end = moment('2025-05-14');

const daysBetween = end.diff(start, 'days');

console.log('開始日から何日経った？ → ' + daysBetween + '日');



const dayOfWeek = moment().format('dddd'); // 英語で表示されます（例：Wednesday）

console.log('今日は ' + dayOfWeek + ' です.');

