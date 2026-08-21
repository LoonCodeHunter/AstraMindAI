#!/usr/bin/env node
import { Command } from 'commander';
import { runDev } from './src/commands/dev';
import { runDeploy } from './src/commands/deploy';
import { runMigrate } from './src/commands/migrate';

const program = new Command();

program.name('astramind').description('AstraMindAI CLI').version('1.0.0');

program.command('dev').description('Start local dev stack').action(runDev);
program.command('deploy').description('Deploy to environment').action(runDeploy);
program.command('migrate').description('Run DB migrations').action(runMigrate);

program.parse(process.argv);
