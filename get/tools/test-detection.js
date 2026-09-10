/* Prueft die Erkennungslogik aus index.html gegen echte User-Agent-Strings.
   Aufruf: node test-detection.js   (kein Browser noetig) */
const fs = require('fs');
const code = fs.readFileSync(__dirname + '/../index.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];

function run(ua, uaData, touch, search) {
  const el = () => ({ href: '', hidden: true, textContent: '' });
  const els = { 'h-de': el(), 'h-en': el(), 'redirect-line': el(),
                'play-solo': el(), 'play-row': el(), 'x-android': el(), 'tf-step': el() };
  const attrs = {};
  const sandbox = {
    document: { documentElement: { lang: 'de', setAttribute: (k, v) => attrs[k] = v },
                getElementById: id => els[id] || null },
    navigator: { userAgent: ua, userAgentData: uaData, maxTouchPoints: touch, language: 'de-DE' },
    location: { search, replace: u => attrs.redirected = u },
    setTimeout: (fn) => { fn(); },
    URLSearchParams,
  };
  new Function(...Object.keys(sandbox), code)(...Object.values(sandbox));
  return { platform: attrs['data-platform'], inapp: !!attrs['data-inapp'], redirected: attrs.redirected,
           play: els['play-row'].href, h: els['h-de'].textContent, redirectLine: !els['redirect-line'].hidden };
}

const IPHONE  = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 Version/17.5 Mobile/15E148 Safari/604.1';
const IPAD    = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/17.5 Safari/605.1.15';
const ANDROID = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/126.0.0.0 Mobile Safari/537.36';
const MAC     = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126.0.0.0 Safari/537.36';

const cases = [
  ['iPhone Safari',          run(IPHONE, undefined, 5, ''),             r => r.platform === 'ios' && !r.redirected],
  ['iPad Safari (kein UAD)', run(IPAD, undefined, 5, ''),               r => r.platform === 'ios'],
  ['Mac Chrome (Maus)',      run(MAC, {platform:'macOS'}, 0, ''),       r => r.platform === 'unknown'],
  ['Android Chrome',         run(ANDROID, {platform:'Android'}, 5, ''), r => r.platform === 'android' && r.redirected && r.redirectLine],
  ['Instagram auf iOS',      run(IPHONE + ' Instagram 302.0.0.23.113', undefined, 5, ''), r => r.platform === 'ios' && r.inapp],
  ['Windows Desktop',        run('Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126', {platform:'Windows'}, 0, ''), r => r.platform === 'unknown' && !r.redirected],
  ['?c=mensa + utm',         run(IPHONE, undefined, 5, '?c=mensa&utm_source=flyer'),
      r => r.h.startsWith('Gescannt in der Mensa') && r.play.includes('referrer=utm_source%3Dflyer')],
  ['?c=unbekannt',           run(IPHONE, undefined, 5, '?c=quatsch'),   r => r.h === ''],
];

let failed = 0;
for (const [name, res, ok] of cases) {
  const good = ok(res); if (!good) failed++;
  console.log(`${good ? 'ok  ' : 'FEHL'}  ${name.padEnd(24)} platform=${res.platform} inapp=${res.inapp}${res.redirected ? ' -> redirect' : ''}`);
}
console.log(failed ? `\n${failed} Test(s) fehlgeschlagen` : '\nalle Erkennungstests bestanden');
process.exit(failed ? 1 : 0);
