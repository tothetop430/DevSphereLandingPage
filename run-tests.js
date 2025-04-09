import { spawnSync } from 'child_process';
import path from 'path';

// Helper function to run a command and print its output
function runCommand(command, args, options = {}) {
    console.log(`Running: ${command} ${args.join(' ')}\n`);

    const result = spawnSync(command, args, {
        stdio: 'inherit',
        shell: true,
        ...options
    });

    return result.status;
}

// Function to handle both ESLint and Vitest execution
async function runTests() {
    console.log('Running ESLint checks...');

    // Run ESLint
    const eslintStatus = runCommand('pnpm', [
        'exec', 'eslint',
        '--ext', '.js,.jsx,.ts,.tsx',
        './client/src', './server', './shared'
    ]);

    if (eslintStatus !== 0) {
        console.log('\nESLint found issues, but continuing with tests...\n');
    }

    console.log('\nRunning tests with Vitest...');

    // Run Vitest
    const vitestStatus = runCommand('pnpm', ['exec', 'vitest', 'run']);

    // Return overall status
    process.exit(vitestStatus);
}

// Execute the test runner
runTests().catch(error => {
    console.error('Error running tests:', error);
    process.exit(1);
});