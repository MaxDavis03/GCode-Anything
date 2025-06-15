# GCode-Anything
Open source gcode parsing functions for adapted use inside any machine control project. Provides collated research into standard GCode specifications and alternative GCode flavours, and example implementations for several use cases.


The example source code is written to be run on a MilkV Duo board and utilises its RTOS core to execute gcode functions, and its 1GHz RISCV core to perform motion planning and hosting of the web control interface and file uploader. Follow the instructions on the MilkV Duo github to setup prerequisite Linux OS on the board, which the solution is built ontop of.

Code is modular and setup to be easily modified and ported for different distributions.
