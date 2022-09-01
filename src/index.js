#!/usr/bin/env node

import { Command } from "commander";
import helloCommand from "./commands/hello.js";
import moduleCommand from "./commands/module.js";
import initCommand from './commands/init.js';
import customModule from './commands/cutomModule.js';
const cli = new Command();

cli.name("nodecli").description("Express code generator").version("0.0.1");

cli.addCommand(helloCommand);
cli.addCommand(initCommand);
cli.addCommand(moduleCommand);
cli.addCommand(customModule);
cli.parse();
