#!/usr/bin/env node
import { program } from 'commander';
import getFilesDifference from '../__fixtures__/getDifferense.js';

program
  .version('0.0.1')
  .argument('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .action(getFilesDifference);

program.parse();
