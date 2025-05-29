#!/usr/bin/env nodes

/**
 * Task Master Development Script
 * This script provides a command-line interface for managing development tasks.
 */

try {
  // Attempt to load the task-master module
  const taskMaster = require('claude-task-master');
  
  // Run the CLI with the provided arguments
  taskMaster.cli(process.argv.slice(2));
} catch (error) {
  // Handle any errors that occur during execution
  console.error('Error running task-master:', error.message);
  
  // If the module is not found, provide installation instructions
  if (error.code === 'MODULE_NOT_FOUND') {
    console.error('\nPlease install the required dependencies:');
    console.error('npm install claude-task-master');
  }
  
  process.exit(1);
}
