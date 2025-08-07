@echo off
echo Building UI library...
npx nx build ui

echo Building app-shell...
npx nx build app-shell --configuration=production

echo Building app-one...
npx nx build app-one --configuration=production

echo Building app-two...
npx nx build app-two --configuration=production

echo All builds completed!