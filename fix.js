const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // First, remove old script if exists
  content = content.replace(/<script>if\(window\.renderFooter\) renderFooter\(\);<\/script>\\n/, '');
  // Insert correct script that waits for defer
  content = content.replace(/<\/body>/, '<script>document.addEventListener(\'DOMContentLoaded\', function() { if(window.renderFooter) window.renderFooter(); });</script>\\n</body>');
  fs.writeFileSync(f, content);
  console.log('Fixed ' + f);
});