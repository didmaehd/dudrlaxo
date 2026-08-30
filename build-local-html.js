const fs = require('fs');

const html = fs.readFileSync('main.html', 'utf8');
const questions = fs.readFileSync('questions.js', 'utf8').trim();
const marker = '<script src="questions.js"></script>';

if (!html.includes(marker)) {
  throw new Error('main.html에서 questions.js 로드 태그를 찾지 못했습니다.');
}

fs.writeFileSync(
  'main_local.html',
  html.replace(marker, `<script>\n${questions}\n</script>`),
  'utf8'
);
