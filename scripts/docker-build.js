const { execSync } = require('child_process');

function run(command) {
  console.log(`\n▶ ${command}`);
  execSync(command, { stdio: 'inherit' });
}

console.log('Building Docker Images');
console.log(process.cwd())

run('docker build -f apps/app-shell/Dockerfile -t app-workspace/app-shell:latest .');
run('docker build -f apps/app-one/Dockerfile -t app-workspace/app-one:latest .');
run('docker build -f apps/app-two/Dockerfile -t app-workspace/app-two:latest .');

console.log('\n✅ All Docker images built successfully!');
