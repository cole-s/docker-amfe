const { execSync } = require('child_process');

function run(command) {
  console.log(`\n▶ ${command}`);
  execSync(command, { stdio: 'inherit' });
}

console.log('Building Docker Images');

run('docker build --no-cache --target app-shell -t app-workspace/app-shell:v1.0.0 .');
run('docker build --no-cache --target app-one -t app-workspace/app-one:v1.0.0 .');
run('docker build --no-cache --target app-two -t app-workspace/app-two:v1.0.0 .');

console.log('\n✅ All Docker images built successfully!');
