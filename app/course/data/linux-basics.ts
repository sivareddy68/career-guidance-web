const linuxBasicsCourse = {
  title: "Linux Basics",
  description:
    "Learn essential Linux commands, files and directories, permissions, users, processes, package management, networking, shell scripting, and basic system administration.",

  weeks: [
    {
      title: "Week 1: Linux Fundamentals",
      description:
        "Learn the Linux environment, filesystem, terminal, and essential commands.",

      lessons: [
        {
          title: "Introduction to Linux",
          content: `
Linux is an open-source operating system widely used on servers, cloud systems, development environments, networking devices, and embedded systems.

Linux is based around the Linux kernel, which manages hardware and system resources.

A Linux system commonly includes the kernel, system utilities, libraries, applications, and a shell.

Popular Linux distributions include Ubuntu, Debian, Fedora, and Rocky Linux.

One major feature of Linux is its command-line interface. The terminal allows users to manage files, run programs, configure systems, and automate tasks.

Linux is commonly used by developers and system administrators because it provides powerful command-line tools and automation capabilities.
          `,
          quiz: [
            {
              question: "What is Linux?",
              options: [
                "An operating system",
                "A database only",
                "A programming language",
                "A web browser",
              ],
              answer: "An operating system",
            },
            {
              question: "What is the Linux kernel responsible for?",
              options: [
                "Managing hardware and system resources",
                "Creating websites",
                "Editing photographs",
                "Managing only documents",
              ],
              answer: "Managing hardware and system resources",
            },
            {
              question: "Which is a Linux distribution?",
              options: ["Ubuntu", "Chrome", "HTML", "MySQL"],
              answer: "Ubuntu",
            },
            {
              question: "What is commonly used to enter Linux commands?",
              options: ["Terminal", "Spreadsheet", "Web browser", "Image editor"],
              answer: "Terminal",
            },
            {
              question: "Why is Linux popular for servers?",
              options: [
                "It provides powerful administration and automation tools",
                "It requires no hardware",
                "It only supports games",
                "It cannot use networking",
              ],
              answer:
                "It provides powerful administration and automation tools",
            },
          ],
        },

        {
          title: "Linux Terminal and Basic Commands",
          content: `
The Linux terminal provides a text-based interface for interacting with the operating system.

Commands are usually entered using a command name followed by optional arguments and options.

The pwd command shows the current working directory.

The ls command lists files and directories.

The cd command changes the current directory.

The clear command clears the terminal screen.

The whoami command displays the current username.

The man command provides documentation for many Linux commands.

Learning these basic commands makes it easier to navigate and manage a Linux system.
          `,
          quiz: [
            {
              question: "Which command shows the current directory?",
              options: ["pwd", "ls", "cd", "clear"],
              answer: "pwd",
            },
            {
              question: "Which command lists files?",
              options: ["ls", "pwd", "cd", "whoami"],
              answer: "ls",
            },
            {
              question: "Which command changes directories?",
              options: ["cd", "ls", "pwd", "man"],
              answer: "cd",
            },
            {
              question: "Which command shows the current user?",
              options: ["whoami", "pwd", "clear", "ls"],
              answer: "whoami",
            },
            {
              question: "What is the purpose of the man command?",
              options: [
                "Display command documentation",
                "Delete users",
                "Create directories",
                "Restart the computer",
              ],
              answer: "Display command documentation",
            },
          ],
        },

        {
          title: "Linux Files and Directories",
          content: `
Linux uses a hierarchical filesystem that begins at the root directory, represented by /.

Directories can contain files and other directories.

Important directories include:
- /home: user home directories
- /etc: configuration files
- /var: variable data such as logs
- /tmp: temporary files
- /usr: many user programs and libraries

The mkdir command creates directories.

The touch command can create an empty file.

The cp command copies files or directories.

The mv command moves or renames files.

The rm command removes files.

The file command can be used to identify the type of a file.

Care should be taken with commands such as rm because deleted files may not be easily recoverable.
          `,
          quiz: [
            {
              question: "What represents the root directory in Linux?",
              options: ["/", "/home", "/root", "/etc"],
              answer: "/",
            },
            {
              question: "Which directory commonly contains user home directories?",
              options: ["/home", "/tmp", "/etc", "/var"],
              answer: "/home",
            },
            {
              question: "Which command creates a directory?",
              options: ["mkdir", "touch", "cp", "mv"],
              answer: "mkdir",
            },
            {
              question: "Which command copies files?",
              options: ["cp", "mv", "rm", "pwd"],
              answer: "cp",
            },
            {
              question: "Which command removes a file?",
              options: ["rm", "mkdir", "touch", "ls"],
              answer: "rm",
            },
          ],
        },

        {
          title: "Working with Files",
          content: `
Linux provides many commands for viewing and managing file contents.

The cat command displays file contents.

The less command allows users to read long files page by page.

The head command displays the beginning of a file.

The tail command displays the end of a file and is often useful for checking log files.

The grep command searches text for a specified pattern.

The wc command can count lines, words, and characters.

The sort command sorts lines of text.

The history command shows previously entered commands.

These commands can also be combined using Linux pipes to create useful command-line workflows.
          `,
          quiz: [
            {
              question: "Which command displays file contents?",
              options: ["cat", "mkdir", "cd", "chmod"],
              answer: "cat",
            },
            {
              question: "Which command displays the beginning of a file?",
              options: ["head", "tail", "grep", "sort"],
              answer: "head",
            },
            {
              question: "Which command is commonly used to view the end of log files?",
              options: ["tail", "head", "pwd", "mkdir"],
              answer: "tail",
            },
            {
              question: "Which command searches text for a pattern?",
              options: ["grep", "cat", "cd", "touch"],
              answer: "grep",
            },
            {
              question: "Which command displays previous commands?",
              options: ["history", "sort", "wc", "head"],
              answer: "history",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Permissions, Users, and Processes",
      description:
        "Learn Linux permissions, users, groups, ownership, processes, and system services.",

      lessons: [
        {
          title: "Linux File Permissions",
          content: `
Linux uses permissions to control access to files and directories.

There are three main permission types:
- Read (r)
- Write (w)
- Execute (x)

Permissions are assigned to three categories:
- User/owner
- Group
- Others

For example, a file permission can indicate whether the owner can read or write the file and whether other users can access it.

The ls -l command displays detailed file information including permissions and ownership.

Permissions help protect important files and prevent unauthorized changes.
          `,
          quiz: [
            {
              question: "Which symbol represents read permission?",
              options: ["r", "w", "x", "d"],
              answer: "r",
            },
            {
              question: "Which symbol represents write permission?",
              options: ["w", "r", "x", "p"],
              answer: "w",
            },
            {
              question: "Which symbol represents execute permission?",
              options: ["x", "r", "w", "e"],
              answer: "x",
            },
            {
              question: "Who can Linux permissions apply to?",
              options: [
                "Owner, group, and others",
                "Only the owner",
                "Only administrators",
                "Only applications",
              ],
              answer: "Owner, group, and others",
            },
            {
              question: "Which command shows detailed file permissions?",
              options: ["ls -l", "pwd", "cd", "touch"],
              answer: "ls -l",
            },
          ],
        },

        {
          title: "chmod, chown, and Ownership",
          content: `
Linux provides commands for changing permissions and ownership.

chmod changes file or directory permissions.

Permissions can be represented symbolically or numerically.

A common numeric representation is:
- Read = 4
- Write = 2
- Execute = 1

The values can be combined. For example, 7 represents read, write, and execute permissions.

chown changes the owner of a file.

chgrp changes the group associated with a file.

Correct ownership and permissions are important for system security.
          `,
          quiz: [
            {
              question: "Which command changes file permissions?",
              options: ["chmod", "chown", "chgrp", "ls"],
              answer: "chmod",
            },
            {
              question: "Which command changes file ownership?",
              options: ["chown", "chmod", "pwd", "grep"],
              answer: "chown",
            },
            {
              question: "What numeric value represents read permission?",
              options: ["4", "2", "1", "7"],
              answer: "4",
            },
            {
              question: "What numeric value represents write permission?",
              options: ["2", "4", "1", "6"],
              answer: "2",
            },
            {
              question: "What does the value 7 represent in Linux permissions?",
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
          title: "Users and Groups",
          content: `
Linux supports multiple users and groups.

Each user normally has a username and user ID.

Groups make it easier to manage permissions for multiple users.

The whoami command shows the current user.

The id command displays information about the current user and groups.

The passwd command is used to manage a user's password.

Administrators can create users with commands such as useradd.

The groupadd command creates a new group.

Managing users and groups properly helps control access to system resources.
          `,
          quiz: [
            {
              question: "What is a group used for in Linux?",
              options: [
                "Managing permissions for multiple users",
                "Increasing disk size",
                "Changing file formats",
                "Creating network cables",
              ],
              answer: "Managing permissions for multiple users",
            },
            {
              question: "Which command displays user and group information?",
              options: ["id", "pwd", "ls", "cat"],
              answer: "id",
            },
            {
              question: "Which command manages a user's password?",
              options: ["passwd", "useradd", "groupadd", "chmod"],
              answer: "passwd",
            },
            {
              question: "Which command creates a user?",
              options: ["useradd", "groupadd", "passwd", "chown"],
              answer: "useradd",
            },
            {
              question: "Which command creates a group?",
              options: ["groupadd", "useradd", "chmod", "id"],
              answer: "groupadd",
            },
          ],
        },

        {
          title: "Processes and Services",
          content: `
A process is a running instance of a program.

Linux provides commands for viewing and managing processes.

The ps command displays information about running processes.

The top command provides a continuously updated view of system processes and resource usage.

The kill command can send signals to a process.

Background processes allow commands to continue running without occupying the terminal.

Modern Linux systems commonly use systemd to manage services.

The systemctl command can start, stop, restart, enable, and check services.

Understanding processes and services is important for system administration and troubleshooting.
          `,
          quiz: [
            {
              question: "What is a process?",
              options: [
                "A running instance of a program",
                "A directory",
                "A network cable",
                "A file permission",
              ],
              answer: "A running instance of a program",
            },
            {
              question: "Which command displays running processes?",
              options: ["ps", "pwd", "cd", "mkdir"],
              answer: "ps",
            },
            {
              question: "Which command provides a live process view?",
              options: ["top", "cat", "touch", "cp"],
              answer: "top",
            },
            {
              question: "Which command can send a signal to a process?",
              options: ["kill", "ls", "pwd", "grep"],
              answer: "kill",
            },
            {
              question: "Which command is commonly used to manage systemd services?",
              options: ["systemctl", "chmod", "useradd", "nslookup"],
              answer: "systemctl",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Package Management, Storage, and Networking",
      description:
        "Learn software packages, disk usage, archives, networking commands, and remote access.",

      lessons: [
        {
          title: "Package Management",
          content: `
Linux distributions use package managers to install, update, and remove software.

Ubuntu and Debian commonly use APT.

Commands such as apt update refresh available package information.

apt install can install packages.

apt remove can remove installed packages.

Fedora and related distributions commonly use DNF.

Package managers simplify software installation because they can also handle dependencies.

Keeping packages updated helps improve functionality and security.
          `,
          quiz: [
            {
              question: "What is a package manager used for?",
              options: [
                "Installing and managing software",
                "Changing monitor settings",
                "Creating users only",
                "Testing network cables",
              ],
              answer: "Installing and managing software",
            },
            {
              question: "Which package manager is common on Ubuntu?",
              options: ["APT", "DNF only", "NPM only", "PIP only"],
              answer: "APT",
            },
            {
              question: "What does apt update do?",
              options: [
                "Refreshes available package information",
                "Deletes all packages",
                "Creates a new user",
                "Changes file permissions",
              ],
              answer: "Refreshes available package information",
            },
            {
              question: "Which command installs a package using APT?",
              options: [
                "apt install",
                "apt remove",
                "apt list",
                "apt search-only",
              ],
              answer: "apt install",
            },
            {
              question: "Why are package managers useful?",
              options: [
                "They simplify software installation and dependencies",
                "They replace the Linux kernel",
                "They remove networking",
                "They create hardware",
              ],
              answer:
                "They simplify software installation and dependencies",
            },
          ],
        },

        {
          title: "Disk Usage and File Archives",
          content: `
Linux provides commands for checking storage usage and managing archives.

The df command displays filesystem disk space usage.

The du command shows how much space files and directories use.

The free command displays memory usage.

The tar command is commonly used to create and extract archives.

Compressed archive formats can reduce storage requirements and make file transfers easier.

For example, tar archives are often combined with compression tools such as gzip.

Checking disk usage is useful when a system begins running out of storage.
          `,
          quiz: [
            {
              question: "Which command displays filesystem disk space?",
              options: ["df", "du", "tar", "free"],
              answer: "df",
            },
            {
              question: "Which command shows directory space usage?",
              options: ["du", "df", "free", "pwd"],
              answer: "du",
            },
            {
              question: "Which command displays memory information?",
              options: ["free", "df", "du", "tar"],
              answer: "free",
            },
            {
              question: "Which command is commonly used to create archives?",
              options: ["tar", "grep", "chmod", "ps"],
              answer: "tar",
            },
            {
              question: "Why are archives useful?",
              options: [
                "They package multiple files for storage or transfer",
                "They replace user accounts",
                "They increase CPU speed",
                "They remove all permissions",
              ],
              answer:
                "They package multiple files for storage or transfer",
            },
          ],
        },

        {
          title: "Linux Networking Commands",
          content: `
Linux includes several commands for checking network configuration.

The ip command can display and manage network interfaces and addresses.

ping tests connectivity to another host.

ss displays network sockets and connections.

ip route displays routing information.

hostname shows or changes the system hostname depending on the options used.

Network commands are useful when diagnosing connectivity problems.

A typical troubleshooting process might check the interface, IP address, routing table, gateway, and DNS configuration.
          `,
          quiz: [
            {
              question: "Which command is commonly used to manage network interfaces?",
              options: ["ip", "cat", "tar", "chmod"],
              answer: "ip",
            },
            {
              question: "Which command tests network reachability?",
              options: ["ping", "mkdir", "passwd", "df"],
              answer: "ping",
            },
            {
              question: "Which command displays socket information?",
              options: ["ss", "pwd", "cp", "touch"],
              answer: "ss",
            },
            {
              question: "Which command displays routing information?",
              options: ["ip route", "ls", "whoami", "cat"],
              answer: "ip route",
            },
            {
              question: "Which command displays the system hostname?",
              options: ["hostname", "passwd", "chmod", "df"],
              answer: "hostname",
            },
          ],
        },

        {
          title: "SSH and Remote Access",
          content: `
SSH stands for Secure Shell.

SSH provides secure remote access to another computer over a network.

A common SSH command connects to a remote system using a username and hostname or IP address.

SSH is widely used for managing Linux servers.

Authentication can use passwords or SSH keys.

SSH keys generally provide a convenient and secure method for automated or repeated access when configured correctly.

Administrators should protect private keys and avoid sharing them.

SSH can also be used for secure file transfer through tools such as scp or sftp.
          `,
          quiz: [
            {
              question: "What does SSH stand for?",
              options: [
                "Secure Shell",
                "System Sharing Host",
                "Secure Server Hardware",
                "Shell System Handler",
              ],
              answer: "Secure Shell",
            },
            {
              question: "What is SSH mainly used for?",
              options: [
                "Secure remote access",
                "Creating disk partitions",
                "Changing monitor settings",
                "Formatting documents",
              ],
              answer: "Secure remote access",
            },
            {
              question: "What can be used for SSH authentication?",
              options: [
                "Passwords or SSH keys",
                "Only usernames",
                "Only MAC addresses",
                "Only DNS records",
              ],
              answer: "Passwords or SSH keys",
            },
            {
              question: "What should be protected carefully?",
              options: ["Private SSH keys", "Public website names", "File extensions", "Screen resolution"],
              answer: "Private SSH keys",
            },
            {
              question: "Which tool can securely transfer files using SSH?",
              options: ["scp", "mkdir", "grep", "ps"],
              answer: "scp",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Shell, Automation, and System Administration",
      description:
        "Learn Bash scripting, environment variables, logs, scheduled tasks, and basic Linux administration.",

      lessons: [
        {
          title: "Bash Shell Basics",
          content: `
Bash is a commonly used shell on Linux systems.

A shell interprets commands and allows users to interact with the operating system.

A Bash script is a text file containing commands that can be executed as a sequence.

Variables can store values.

Commands can use arguments and produce output.

The echo command displays text.

Conditional statements allow a script to make decisions.

Loops allow commands to be repeated.

Scripts can automate repetitive tasks and reduce manual work.
          `,
          quiz: [
            {
              question: "What is Bash?",
              options: [
                "A shell",
                "A database",
                "A web server only",
                "A network cable",
              ],
              answer: "A shell",
            },
            {
              question: "What is a Bash script?",
              options: [
                "A file containing commands to execute",
                "A hardware component",
                "A network protocol",
                "A disk partition",
              ],
              answer: "A file containing commands to execute",
            },
            {
              question: "Which command displays text in Bash?",
              options: ["echo", "pwd", "chmod", "df"],
              answer: "echo",
            },
            {
              question: "What do loops provide in scripts?",
              options: [
                "Repeated execution",
                "User authentication",
                "Disk formatting",
                "Network routing",
              ],
              answer: "Repeated execution",
            },
            {
              question: "Why are shell scripts useful?",
              options: [
                "They automate repetitive tasks",
                "They replace all hardware",
                "They remove the filesystem",
                "They prevent networking",
              ],
              answer: "They automate repetitive tasks",
            },
          ],
        },

        {
          title: "Variables, Conditions, and Loops",
          content: `
Variables allow Bash scripts to store information such as names, paths, numbers, and command results.

A conditional statement can perform different actions depending on whether a condition is true or false.

Common conditional structures include if and case.

Loops can repeat commands for multiple values or while a condition remains true.

Common loops include for and while.

Command substitution allows the output of a command to be used as part of another command.

These features allow simple scripts to become useful automation tools.
          `,
          quiz: [
            {
              question: "What are variables used for in Bash?",
              options: [
                "Storing values",
                "Creating network cables",
                "Changing CPU hardware",
                "Replacing directories",
              ],
              answer: "Storing values",
            },
            {
              question: "Which structure is used for conditional decisions?",
              options: ["if", "for", "while only", "echo"],
              answer: "if",
            },
            {
              question: "Which loop commonly repeats commands for a list of values?",
              options: ["for", "if", "case only", "pwd"],
              answer: "for",
            },
            {
              question: "Which loop can continue while a condition remains true?",
              options: ["while", "echo", "ls", "cd"],
              answer: "while",
            },
            {
              question: "What is command substitution used for?",
              options: [
                "Using command output as part of another command",
                "Deleting commands",
                "Changing file permissions",
                "Creating a network interface",
              ],
              answer:
                "Using command output as part of another command",
            },
          ],
        },

        {
          title: "Logs, Environment Variables, and Scheduled Tasks",
          content: `
Linux systems record important events in log files.

Logs can help administrators investigate errors, service failures, authentication events, and other system activity.

The /var/log directory commonly contains system and application logs.

Environment variables store configuration values that programs and shells can use.

The printenv or env commands can display environment variables.

Scheduled tasks allow commands to run automatically.

Cron is commonly used for recurring scheduled tasks.

For example, a system can run a backup script automatically at a chosen time.

Logs and automation are important parts of system administration.
          `,
          quiz: [
            {
              question: "Where are many Linux logs commonly stored?",
              options: ["/var/log", "/home/logs", "/etc/users", "/tmp/network"],
              answer: "/var/log",
            },
            {
              question: "Why are logs useful?",
              options: [
                "They help investigate system events and errors",
                "They increase RAM",
                "They replace passwords",
                "They create network hardware",
              ],
              answer: "They help investigate system events and errors",
            },
            {
              question: "What do environment variables store?",
              options: [
                "Configuration values",
                "Only image files",
                "Network cables",
                "CPU instructions only",
              ],
              answer: "Configuration values",
            },
            {
              question: "Which command can display environment variables?",
              options: ["printenv", "mkdir", "chmod", "kill"],
              answer: "printenv",
            },
            {
              question: "What is cron commonly used for?",
              options: [
                "Scheduled tasks",
                "Changing file ownership",
                "Viewing processes",
                "Testing network cables",
              ],
              answer: "Scheduled tasks",
            },
          ],
        },

        {
          title: "Final Project: Linux System Administration Basics",
          content: `
For the final project, create a small Linux administration workflow.

Start by creating a project directory and several files.

Practice navigating directories and viewing file contents.

Create a user and group in a test Linux environment.

Set suitable file permissions and ownership.

Install a small software package using the system package manager.

Check disk usage and running processes.

Test network connectivity using ping and inspect network information using ip.

Create a simple Bash script that performs a useful task, such as checking disk usage or creating a backup archive.

Finally, schedule the script using a suitable scheduling mechanism.

This project combines Linux commands, permissions, users, packages, processes, networking, scripting, and automation.
          `,
          quiz: [
            {
              question: "What should be configured when protecting files?",
              options: [
                "Permissions and ownership",
                "Screen resolution",
                "Keyboard color",
                "Browser theme",
              ],
              answer: "Permissions and ownership",
            },
            {
              question: "Which command can be used to check running processes?",
              options: ["ps", "mkdir", "chmod", "touch"],
              answer: "ps",
            },
            {
              question: "Which command can test network connectivity?",
              options: ["ping", "tar", "passwd", "du"],
              answer: "ping",
            },
            {
              question: "What is a useful purpose for a Bash script?",
              options: [
                "Automating repetitive administration tasks",
                "Replacing the operating system kernel",
                "Creating physical network cables",
                "Increasing monitor size",
              ],
              answer: "Automating repetitive administration tasks",
            },
            {
              question: "What is the main goal of Linux system administration?",
              options: [
                "Keep systems configured, secure, available, and working properly",
                "Only install applications",
                "Only change user passwords",
                "Only manage network cables",
              ],
              answer:
                "Keep systems configured, secure, available, and working properly",
            },
          ],
        },
      ],
    },
  ],
};

export default linuxBasicsCourse;