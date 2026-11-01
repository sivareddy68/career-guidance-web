const automationCourse = {
  title: "Automation",

  description:
    "Learn automation fundamentals, scripting, task scheduling, workflow automation, CI/CD, infrastructure automation, APIs, monitoring, error handling, security, and practical automation workflows.",

  weeks: [
    {
      title: "Week 1: Automation Fundamentals",
      description:
        "Understand automation concepts, identify repetitive tasks, learn automation workflows, scripting basics, and build simple reliable automation processes.",

      lessons: [
        {
          title: "Lesson 1: Introduction to Automation",
          content: `
Automation means using software or systems to perform tasks automatically with little or no manual intervention.

Many tasks performed by developers and system administrators are repetitive.

Examples include:

- Creating folders
- Renaming files
- Backing up data
- Installing software
- Running tests
- Sending notifications
- Processing CSV files
- Deploying applications
- Starting services
- Checking system health
- Generating reports

Automation reduces the amount of repetitive manual work.

A simple automation workflow usually contains:

1. Trigger
2. Input
3. Processing
4. Action
5. Output
6. Error handling

For example, a backup automation could work like this:

Trigger:
Run every night.

Input:
Application data.

Processing:
Collect and compress the data.

Action:
Copy the backup to storage.

Output:
Backup completed successfully.

Error handling:
Notify the administrator if the backup fails.

Automation does not mean that every task should be automated.

A task should generally be considered for automation when it is repetitive, predictable, time-consuming, or prone to human error.

Before automating a task, understand the manual process first.

Document the steps and identify which steps are deterministic.

Good automation should be:

- Reliable
- Repeatable
- Understandable
- Testable
- Secure
- Easy to maintain

Automation is widely used in software development, cloud computing, DevOps, data engineering, system administration, and business workflows.

For example, a developer can automate testing so that every code change is automatically checked.

A cloud engineer can automate infrastructure creation.

A system administrator can automate backups and server maintenance.

Automation therefore becomes an important engineering skill rather than simply a way to save a few clicks.
          `,
          quiz: [
            {
              question: "What is automation?",
              options: [
                "Using software or systems to perform tasks automatically",
                "Manually repeating the same task",
                "Deleting all computer programs",
                "Replacing every human decision",
              ],
              answer: "Using software or systems to perform tasks automatically",
            },
            {
              question: "Which task is a good candidate for automation?",
              options: [
                "A repetitive and predictable backup process",
                "A completely unknown emergency decision",
                "A one-time personal conversation",
                "A task with no defined steps",
              ],
              answer: "A repetitive and predictable backup process",
            },
            {
              question: "Which is commonly part of an automation workflow?",
              options: [
                "Trigger",
                "Monitor brightness",
                "Keyboard layout",
                "Screen resolution",
              ],
              answer: "Trigger",
            },
            {
              question: "Why can automation reduce human errors?",
              options: [
                "It executes defined steps consistently",
                "It removes the need for testing",
                "It guarantees every system is perfect",
                "It prevents all unexpected situations",
              ],
              answer: "It executes defined steps consistently",
            },
            {
              question: "What should be done before automating a manual process?",
              options: [
                "Understand and document the existing process",
                "Delete the existing process",
                "Immediately deploy it to production",
                "Remove all error handling",
              ],
              answer: "Understand and document the existing process",
            },
          ],
        },

        {
          title: "Lesson 2: Automation Workflows and Triggers",
          content: `
An automation workflow describes the sequence of steps that a system performs automatically.

A workflow can be represented as:

Trigger → Input → Processing → Decision → Action → Result

A trigger starts the workflow.

Common triggers include:

- Time-based schedules
- File creation
- Database changes
- Git commits
- Pull requests
- API requests
- Incoming messages
- Monitoring alerts

For example, a daily report workflow can be triggered every morning.

A file-processing workflow might start whenever a new CSV file appears in a folder.

A CI workflow can start when a developer pushes code to a repository.

Automation workflows can contain conditions.

For example:

If the backup succeeds:
Send success notification.

If the backup fails:
Send failure notification.

Conditions make workflows more useful because the automation can react differently depending on the result.

Workflows can also contain loops.

For example, an automation script may process every file in a directory.

A workflow should have clearly defined inputs and outputs.

Inputs are information required by the workflow.

Outputs are the results produced by the workflow.

A workflow should also define failure behavior.

For example, if a deployment step fails, the workflow might stop and notify the developer.

Idempotency is an important automation concept.

An idempotent operation can safely be executed multiple times without causing unwanted repeated effects.

For example, an automation that ensures a directory exists is safer to run repeatedly than one that blindly creates duplicate resources.

Good workflows are predictable and easy to troubleshoot.

Breaking a large workflow into smaller steps makes failures easier to identify.
          `,
          quiz: [
            {
              question: "What starts an automation workflow?",
              options: [
                "A trigger",
                "A comment in source code",
                "A monitor",
                "A keyboard shortcut only",
              ],
              answer: "A trigger",
            },
            {
              question: "Which can be an automation trigger?",
              options: [
                "A scheduled time",
                "Monitor brightness",
                "Screen size",
                "Keyboard color",
              ],
              answer: "A scheduled time",
            },
            {
              question: "Why are conditions useful in automation?",
              options: [
                "They allow different actions based on results",
                "They remove all workflow steps",
                "They prevent automation from running",
                "They guarantee there will be no failures",
              ],
              answer: "They allow different actions based on results",
            },
            {
              question: "What does idempotent automation mean?",
              options: [
                "It can be safely repeated without unwanted repeated effects",
                "It can run only once",
                "It always deletes previous results",
                "It requires manual execution every time",
              ],
              answer: "It can be safely repeated without unwanted repeated effects",
            },
            {
              question: "Why should a large workflow be divided into smaller steps?",
              options: [
                "Failures become easier to identify and troubleshoot",
                "It makes automation impossible",
                "It removes the need for inputs",
                "It guarantees zero execution time",
              ],
              answer: "Failures become easier to identify and troubleshoot",
            },
          ],
        },

        {
          title: "Lesson 3: Scripting for Automation",
          content: `
Scripting is one of the most common ways to automate tasks.

Python, Bash, PowerShell, and other scripting languages can interact with files, processes, APIs, databases, and operating-system features.

Python is particularly useful because it provides libraries for:

- File handling
- HTTP requests
- JSON
- CSV processing
- Database access
- Operating-system operations
- Automation tools

A simple Python automation might:

1. Read files from a folder.
2. Check their extensions.
3. Process matching files.
4. Move the processed files.
5. Write a log.

Python's pathlib module is useful for filesystem operations.

The subprocess module can execute external programs.

The requests library can communicate with HTTP APIs.

The json module can process JSON data.

Environment variables are useful for configuration.

For example, an API key should not normally be hard-coded directly into the script.

A script should validate its inputs.

If a required file does not exist, the script should handle the situation rather than failing with an unclear error.

Automation scripts should also return meaningful exit codes when appropriate.

A successful command commonly returns an exit code of zero.

A non-zero exit code generally indicates an error.

Logging is important because automated processes often run without someone watching them.

A good script should record important events such as:

- Start time
- Operations performed
- Warnings
- Errors
- Completion status

Scripts should also avoid unnecessary complexity.

A small clear script is usually easier to maintain than a large script containing unnecessary abstractions.

Reusable functions can help separate different tasks.

For example:

read_input()
process_data()
save_output()
send_notification()

This structure makes automation easier to test and modify.
          `,
          quiz: [
            {
              question: "Which language is commonly used for automation scripting?",
              options: [
                "Python",
                "HTML only",
                "CSS only",
                "SQL only",
              ],
              answer: "Python",
            },
            {
              question: "Which Python module is useful for filesystem paths?",
              options: [
                "pathlib",
                "randomscreen",
                "displayonly",
                "keyboard",
              ],
              answer: "pathlib",
            },
            {
              question: "What is the purpose of logging in automation?",
              options: [
                "To record important execution information",
                "To make scripts invisible",
                "To remove all errors",
                "To replace source code",
              ],
              answer: "To record important execution information",
            },
            {
              question: "What does a zero exit code commonly indicate?",
              options: [
                "Successful execution",
                "Guaranteed security",
                "A missing file",
                "A syntax error",
              ],
              answer: "Successful execution",
            },
            {
              question: "Why should automation scripts validate inputs?",
              options: [
                "To detect invalid or missing information before processing",
                "To make scripts longer",
                "To disable error handling",
                "To prevent all automation",
              ],
              answer:
                "To detect invalid or missing information before processing",
            },
          ],
        },

        {
          title: "Lesson 4: Scheduling Automated Tasks",
          content: `
Many automation tasks need to run at specific times.

Examples include:

- Daily backups
- Weekly reports
- Log cleanup
- Database maintenance
- Data synchronization
- Health checks

Task scheduling allows a program to run automatically according to a defined schedule.

Linux systems commonly use cron for scheduled tasks.

A cron job contains a schedule and the command to execute.

Windows provides Task Scheduler for scheduled automation.

Cloud platforms also provide scheduled jobs and event-based automation.

A schedule can be:

- Every minute
- Every hour
- Every day
- Every week
- On a specific date
- At a particular time

For example, a backup may run every day at 2 AM.

Scheduling should consider time zones.

A server may use UTC while the administrator expects local time.

Automation should also consider overlapping executions.

Suppose a job normally takes 10 minutes but is scheduled every 5 minutes. Multiple instances could overlap.

A lock or concurrency-control mechanism can prevent unwanted simultaneous executions.

Scheduled tasks should produce logs.

The logs help determine whether the task actually executed.

A good scheduled task should also have failure notifications.

For important automation, it is not enough to schedule the task. You should verify that it actually completed successfully.

Retention is another consideration.

For example, an automated backup system might retain the last 30 days of backups and remove older files according to a defined policy.

Scheduling becomes powerful when combined with reliable scripts, logging, error handling, and notifications.
          `,
          quiz: [
            {
              question: "What is the purpose of a task scheduler?",
              options: [
                "To run tasks automatically according to a schedule",
                "To write application source code",
                "To replace databases",
                "To create computer hardware",
              ],
              answer: "To run tasks automatically according to a schedule",
            },
            {
              question: "Which tool is commonly used for scheduled tasks on Linux?",
              options: [
                "cron",
                "Excel",
                "Photoshop",
                "BIOS",
              ],
              answer: "cron",
            },
            {
              question: "Which Windows feature can schedule automated tasks?",
              options: [
                "Task Scheduler",
                "Device Manager",
                "Paint",
                "Clipboard",
              ],
              answer: "Task Scheduler",
            },
            {
              question: "Why should scheduled jobs consider time zones?",
              options: [
                "The server and user may use different time references",
                "Time zones change file extensions",
                "Time zones determine CPU speed",
                "Time zones remove network access",
              ],
              answer:
                "The server and user may use different time references",
            },
            {
              question: "Why can overlapping scheduled jobs be a problem?",
              options: [
                "Multiple instances may run at the same time unexpectedly",
                "They always improve performance",
                "They automatically encrypt all data",
                "They prevent logs from being created",
              ],
              answer:
                "Multiple instances may run at the same time unexpectedly",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Practical Automation and APIs",
      description:
        "Learn file automation, data processing, API automation, command execution, and reliable error handling.",

      lessons: [
        {
          title: "Lesson 5: File and Folder Automation",
          content: `
File automation is one of the easiest ways to start learning practical automation.

Common examples include:

- Renaming files
- Moving files
- Creating folders
- Organizing downloads
- Finding duplicate files
- Compressing files
- Removing temporary files
- Generating reports

Python's pathlib module provides convenient filesystem operations.

An automation script can inspect a directory and identify files based on:

- Name
- Extension
- Size
- Modification date

For example, a script could find all CSV files and move them into a data folder.

Another script could find files older than a certain number of days and archive them.

File automation should be careful with destructive operations.

Deleting files automatically can be dangerous if the conditions are wrong.

A safer approach is to:

1. Identify the files.
2. Log the files.
3. Test the selection.
4. Move files to a temporary location.
5. Delete only after validation.

Automation should also handle missing folders and permission errors.

File names may contain spaces or special characters, so scripts should use appropriate path handling instead of assuming simple names.

Cross-platform scripts should avoid hard-coded path separators where possible.

Path libraries can handle platform-specific path formats.

Automation should also consider race conditions.

For example, a file may still be being written while an automation script tries to process it.

The script can check file age, file size stability, or use a controlled input directory.

Good file automation is predictable and safe.
          `,
          quiz: [
            {
              question: "Which Python module is useful for file and folder paths?",
              options: [
                "pathlib",
                "socketonly",
                "graphics",
                "keyboard",
              ],
              answer: "pathlib",
            },
            {
              question: "Why should automatic file deletion be handled carefully?",
              options: [
                "Incorrect conditions could delete important data",
                "Deletion always improves security",
                "Files cannot be restored from any system",
                "Automation cannot access files",
              ],
              answer:
                "Incorrect conditions could delete important data",
            },
            {
              question: "What is a useful first step before deleting automatically selected files?",
              options: [
                "Log and validate the selected files",
                "Immediately delete them",
                "Disable all permissions",
                "Restart the computer",
              ],
              answer: "Log and validate the selected files",
            },
            {
              question: "Why should scripts avoid assuming that every file is ready to process?",
              options: [
                "A file may still be being written",
                "Files never have names",
                "Folders cannot contain files",
                "All files are always identical",
              ],
              answer: "A file may still be being written",
            },
            {
              question: "Why are path libraries useful?",
              options: [
                "They help handle filesystem paths consistently",
                "They replace the operating system",
                "They automatically create databases",
                "They remove file permissions",
              ],
              answer: "They help handle filesystem paths consistently",
            },
          ],
        },

        {
          title: "Lesson 6: Data Processing Automation",
          content: `
Automation is frequently used to process structured data.

Common formats include:

- CSV
- JSON
- XML
- Excel files
- Database records

A data-processing automation may:

1. Read input data.
2. Validate records.
3. Transform values.
4. Filter unwanted records.
5. Generate output.
6. Store results.
7. Send a notification.

For CSV files, Python provides the csv module.

For JSON, Python provides the json module.

Pandas is useful for larger data-processing workflows.

Validation is an important part of data automation.

For example, if a column should contain a number, the script should detect invalid values.

A good automation pipeline should distinguish between:

Valid records
Invalid records
Missing values
Duplicate records

Instead of silently ignoring invalid data, the script can produce an error report.

Data transformations should be deterministic where possible.

For example:

Convert names to a standard format.
Convert dates into a standard format.
Remove unnecessary whitespace.
Calculate derived values.

Automation should preserve the original input when possible.

Keeping an original copy makes troubleshooting easier.

A useful pattern is:

Input → Validate → Transform → Output

This prevents invalid input from being blindly transformed.

Large datasets may require batch processing instead of loading everything into memory at once.

Automation should also record the number of records processed.

For example:

Input records: 10,000
Valid records: 9,850
Invalid records: 150
Output records: 9,850

These metrics help verify that the automation behaved correctly.
          `,
          quiz: [
            {
              question: "What is a common data automation workflow?",
              options: [
                "Input → Validate → Transform → Output",
                "Delete → Restart → Ignore",
                "Print → Shutdown → Delete",
                "Compile → Format → Reboot",
              ],
              answer: "Input → Validate → Transform → Output",
            },
            {
              question: "Why is validation important in data automation?",
              options: [
                "It identifies invalid or unexpected data",
                "It makes all data automatically correct",
                "It deletes every missing value",
                "It prevents data processing",
              ],
              answer: "It identifies invalid or unexpected data",
            },
            {
              question: "Which Python module can process CSV files?",
              options: [
                "csv",
                "screen",
                "keyboard",
                "graphics",
              ],
              answer: "csv",
            },
            {
              question: "Why should automation report processing counts?",
              options: [
                "They help verify that the workflow behaved as expected",
                "They make databases unnecessary",
                "They guarantee correct data",
                "They prevent invalid records from existing",
              ],
              answer:
                "They help verify that the workflow behaved as expected",
            },
            {
              question: "Why can batch processing be useful for large datasets?",
              options: [
                "It can reduce memory requirements",
                "It guarantees zero errors",
                "It removes the need for validation",
                "It converts every record into an image",
              ],
              answer: "It can reduce memory requirements",
            },
          ],
        },

        {
          title: "Lesson 7: API Automation",
          content: `
APIs allow software systems to communicate with each other.

Automation can use APIs to:

- Create records
- Retrieve data
- Update resources
- Delete resources
- Start workflows
- Send notifications
- Trigger deployments
- Retrieve monitoring information

HTTP methods commonly used by APIs include:

GET
Retrieve data.

POST
Create or submit data.

PUT
Replace or update a resource.

PATCH
Partially update a resource.

DELETE
Remove a resource.

Python can communicate with APIs using libraries such as requests.

An API request may contain:

- URL
- HTTP method
- Headers
- Query parameters
- Request body
- Authentication

The response may contain:

- Status code
- Headers
- JSON data
- Error information

Automation should validate API responses.

A successful HTTP response does not always mean that the business operation completed exactly as expected, so response content may also need validation.

Authentication should be handled securely.

API keys should not be hard-coded into source code.

Rate limits are another important consideration.

An API may allow only a certain number of requests within a time period.

Automation should respect the API's documented limits.

Retry logic can help recover from temporary failures.

However, retrying every error repeatedly can make problems worse.

Retries should normally be limited and should use appropriate delays.

API automation is particularly powerful because it allows one system to trigger actions in another system without manual interaction.
          `,
          quiz: [
            {
              question: "Which HTTP method is commonly used to retrieve data?",
              options: [
                "GET",
                "POST",
                "DELETE",
                "PATCH",
              ],
              answer: "GET",
            },
            {
              question: "Which HTTP method is commonly used to create or submit data?",
              options: [
                "POST",
                "GET",
                "DELETE",
                "HEAD",
              ],
              answer: "POST",
            },
            {
              question: "What should API automation do with rate limits?",
              options: [
                "Respect the API's documented limits",
                "Ignore them completely",
                "Send unlimited requests immediately",
                "Disable authentication",
              ],
              answer: "Respect the API's documented limits",
            },
            {
              question: "Why should API keys not be hard-coded in source code?",
              options: [
                "They may be exposed to unauthorized people",
                "They make APIs slower",
                "They prevent HTTP requests",
                "They cannot be stored anywhere else",
              ],
              answer: "They may be exposed to unauthorized people",
            },
            {
              question: "Why should retries be limited?",
              options: [
                "Unlimited retries can increase load and make failures worse",
                "Retries are always successful",
                "APIs cannot return errors",
                "Retries remove authentication",
              ],
              answer:
                "Unlimited retries can increase load and make failures worse",
            },
          ],
        },

        {
          title: "Lesson 8: Error Handling and Reliable Automation",
          content: `
Automation is useful only when it behaves predictably during failures.

Errors can occur because of:

- Network failures
- Missing files
- Invalid input
- Authentication problems
- Permission errors
- Service outages
- Incorrect configuration
- Timeouts

A reliable automation workflow should anticipate expected failures.

In Python, exceptions can be handled using try and except.

The automation should not simply hide every exception.

Instead, it should:

1. Detect the error.
2. Record useful information.
3. Decide whether recovery is possible.
4. Retry when appropriate.
5. Stop safely when necessary.
6. Notify the appropriate person.

Timeouts are important for network automation.

Without a timeout, a program may wait indefinitely for an unresponsive service.

Retries are useful for temporary failures.

For example, a network request may fail temporarily because of a short connection problem.

Retry strategies should use limits and delays.

Exponential backoff increases the delay between retries.

For example:

1 second
2 seconds
4 seconds
8 seconds

This reduces unnecessary pressure on an unavailable service.

Not every error should be retried.

Authentication failures usually require fixing credentials rather than repeatedly sending the same request.

Input validation errors also normally require correcting the input.

A good automation system should produce clear logs.

Logs should include enough context to identify what failed.

Sensitive information such as passwords and tokens should not be written to logs.

Finally, automation should fail safely.

If an important deployment step fails, the system should not continue blindly with dependent operations.
          `,
          quiz: [
            {
              question: "Why are timeouts important in automation?",
              options: [
                "They prevent a program from waiting indefinitely",
                "They guarantee a network connection",
                "They remove authentication",
                "They make every request successful",
              ],
              answer: "They prevent a program from waiting indefinitely",
            },
            {
              question: "What is exponential backoff?",
              options: [
                "Increasing the delay between retry attempts",
                "Sending all retries simultaneously",
                "Removing all retry attempts",
                "Restarting the computer after every error",
              ],
              answer: "Increasing the delay between retry attempts",
            },
            {
              question: "Which error normally should not be repeatedly retried without fixing the cause?",
              options: [
                "Invalid authentication credentials",
                "A temporary network timeout",
                "A temporary service outage",
                "A short-lived connection failure",
              ],
              answer: "Invalid authentication credentials",
            },
            {
              question: "What should automation logs avoid recording?",
              options: [
                "Passwords and secret tokens",
                "Execution status",
                "Error messages",
                "Operation names",
              ],
              answer: "Passwords and secret tokens",
            },
            {
              question: "What does fail safely mean?",
              options: [
                "Stop or recover in a controlled way instead of continuing blindly",
                "Ignore every error",
                "Delete all data after failure",
                "Continue every operation regardless of errors",
              ],
              answer:
                "Stop or recover in a controlled way instead of continuing blindly",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: DevOps and Infrastructure Automation",
      description:
        "Learn CI/CD automation, infrastructure as code, configuration management, containers, and automated testing.",

      lessons: [
        {
          title: "Lesson 9: CI/CD Automation",
          content: `
CI/CD stands for Continuous Integration and Continuous Delivery or Continuous Deployment.

Continuous Integration means frequently integrating code changes into a shared repository and automatically validating those changes.

A CI pipeline may perform:

1. Checkout source code.
2. Install dependencies.
3. Run formatting checks.
4. Run static analysis.
5. Run unit tests.
6. Build the application.
7. Produce an artifact.

Continuous Delivery means keeping software in a releasable state.

Continuous Deployment goes further by automatically deploying changes after required checks succeed.

A CI/CD pipeline can be triggered by:

- Push
- Pull request
- Scheduled execution
- Manual approval
- Release creation

A pipeline normally contains stages.

For example:

Build
→ Test
→ Package
→ Deploy

If testing fails, deployment should normally stop.

Automated tests provide confidence that changes have not broken existing functionality.

Artifacts are outputs produced by a pipeline.

Examples include:

- Compiled applications
- Container images
- Packages
- Reports

Environment separation is important.

Development, testing, staging, and production environments may use different configurations.

Secrets required by pipelines should be stored securely in the CI/CD platform's secret-management system.

CI/CD automation reduces manual deployment steps and makes releases more repeatable.

However, automation should include approval gates for high-risk production changes when required.

A good pipeline should be fast enough for developers to use frequently while still providing meaningful validation.
          `,
          quiz: [
            {
              question: "What does Continuous Integration focus on?",
              options: [
                "Frequently integrating and automatically validating code changes",
                "Manually installing every dependency",
                "Avoiding automated testing",
                "Deleting old repositories",
              ],
              answer:
                "Frequently integrating and automatically validating code changes",
            },
            {
              question: "What should normally happen if automated tests fail before deployment?",
              options: [
                "The deployment should normally stop",
                "The system should deploy anyway",
                "All tests should be deleted",
                "The repository should be removed",
              ],
              answer: "The deployment should normally stop",
            },
            {
              question: "Which is a common CI/CD pipeline stage?",
              options: [
                "Build",
                "Monitor brightness",
                "Change wallpaper",
                "Resize keyboard",
              ],
              answer: "Build",
            },
            {
              question: "What is a pipeline artifact?",
              options: [
                "An output produced by the pipeline",
                "A developer's password",
                "A physical server",
                "A network cable",
              ],
              answer: "An output produced by the pipeline",
            },
            {
              question: "Where should CI/CD secrets normally be stored?",
              options: [
                "A secure secret-management mechanism",
                "Public source code",
                "A README file",
                "A public comment",
              ],
              answer: "A secure secret-management mechanism",
            },
          ],
        },

        {
          title: "Lesson 10: Infrastructure as Code",
          content: `
Infrastructure as Code, commonly called IaC, means defining infrastructure using machine-readable configuration files.

Instead of manually creating every server, network, storage resource, or cloud service, engineers can describe the desired infrastructure in code.

Popular IaC tools include Terraform, AWS CloudFormation, and Azure Bicep.

IaC provides several advantages:

- Repeatability
- Version control
- Reviewability
- Consistency
- Automation
- Easier recovery

For example, a Terraform configuration can describe:

- Virtual networks
- Compute instances
- Databases
- Storage
- Security rules

The configuration can then be reviewed before infrastructure changes are applied.

A major IaC concept is desired state.

The configuration describes what the infrastructure should look like.

The tool compares the desired state with the current infrastructure and determines required changes.

Terraform commonly uses commands such as:

terraform init
Initializes a working directory.

terraform plan
Shows proposed changes.

terraform apply
Applies changes.

terraform destroy
Removes infrastructure managed by the configuration.

Infrastructure code should be stored in version control.

Changes should be reviewed just like application code.

State management is also important.

IaC tools need to know what resources they manage.

State files may contain sensitive information, so they should be protected appropriately.

Infrastructure automation should avoid uncontrolled changes.

Use separate environments or workspaces where appropriate.

IaC allows organizations to recreate infrastructure more reliably than manual configuration.
          `,
          quiz: [
            {
              question: "What does Infrastructure as Code mean?",
              options: [
                "Defining infrastructure using machine-readable configuration",
                "Manually configuring every server",
                "Writing only application UI code",
                "Creating hardware without software",
              ],
              answer:
                "Defining infrastructure using machine-readable configuration",
            },
            {
              question: "Which tool is commonly used for Infrastructure as Code?",
              options: [
                "Terraform",
                "Paint",
                "Calculator",
                "Media Player",
              ],
              answer: "Terraform",
            },
            {
              question: "What does terraform plan show?",
              options: [
                "Proposed infrastructure changes",
                "All source-code errors",
                "Only CPU temperature",
                "A list of web browser tabs",
              ],
              answer: "Proposed infrastructure changes",
            },
            {
              question: "Why should infrastructure code be stored in version control?",
              options: [
                "Changes can be reviewed and tracked",
                "It prevents infrastructure from running",
                "It removes the need for configuration",
                "It automatically encrypts every resource",
              ],
              answer: "Changes can be reviewed and tracked",
            },
            {
              question: "Why is IaC state important?",
              options: [
                "It helps the tool track managed infrastructure resources",
                "It replaces the operating system",
                "It contains only application source code",
                "It prevents all infrastructure changes",
              ],
              answer:
                "It helps the tool track managed infrastructure resources",
            },
          ],
        },

        {
          title: "Lesson 11: Configuration Management",
          content: `
Configuration management automates the setup and maintenance of systems.

Instead of manually configuring every server, configuration management tools can apply a defined configuration.

Popular tools include:

- Ansible
- Puppet
- Chef
- Salt

Ansible is widely used because it can manage systems using YAML-based playbooks.

A configuration-management workflow might:

1. Install required packages.
2. Create users.
3. Create directories.
4. Copy configuration files.
5. Start services.
6. Configure firewall rules.
7. Verify service status.

Configuration management should be idempotent.

For example, if a package is already installed, running the automation again should not unnecessarily break or duplicate the configuration.

Ansible commonly uses inventories to identify managed hosts.

Playbooks describe tasks.

Tasks can use modules for actions such as installing packages, copying files, or managing services.

Variables allow the same playbook to work with different environments.

For example:

development server
staging server
production server

can use different variable values while sharing the same basic automation.

Secrets should be protected.

Ansible Vault is one mechanism that can encrypt sensitive variables.

Configuration management can reduce configuration drift.

Configuration drift happens when servers gradually become different because of manual changes.

Automated configuration helps maintain consistency.

Automation should also verify the final state.

For example, after configuring a web server, the automation can check that the service is running and responding correctly.
          `,
          quiz: [
            {
              question: "What is configuration management?",
              options: [
                "Automating the setup and maintenance of system configuration",
                "Designing application logos",
                "Manually changing every server",
                "Deleting server configuration",
              ],
              answer:
                "Automating the setup and maintenance of system configuration",
            },
            {
              question: "Which tool commonly uses YAML playbooks?",
              options: [
                "Ansible",
                "Photoshop",
                "Excel",
                "BIOS",
              ],
              answer: "Ansible",
            },
            {
              question: "What is configuration drift?",
              options: [
                "Servers gradually becoming different due to configuration changes",
                "A network cable becoming disconnected",
                "A container image being compressed",
                "A database query becoming faster",
              ],
              answer:
                "Servers gradually becoming different due to configuration changes",
            },
            {
              question: "Why is idempotency important in configuration management?",
              options: [
                "Repeated runs should produce the intended state without unwanted duplication",
                "It prevents automation from running twice",
                "It requires manual configuration each time",
                "It guarantees that no system can fail",
              ],
              answer:
                "Repeated runs should produce the intended state without unwanted duplication",
            },
            {
              question: "What can Ansible Vault help protect?",
              options: [
                "Sensitive variables and secrets",
                "Monitor settings",
                "Keyboard shortcuts",
                "Container CPU usage",
              ],
              answer: "Sensitive variables and secrets",
            },
          ],
        },

        {
          title: "Lesson 12: Automated Testing and Validation",
          content: `
Automation should be tested before it is trusted with important systems.

Automated testing can verify whether a script, application, infrastructure configuration, or deployment workflow behaves correctly.

Common testing levels include:

Unit tests
Test small pieces of code.

Integration tests
Test interactions between components.

End-to-end tests
Test complete workflows.

Smoke tests
Perform quick checks to determine whether the system is basically functioning.

For example, after deploying a web application, an automated smoke test can send an HTTP request to the health endpoint.

Testing automation itself is also important.

Suppose a script deletes old files. Before running it in production, test it against sample directories.

Dry-run modes are useful because they show what an automation would do without actually making destructive changes.

Validation should occur after automation runs.

For example:

Expected files: 100
Processed files: 100
Failed files: 0

If the numbers do not match expectations, the workflow should raise an alert.

Test environments should be isolated from production when possible.

Automation pipelines can automatically run tests whenever code changes.

A failed test should provide enough information to diagnose the issue.

Test data should be representative but should not expose sensitive production information.

Automated testing improves confidence and makes changes safer.

The goal is not to prove that software can never fail. The goal is to detect problems early and reduce the chance of deploying known failures.
          `,
          quiz: [
            {
              question: "What does a unit test usually test?",
              options: [
                "A small piece of code",
                "An entire physical data center",
                "A complete organization",
                "A network cable",
              ],
              answer: "A small piece of code",
            },
            {
              question: "What is an integration test designed to check?",
              options: [
                "Interactions between components",
                "Only keyboard input",
                "Only screen resolution",
                "Only file names",
              ],
              answer: "Interactions between components",
            },
            {
              question: "What is a smoke test?",
              options: [
                "A quick check that the system is basically functioning",
                "A test that deletes production data",
                "A test of monitor brightness",
                "A test that replaces all unit tests",
              ],
              answer:
                "A quick check that the system is basically functioning",
            },
            {
              question: "Why is a dry-run mode useful?",
              options: [
                "It shows intended actions without performing destructive changes",
                "It automatically deploys everything",
                "It deletes files safely",
                "It disables all validation",
              ],
              answer:
                "It shows intended actions without performing destructive changes",
            },
            {
              question: "Why should automation be validated after execution?",
              options: [
                "To verify that the expected result actually occurred",
                "To make the automation slower",
                "To remove all logs",
                "To avoid detecting failures",
              ],
              answer:
                "To verify that the expected result actually occurred",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Advanced Automation and Final Project",
      description:
        "Learn event-driven automation, monitoring automation, secure automation, workflow orchestration, and build a practical end-to-end automation project.",

      lessons: [
        {
          title: "Lesson 13: Event-Driven Automation",
          content: `
Traditional automation often runs according to a schedule.

Event-driven automation starts when something happens.

Examples include:

- A file is uploaded
- A Git commit is pushed
- A database record changes
- A server becomes unhealthy
- A cloud resource is created
- A user submits a form
- A monitoring alert is generated

An event contains information about what happened.

For example:

Event:
A new file was uploaded.

Automation:
Validate the file.

Next action:
Process the file.

Event-driven systems are useful because they react when work is actually required instead of repeatedly checking for changes.

A common architecture is:

Event Source
→ Event Bus or Queue
→ Automation Worker
→ Result

Queues can help separate event producers from workers.

For example, if 10,000 files arrive at once, the event source can place events into a queue and workers can process them gradually.

This provides buffering.

Event-driven systems should consider duplicate events.

A workflow may receive the same event more than once.

Therefore, processing should be idempotent when possible.

Events can also fail.

A failed event may be retried.

Some systems use dead-letter queues to hold messages that repeatedly fail processing.

Event-driven automation is widely used in cloud applications, serverless systems, data pipelines, and DevOps workflows.

It can reduce unnecessary polling and make systems more responsive.
          `,
          quiz: [
            {
              question: "What starts event-driven automation?",
              options: [
                "An event",
                "A fixed schedule only",
                "A manual spreadsheet",
                "A monitor restart",
              ],
              answer: "An event",
            },
            {
              question: "Why can a queue be useful in event-driven automation?",
              options: [
                "It can buffer work between producers and workers",
                "It deletes all events",
                "It prevents automation from running",
                "It replaces every database",
              ],
              answer:
                "It can buffer work between producers and workers",
            },
            {
              question: "Why should event processing handle duplicate events?",
              options: [
                "The same event may sometimes be delivered more than once",
                "Events can never be duplicated",
                "Duplicates always improve performance",
                "Duplicate events automatically delete data",
              ],
              answer:
                "The same event may sometimes be delivered more than once",
            },
            {
              question: "What is a dead-letter queue used for?",
              options: [
                "Holding messages that repeatedly fail processing",
                "Storing successful passwords",
                "Creating Docker images",
                "Replacing monitoring systems",
              ],
              answer:
                "Holding messages that repeatedly fail processing",
            },
            {
              question: "What is one advantage of event-driven automation?",
              options: [
                "It can react when work actually occurs",
                "It requires constant manual checking",
                "It eliminates all errors",
                "It removes the need for logs",
              ],
              answer: "It can react when work actually occurs",
            },
          ],
        },

        {
          title: "Lesson 14: Monitoring and Automated Remediation",
          content: `
Monitoring automation allows systems to detect problems and respond automatically.

A monitoring system can track:

- CPU usage
- Memory usage
- Disk space
- Network errors
- Application latency
- Error rates
- Service availability

An alert is generated when a defined condition is met.

For example:

If disk usage exceeds 90%:
Generate an alert.

Automation can then perform a controlled action.

For example:

Clean temporary files.
Restart a failed service.
Scale an application.
Create an incident ticket.
Send a notification.

This is called automated remediation.

Automated remediation should be carefully designed.

An incorrect remediation can make an incident worse.

For example, repeatedly restarting a service may hide the real cause of a problem.

Automation should therefore include:

- Limits
- Logging
- Conditions
- Cooldown periods
- Escalation
- Human review for risky operations

A cooldown prevents the same action from happening repeatedly within a short period.

For example, a service should not be restarted every few seconds.

Monitoring should distinguish between symptoms and root causes.

If CPU usage is high, restarting the application may reduce the symptom temporarily but may not fix the underlying problem.

Good automation can also collect diagnostic information before taking action.

For example:

1. Detect high memory.
2. Capture logs.
3. Record process information.
4. Alert the administrator.
5. Restart only if the defined conditions are satisfied.

This provides both automation and useful troubleshooting evidence.
          `,
          quiz: [
            {
              question: "What is automated remediation?",
              options: [
                "Automatically taking a controlled action in response to a detected problem",
                "Ignoring monitoring alerts",
                "Deleting all logs",
                "Manually checking every server",
              ],
              answer:
                "Automatically taking a controlled action in response to a detected problem",
            },
            {
              question: "Why is a cooldown period useful?",
              options: [
                "It prevents repeated actions from happening too frequently",
                "It disables monitoring",
                "It guarantees zero failures",
                "It removes all alerts",
              ],
              answer:
                "It prevents repeated actions from happening too frequently",
            },
            {
              question: "Why should remediation be carefully designed?",
              options: [
                "An incorrect automated action can make an incident worse",
                "Automation can never affect systems",
                "Monitoring always gives perfect diagnoses",
                "Remediation does not interact with applications",
              ],
              answer:
                "An incorrect automated action can make an incident worse",
            },
            {
              question: "What should automation sometimes collect before remediation?",
              options: [
                "Diagnostic information such as logs and process data",
                "Only screen brightness",
                "Only keyboard settings",
                "Only application icons",
              ],
              answer:
                "Diagnostic information such as logs and process data",
            },
            {
              question: "What is the difference between a symptom and a root cause?",
              options: [
                "A symptom is an observed problem while the root cause is the underlying reason",
                "They always mean exactly the same thing",
                "A root cause is always a log file",
                "A symptom is always the permanent solution",
              ],
              answer:
                "A symptom is an observed problem while the root cause is the underlying reason",
            },
          ],
        },

        {
          title: "Lesson 15: Secure and Scalable Automation",
          content: `
As automation grows, security and scalability become increasingly important.

Automation often has access to powerful systems.

For example, a deployment automation may have permission to modify production infrastructure.

Therefore, automation credentials must be protected.

Important security practices include:

- Least privilege
- Secure credential storage
- Short-lived credentials when possible
- Access logging
- Secret rotation
- Input validation
- Approval controls
- Audit trails

Automation should not use administrator privileges unless required.

If a workflow only needs permission to read a database, it should not receive permission to delete the entire database.

Secrets should be stored in secure secret-management systems.

Credentials should not appear in logs.

Automation should validate external inputs.

This is particularly important when automation receives data from users, APIs, webhooks, or external systems.

Scalability is another consideration.

A script that processes 100 records may not work efficiently for 10 million records.

Large workloads may require:

- Parallel processing
- Queues
- Batching
- Worker processes
- Distributed execution
- Rate limiting

Concurrency must be controlled carefully.

Running too many tasks at once can overload a database or external API.

Automation should therefore use appropriate limits.

Observability is also important.

A scalable automation system should provide metrics, logs, and traces where appropriate.

Versioning automation code is essential.

Changes should be reviewed and tested before production use.

A mature automation system is secure, observable, repeatable, scalable, and maintainable.
          `,
          quiz: [
            {
              question: "What is the principle of least privilege in automation?",
              options: [
                "Give automation only the permissions it needs",
                "Give every script administrator access",
                "Disable all authentication",
                "Store all passwords in source code",
              ],
              answer: "Give automation only the permissions it needs",
            },
            {
              question: "Why should automation credentials be protected?",
              options: [
                "Automation may have access to important systems",
                "Credentials cannot affect automation",
                "Security is unrelated to automation",
                "Protected credentials make automation impossible",
              ],
              answer:
                "Automation may have access to important systems",
            },
            {
              question: "What can help process a very large automation workload?",
              options: [
                "Batching and controlled parallel processing",
                "Running unlimited tasks simultaneously",
                "Removing all validation",
                "Using one huge unstructured script",
              ],
              answer: "Batching and controlled parallel processing",
            },
            {
              question: "Why can too much concurrency be dangerous?",
              options: [
                "It can overload systems or external services",
                "It always makes systems more secure",
                "It prevents all network traffic",
                "It guarantees faster execution",
              ],
              answer: "It can overload systems or external services",
            },
            {
              question: "Which is an important property of mature automation?",
              options: [
                "Secure, observable, repeatable, scalable, and maintainable",
                "Manual, undocumented, and unpredictable",
                "Unrestricted and impossible to test",
                "Dependent on one person's memory",
              ],
              answer:
                "Secure, observable, repeatable, scalable, and maintainable",
            },
          ],
        },

        {
          title: "Lesson 16: Final Project - Automated Application Deployment Pipeline",
          content: `
The final project combines the major automation concepts learned throughout the course.

Project:

Build an automated deployment pipeline for a simple web application.

The project can contain:

- Source code repository
- Automated tests
- Docker image
- Container registry
- Deployment environment
- Monitoring
- Notifications

The workflow can be:

Developer pushes code
→ CI pipeline starts
→ Install dependencies
→ Run tests
→ Build application
→ Build container image
→ Scan image
→ Push image to registry
→ Deploy application
→ Run health check
→ Send notification

Step 1: Source control

Store the application in Git.

A push to the main branch can trigger the pipeline.

Step 2: Automated testing

The pipeline installs dependencies and executes automated tests.

If tests fail, deployment should stop.

Step 3: Build

The application is packaged.

If the application uses Docker, build a container image.

Step 4: Security checks

Scan dependencies and container images for known vulnerabilities.

Do not deploy an image containing unacceptable security issues according to the project's policy.

Step 5: Registry

Tag the image with a meaningful version.

Push the image to a container registry.

Step 6: Deployment

Deploy the new version to the selected environment.

Configuration should be provided separately from the image.

Secrets should come from secure secret management.

Step 7: Health check

After deployment, verify that the application responds correctly.

If the health check fails, the deployment should stop or roll back according to the deployment strategy.

Step 8: Monitoring

Track application health, errors, latency, CPU, and memory.

Create alerts for important failures.

Step 9: Notification

Send a success notification after a successful deployment.

Send a failure notification if the pipeline fails.

Step 10: Documentation

Document:

- How the pipeline works
- Required environment variables
- Deployment steps
- Rollback procedure
- Monitoring
- Troubleshooting

The final project demonstrates:

Scripting
→ Scheduling
→ API automation
→ Error handling
→ CI/CD
→ Containers
→ Infrastructure automation
→ Monitoring
→ Security
→ Deployment

A strong automation project should not simply automate the happy path.

It should also handle failures safely.

The final goal is to create an automation workflow that another developer can understand, execute, monitor, and maintain without manually repeating every deployment step.
          `,
          quiz: [
            {
              question: "What starts the final deployment pipeline in the example?",
              options: [
                "A developer pushing code",
                "Changing the monitor brightness",
                "Opening a text editor",
                "Restarting a keyboard",
              ],
              answer: "A developer pushing code",
            },
            {
              question: "What should happen if automated tests fail?",
              options: [
                "The deployment should normally stop",
                "The application should always deploy",
                "The tests should be deleted",
                "The registry should be removed",
              ],
              answer: "The deployment should normally stop",
            },
            {
              question: "Why is a health check performed after deployment?",
              options: [
                "To verify that the deployed application is functioning",
                "To create the container image",
                "To replace automated tests",
                "To delete the old application",
              ],
              answer:
                "To verify that the deployed application is functioning",
            },
            {
              question: "Where should deployment secrets normally be stored?",
              options: [
                "A secure secret-management system",
                "Public source code",
                "A README file",
                "A Docker image label",
              ],
              answer: "A secure secret-management system",
            },
            {
              question: "What is the main goal of the final project?",
              options: [
                "Create a repeatable, secure, testable, and monitored deployment workflow",
                "Remove all testing from deployment",
                "Manually repeat every deployment step",
                "Run production without monitoring",
              ],
              answer:
                "Create a repeatable, secure, testable, and monitored deployment workflow",
            },
          ],
        },
      ],
    },
  ],
};

export default automationCourse;