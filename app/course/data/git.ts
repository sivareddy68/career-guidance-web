const gitCourse = {
  title: "Git",
  description:
    "Learn Git fundamentals, repositories, commits, branches, merging, remotes, GitHub workflows, collaboration, conflict resolution, history, tags, and practical version control.",

  weeks: [
    {
      title: "Week 1: Git Fundamentals",
      description:
        "Understand version control, Git repositories, commits, staging, branches, and basic Git workflows.",
      lessons: [
        {
          title: "Introduction to Git and Version Control",
          content: `
Git is a distributed version control system used to track changes in files and projects.

Version control is useful because software projects change continuously. Developers add features, fix bugs, modify configuration, and sometimes need to return to an earlier version.

Without version control, keeping track of these changes manually can become difficult.

Git stores information about changes in a repository.

A repository is the location where Git keeps the project's version-control information and tracks files.

Git can be used for:
- Software development.
- Web development.
- Documentation.
- Data and configuration files.
- Team projects.
- Personal projects.

Important Git concepts include:
- Repository.
- Commit.
- Working directory.
- Staging area.
- Branch.
- Remote repository.
- Merge.

Git is distributed, which means developers can maintain a complete local copy of the repository history.

Git itself is different from GitHub.

Git is the version-control tool.

GitHub is an online platform that can host Git repositories and provide collaboration features.

Other platforms can also host Git repositories.

A typical workflow is:

1. Modify files.
2. Check the changes.
3. Stage the changes.
4. Create a commit.
5. Push commits to a remote repository when collaboration or backup is needed.

Git does not automatically make every project safe. Developers still need to use meaningful commits, review changes, and avoid accidentally committing sensitive information.
          `,
          quiz: [
            {
              question: "What is Git?",
              options: [
                "A distributed version control system",
                "A database management system",
                "A web browser",
                "An operating system",
              ],
              answer: "A distributed version control system",
            },
            {
              question: "What is version control used for?",
              options: [
                "Tracking changes to files and projects",
                "Increasing CPU speed",
                "Replacing an operating system",
                "Designing computer hardware",
              ],
              answer: "Tracking changes to files and projects",
            },
            {
              question: "What is a Git repository?",
              options: [
                "A location where Git tracks a project's version history",
                "A computer processor",
                "A network cable",
                "A database table only",
              ],
              answer:
                "A location where Git tracks a project's version history",
            },
            {
              question: "Which statement correctly distinguishes Git from GitHub?",
              options: [
                "Git is version-control software, while GitHub hosts Git repositories and collaboration features",
                "Git and GitHub are exactly the same software",
                "GitHub is an operating system and Git is a database",
                "Git is only used for email",
              ],
              answer:
                "Git is version-control software, while GitHub hosts Git repositories and collaboration features",
            },
            {
              question: "Which sequence represents a basic Git workflow?",
              options: [
                "Modify, stage, commit, and push when needed",
                "Push, delete, format, and reinstall",
                "Compile, shut down, and restart",
                "Download, print, and scan",
              ],
              answer: "Modify, stage, commit, and push when needed",
            },
          ],
        },

        {
          title: "Installing Git and Creating a Repository",
          content: `
Before using Git, Git needs to be installed on the computer.

After installation, the git command can be used from a terminal.

A repository can be created inside a project directory.

The command:

git init

initializes a new Git repository in the current directory.

Git creates a hidden .git directory that stores repository information.

The .git directory is important to Git and should not normally be manually edited.

After initializing a repository, Git can inspect the project's current state.

The command:

git status

shows information such as modified files, staged files, and untracked files.

A file that Git has not started tracking is called an untracked file.

Git does not automatically include every file in a commit.

Files normally move through stages:

Working directory → Staging area → Commit

The working directory contains the files being edited.

The staging area contains changes selected for the next commit.

The commit stores a snapshot of the selected changes in the repository history.

A repository can be initialized for an existing project or created by cloning an existing remote repository.

It is important to initialize Git at the correct project directory so that the intended files are tracked.

Projects should also use a .gitignore file to prevent unnecessary or sensitive files from being tracked.
          `,
          quiz: [
            {
              question: "Which command initializes a new Git repository?",
              options: [
                "git init",
                "git start",
                "git create",
                "git repository",
              ],
              answer: "git init",
            },
            {
              question: "Which command shows the current Git status?",
              options: [
                "git status",
                "git check",
                "git state",
                "git inspect",
              ],
              answer: "git status",
            },
            {
              question: "What is an untracked file?",
              options: [
                "A file Git is not currently tracking",
                "A file that has already been committed",
                "A deleted repository",
                "A remote server",
              ],
              answer: "A file Git is not currently tracking",
            },
            {
              question: "Where does Git store repository information after initialization?",
              options: [
                "The .git directory",
                "The Documents folder automatically",
                "The browser cache",
                "The recycle bin",
              ],
              answer: "The .git directory",
            },
            {
              question: "What is the normal progression for a change before it becomes part of history?",
              options: [
                "Working directory, staging area, commit",
                "Commit, working directory, staging area",
                "Remote, browser, commit",
                "Staging area, operating system, remote",
              ],
              answer: "Working directory, staging area, commit",
            },
          ],
        },

        {
          title: "Commits and the Staging Area",
          content: `
A commit records a set of changes in the Git repository history.

Before creating a commit, changes are normally placed into the staging area.

The staging area allows developers to select exactly which changes should be included in the next commit.

The command:

git add filename

stages a particular file.

Git also supports staging multiple files.

After staging, git status can be used to verify what is prepared for the next commit.

A commit can then be created with:

git commit -m "Meaningful message"

A good commit message briefly explains what changed.

Examples of useful commit messages include:
- Add login validation.
- Fix student profile loading.
- Update course navigation.
- Add database connection handling.

Commits should generally represent logical units of work.

A commit containing one understandable change is easier to review and revert than a commit containing many unrelated changes.

Git commits are stored in the repository history and have unique identifiers.

Developers can inspect previous commits and compare changes between versions.

A commit does not automatically upload changes to GitHub.

Pushing is a separate operation used to send local commits to a remote repository.

Understanding the difference between staging, committing, and pushing is essential for using Git correctly.
          `,
          quiz: [
            {
              question: "What does a Git commit represent?",
              options: [
                "A recorded set of changes in repository history",
                "A temporary terminal window",
                "A network connection",
                "A software installation",
              ],
              answer:
                "A recorded set of changes in repository history",
            },
            {
              question: "What is the purpose of the staging area?",
              options: [
                "To select changes for the next commit",
                "To permanently delete files",
                "To upload files automatically",
                "To install Git",
              ],
              answer: "To select changes for the next commit",
            },
            {
              question: "Which command stages a file?",
              options: [
                "git add filename",
                "git stage filename",
                "git prepare filename",
                "git commit filename",
              ],
              answer: "git add filename",
            },
            {
              question: "What makes a commit message useful?",
              options: [
                "It clearly describes the change",
                "It contains random characters",
                "It is always extremely long",
                "It contains no information",
              ],
              answer: "It clearly describes the change",
            },
            {
              question: "Does creating a commit automatically push it to GitHub?",
              options: [
                "No",
                "Yes",
                "Only when using Python",
                "Only when using Windows",
              ],
              answer: "No",
            },
          ],
        },

        {
          title: "Git Log and Repository History",
          content: `
One of Git's major advantages is its ability to maintain project history.

The command:

git log

shows previous commits.

A commit normally contains information such as:
- Commit identifier.
- Author.
- Date.
- Commit message.

The history allows developers to understand how a project changed over time.

Git can also show differences between versions.

The command:

git diff

is commonly used to inspect changes that have not been staged.

Git diff can help developers review their work before committing.

Git history is useful for debugging.

For example, if a feature worked previously but stopped working after a change, developers can inspect commits to understand what changed.

A good history should contain meaningful commits.

Developers should avoid unnecessary commits with unclear messages because they make history harder to understand.

Git can also show a compact history using:

git log --oneline

The exact commands used for history inspection can vary depending on what information is needed.

Repository history should generally be treated as an important record of project development.

Git does not replace testing. A commit records changes, but developers should still verify that the changes work correctly.

Good version-control practices combine meaningful commits, clear messages, testing, and regular review.
          `,
          quiz: [
            {
              question: "Which command displays commit history?",
              options: [
                "git log",
                "git history",
                "git commits",
                "git timeline",
              ],
              answer: "git log",
            },
            {
              question: "What information can a commit contain?",
              options: [
                "Author, date, identifier, and commit message",
                "Only the monitor resolution",
                "Only the computer name",
                "Only the operating system version",
              ],
              answer:
                "Author, date, identifier, and commit message",
            },
            {
              question: "What is git diff commonly used for?",
              options: [
                "Inspecting changes between versions or working states",
                "Installing Git",
                "Creating a repository",
                "Changing the operating system",
              ],
              answer:
                "Inspecting changes between versions or working states",
            },
            {
              question: "Why is Git history useful for debugging?",
              options: [
                "It helps developers examine previous changes",
                "It automatically fixes all bugs",
                "It removes the need for testing",
                "It prevents every future error",
              ],
              answer:
                "It helps developers examine previous changes",
            },
            {
              question: "Which command displays a compact commit history?",
              options: [
                "git log --oneline",
                "git compact",
                "git short-history",
                "git log --small",
              ],
              answer: "git log --oneline",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Branches and Merging",
      description:
        "Learn branches, feature development, merging, conflicts, and practical branching workflows.",
      lessons: [
        {
          title: "Git Branches",
          content: `
A Git branch is an independent line of development.

Branches allow developers to work on changes without immediately modifying the main development line.

For example, a developer might create a feature branch for a new login system.

The main branch can remain stable while the feature is being developed.

Branches are lightweight in Git and can be created quickly.

A common workflow is:

1. Start from the main branch.
2. Create a feature branch.
3. Make changes.
4. Commit the changes.
5. Test the feature.
6. Merge the feature into the main branch.

A branch name should describe its purpose.

Examples:
- feature/login-page
- feature/course-progress
- fix/navigation-error

Modern repositories may use main as the primary branch name.

The command:

git branch

lists branches.

The command:

git switch -c branch-name

can create and switch to a new branch.

Branching helps isolate work and reduces the risk of incomplete changes being placed directly into the main branch.

Branches should generally be kept focused and reasonably short-lived when working on small features.

The exact branching strategy depends on the team and project.
          `,
          quiz: [
            {
              question: "What is a Git branch?",
              options: [
                "An independent line of development",
                "A backup hard drive",
                "A network connection",
                "A Git installation file",
              ],
              answer: "An independent line of development",
            },
            {
              question: "Why are feature branches useful?",
              options: [
                "They isolate feature work from the main development line",
                "They delete the main branch",
                "They automatically deploy applications",
                "They replace testing",
              ],
              answer:
                "They isolate feature work from the main development line",
            },
            {
              question: "Which command creates and switches to a new branch?",
              options: [
                "git switch -c branch-name",
                "git branch-new branch-name",
                "git create branch-name",
                "git new branch-name",
              ],
              answer: "git switch -c branch-name",
            },
            {
              question: "Which is a meaningful feature branch name?",
              options: [
                "feature/login-page",
                "branch123456789random",
                "abc",
                "test123456789999",
              ],
              answer: "feature/login-page",
            },
            {
              question: "What is the purpose of isolating feature work?",
              options: [
                "To reduce the risk of incomplete changes affecting the main line",
                "To prevent all developers from collaborating",
                "To remove project history",
                "To delete previous versions",
              ],
              answer:
                "To reduce the risk of incomplete changes affecting the main line",
            },
          ],
        },

        {
          title: "Merging Branches",
          content: `
Merging combines changes from one branch into another branch.

For example, after completing and testing a feature branch, its changes can be merged into the main branch.

A typical process is:

1. Switch to the branch that should receive the changes.
2. Run the merge command with the source branch.

For example:

git switch main
git merge feature/login-page

Git attempts to combine the histories.

Sometimes Git can merge changes automatically.

In other cases, Git detects that different branches changed the same part of a file in incompatible ways.

This creates a merge conflict.

Merge conflicts are not necessarily errors in Git. They indicate that Git needs a human to decide which version should be retained or how the changes should be combined.

After resolving a conflict, the affected files are staged and the merge can be completed.

Developers should test the project after merging because combining changes can introduce unexpected behavior even when Git completes the merge successfully.

Small, focused commits and branches make merges easier to understand.

Before merging important work, teams may also use code review through a platform such as GitHub.

A merge should be treated as an important integration point where the combined code is verified.
          `,
          quiz: [
            {
              question: "What does merging do?",
              options: [
                "Combines changes from one branch into another",
                "Deletes all branches",
                "Installs Git",
                "Creates a new computer",
              ],
              answer:
                "Combines changes from one branch into another",
            },
            {
              question: "Which branch commonly receives a completed feature?",
              options: [
                "The main development branch",
                "The operating system branch",
                "The browser branch",
                "The hardware branch",
              ],
              answer: "The main development branch",
            },
            {
              question: "What is a merge conflict?",
              options: [
                "A situation where Git cannot automatically combine conflicting changes",
                "A Git installation error",
                "A network outage",
                "A deleted repository",
              ],
              answer:
                "A situation where Git cannot automatically combine conflicting changes",
            },
            {
              question: "Who normally decides how a merge conflict should be resolved?",
              options: [
                "A developer or team member who understands the intended changes",
                "Git automatically in every case",
                "The operating system",
                "The computer monitor",
              ],
              answer:
                "A developer or team member who understands the intended changes",
            },
            {
              question: "What should be done after merging important changes?",
              options: [
                "Test the combined project",
                "Delete the repository",
                "Disable version control",
                "Remove all branches immediately",
              ],
              answer: "Test the combined project",
            },
          ],
        },

        {
          title: "Merge Conflicts and Conflict Resolution",
          content: `
A merge conflict occurs when Git cannot automatically determine how different changes should be combined.

A common example occurs when two branches modify the same lines of a file differently.

Git marks the conflicting section in the file.

Conflict markers typically identify:
- The current branch's version.
- The incoming branch's version.
- The boundary between them.

The developer must inspect the conflicting content and decide the correct final version.

The resolution process is:

1. Identify conflicted files.
2. Open each conflicted file.
3. Understand both changes.
4. Edit the file into the desired final state.
5. Remove the conflict markers.
6. Test the result.
7. Stage the resolved files.
8. Complete the merge.

The important point is that conflict resolution is a code decision, not simply a text replacement.

Sometimes both changes should be kept.

Sometimes one change should be removed.

Sometimes the code needs to be rewritten so both requirements work together.

Developers should avoid resolving conflicts blindly.

After resolving a conflict, tests should be run because the final combination may compile but still behave incorrectly.

Clear communication between team members can also reduce difficult conflicts.

Keeping branches reasonably focused and integrating work regularly can make conflicts easier to manage.
          `,
          quiz: [
            {
              question: "When does a merge conflict occur?",
              options: [
                "When Git cannot automatically combine incompatible changes",
                "Whenever a repository is created",
                "Whenever a commit is made",
                "Whenever Git is installed",
              ],
              answer:
                "When Git cannot automatically combine incompatible changes",
            },
            {
              question: "What should a developer do when resolving a conflict?",
              options: [
                "Understand both changes and create the correct final version",
                "Always keep the incoming version",
                "Always keep the current version",
                "Delete the entire project",
              ],
              answer:
                "Understand both changes and create the correct final version",
            },
            {
              question: "What should be removed after manually resolving a conflict?",
              options: [
                "Conflict markers",
                "The repository",
                "All commit history",
                "Git itself",
              ],
              answer: "Conflict markers",
            },
            {
              question: "Why should code be tested after conflict resolution?",
              options: [
                "The combined code may still contain logical or functional problems",
                "Git automatically guarantees correctness",
                "Testing is required only before Git installation",
                "Testing deletes conflicts",
              ],
              answer:
                "The combined code may still contain logical or functional problems",
            },
            {
              question: "What can reduce difficult merge conflicts?",
              options: [
                "Regular integration and focused branches",
                "Never committing changes",
                "Deleting branch history",
                "Avoiding version control",
              ],
              answer:
                "Regular integration and focused branches",
            },
          ],
        },

        {
          title: "Undoing and Recovering Changes",
          content: `
Git provides several ways to undo changes, but the correct command depends on what needs to be undone.

A working-directory modification that has not been staged can often be discarded using appropriate Git restore operations.

A staged change can be removed from the staging area without necessarily deleting the file's working-directory changes.

A committed change can be reversed using different approaches depending on whether the commit has already been shared.

The command:

git revert

creates a new commit that reverses the effect of an earlier commit.

This is often appropriate for changes that have already been shared with other developers because it preserves the existing history.

Git also provides reset functionality, but reset changes the current branch's history or position and should be used carefully, especially when commits have already been shared.

Before undoing work, developers should understand:
- What state the file is in.
- Whether the change is staged.
- Whether it has been committed.
- Whether the commit has been pushed.
- Whether other developers depend on the history.

Git can recover from many situations because repository history contains references to previous states, but recovery is easier when changes are committed regularly.

Important work should not be deleted casually.

When unsure, inspect the status and history before performing an operation that changes repository state.
          `,
          quiz: [
            {
              question: "Which command creates a new commit that reverses an earlier commit?",
              options: [
                "git revert",
                "git reverse-delete",
                "git undo-commit",
                "git cancel",
              ],
              answer: "git revert",
            },
            {
              question: "Why can git revert be useful for shared history?",
              options: [
                "It preserves existing history while adding a reversing commit",
                "It deletes the entire repository",
                "It removes every previous commit",
                "It disables collaboration",
              ],
              answer:
                "It preserves existing history while adding a reversing commit",
            },
            {
              question: "Why should reset operations be used carefully?",
              options: [
                "They can change the current branch's history or position",
                "They always install Git",
                "They automatically upload files",
                "They only affect monitor settings",
              ],
              answer:
                "They can change the current branch's history or position",
            },
            {
              question: "What should be checked before undoing changes?",
              options: [
                "Whether the changes are staged, committed, or shared",
                "Only the computer's wallpaper",
                "Only the monitor resolution",
                "Only the keyboard type",
              ],
              answer:
                "Whether the changes are staged, committed, or shared",
            },
            {
              question: "Why are regular commits useful for recovery?",
              options: [
                "They provide clear points in the project history",
                "They guarantee no bugs",
                "They replace backups in every situation",
                "They prevent all accidental changes",
              ],
              answer:
                "They provide clear points in the project history",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Remote Repositories and Collaboration",
      description:
        "Learn remote repositories, GitHub workflows, cloning, pushing, pulling, fetching, and collaborative development.",
      lessons: [
        {
          title: "Remote Repositories and GitHub",
          content: `
A remote repository is a Git repository stored somewhere other than the local computer.

Remote repositories are useful for:
- Collaboration.
- Backup of project history.
- Sharing code.
- Code review.
- Team workflows.

GitHub is one platform that hosts Git repositories.

Other services can also host Git repositories.

A local repository can be connected to a remote repository.

The remote is commonly given a name such as origin.

A remote repository may be created before or after the local project.

The command:

git remote -v

can show configured remote URLs.

A project can have more than one remote, although most beginner projects commonly use origin.

When a developer pushes commits, local history is sent to the remote repository.

When a developer fetches or pulls changes, information from the remote repository is brought into the local repository.

Remote repositories do not replace local Git history. Git is distributed, so local repositories can maintain substantial history independently.

When using public repositories, developers should avoid committing passwords, API keys, private tokens, or other secrets.

A .gitignore file can prevent many unnecessary files from being added, but it should not be considered a complete secret-management solution.

Repositories should also use appropriate access controls and collaboration settings.
          `,
          quiz: [
            {
              question: "What is a remote repository?",
              options: [
                "A Git repository stored outside the local working environment",
                "A local text file",
                "A computer monitor",
                "A terminal command",
              ],
              answer:
                "A Git repository stored outside the local working environment",
            },
            {
              question: "What is GitHub?",
              options: [
                "A platform that hosts Git repositories and collaboration features",
                "A programming language",
                "An operating system",
                "A database engine",
              ],
              answer:
                "A platform that hosts Git repositories and collaboration features",
            },
            {
              question: "What is a common name for the primary remote?",
              options: [
                "origin",
                "main",
                "primary-file",
                "server1",
              ],
              answer: "origin",
            },
            {
              question: "Which command shows configured remote URLs?",
              options: [
                "git remote -v",
                "git show-remote-file",
                "git url",
                "git remote-address",
              ],
              answer: "git remote -v",
            },
            {
              question: "What should developers avoid committing to public repositories?",
              options: [
                "API keys and passwords",
                "README files",
                "Source code",
                "Documentation",
              ],
              answer: "API keys and passwords",
            },
          ],
        },

        {
          title: "Clone, Fetch, Pull, and Push",
          content: `
Git provides commands for synchronizing local repositories with remote repositories.

git clone creates a local copy of a remote repository.

Cloning is commonly used when starting work on an existing project.

git fetch downloads information about changes from a remote repository without automatically integrating those changes into the current branch.

Fetching is useful when you want to inspect remote changes before deciding how to integrate them.

git pull generally performs a fetch followed by an integration operation, depending on the repository configuration.

git push sends local commits to a remote repository.

A simplified workflow is:

1. Pull or fetch recent changes.
2. Make local changes.
3. Commit the changes.
4. Push the commits.

However, teams may use more controlled workflows involving feature branches and pull requests.

A push can be rejected if the remote branch contains changes that the local branch does not have.

In that situation, the developer usually needs to synchronize with the remote history and resolve any conflicts before pushing again.

Understanding the difference between fetch and pull is useful.

Fetch updates knowledge of the remote repository.

Pull generally brings those changes into the current local development context.

Good collaboration requires developers to understand what their commands will change before running them.
          `,
          quiz: [
            {
              question: "What does git clone do?",
              options: [
                "Creates a local copy of a remote repository",
                "Deletes a remote repository",
                "Creates a database",
                "Installs an operating system",
              ],
              answer:
                "Creates a local copy of a remote repository",
            },
            {
              question: "What does git fetch primarily do?",
              options: [
                "Downloads information about remote changes without automatically integrating them",
                "Deletes remote branches",
                "Creates a new operating system",
                "Automatically edits source code",
              ],
              answer:
                "Downloads information about remote changes without automatically integrating them",
            },
            {
              question: "What does git push do?",
              options: [
                "Sends local commits to a remote repository",
                "Downloads a repository",
                "Deletes local commits",
                "Creates a new branch automatically",
              ],
              answer:
                "Sends local commits to a remote repository",
            },
            {
              question: "Why might a push be rejected?",
              options: [
                "The remote branch may contain changes not present locally",
                "Git cannot store commits",
                "The repository always rejects pushes",
                "The computer has no keyboard",
              ],
              answer:
                "The remote branch may contain changes not present locally",
            },
            {
              question: "How does fetch differ from pull?",
              options: [
                "Fetch retrieves remote information while pull generally also integrates it",
                "Fetch deletes changes while pull creates them",
                "They always have completely unrelated purposes",
                "Pull only works without a repository",
              ],
              answer:
                "Fetch retrieves remote information while pull generally also integrates it",
            },
          ],
        },

        {
          title: "Pull Requests and Code Review",
          content: `
A pull request is a collaboration mechanism commonly provided by platforms such as GitHub.

A developer can create a feature branch, push it to a remote repository, and open a pull request asking that the changes be reviewed and integrated.

A pull request can include:
- Description of the change.
- Related issue or task.
- Code changes.
- Automated test results.
- Reviewer comments.

Code review allows other developers to examine proposed changes before they become part of an important branch.

Reviewers may identify:
- Bugs.
- Security problems.
- Poor naming.
- Missing tests.
- Unnecessary complexity.
- Documentation issues.

The author can then update the branch based on feedback.

A pull request is therefore more than a button for merging code. It provides a structured collaboration process.

Teams can define review requirements.

For example, important branches may require one or more approvals before merging.

Automated checks can also run against a pull request.

These checks may include tests, linting, type checking, and build verification.

A good pull request should be focused and explain why the change is needed.

Large unrelated changes can make review difficult.

Code review should be constructive and focused on improving the software rather than criticizing individuals.
          `,
          quiz: [
            {
              question: "What is a pull request commonly used for?",
              options: [
                "Proposing changes for review and integration",
                "Installing Git",
                "Deleting all branches",
                "Formatting a computer",
              ],
              answer:
                "Proposing changes for review and integration",
            },
            {
              question: "What can code review identify?",
              options: [
                "Bugs and security problems",
                "Only monitor settings",
                "Only keyboard issues",
                "Only network cable problems",
              ],
              answer: "Bugs and security problems",
            },
            {
              question: "Why are automated checks useful on pull requests?",
              options: [
                "They can verify tests, builds, linting, or other project requirements",
                "They replace every human review",
                "They guarantee the code has no bugs",
                "They delete incorrect code automatically in every case",
              ],
              answer:
                "They can verify tests, builds, linting, or other project requirements",
            },
            {
              question: "Why should pull requests usually be focused?",
              options: [
                "Focused changes are easier to review and understand",
                "Large changes are always incorrect",
                "Git requires exactly one file",
                "Focused changes cannot contain bugs",
              ],
              answer:
                "Focused changes are easier to review and understand",
            },
            {
              question: "What is the purpose of constructive code review?",
              options: [
                "To improve the quality of the software",
                "To criticize team members",
                "To prevent collaboration",
                "To remove version history",
              ],
              answer: "To improve the quality of the software",
            },
          ],
        },

        {
          title: "Git Collaboration Workflow",
          content: `
A team Git workflow defines how developers work together without constantly interfering with each other's changes.

A common beginner-friendly workflow is:

1. Start from an updated main branch.
2. Create a feature branch.
3. Implement a focused change.
4. Commit the changes.
5. Push the branch to the remote repository.
6. Create a pull request.
7. Review and test the changes.
8. Address feedback.
9. Merge the approved change.
10. Update the local repository.

Teams can use different branching strategies.

Some teams use short-lived feature branches.

Others use more structured models for release management.

The important principles are:
- Keep changes focused.
- Use meaningful commit messages.
- Synchronize regularly.
- Review changes.
- Run automated tests.
- Protect important branches.
- Avoid committing secrets.
- Communicate when multiple people work on related areas.

A good Git workflow reduces accidental conflicts and makes project history easier to understand.

Developers should also understand that Git does not decide whether a change is good. It provides tools for tracking and sharing changes.

Quality still depends on testing, review, documentation, and good engineering practices.

Git becomes especially valuable when projects grow from one developer to a team.
          `,
          quiz: [
            {
              question: "What is one benefit of a team Git workflow?",
              options: [
                "It organizes how developers share and integrate changes",
                "It guarantees perfect code",
                "It removes the need for testing",
                "It prevents all conflicts",
              ],
              answer:
                "It organizes how developers share and integrate changes",
            },
            {
              question: "What should a feature branch normally contain?",
              options: [
                "A focused change or feature",
                "Every unrelated project change",
                "Only deleted files",
                "No commits",
              ],
              answer: "A focused change or feature",
            },
            {
              question: "Why should developers synchronize regularly?",
              options: [
                "It helps reduce divergence between local and shared work",
                "It deletes project history",
                "It prevents all future bugs",
                "It removes the need for branches",
              ],
              answer:
                "It helps reduce divergence between local and shared work",
            },
            {
              question: "Which is a good collaboration practice?",
              options: [
                "Use meaningful commits and review changes",
                "Commit passwords",
                "Avoid testing",
                "Make unrelated changes in every branch",
              ],
              answer:
                "Use meaningful commits and review changes",
            },
            {
              question: "Does Git determine whether a software change is good?",
              options: [
                "No",
                "Yes, automatically",
                "Only on GitHub",
                "Only for Python projects",
              ],
              answer: "No",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Advanced Git and Practical Project",
      description:
        "Learn tags, history management, Git best practices, security, collaboration, and complete a practical Git project.",
      lessons: [
        {
          title: "Tags, Releases, and Versioning",
          content: `
Git tags are references used to mark specific points in repository history.

Tags are commonly used for release versions.

For example, a project might use tags such as:
- v1.0.0
- v1.1.0
- v2.0.0

A tag allows developers to identify a particular commit as an important version.

Tags are useful when software is released to users because the team can refer to a specific repository state.

Versioning systems often communicate the type of change.

For example, semantic versioning commonly uses:

MAJOR.MINOR.PATCH

A major version can indicate incompatible changes.

A minor version can indicate backward-compatible features.

A patch version can indicate backward-compatible fixes.

The exact release process depends on the project.

Tags can also help with debugging because developers can compare the current code with a known release.

Release notes should explain important changes, fixes, and known limitations.

A tag is not the same as a branch.

A branch normally moves forward as new commits are added.

A tag generally points to a specific point in history.

Using consistent versioning and release practices makes it easier to manage software over time.
          `,
          quiz: [
            {
              question: "What is a Git tag commonly used for?",
              options: [
                "Marking a specific point in repository history",
                "Deleting a branch",
                "Installing dependencies",
                "Creating a database",
              ],
              answer:
                "Marking a specific point in repository history",
            },
            {
              question: "Which is an example of a release tag?",
              options: [
                "v1.2.0",
                "release-random-text",
                "branch-now",
                "commit-folder",
              ],
              answer: "v1.2.0",
            },
            {
              question: "What does MAJOR.MINOR.PATCH represent in semantic versioning?",
              options: [
                "Different categories of software version changes",
                "Three Git branches",
                "Three remote repositories",
                "Three file types",
              ],
              answer:
                "Different categories of software version changes",
            },
            {
              question: "How is a tag different from a branch?",
              options: [
                "A tag generally identifies a specific point while a branch moves with new commits",
                "A tag is always a remote server",
                "A branch cannot contain commits",
                "They are always identical",
              ],
              answer:
                "A tag generally identifies a specific point while a branch moves with new commits",
            },
            {
              question: "Why are tags useful for releases?",
              options: [
                "They identify a specific repository state for a release",
                "They automatically fix bugs",
                "They replace testing",
                "They remove project history",
              ],
              answer:
                "They identify a specific repository state for a release",
            },
          ],
        },

        {
          title: "Git Best Practices and Security",
          content: `
Good Git practices make repositories easier to maintain and safer to use.

Use meaningful commit messages.

Keep commits focused on logical changes.

Create focused branches instead of mixing unrelated work.

Review changes before committing.

Use .gitignore for files that should not normally be tracked, such as build output, local configuration files, and generated files.

Never intentionally commit secrets such as:
- Passwords.
- API keys.
- Access tokens.
- Private credentials.

If a secret is accidentally committed, simply deleting it in a later commit may not be sufficient because the secret may remain in repository history.

The exposed credential should be revoked or rotated, and the repository history should be handled appropriately.

Environment variables or dedicated secret-management systems are safer ways to provide sensitive configuration.

Repositories should also use appropriate access controls.

Public repositories should be reviewed carefully before publication.

Dependency files should be managed carefully because applications can depend on external packages.

Code review can help identify security mistakes before changes are merged.

Git itself is not a security system. It records changes and provides collaboration tools.

Security depends on how repositories and credentials are managed.

Regularly reviewing repository permissions and access can reduce unnecessary exposure.
          `,
          quiz: [
            {
              question: "Which is a good Git practice?",
              options: [
                "Use meaningful commit messages",
                "Commit passwords",
                "Store API keys in source code",
                "Mix unrelated changes into every commit",
              ],
              answer: "Use meaningful commit messages",
            },
            {
              question: "What should generally not be committed to a repository?",
              options: [
                "API keys and passwords",
                "Source code",
                "README files",
                "Unit tests",
              ],
              answer: "API keys and passwords",
            },
            {
              question: "Why is deleting a secret in a later commit not always enough?",
              options: [
                "The secret may remain in earlier repository history",
                "Git never stores commits",
                "Git automatically removes all history",
                "Secrets cannot be committed",
              ],
              answer:
                "The secret may remain in earlier repository history",
            },
            {
              question: "What should happen if an exposed credential is discovered?",
              options: [
                "It should be revoked or rotated",
                "It should remain active",
                "It should be published",
                "It should be ignored",
              ],
              answer: "It should be revoked or rotated",
            },
            {
              question: "What is Git's primary purpose?",
              options: [
                "Version control and collaboration around changes",
                "Password storage",
                "Malware detection",
                "Firewall management",
              ],
              answer:
                "Version control and collaboration around changes",
            },
          ],
        },

        {
          title: "Git Troubleshooting and Practical Workflows",
          content: `
Git problems are often easier to solve when the current repository state is inspected first.

Useful commands include:

git status

Shows the current branch and working-tree state.

git log

Shows repository history.

git branch

Shows branches.

git remote -v

Shows configured remotes.

git diff

Shows changes between relevant repository states.

When a Git operation behaves unexpectedly, first identify:
- Current branch.
- Working-directory changes.
- Staged changes.
- Recent commits.
- Remote configuration.
- Whether changes have already been shared.

Common beginner problems include:
- Committing the wrong files.
- Forgetting to stage changes.
- Working on the wrong branch.
- Pulling changes without understanding the result.
- Creating unnecessary merge conflicts.
- Accidentally committing generated files.
- Forgetting to push commits.

A useful troubleshooting approach is:

1. Stop and inspect the repository state.
2. Avoid running random commands.
3. Identify what state you are currently in.
4. Determine what result you actually want.
5. Choose the Git operation that matches that goal.
6. Review the result.
7. Test the project.

This approach is safer than repeatedly trying commands without understanding their effects.

Git commands can change repository history, so developers should be particularly careful with operations that rewrite history.

Good Git knowledge comes from understanding the repository state rather than memorizing commands alone.
          `,
          quiz: [
            {
              question: "Which command is useful for checking the current repository state?",
              options: [
                "git status",
                "git state-now",
                "git inspect-all",
                "git repository-state",
              ],
              answer: "git status",
            },
            {
              question: "What should you do first when a Git operation behaves unexpectedly?",
              options: [
                "Inspect the current repository state",
                "Run random commands",
                "Delete the repository",
                "Reinstall the operating system",
              ],
              answer: "Inspect the current repository state",
            },
            {
              question: "Which command shows configured remotes?",
              options: [
                "git remote -v",
                "git remotes",
                "git server",
                "git remote-list-files",
              ],
              answer: "git remote -v",
            },
            {
              question: "Which is a common beginner Git problem?",
              options: [
                "Working on the wrong branch",
                "Git automatically writing perfect code",
                "Git preventing all mistakes",
                "Repositories never containing changes",
              ],
              answer: "Working on the wrong branch",
            },
            {
              question: "Why should developers understand repository state?",
              options: [
                "It helps them choose the correct Git operation",
                "It makes testing unnecessary",
                "It guarantees zero conflicts",
                "It deletes old history",
              ],
              answer:
                "It helps them choose the correct Git operation",
            },
          ],
        },

        {
          title: "Final Project: Build a Git-Based Project Workflow",
          content: `
The final project combines the Git concepts learned throughout the course.

Project: Create and Manage a Small Software Project Using Git.

You can use a simple application such as a student management application, portfolio application, or small web project.

Step 1: Create the project.

Create the project directory and initialize Git.

Step 2: Create a useful .gitignore file.

Exclude files that should not normally be tracked, such as generated output and local configuration.

Step 3: Make the initial commit.

Add the appropriate project files and create a meaningful commit.

Step 4: Create a feature branch.

Create a branch for a specific feature.

Step 5: Implement the feature.

Make focused changes and commit them with clear messages.

Step 6: Create a remote repository.

Connect the local repository to a remote platform such as GitHub.

Step 7: Push the branch.

Send the feature branch to the remote repository.

Step 8: Create a pull request.

Describe the feature and request review.

Step 9: Review and test.

Run tests and inspect the changes.

Step 10: Merge the feature.

After approval, merge the feature into the appropriate development branch.

Step 11: Create a release tag.

Mark an important project version using a Git tag.

Step 12: Review the repository.

Check that no passwords, API keys, tokens, unnecessary generated files, or unrelated files were committed.

The project should demonstrate:
- Repository initialization.
- Commits.
- Branching.
- Merging.
- Remote repositories.
- Push and pull workflows.
- Pull requests.
- Code review.
- Tags.
- Git security practices.

The main objective is not to memorize commands.

The objective is to understand how Git tracks changes and how teams safely collaborate on software projects.
          `,
          quiz: [
            {
              question: "What is the main goal of the final Git project?",
              options: [
                "Demonstrate a complete version-control workflow",
                "Build a firewall",
                "Create a database server",
                "Replace the operating system",
              ],
              answer:
                "Demonstrate a complete version-control workflow",
            },
            {
              question: "What should be created early in the project?",
              options: [
                "A Git repository and appropriate .gitignore",
                "A random remote repository",
                "A production deployment immediately",
                "A password file inside the repository",
              ],
              answer:
                "A Git repository and appropriate .gitignore",
            },
            {
              question: "Why should the project use feature branches?",
              options: [
                "To isolate feature development",
                "To delete project history",
                "To avoid committing changes",
                "To disable collaboration",
              ],
              answer: "To isolate feature development",
            },
            {
              question: "What should be checked before completing the project?",
              options: [
                "That sensitive information has not been committed",
                "That every file is duplicated",
                "That all branches are deleted",
                "That testing is disabled",
              ],
              answer:
                "That sensitive information has not been committed",
            },
            {
              question: "What should the final project demonstrate?",
              options: [
                "Commits, branches, merging, remotes, collaboration, and release practices",
                "Only Git installation",
                "Only file copying",
                "Only repository deletion",
              ],
              answer:
                "Commits, branches, merging, remotes, collaboration, and release practices",
            },
          ],
        },
      ],
    },
  ],
};

export default gitCourse;