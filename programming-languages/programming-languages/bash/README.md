# Bash

{% file src="../../../.gitbook/assets/tlcl-19.01.pdf" %}
linux-command-line
{% endfile %}

## Manual Pages

#### Bash Builtins <a href="#builtins" id="builtins"></a>

| List of bash shell builtins                                               |                                                                   |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Command**                                                               | **Description**                                                   |
| [`(( ... ))`](http://linuxcommand.org/lc3\_man\_pages/dbl\_parensh.html)  | Evaluate arithmetic expression                                    |
| [`.`](http://linuxcommand.org/lc3\_man\_pages/doth.html)                  | Execute commands from a file in the current shell                 |
| [`:`](http://linuxcommand.org/lc3\_man\_pages/colonh.html)                | Null command                                                      |
| [`[`](http://linuxcommand.org/lc3\_man\_pages/bracketh.html)              | Evaluate conditional expression                                   |
| [`[[ ... ]]`](http://linuxcommand.org/lc3\_man\_pages/dbl\_bracketh.html) | Execute conditional command                                       |
| [`alias`](http://linuxcommand.org/lc3\_man\_pages/aliash.html)            | Define or display aliases                                         |
| [`bg`](http://linuxcommand.org/lc3\_man\_pages/bgh.html)                  | Move jobs to the background                                       |
| [`bind`](http://linuxcommand.org/lc3\_man\_pages/bindh.html)              | Set Readline key bindings and variables                           |
| [`break`](http://linuxcommand.org/lc3\_man\_pages/breakh.html)            | Exit for, while, or until loops                                   |
| [`builtin`](http://linuxcommand.org/lc3\_man\_pages/builtinh.html)        | Execute shell builtins                                            |
| [`caller`](http://linuxcommand.org/lc3\_man\_pages/callerh.html)          | Return the context of the current subroutine call                 |
| [`case`](http://linuxcommand.org/lc3\_man\_pages/caseh.html)              | Execute commands based on pattern matching                        |
| [`cd`](http://linuxcommand.org/lc3\_man\_pages/cdh.html)                  | Change the shell working directory                                |
| [`command`](http://linuxcommand.org/lc3\_man\_pages/commandh.html)        | Execute a simple command or display information about commands    |
| [`compgen`](http://linuxcommand.org/lc3\_man\_pages/compgenh.html)        | Display possible completions depending on the options             |
| [`complete`](http://linuxcommand.org/lc3\_man\_pages/completeh.html)      | Specify how arguments are to be completed by Readline             |
| [`compopt`](http://linuxcommand.org/lc3\_man\_pages/compopth.html)        | Modify or display completion options                              |
| [`continue`](http://linuxcommand.org/lc3\_man\_pages/continueh.html)      | Resume for, while, or until loops                                 |
| [`coproc`](http://linuxcommand.org/lc3\_man\_pages/coproch.html)          | Create a coprocess named NAME                                     |
| [`declare`](http://linuxcommand.org/lc3\_man\_pages/declareh.html)        | Set variable values and attributes                                |
| [`dirs`](http://linuxcommand.org/lc3\_man\_pages/dirsh.html)              | Display directory stack                                           |
| [`disown`](http://linuxcommand.org/lc3\_man\_pages/disownh.html)          | Remove jobs from current shell                                    |
| [`echo`](http://linuxcommand.org/lc3\_man\_pages/echoh.html)              | Write arguments to the standard output                            |
| [`enable`](http://linuxcommand.org/lc3\_man\_pages/enableh.html)          | Enable and disable shell builtins                                 |
| [`eval`](http://linuxcommand.org/lc3\_man\_pages/evalh.html)              | Execute arguments as a shell command                              |
| [`exec`](http://linuxcommand.org/lc3\_man\_pages/exech.html)              | Replace the shell with the given command                          |
| [`exit`](http://linuxcommand.org/lc3\_man\_pages/exith.html)              | Exit the shell                                                    |
| [`export`](http://linuxcommand.org/lc3\_man\_pages/exporth.html)          | Set export attribute for shell variables                          |
| [`false`](http://linuxcommand.org/lc3\_man\_pages/falseh.html)            | Return an unsuccessful result                                     |
| [`fc`](http://linuxcommand.org/lc3\_man\_pages/fch.html)                  | Display or execute commands from the history list                 |
| [`fg`](http://linuxcommand.org/lc3\_man\_pages/fgh.html)                  | Move job to the foreground                                        |
| [`for`](http://linuxcommand.org/lc3\_man\_pages/forh.html)                | Execute commands for each member in a list                        |
| [`function`](http://linuxcommand.org/lc3\_man\_pages/functionh.html)      | Define shell function                                             |
| [`getopts`](http://linuxcommand.org/lc3\_man\_pages/getoptsh.html)        | Parse option arguments                                            |
| [`hash`](http://linuxcommand.org/lc3\_man\_pages/hashh.html)              | Remember or display program locations                             |
| [`help`](http://linuxcommand.org/lc3\_man\_pages/helph.html)              | Display information about builtin commands                        |
| [`history`](http://linuxcommand.org/lc3\_man\_pages/historyh.html)        | Display or manipulate the history list                            |
| [`if`](http://linuxcommand.org/lc3\_man\_pages/ifh.html)                  | Execute commands based on conditional                             |
| [`jobs`](http://linuxcommand.org/lc3\_man\_pages/jobsh.html)              | Display status of jobs                                            |
| [`kill`](http://linuxcommand.org/lc3\_man\_pages/killh.html)              | Send a signal to a job                                            |
| [`let`](http://linuxcommand.org/lc3\_man\_pages/leth.html)                | Evaluate arithmetic expressions                                   |
| [`local`](http://linuxcommand.org/lc3\_man\_pages/localh.html)            | Define local variables                                            |
| [`logout`](http://linuxcommand.org/lc3\_man\_pages/logouth.html)          | Exit a login shell                                                |
| [`mapfile`](http://linuxcommand.org/lc3\_man\_pages/mapfileh.html)        | Read lines from the standard input into an indexed array variable |
| [`popd`](http://linuxcommand.org/lc3\_man\_pages/popdh.html)              | Remove directories from stack                                     |
| [`printf`](http://linuxcommand.org/lc3\_man\_pages/printfh.html)          | Formats and prints ARGUMENTS under control of the FORMAT          |
| [`pushd`](http://linuxcommand.org/lc3\_man\_pages/pushdh.html)            | Add directories to stack                                          |
| [`pwd`](http://linuxcommand.org/lc3\_man\_pages/pwdh.html)                | Print the name of the current working directory                   |
| [`read`](http://linuxcommand.org/lc3\_man\_pages/readh.html)              | Read a line from the standard input and split it into fields      |
| [`readarray`](http://linuxcommand.org/lc3\_man\_pages/readarrayh.html)    | Read lines from a file into an array variable                     |
| [`readonly`](http://linuxcommand.org/lc3\_man\_pages/readonlyh.html)      | Mark shell variables as unchangeable                              |
| [`return`](http://linuxcommand.org/lc3\_man\_pages/returnh.html)          | Return from a shell function                                      |
| [`select`](http://linuxcommand.org/lc3\_man\_pages/selecth.html)          | Select words from a list and execute commands                     |
| [`set`](http://linuxcommand.org/lc3\_man\_pages/seth.html)                | Set or unset values of shell options and positional parameters    |
| [`shift`](http://linuxcommand.org/lc3\_man\_pages/shifth.html)            | Shift positional parameters                                       |
| [`shopt`](http://linuxcommand.org/lc3\_man\_pages/shopth.html)            | Set and unset shell options                                       |
| [`source`](http://linuxcommand.org/lc3\_man\_pages/sourceh.html)          | Execute commands from a file in the current shell                 |
| [`suspend`](http://linuxcommand.org/lc3\_man\_pages/suspendh.html)        | Suspend shell execution                                           |
| [`test`](http://linuxcommand.org/lc3\_man\_pages/testh.html)              | Evaluate conditional expression                                   |
| [`time`](http://linuxcommand.org/lc3\_man\_pages/timeh.html)              | Report time consumed by pipeline's execution                      |
| [`times`](http://linuxcommand.org/lc3\_man\_pages/timesh.html)            | Display process times                                             |
| [`trap`](http://linuxcommand.org/lc3\_man\_pages/traph.html)              | Trap signals and other events                                     |
| [`true`](http://linuxcommand.org/lc3\_man\_pages/trueh.html)              | Return a successful result                                        |
| [`type`](http://linuxcommand.org/lc3\_man\_pages/typeh.html)              | Display information about command type                            |
| [`typeset`](http://linuxcommand.org/lc3\_man\_pages/typeseth.html)        | Set variable values and attributes                                |
| [`ulimit`](http://linuxcommand.org/lc3\_man\_pages/ulimith.html)          | Modify shell resource limits                                      |
| [`umask`](http://linuxcommand.org/lc3\_man\_pages/umaskh.html)            | Display or set file mode mask                                     |
| [`unalias`](http://linuxcommand.org/lc3\_man\_pages/unaliash.html)        | Remove each NAME from the list of defined aliases                 |
| [`unset`](http://linuxcommand.org/lc3\_man\_pages/unseth.html)            | Unset values and attributes of shell variables and functions      |
| [`until`](http://linuxcommand.org/lc3\_man\_pages/untilh.html)            | Execute commands as long as a test does not succeed               |
| [`variables`](http://linuxcommand.org/lc3\_man\_pages/variablesh.html)    | Common shell variable names and usage                             |
| [`wait`](http://linuxcommand.org/lc3\_man\_pages/waith.html)              | Wait for job completion and return exit status                    |
| [`while`](http://linuxcommand.org/lc3\_man\_pages/whileh.html)            | Execute commands as long as a test succeeds                       |
| [`{ ... }`](http://linuxcommand.org/lc3\_man\_pages/braceh.html)          | Group commands as a unit                                          |

#### Coreutils - File Utilities <a href="#file" id="file"></a>

| List of coreutils file utilities                                       |                                                                                             |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Command**                                                            | **Description**                                                                             |
| [`chcon`](http://linuxcommand.org/lc3\_man\_pages/chcon1.html)         | Changes file security context (SELinux)                                                     |
| [`chgrp`](http://linuxcommand.org/lc3\_man\_pages/chgrp1.html)         | Changes file group ownership                                                                |
| [`chown`](http://linuxcommand.org/lc3\_man\_pages/chown1.html)         | Changes file ownership                                                                      |
| [`chmod`](http://linuxcommand.org/lc3\_man\_pages/chmod1.html)         | Changes the permissions of a file or directory                                              |
| [`cp`](http://linuxcommand.org/lc3\_man\_pages/cp1.html)               | Copies a file or directory                                                                  |
| [`dd`](http://linuxcommand.org/lc3\_man\_pages/dd1.html)               | Copies and converts a file                                                                  |
| [`df`](http://linuxcommand.org/lc3\_man\_pages/df1.html)               | Shows disk free space on file systems                                                       |
| [`dir`](http://linuxcommand.org/lc3\_man\_pages/dir1.html)             | Is exactly like "ls -C -b". (Files are by default listed in columns and sorted vertically.) |
| [`dircolors`](http://linuxcommand.org/lc3\_man\_pages/dircolors1.html) | Set up color for ls                                                                         |
| [`install`](http://linuxcommand.org/lc3\_man\_pages/install1.html)     | Copies files and set attributes                                                             |
| [`ln`](http://linuxcommand.org/lc3\_man\_pages/ln1.html)               | Creates a link to a file                                                                    |
| [`ls`](http://linuxcommand.org/lc3\_man\_pages/ls1.html)               | Lists the files in a directory                                                              |
| [`mkdir`](http://linuxcommand.org/lc3\_man\_pages/mkdir1.html)         | Creates a directory                                                                         |
| [`mkfifo`](http://linuxcommand.org/lc3\_man\_pages/mkfifo1.html)       | Makes named pipes (FIFOs)                                                                   |
| [`mknod`](http://linuxcommand.org/lc3\_man\_pages/mknod1.html)         | Makes block or character special files                                                      |
| [`mktemp`](http://linuxcommand.org/lc3\_man\_pages/mktemp1.html)       | Creates a temporary file or directory                                                       |
| [`mv`](http://linuxcommand.org/lc3\_man\_pages/mv1.html)               | Moves files or rename files                                                                 |
| [`realpath`](http://linuxcommand.org/lc3\_man\_pages/realpath1.html)   | Returns the resolved absolute or relative path for a file                                   |
| [`rm`](http://linuxcommand.org/lc3\_man\_pages/rm1.html)               | Removes (deletes) files, directories, device nodes and symbolic links                       |
| [`rmdir`](http://linuxcommand.org/lc3\_man\_pages/rmdir1.html)         | Removes empty directories                                                                   |
| [`shred`](http://linuxcommand.org/lc3\_man\_pages/shred1.html)         | Overwrites a file to hide its contents, and optionally deletes it                           |
| [`sync`](http://linuxcommand.org/lc3\_man\_pages/sync1.html)           | Flushes file system buffers                                                                 |
| [`touch`](http://linuxcommand.org/lc3\_man\_pages/touch1.html)         | Changes file timestamps                                                                     |
| [`truncate`](http://linuxcommand.org/lc3\_man\_pages/truncate1.html)   | Shrink or extend the size of a file to the specified size                                   |
| [`vdir`](http://linuxcommand.org/lc3\_man\_pages/vdir1.html)           | Is exactly like "ls -l -b". (Files are by default listed in long format.)                   |

#### Coreutils - Text Utilities <a href="#text" id="text"></a>

| List of coreutils text utilities                                       |                                                                 |
| ---------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Command**                                                            | **Description**                                                 |
| [`b2sum`](http://linuxcommand.org/lc3\_man\_pages/b2sum1.html)         | Computes and checks BLAKE2b message digest                      |
| [`base32`](http://linuxcommand.org/lc3\_man\_pages/base321.html)       | Encodes or decodes Base32, and prints result to standard output |
| [`base64`](http://linuxcommand.org/lc3\_man\_pages/base641.html)       | Encodes or decodes Base64, and prints result to standard output |
| [`cat`](http://linuxcommand.org/lc3\_man\_pages/cat1.html)             | Concatenates and prints files on the standard output            |
| [`cksum`](http://linuxcommand.org/lc3\_man\_pages/cksum1.html)         | Checksums and count the bytes in a file                         |
| [`comm`](http://linuxcommand.org/lc3\_man\_pages/comm1.html)           | Compares two sorted files line by line                          |
| [`csplit`](http://linuxcommand.org/lc3\_man\_pages/csplit1.html)       | Splits a file into sections determined by context lines         |
| [`cut`](http://linuxcommand.org/lc3\_man\_pages/cut1.html)             | Removes sections from each line of files                        |
| [`expand`](http://linuxcommand.org/lc3\_man\_pages/expand1.html)       | Converts tabs to spaces                                         |
| [`fmt`](http://linuxcommand.org/lc3\_man\_pages/fmt1.html)             | Simple optimal text formatter                                   |
| [`fold`](http://linuxcommand.org/lc3\_man\_pages/fold1.html)           | Wraps each input line to fit in specified width                 |
| [`head`](http://linuxcommand.org/lc3\_man\_pages/head1.html)           | Outputs the first part of files                                 |
| [`join`](http://linuxcommand.org/lc3\_man\_pages/join1.html)           | Joins lines of two files on a common field                      |
| [`md5sum`](http://linuxcommand.org/lc3\_man\_pages/md5sum1.html)       | Computes and checks MD5 message digest                          |
| [`nl`](http://linuxcommand.org/lc3\_man\_pages/nl1.html)               | Numbers lines of files                                          |
| [`numfmt`](http://linuxcommand.org/lc3\_man\_pages/numfmt1.html)       | Reformat numbers                                                |
| [`od`](http://linuxcommand.org/lc3\_man\_pages/od1.html)               | Dumps files in octal and other formats                          |
| [`paste`](http://linuxcommand.org/lc3\_man\_pages/paste1.html)         | Merges lines of files                                           |
| [`ptx`](http://linuxcommand.org/lc3\_man\_pages/ptx1.html)             | Produces a permuted index of file contents                      |
| [`pr`](http://linuxcommand.org/lc3\_man\_pages/pr1.html)               | Converts text files for printing                                |
| [`sha512sum`](http://linuxcommand.org/lc3\_man\_pages/sha512sum1.html) | Computes and checks SHA-1/SHA-2 message digests                 |
| [`shuf`](http://linuxcommand.org/lc3\_man\_pages/shuf1.html)           | generate random permutations                                    |
| [`sort`](http://linuxcommand.org/lc3\_man\_pages/sort1.html)           | sort lines of text files                                        |
| [`split`](http://linuxcommand.org/lc3\_man\_pages/split1.html)         | Splits a file into pieces                                       |
| [`sum`](http://linuxcommand.org/lc3\_man\_pages/sum1.html)             | Checksums and counts the blocks in a file                       |
| [`tac`](http://linuxcommand.org/lc3\_man\_pages/tac1.html)             | Concatenates and prints files in reverse order line by line     |
| [`tail`](http://linuxcommand.org/lc3\_man\_pages/tail1.html)           | Outputs the last part of files                                  |
| [`tr`](http://linuxcommand.org/lc3\_man\_pages/tr1.html)               | Translates or deletes characters                                |
| [`tsort`](http://linuxcommand.org/lc3\_man\_pages/tsort1.html)         | Performs a topological sort                                     |
| [`unexpand`](http://linuxcommand.org/lc3\_man\_pages/unexpand1.html)   | Converts spaces to tabs                                         |
| [`uniq`](http://linuxcommand.org/lc3\_man\_pages/uniq1.html)           | Removes duplicate lines from a sorted file                      |
| [`wc`](http://linuxcommand.org/lc3\_man\_pages/wc1.html)               | Prints the number of bytes, words, and lines in files           |

#### Coreutils - Shell Utilities <a href="#shell" id="shell"></a>

| List of coreutils shell utilities                                    |                                                                       |
| -------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Command**                                                          | **Description**                                                       |
| [`arch`](http://linuxcommand.org/lc3\_man\_pages/arch1.html)         | Prints machine hardware name (same as uname -m)                       |
| [`basename`](http://linuxcommand.org/lc3\_man\_pages/basename1.html) | Removes the path prefix from a given pathname                         |
| [`chroot`](http://linuxcommand.org/lc3\_man\_pages/chroot1.html)     | Changes the root directory                                            |
| [`date`](http://linuxcommand.org/lc3\_man\_pages/date1.html)         | Prints or sets the system date and time                               |
| [`dirname`](http://linuxcommand.org/lc3\_man\_pages/dirname1.html)   | Strips non-directory suffix from file name                            |
| [`du`](http://linuxcommand.org/lc3\_man\_pages/du1.html)             | Shows disk usage on file systems                                      |
| [`echo`](http://linuxcommand.org/lc3\_man\_pages/echo1.html)         | Displays a specified line of text                                     |
| [`env`](http://linuxcommand.org/lc3\_man\_pages/env1.html)           | Displays and modifies environment variables                           |
| [`expr`](http://linuxcommand.org/lc3\_man\_pages/expr1.html)         | Evaluates expressions                                                 |
| [`factor`](http://linuxcommand.org/lc3\_man\_pages/factor1.html)     | Factors numbers                                                       |
| [`false`](http://linuxcommand.org/lc3\_man\_pages/false1.html)       | Does nothing, but exits unsuccessfully                                |
| [`groups`](http://linuxcommand.org/lc3\_man\_pages/groups1.html)     | Prints the groups of which the user is a member                       |
| [`hostid`](http://linuxcommand.org/lc3\_man\_pages/hostid1.html)     | Prints the numeric identifier for the current host                    |
| [`id`](http://linuxcommand.org/lc3\_man\_pages/id1.html)             | Prints real or effective UID and GID                                  |
| [`link`](http://linuxcommand.org/lc3\_man\_pages/link1.html)         | Creates a link to a file                                              |
| [`logname`](http://linuxcommand.org/lc3\_man\_pages/logname1.html)   | Print the user's login name                                           |
| [`nice`](http://linuxcommand.org/lc3\_man\_pages/nice1.html)         | Modifies scheduling priority                                          |
| [`nohup`](http://linuxcommand.org/lc3\_man\_pages/nohup1.html)       | Allows a command to continue running after logging out                |
| [`nproc`](http://linuxcommand.org/lc3\_man\_pages/nproc1.html)       | Queries the number of (active) processors                             |
| [`pathchk`](http://linuxcommand.org/lc3\_man\_pages/pathchk1.html)   | Checks whether file names are valid or portable                       |
| [`pinky`](http://linuxcommand.org/lc3\_man\_pages/pinky1.html)       | A lightweight version of finger                                       |
| [`printenv`](http://linuxcommand.org/lc3\_man\_pages/printenv1.html) | Prints environment variables                                          |
| [`printf`](http://linuxcommand.org/lc3\_man\_pages/printf1.html)     | Formats and prints data                                               |
| [`pwd`](http://linuxcommand.org/lc3\_man\_pages/pwd1.html)           | Prints the current working directory                                  |
| [`readlink`](http://linuxcommand.org/lc3\_man\_pages/readlink1.html) | Displays value of a symbolic link                                     |
| [`runcon`](http://linuxcommand.org/lc3\_man\_pages/runcon1.html)     | Run command with specified security context                           |
| [`seq`](http://linuxcommand.org/lc3\_man\_pages/seq1.html)           | Prints a sequence of numbers                                          |
| [`sleep`](http://linuxcommand.org/lc3\_man\_pages/sleep1.html)       | Delays for a specified amount of time                                 |
| [`stat`](http://linuxcommand.org/lc3\_man\_pages/stat1.html)         | Returns data about an inode                                           |
| [`stdbuf`](http://linuxcommand.org/lc3\_man\_pages/stdbuf1.html)     | Controls buffering for commands that use stdio                        |
| [`stty`](http://linuxcommand.org/lc3\_man\_pages/stty1.html)         | Changes and prints terminal line settings                             |
| [`tee`](http://linuxcommand.org/lc3\_man\_pages/tee1.html)           | Sends output to multiple files                                        |
| [`test`](http://linuxcommand.org/lc3\_man\_pages/test1.html)         | Evaluates an expression                                               |
| [`timeout`](http://linuxcommand.org/lc3\_man\_pages/timeout1.html)   | Run a command with a time limit                                       |
| [`true`](http://linuxcommand.org/lc3\_man\_pages/true1.html)         | Does nothing, but exits successfully                                  |
| [`tty`](http://linuxcommand.org/lc3\_man\_pages/tty1.html)           | Prints terminal name                                                  |
| [`uname`](http://linuxcommand.org/lc3\_man\_pages/uname1.html)       | Prints system information                                             |
| [`unlink`](http://linuxcommand.org/lc3\_man\_pages/unlink1.html)     | Removes the specified file using the unlink function                  |
| [`uptime`](http://linuxcommand.org/lc3\_man\_pages/uptime1.html)     | Tells how long the system has been running                            |
| [`users`](http://linuxcommand.org/lc3\_man\_pages/users1.html)       | Prints the user names of users currently logged into the current host |
| [`who`](http://linuxcommand.org/lc3\_man\_pages/who1.html)           | Prints a list of all users currently logged in                        |
| [`whoami`](http://linuxcommand.org/lc3\_man\_pages/whoami1.html)     | Prints the effective userid                                           |
| [`yes`](http://linuxcommand.org/lc3\_man\_pages/yes1.html)           | Prints a string repeatedly                                            |

#### Other Commands <a href="#other" id="other"></a>

| List of other common commands                                      |                                                                |
| ------------------------------------------------------------------ | -------------------------------------------------------------- |
| **Command**                                                        | **Description**                                                |
| [`ascii`](http://linuxcommand.org/lc3\_man\_pages/ascii7.html)     | ASCII character set encoded in octal, decimal, and hexadecimal |
| [`aspell`](http://linuxcommand.org/lc3\_man\_pages/aspell1.html)   | Interactive spell checker                                      |
| [`awk`](http://linuxcommand.org/lc3\_man\_pages/awk1.html)         | Pattern scanning and processing language                       |
| [`bash`](http://linuxcommand.org/lc3\_man\_pages/bash1.html)       | GNU Bourne-Again SHell                                         |
| [`bc`](http://linuxcommand.org/lc3\_man\_pages/bc1.html)           | An arbitrary precision calculator language                     |
| [`cal`](http://linuxcommand.org/lc3\_man\_pages/cal1.html)         | Display a calendar                                             |
| [`curl`](http://linuxcommand.org/lc3\_man\_pages/curl1.html)       | Transfer a URL                                                 |
| [`file`](http://linuxcommand.org/lc3\_man\_pages/file1.html)       | Determine file type                                            |
| [`find`](http://linuxcommand.org/lc3\_man\_pages/find1.html)       | Search for files in a directory hierarchy                      |
| [`gedit`](http://linuxcommand.org/lc3\_man\_pages/gedit1.html)     | Text editor for the GNOME Desktop                              |
| [`grep`](http://linuxcommand.org/lc3\_man\_pages/grep1.html)       | Print lines matching a pattern                                 |
| [`gunzip`](http://linuxcommand.org/lc3\_man\_pages/gunzip1.html)   | Compress or expand files                                       |
| [`gzip`](http://linuxcommand.org/lc3\_man\_pages/gzip1.html)       | Compress or expand files                                       |
| [`less`](http://linuxcommand.org/lc3\_man\_pages/less1.html)       | Opposite of more                                               |
| [`locate`](http://linuxcommand.org/lc3\_man\_pages/locate1.html)   | Find files by name                                             |
| [`look`](http://linuxcommand.org/lc3\_man\_pages/look1.html)       | Display lines beginning with a given string                    |
| [`lpr`](http://linuxcommand.org/lc3\_man\_pages/lpr1.html)         | Print files                                                    |
| [`man`](http://linuxcommand.org/lc3\_man\_pages/man1.html)         | Interface to the system reference manuals                      |
| [`mc`](http://linuxcommand.org/lc3\_man\_pages/mc1.html)           | Visual shell for Unix-like systems.                            |
| [`mcedit`](http://linuxcommand.org/lc3\_man\_pages/mcedit1.html)   | Internal file editor of GNU Midnight Commander.                |
| [`more`](http://linuxcommand.org/lc3\_man\_pages/more1.html)       | File perusal filter for crt viewing                            |
| [`mount`](http://linuxcommand.org/lc3\_man\_pages/mount8.html)     | Mount a filesystem                                             |
| [`nano`](http://linuxcommand.org/lc3\_man\_pages/nano1.html)       | Nano's ANOther editor, inspired by Pico                        |
| [`ps`](http://linuxcommand.org/lc3\_man\_pages/ps1.html)           | Report a snapshot of the current processes.                    |
| [`scp`](http://linuxcommand.org/lc3\_man\_pages/scp1.html)         | OpenSSH secure file copy                                       |
| [`sed`](http://linuxcommand.org/lc3\_man\_pages/sed1.html)         | Stream editor for filtering and transforming text              |
| [`sftp`](http://linuxcommand.org/lc3\_man\_pages/sftp1.html)       | OpenSSH secure file transfer                                   |
| [`ssh`](http://linuxcommand.org/lc3\_man\_pages/ssh1.html)         | OpenSSH remote login client                                    |
| [`sqlite3`](http://linuxcommand.org/lc3\_man\_pages/sqlite31.html) | Command line interface for SQLite version 3                    |
| [`su`](http://linuxcommand.org/lc3\_man\_pages/su1.html)           | Run a command with substitute user and group ID                |
| [`sudo`](http://linuxcommand.org/lc3\_man\_pages/sudo8.html)       | Execute a command as another user                              |
| [`tar`](http://linuxcommand.org/lc3\_man\_pages/tar1.html)         | An archiving utility                                           |
| [`tmux`](http://linuxcommand.org/lc3\_man\_pages/tmux1.html)       | Terminal multiplexer                                           |
| [`top`](http://linuxcommand.org/lc3\_man\_pages/top1.html)         | Display Linux processes                                        |
| [`tput`](http://linuxcommand.org/lc3\_man\_pages/tput1.html)       | Initialize a terminal or query terminfo database               |
| [`uptime`](http://linuxcommand.org/lc3\_man\_pages/uptime1.html)   | Tell how long the system has been running.                     |
| [`vim`](http://linuxcommand.org/lc3\_man\_pages/vim1.html)         | Vi IMproved, a programmer's text editor                        |
| [`wget`](http://linuxcommand.org/lc3\_man\_pages/wget1.html)       | Non-interactive network downloader.                            |
| [`which`](http://linuxcommand.org/lc3\_man\_pages/which1.html)     | Shows the full path of (shell) commands                        |
| [`zcat`](http://linuxcommand.org/lc3\_man\_pages/zcat1.html)       | Compress or expand files                                       |
| [`zless`](http://linuxcommand.org/lc3\_man\_pages/zless1.html)     | File perusal filter for crt viewing of compressed text         |

{% embed url="https://gist.github.com/bgoonz/2ee100b3d3e7ec3aca7dbc8514dc564c" %}

{% embed url="https://gist.github.com/bgoonz/a8bab372e5d7e4b8f267a2979a43e199" %}

{% embed url="https://gist.github.com/bgoonz/df74dfa73bb5edd239ac738a14104eee" %}
