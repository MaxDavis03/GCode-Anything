# GCode-Anything
Open source gcode parsing firmware used to control any mechatronic machine based on user-defined gcode definitions. GCode Anything provides templates for common machine formats to run from standard GCode files.
The source code is written to be run on a MilkV Duo board and utilises its RTOS core to execute gcode functions, and its 1GHz RISCV core to perform motion planning and hosting of the web control interface and file uploader. Follow the instructions on the MilkV Duo github to setup prerequisite Linux OS on the board, which the solution is built ontop of.
Code is fairly modular and setup to be easily modified and ported for different distributions.
