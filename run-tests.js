import { exec } from 'child_process';

console.log('Running tests with Vitest...');
exec('npx vitest run', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(stdout);
});