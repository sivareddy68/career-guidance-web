
const linuxCourse = {
  title: "Linux",
  description:
    "Learn Linux fundamentals, terminal commands, filesystem navigation, permissions, users, processes, shell scripting, networking, package management, and system administration.",
  weeks: [
    {
      title: "Week 1: Linux Fundamentals",
      description: "Understand Linux, its architecture, terminal, and filesystem.",
      lessons: [
        {
          title: "Introduction to Linux",
          content: `Linux is an open-source operating system kernel. A complete Linux operating system distribution combines the Linux kernel with system utilities, libraries, package managers, and applications.

Popular Linux distributions include Ubuntu, Debian, Fedora, and Red Hat Enterprise Linux. Different distributions provide different tools and release models, but they share the Linux kernel.

Linux is widely used in servers, cloud platforms, embedded systems, supercomputers, development environments, and cybersecurity tools.

The kernel is the central part of the operating system. It manages hardware resources such as the CPU, memory, storage, and connected devices. It also provides services that applications use to access system resources.

A shell provides an interface for users to communicate with the operating system through commands. Bash is a commonly used Linux shell.

Linux supports multiple users and multitasking. It also provides file permissions and ownership to control access to system resources.

Understanding Linux is valuable for software developers, cloud engineers, DevOps engineers, AI/ML engineers, and system administrators.`,
          quiz: [
            {
              question: "What is Linux?",
              options: ["An open-source operating system kernel", "A database language", "A web browser", "A programming framework"],
              answer: "An open-source operating system kernel",
            },
            {
              question: "Which component manages hardware resources?",
              options: ["Kernel", "Text editor", "Browser", "Spreadsheet"],
              answer: "Kernel",
            },
            {
              question: "Which is a Linux distribution?",
              options: ["Ubuntu", "Microsoft Word", "Photoshop", "PowerPoint"],
              answer: "Ubuntu",
            },
            {
              question: "What is Bash?",
              options: ["A command-line shell", "A database", "A hardware device", "An image format"],
              answer: "A command-line shell",
            },
            {
              question: "Where is Linux commonly used?",
              options: ["Servers and cloud platforms", "Only image editing", "Only presentation software", "Only mobile games"],
              answer: "Servers and cloud platforms",
            },
          ],
        },
        {
          title: "Linux Architecture",
          content: `Linux architecture can be understood through several layers: hardware, kernel, system libraries, shell, and user applications.

Hardware includes the processor, memory, storage devices, and network interfaces.

The kernel manages resources and provides system calls that applications use to request operating system services. Examples include creating processes, reading files, and communicating through network sockets.

System libraries provide reusable functions that help applications interact with the kernel. They reduce the need for every application to implement low-level operations independently.

The shell accepts commands and starts programs. A graphical desktop environment provides windows, menus, and visual controls.

User applications operate above these layers. Examples include web servers, editors, databases, and Python applications.

Understanding these layers helps troubleshoot Linux problems. For example, a program may fail because of an application error, a missing library, a permission problem, or a kernel-level resource issue.`,
          quiz: [
            {
              question: "Which layer directly manages hardware resources?",
              options: ["Kernel", "User application", "Text editor", "Web browser"],
              answer: "Kernel",
            },
            {
              question: "What do system libraries provide?",
              options: ["Reusable functions for applications", "Physical storage devices", "Internet cables", "User passwords"],
              answer: "Reusable functions for applications",
            },
            {
              question: "What does a shell do?",
              options: ["Accepts commands and starts programs", "Manufactures hardware", "Stores electrical power", "Replaces the kernel"],
              answer: "Accepts commands and starts programs",
            },
            {
              question: "Which component provides services through system calls?",
              options: ["Kernel", "Monitor", "Keyboard", "Printer"],
              answer: "Kernel",
            },
            {
              question: "Which is an example of a user application?",
              options: ["Text editor", "CPU register", "Memory controller", "Kernel scheduler"],
              answer: "Text editor",
            },
          ],
        },
        {
          title: "Linux Terminal and Basic Commands",
          content: `The Linux terminal allows users to interact with the operating system by entering commands.

The pwd command displays the current working directory. The ls command lists files and directories. The cd command changes the current directory.

The mkdir command creates a directory, while touch can create an empty file or update its timestamp. The cat command displays file contents.

The cp command copies files or directories. The mv command moves or renames files. The rm command removes files, and rmdir removes empty directories.

The clear command clears the terminal display. The man command displays the manual page for a command.

Commands can accept options and arguments. For example, ls -l displays a detailed listing, while ls -a includes hidden entries.

Linux commands are case-sensitive. A filename such as Report.txt is different from report.txt.

Always check a command and its target before performing destructive operations, especially when using recursive deletion.`,
          quiz: [
            {
              question: "Which command displays the current working directory?",
              options: ["pwd", "ls", "mkdir", "rm"],
              answer: "pwd",
            },
            {
              question: "Which command lists files and directories?",
              options: ["ls", "cd", "touch", "clear"],
              answer: "ls",
            },
            {
              question: "Which command changes the current directory?",
              options: ["cd", "pwd", "cat", "cp"],
              answer: "cd",
            },
            {
              question: "Which command copies files?",
              options: ["cp", "mv", "rm", "rmdir"],
              answer: "cp",
            },
            {
              question: "Which command displays a command's manual?",
              options: ["man", "mkdir", "touch", "clear"],
              answer: "man",
            },
          ],
        },
        {
          title: "Linux Filesystem and Directory Structure",
          content: `Linux organizes files and directories in a hierarchical filesystem that starts at the root directory, represented by /.

The /home directory commonly contains users' personal directories. The /etc directory stores system-wide configuration files. The /var directory contains variable data such as logs and application data.

The /bin directory traditionally contains essential user commands. On many modern distributions, it may be linked to /usr/bin.

The /usr directory contains many user applications, libraries, and shared resources. The /tmp directory is used for temporary files.

The /dev directory contains device-related filesystem entries. The /proc directory provides process and kernel information through a virtual filesystem. The /boot directory contains files needed for system startup.

An absolute path starts from the root directory, such as /home/user/documents. A relative path is interpreted from the current working directory.

The special directory . represents the current directory, while .. represents its parent directory.

Understanding the filesystem helps locate configuration files, application data, logs, and system resources.`,
          quiz: [
            {
              question: "Which symbol represents the Linux root directory?",
              options: ["/", "~", ".", "*"],
              answer: "/",
            },
            {
              question: "Where are system-wide configuration files commonly stored?",
              options: ["/etc", "/home", "/tmp", "/media"],
              answer: "/etc",
            },
            {
              question: "Which directory commonly contains user home directories?",
              options: ["/home", "/boot", "/proc", "/dev"],
              answer: "/home",
            },
            {
              question: "What does an absolute path start from?",
              options: ["Root directory", "Current directory only", "Parent directory", "Last opened file"],
              answer: "Root directory",
            },
            {
              question: "What does .. represent?",
              options: ["Parent directory", "Root directory", "Current file", "Hidden file"],
              answer: "Parent directory",
            },
          ],
        },
      ],
    },
    {
      title: "Week 2: Files, Permissions, and Users",
      description: "Manage files, permissions, users, groups, and ownership.",
      lessons: [
        {
          title: "Creating, Editing, and Managing Files",
          content: `Linux provides several commands for creating, reading, editing, copying, moving, and removing files.

The touch command creates an empty file if it does not exist. The cat command displays file content. The less command allows users to view long files one screen at a time.

Text editors such as nano and vim can be used to edit files from the terminal. Nano is generally easier for beginners, while Vim provides powerful keyboard-based editing features.

The cp command copies files. The mv command moves or renames them. The rm command removes files.

The file command identifies a file's type based on its contents. The stat command displays detailed information such as size, permissions, and modification timestamps.

Redirection can send command output into files. The > operator overwrites a file, while >> appends output to the end.

The pipe symbol | sends one command's output as another command's input. For example, ls | less displays a directory listing page by page.

These commands are useful for managing configuration files, logs, scripts, and application data.`,
          quiz: [
            {
              question: "Which command creates an empty file?",
              options: ["touch", "rm", "pwd", "cd"],
              answer: "touch",
            },
            {
              question: "Which command is commonly used to view long text files page by page?",
              options: ["less", "mkdir", "rmdir", "chmod"],
              answer: "less",
            },
            {
              question: "Which editor is generally beginner-friendly?",
              options: ["Nano", "Kernel", "GRUB", "systemd"],
              answer: "Nano",
            },
            {
              question: "What does >> do?",
              options: ["Appends output to a file", "Deletes a file", "Changes ownership", "Lists hidden files"],
              answer: "Appends output to a file",
            },
            {
              question: "What does the pipe operator do?",
              options: [
                "Sends one command's output to another command",
                "Deletes the current directory",
                "Changes the user password",
                "Changes file ownership",
              ],
              answer: "Sends one command's output to another command",
            },
          ],
        },
        {
          title: "File Permissions and chmod",
          content: `Linux uses permissions to control who can read, modify, or execute files and directories.

There are three basic permission types: read (r), write (w), and execute (x).

Permissions are assigned to three categories: user (owner), group, and others.

The ls -l command displays file permissions. A permission string such as rwxr-xr-- shows the permissions for the owner, group, and others.

The chmod command changes file permissions. Symbolic notation can add or remove permissions. For example, chmod u+x script.sh adds execute permission for the owner.

Numeric notation uses values: read is 4, write is 2, and execute is 1. The values are added for each permission category.

For example, chmod 755 script.sh gives the owner read, write, and execute permissions, while group and others receive read and execute permissions.

Directories also use permissions. Read allows listing directory entries, write allows modifying entries, and execute allows searching or accessing items within the directory.

Permissions should follow the principle of least privilege: grant only the access needed for a task.`,
          quiz: [
            {
              question: "What does r represent in Linux permissions?",
              options: ["Read", "Run", "Rename", "Remove"],
              answer: "Read",
            },
            {
              question: "What does x represent?",
              options: ["Execute", "Export", "Extract", "Exit"],
              answer: "Execute",
            },
            {
              question: "Which command changes file permissions?",
              options: ["chmod", "chown", "pwd", "cat"],
              answer: "chmod",
            },
            {
              question: "What numeric value represents write permission?",
              options: ["2", "1", "4", "7"],
              answer: "2",
            },
            {
              question: "What does chmod 755 provide to the owner?",
              options: [
                "Read, write, and execute",
                "Read only",
                "Write only",
                "Execute only",
              ],
              answer: "Read, write, and execute",
            },
          ],
        },
        {
          title: "Users, Groups, and Ownership",
          content: `Linux is a multiuser operating system. Different users can access the same computer while having separate identities and permissions.

Each user has a username and a numeric user ID (UID). Groups have group IDs (GIDs) and allow permissions to be shared among multiple users.

The whoami command displays the current username. The id command displays user and group identity information. The groups command lists the groups associated with a user.

The useradd command creates a user account. The passwd command changes a password. The usermod command modifies account settings, while userdel removes an account.

The chown command changes file ownership. The chgrp command changes group ownership.

The sudo command allows an authorized user to run a command with elevated privileges according to the system's configuration.

Administrative access should be used carefully. Running commands with excessive privileges can damage system files or expose sensitive information.

Groups are useful for organizing access to shared project folders, application files, and administrative resources.`,
          quiz: [
            {
              question: "Which command displays the current username?",
              options: ["whoami", "chmod", "mkdir", "find"],
              answer: "whoami",
            },
            {
              question: "What does UID represent?",
              options: ["User ID", "Universal Internet Data", "User Input Device", "Unique Image Directory"],
              answer: "User ID",
            },
            {
              question: "Which command changes file ownership?",
              options: ["chown", "chmod", "grep", "touch"],
              answer: "chown",
            },
            {
              question: "Which command changes a user's password?",
              options: ["passwd", "pwd", "ps", "df"],
              answer: "passwd",
            },
            {
              question: "What is the purpose of sudo?",
              options: [
                "Run an authorized command with elevated privileges",
                "Display the current directory",
                "Create a text file",
                "List running processes",
              ],
              answer: "Run an authorized command with elevated privileges",
            },
          ],
        },
        {
          title: "Searching and Finding Files",
          content: `Linux provides commands for searching file contents and locating files.

The find command searches for files and directories based on conditions such as name, type, size, or modification time.

For example, find /home -name "*.txt" searches under /home for filenames ending in .txt.

The grep command searches text for matching patterns. It is frequently used to find words or expressions inside configuration files and logs.

The locate command searches a prebuilt file database. It can be faster than find, but its database may need updating and may not include recently created files.

The which command displays the executable path used for a command found through the shell's PATH.

Wildcards are useful when matching filenames. The * wildcard matches zero or more characters, while ? matches one character.

Regular expressions provide more advanced pattern matching. They can help identify structured text patterns in logs and configuration files.

Combining commands with pipes makes searching more powerful. For example, grep can filter output produced by another command.

Search commands are useful when troubleshooting applications, locating scripts, and inspecting large collections of logs.`,
          quiz: [
            {
              question: "Which command searches for files and directories?",
              options: ["find", "chmod", "whoami", "clear"],
              answer: "find",
            },
            {
              question: "Which command searches text for matching patterns?",
              options: ["grep", "mv", "mkdir", "rmdir"],
              answer: "grep",
            },
            {
              question: "What is a limitation of locate?",
              options: [
                "Its database may not include recently created files",
                "It cannot search filenames",
                "It can only display running processes",
                "It always modifies searched files",
              ],
              answer: "Its database may not include recently created files",
            },
            {
              question: "Which command displays an executable path found through PATH?",
              options: ["which", "touch", "cat", "passwd"],
              answer: "which",
            },
            {
              question: "What does the * wildcard match?",
              options: [
                "Zero or more characters",
                "Exactly one character",
                "Only numeric characters",
                "Only directory names",
              ],
              answer: "Zero or more characters",
            },
          ],
        },
      ],
    },
    {
      title: "Week 3: Processes, Packages, and Networking",
      description: "Manage processes, software packages, system services, and network tools.",
      lessons: [
        {
          title: "Linux Processes and Process Management",
          content: `A process is a running instance of a program. Linux assigns each process a process ID (PID).

The ps command displays process information. The ps aux command shows a detailed list of processes on many Linux distributions.

The top command provides a live view of running processes and resource usage. Some systems also provide htop as an interactive alternative.

The kill command sends a signal to a process. By default, it sends SIGTERM, which requests that the process terminate gracefully.

The kill -9 command sends SIGKILL, which forces termination. It should be used only when a process cannot be stopped normally.

The jobs command lists jobs started from the current shell. The bg command resumes a suspended job in the background, while fg brings a job to the foreground.

The nice and renice commands influence process scheduling priority.

Process management is important for troubleshooting applications, identifying high CPU or memory usage, and stopping unresponsive services.`,
          quiz: [
            {
              question: "What is a process?",
              options: ["A running instance of a program", "A stored image file", "A network cable", "A directory permission"],
              answer: "A running instance of a program",
            },
            {
              question: "What does PID stand for?",
              options: ["Process ID", "Program Input Data", "Package Installation Directory", "Private Internet Device"],
              answer: "Process ID",
            },
            {
              question: "Which command provides a live process and resource view?",
              options: ["top", "touch", "pwd", "mkdir"],
              answer: "top",
            },
            {
              question: "What does the default kill signal usually request?",
              options: [
                "Graceful process termination",
                "Permanent disk formatting",
                "User account creation",
                "Network configuration",
              ],
              answer: "Graceful process termination",
            },
            {
              question: "Which command brings a background job to the foreground?",
              options: ["fg", "bg", "jobs", "nice"],
              answer: "fg",
            },
          ],
        },
        {
          title: "Package Management in Linux",
          content: `Package managers install, update, configure, and remove software on Linux systems.

Different distributions use different package-management systems. Debian and Ubuntu commonly use APT with .deb packages. Fedora commonly uses DNF with RPM packages.

The apt update command refreshes the local package metadata. The apt upgrade command installs available updates for installed packages.

The apt install command installs a package, while apt remove removes a package. Package managers can also resolve dependencies automatically.

On Fedora, DNF provides comparable operations through commands such as dnf install and dnf upgrade.

A package repository is a source from which package managers obtain software and metadata. Repositories should be configured carefully to avoid installing untrusted software.

Package managers simplify software maintenance and help keep systems updated.

Before installing software on a production server, developers should consider compatibility, security updates, dependencies, and the effect of changes on running services.`,
          quiz: [
            {
              question: "What is the main purpose of a package manager?",
              options: [
                "Install, update, and remove software",
                "Manage monitor brightness",
                "Create network cables",
                "Edit images",
              ],
              answer: "Install, update, and remove software",
            },
            {
              question: "Which package manager is commonly used on Ubuntu?",
              options: ["APT", "DNF only", "Pacman only", "Chocolatey"],
              answer: "APT",
            },
            {
              question: "Which command refreshes APT package metadata?",
              options: ["apt update", "apt remove", "apt delete", "apt pause"],
              answer: "apt update",
            },
            {
              question: "Which package manager is commonly used on Fedora?",
              options: ["DNF", "APT only", "NPM only", "PIP only"],
              answer: "DNF",
            },
            {
              question: "What is a package repository?",
              options: [
                "A source containing software packages and metadata",
                "A directory containing only personal photos",
                "A process scheduling algorithm",
                "A type of CPU register",
              ],
              answer: "A source containing software packages and metadata",
            },
          ],
        },
        {
          title: "Linux Networking Commands",
          content: `Linux provides commands for inspecting network interfaces, addresses, routes, and connectivity.

The ip command is used to inspect and configure network interfaces and routing information. The ip addr command displays IP addresses assigned to interfaces.

The ip route command displays routing information. The ping command tests whether a destination can be reached using ICMP echo requests, although some systems or networks block them.

The ss command displays socket information. It is commonly used to inspect listening ports and active network connections.

The curl command transfers data to or from URLs. It is useful for testing web services and APIs.

The dig command queries DNS information. The hostname command displays or manages the system hostname.

Network troubleshooting should examine multiple layers. A failed connection may result from incorrect addressing, routing problems, DNS issues, firewall rules, or an unavailable service.

These tools are useful when deploying web applications, connecting to remote servers, and diagnosing API connectivity issues.`,
          quiz: [
            {
              question: "Which command displays IP address information?",
              options: ["ip addr", "pwd", "chmod", "touch"],
              answer: "ip addr",
            },
            {
              question: "Which command displays routing information?",
              options: ["ip route", "ls", "cat", "nano"],
              answer: "ip route",
            },
            {
              question: "Which command is commonly used to test ICMP reachability?",
              options: ["ping", "mkdir", "grep", "chown"],
              answer: "ping",
            },
            {
              question: "Which command displays socket information?",
              options: ["ss", "cp", "mv", "rmdir"],
              answer: "ss",
            },
            {
              question: "Which command is useful for testing HTTP APIs from a terminal?",
              options: ["curl", "whoami", "chmod", "df"],
              answer: "curl",
            },
          ],
        },
        {
          title: "System Services and Logs",
          content: `Linux services are background programs that provide system or application functionality. Examples include web servers, databases, SSH services, and scheduled tasks.

On many modern distributions, systemd manages system services. The systemctl command can start, stop, restart, enable, disable, and inspect services.

The command systemctl status nginx displays the status of a service named nginx if it is installed.

Starting a service runs it now. Enabling a service configures it to start automatically during boot. These operations are different.

System logs record events such as application activity, authentication attempts, and system errors.

The journalctl command reads logs collected by systemd's journal. For example, journalctl -u nginx displays journal entries associated with nginx.

The /var/log directory commonly contains log files from applications and system components.

Logs are valuable for troubleshooting failed services, identifying repeated errors, and understanding system behavior. Log access may be restricted because logs can contain sensitive information.`,
          quiz: [
            {
              question: "What is a Linux service?",
              options: [
                "A background program providing system or application functionality",
                "A graphical desktop wallpaper",
                "A compressed image",
                "A programming language",
              ],
              answer: "A background program providing system or application functionality",
            },
            {
              question: "Which command manages systemd services?",
              options: ["systemctl", "grep", "touch", "whoami"],
              answer: "systemctl",
            },
            {
              question: "What does systemctl enable generally do?",
              options: [
                "Configure a service to start automatically during boot",
                "Start every installed application immediately",
                "Delete the service configuration",
                "Display all user passwords",
              ],
              answer: "Configure a service to start automatically during boot",
            },
            {
              question: "Which command reads the systemd journal?",
              options: ["journalctl", "chmod", "mkdir", "cp"],
              answer: "journalctl",
            },
            {
              question: "Where are many Linux log files commonly stored?",
              options: ["/var/log", "/home/logs-only", "/boot/log", "/dev/logfiles"],
              answer: "/var/log",
            },
          ],
        },
      ],
    },
    {
      title: "Week 4: Shell Scripting and System Administration",
      description: "Automate tasks, manage storage, schedule jobs, and troubleshoot Linux.",
      lessons: [
        {
          title: "Introduction to Bash Shell Scripting",
          content: `A shell script is a file containing commands that a shell executes in sequence. Shell scripts are useful for automating repetitive tasks such as backups, log processing, application startup, and system checks.

A Bash script commonly begins with a shebang line:

#!/bin/bash

Commands can be written on separate lines. Variables store values and can be referenced using the dollar sign.

For example:

name="Linux"
echo "Learning $name"

The read command accepts user input. The echo command displays text.

Scripts can be made executable using chmod +x script.sh and run using ./script.sh when the file is in the current directory.

The exit command ends a script and can return an exit status. By convention, exit status 0 indicates success, while a nonzero status usually indicates an error or another condition.

Comments begin with # and explain the purpose of script sections.

Good scripts should use clear variable names, validate inputs, handle errors, and avoid exposing passwords or other secrets.`,
          quiz: [
            {
              question: "What is a shell script?",
              options: [
                "A file containing commands executed by a shell",
                "A Linux hardware component",
                "A database index",
                "A network address",
              ],
              answer: "A file containing commands executed by a shell",
            },
            {
              question: "Which line commonly identifies a Bash script interpreter?",
              options: ["#!/bin/bash", "#!/html", "#!/database", "#!/network"],
              answer: "#!/bin/bash",
            },
            {
              question: "Which command displays text in Bash?",
              options: ["echo", "chmod", "chown", "mount"],
              answer: "echo",
            },
            {
              question: "Which command accepts user input in Bash?",
              options: ["read", "rm", "pwd", "ls"],
              answer: "read",
            },
            {
              question: "What does exit status 0 conventionally indicate?",
              options: ["Success", "Failure", "Missing permission", "Network timeout"],
              answer: "Success",
            },
          ],
        },
        {
          title: "Conditions, Loops, and Functions in Bash",
          content: `Bash supports conditional statements, loops, and functions that make scripts reusable and flexible.

The if statement executes commands based on a condition. The else branch handles the alternative case, and elif checks additional conditions.

The for loop repeats commands over a list of values. The while loop repeats commands while a condition remains true.

Functions group related commands under a name. They can accept arguments and return an exit status.

For example:

greet() {
  echo "Hello $1"
}

greet "Linux"

Here, $1 represents the first positional argument passed to the function.

Bash uses comparison operators for numeric and string tests. The test command and square-bracket syntax are commonly used for conditional expressions.

The case statement is useful when choosing among several possible values.

Loops should include conditions that eventually allow them to finish, unless an intentionally continuous process is required.

These features are useful for automating deployments, checking service status, and processing files in batches.`,
          quiz: [
            {
              question: "Which statement performs conditional execution in Bash?",
              options: ["if", "import", "class", "SELECT"],
              answer: "if",
            },
            {
              question: "Which loop repeats commands while a condition remains true?",
              options: ["while", "switch", "define", "include"],
              answer: "while",
            },
            {
              question: "What does $1 represent inside a Bash function or script?",
              options: ["First positional argument", "Exit status", "Current directory", "Second command"],
              answer: "First positional argument",
            },
            {
              question: "What is the purpose of a Bash function?",
              options: [
                "Group reusable commands under a name",
                "Replace the Linux kernel",
                "Change the system hostname automatically",
                "Install every package",
              ],
              answer: "Group reusable commands under a name",
            },
            {
              question: "Which Bash construct is useful for selecting among several values?",
              options: ["case", "pwd", "touch", "chmod"],
              answer: "case",
            },
          ],
        },
        {
          title: "Disk Management, Mounting, and Storage",
          content: `Linux provides tools for checking storage devices, disk usage, filesystems, and mounted directories.

The df command reports filesystem disk space usage. The du command estimates the space used by files and directories.

The lsblk command lists block devices such as disks and partitions. The mount command attaches a filesystem to a directory, allowing users to access its contents through the directory tree.

The umount command detaches a mounted filesystem. A filesystem should be unmounted before removing removable storage to reduce the risk of data loss.

The /etc/fstab file commonly describes filesystems that should be mounted automatically during startup.

Linux supports multiple filesystem types, including ext4, XFS, and Btrfs. Different filesystems provide different features and management capabilities.

Storage troubleshooting should distinguish between low disk space, exhausted inodes, incorrect mount configuration, and filesystem errors.

Before changing partitions or formatting storage, users should verify the target device and ensure important data is backed up. Storage operations can permanently remove information.`,
          quiz: [
            {
              question: "Which command reports filesystem disk space usage?",
              options: ["df", "pwd", "whoami", "grep"],
              answer: "df",
            },
            {
              question: "Which command estimates directory space usage?",
              options: ["du", "mv", "chmod", "echo"],
              answer: "du",
            },
            {
              question: "Which command lists block devices?",
              options: ["lsblk", "ls", "cat", "touch"],
              answer: "lsblk",
            },
            {
              question: "What does mount do?",
              options: [
                "Attaches a filesystem to a directory",
                "Deletes a user account",
                "Changes a process priority",
                "Creates a network route",
              ],
              answer: "Attaches a filesystem to a directory",
            },
            {
              question: "Which file commonly defines automatic filesystem mounts?",
              options: ["/etc/fstab", "/etc/users", "/home/mounts", "/var/boot"],
              answer: "/etc/fstab",
            },
          ],
        },
        {
          title: "Scheduling, Troubleshooting, and Final Linux Project",
          content: `Linux administrators often automate tasks and troubleshoot systems using command-line tools.

Cron is a scheduling service commonly used to run commands or scripts at specified times. The crontab command manages a user's scheduled cron jobs.

A cron expression commonly contains five time fields: minute, hour, day of month, month, and day of week.

For example, a scheduled backup may run every day at a specified time. Scripts should log their results and handle errors so that scheduled failures can be identified.

Troubleshooting begins by identifying the problem and gathering evidence. Useful tools include systemctl for services, journalctl for logs, top for resource usage, df for storage, and ip for networking.

Final project: create a Linux system maintenance script.

The script should:
1. Display the current date and hostname.
2. Check available disk space.
3. Display selected system information.
4. Check the status of a chosen service.
5. Write results to a log file.
6. Handle errors clearly.

Test the script with normal and unexpected conditions. Use appropriate permissions and avoid running every operation with administrator privileges.

Document the commands used, expected output, and limitations. This project combines Linux commands, shell scripting, services, storage checks, and troubleshooting into one practical workflow.`,
          quiz: [
            {
              question: "What is cron commonly used for?",
              options: [
                "Scheduling commands and scripts",
                "Changing file ownership",
                "Creating network interfaces",
                "Compiling the Linux kernel",
              ],
              answer: "Scheduling commands and scripts",
            },
            {
              question: "Which command manages a user's cron jobs?",
              options: ["crontab", "chmod", "journalctl", "lsblk"],
              answer: "crontab",
            },
            {
              question: "How many main time fields does a standard cron expression commonly contain?",
              options: ["Five", "Two", "Three", "Eight"],
              answer: "Five",
            },
            {
              question: "Which command is useful for checking a service's status?",
              options: ["systemctl", "touch", "pwd", "echo"],
              answer: "systemctl",
            },
            {
              question: "Why should a maintenance script write results to a log file?",
              options: [
                "To record operations and help identify failures",
                "To automatically increase disk capacity",
                "To remove the need for testing",
                "To change all file permissions",
              ],
              answer: "To record operations and help identify failures",
            },
          ],
        },
      ],
    },
  ],
};

export default linuxCourse;
