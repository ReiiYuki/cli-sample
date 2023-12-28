import { program } from 'commander'
import { $ as execa } from 'execa'
// import inquirer from 'inquirer';

program
    .name('create-something')
    .version('0.0.0')
    .description('CLI to create something')

program
    .command('create')
    // .argument('<string>', 'thing to create')
    // .addOption(new Option('-t, --type <type>', 'type of thing').choices(['a', 'b', 'c']))
    .action(async () => {
        // inquirer.prompt([
        //     {
        //         type: 'input',
        //         name: 'projectName',
        //         message: 'Input project name',
        //     },
        //     {
        //         type: 'checkbox',
        //         name: 'technologies',
        //         message: 'Input technologies to use',
        //         choices: [
        //             'React',
        //             'Typescript',
        //             'Vue',
        //             'Vite',
        //         ]
        //     },
        //     {
        //         type: 'list',
        //         name: 'eslint',
        //         message: 'Select eslint convention',
        //         choices: [
        //             'standard-js',
        //             'airbnb'
        //         ]
        //     }
        // ]).then(value => {
        //     console.log(value)
        // })

        const output = await execa`pnpm i react@17`

        console.log(output.stdout)
    })

 program.parse(process.argv)
