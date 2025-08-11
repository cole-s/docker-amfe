const { execSync } = require('child_process');

function run(command) {
  console.log(`\n▶ ${command}`);
  execSync(command, { stdio: 'inherit' });
}

console.log('Skipping UI library build (consumed directly by apps)...');

run('npx nx build app-shell --configuration=production');
run('npx nx build app-one --configuration=production');
run('npx nx build app-two --configuration=production');

console.log('\n✅ All builds completed!');
