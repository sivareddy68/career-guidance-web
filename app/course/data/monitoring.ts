const monitoringCourse = {
  title: "Monitoring",

  description:
    "Learn monitoring fundamentals, metrics, logs, traces, dashboards, alerts, health checks, application monitoring, infrastructure monitoring, observability, incident detection, and practical monitoring workflows.",

  weeks: [
    {
      title: "Week 1: Monitoring Fundamentals",
      description:
        "Understand monitoring concepts, metrics, logs, system health, monitoring architecture, and the difference between monitoring and observability.",

      lessons: [
        {
          title: "Lesson 1: Introduction to Monitoring",
          content: `
Monitoring is the process of continuously observing systems, applications, infrastructure, and services to understand their health and performance.

Modern applications can contain many components:

- Web servers
- APIs
- Databases
- Containers
- Virtual machines
- Networks
- Cloud services
- Storage systems

Without monitoring, it can be difficult to know whether these components are working correctly.

Monitoring helps answer questions such as:

- Is the application running?
- Is the server overloaded?
- Are requests failing?
- Is the database responding?
- Is response time increasing?
- Is disk space running out?
- Are users experiencing errors?

A monitoring system collects information from systems and presents it in a useful form.

Important monitoring data includes:

Metrics:
Numerical measurements collected over time.

Logs:
Records of events produced by applications and systems.

Traces:
Information showing how a request moves through multiple services.

Alerts:
Notifications generated when defined conditions are met.

Dashboards:
Visual displays of monitoring information.

A basic monitoring workflow is:

System
→ Data collection
→ Storage
→ Analysis
→ Dashboard
→ Alert

For example, a server may report CPU usage every few seconds.

The monitoring system stores these values.

A dashboard displays the CPU usage.

If CPU usage stays above a defined threshold for a certain period, an alert may be generated.

Monitoring is not only about detecting failures.

It can also help identify performance trends before they become serious problems.

For example, if disk usage increases by 2% every day, monitoring can reveal that the disk may eventually become full.

Good monitoring should focus on useful information rather than collecting every possible value without purpose.

The goal is to make systems easier to operate, troubleshoot, and improve.
          `,
          quiz: [
            {
              question: "What is the main purpose of monitoring?",
              options: [
                "To observe system health and performance",
                "To replace application source code",
                "To eliminate all servers",
                "To create physical hardware",
              ],
              answer: "To observe system health and performance",
            },
            {
              question: "Which is a numerical measurement collected by a monitoring system?",
              options: [
                "Metric",
                "Source code",
                "Password",
                "Dockerfile",
              ],
              answer: "Metric",
            },
            {
              question: "What does a log generally contain?",
              options: [
                "Records of events produced by systems or applications",
                "Only CPU hardware",
                "Only network cables",
                "Only database tables",
              ],
              answer: "Records of events produced by systems or applications",
            },
            {
              question: "What is an alert?",
              options: [
                "A notification generated when defined conditions are met",
                "A type of database",
                "A programming language",
                "A physical server",
              ],
              answer:
                "A notification generated when defined conditions are met",
            },
            {
              question: "Why can monitoring trends be useful?",
              options: [
                "They can reveal problems before they become serious",
                "They guarantee that failures never happen",
                "They remove the need for maintenance",
                "They replace all application testing",
              ],
              answer:
                "They can reveal problems before they become serious",
            },
          ],
        },

        {
          title: "Lesson 2: Metrics and System Health",
          content: `
Metrics are numerical measurements that describe the behavior or state of a system.

Common infrastructure metrics include:

CPU utilization
Memory utilization
Disk utilization
Disk I/O
Network traffic
Network errors
Process count
System load

Application metrics can include:

Request rate
Error rate
Response time
Active users
Queue length
Database query duration

Metrics are usually collected repeatedly over time.

For example:

10:00 CPU = 40%
10:01 CPU = 45%
10:02 CPU = 50%
10:03 CPU = 72%

Looking at a single value may not provide enough information.

A time series shows how a metric changes over time.

Monitoring systems commonly store metrics as time-series data.

A metric normally has a name and may have labels or dimensions.

For example:

http_requests_total

could have labels such as:

method=GET
status=200
service=api

Labels make it possible to analyze the same metric from different perspectives.

However, too many unique label combinations can create high cardinality and increase storage and query costs.

System health should be evaluated using multiple signals.

High CPU alone does not always mean a problem.

A CPU-intensive batch process may be expected.

Similarly, low CPU does not guarantee that an application is healthy.

A service may be blocked on a database while using very little CPU.

Therefore, monitoring should consider application-level metrics as well as infrastructure metrics.

Useful measurements often include the four golden signals:

Latency
Traffic
Errors
Saturation

Latency measures how long requests take.

Traffic measures demand.

Errors measure failed requests.

Saturation measures how close a resource is to its limit.

These signals help operators understand both system behavior and user impact.
          `,
          quiz: [
            {
              question: "What is a metric?",
              options: [
                "A numerical measurement of system behavior or state",
                "A source-code file",
                "A network cable",
                "A database password",
              ],
              answer:
                "A numerical measurement of system behavior or state",
            },
            {
              question: "What does latency measure?",
              options: [
                "How long an operation or request takes",
                "How much disk space exists",
                "How many users have passwords",
                "How many files are stored",
              ],
              answer: "How long an operation or request takes",
            },
            {
              question: "Which is one of the four golden signals?",
              options: [
                "Errors",
                "Keyboard speed",
                "Screen size",
                "File extension",
              ],
              answer: "Errors",
            },
            {
              question: "Why should CPU usage not be considered alone?",
              options: [
                "High or low CPU usage does not always indicate application health",
                "CPU usage cannot be measured",
                "CPU is unrelated to computers",
                "CPU is always the only cause of failures",
              ],
              answer:
                "High or low CPU usage does not always indicate application health",
            },
            {
              question: "What does saturation describe?",
              options: [
                "How close a resource is to its capacity limit",
                "How many passwords are stored",
                "How quickly source code is written",
                "How many files are compressed",
              ],
              answer:
                "How close a resource is to its capacity limit",
            },
          ],
        },

        {
          title: "Lesson 3: Logs and Log Management",
          content: `
Logs are records of events produced by applications, operating systems, databases, networks, and other systems.

Examples of log messages include:

Application started.
User authentication succeeded.
Database connection failed.
HTTP request returned status 500.
Configuration loaded.

Logs are usually timestamped.

A useful log entry may contain:

- Timestamp
- Log level
- Service name
- Request ID
- Message
- Relevant context

Common log levels include:

DEBUG
Detailed information useful during development.

INFO
Normal operational information.

WARNING
A condition that may require attention.

ERROR
An operation failed.

CRITICAL
A serious condition requiring immediate attention.

Logs should be structured when possible.

Structured JSON logs are easier for machines to search and analyze.

For example:

{
  "level": "ERROR",
  "service": "payment-api",
  "message": "Database connection failed"
}

Centralized logging collects logs from multiple systems into one location.

This is useful when an application consists of many servers or containers.

A centralized logging system can allow operators to search logs across services.

Log retention defines how long logs are stored.

Retention should balance troubleshooting requirements, storage costs, privacy requirements, and security requirements.

Sensitive information should not be written to logs unnecessarily.

Passwords, private tokens, and other credentials should never be logged in plain text.

Log rotation prevents log files from growing without limits.

Monitoring and logs work together.

Metrics can show that error rates increased.

Logs can help explain why the errors occurred.

For example:

Metric:
HTTP 500 errors increased.

Logs:
Database connection timeout.

This combination makes troubleshooting much easier.
          `,
          quiz: [
            {
              question: "What is a log?",
              options: [
                "A record of an event produced by a system or application",
                "A CPU component",
                "A database server",
                "A network cable",
              ],
              answer:
                "A record of an event produced by a system or application",
            },
            {
              question: "Which log level normally indicates a serious failure?",
              options: [
                "ERROR",
                "INFO",
                "DEBUG",
                "TRACE",
              ],
              answer: "ERROR",
            },
            {
              question: "Why is centralized logging useful?",
              options: [
                "It collects logs from multiple systems in one location",
                "It removes the need for applications",
                "It prevents all errors",
                "It replaces databases",
              ],
              answer:
                "It collects logs from multiple systems in one location",
            },
            {
              question: "What should logs avoid containing?",
              options: [
                "Passwords and private credentials",
                "Timestamps",
                "Error messages",
                "Service names",
              ],
              answer: "Passwords and private credentials",
            },
            {
              question: "Why is log rotation useful?",
              options: [
                "It prevents log storage from growing without limits",
                "It deletes all monitoring data immediately",
                "It disables application logging",
                "It prevents errors from occurring",
              ],
              answer:
                "It prevents log storage from growing without limits",
            },
          ],
        },

        {
          title: "Lesson 4: Monitoring Architecture and Tools",
          content: `
A monitoring system usually contains several components.

A basic architecture is:

Application/System
→ Monitoring Agent or Exporter
→ Collector
→ Time-Series Database
→ Dashboard
→ Alerting System

An agent collects information from the system.

An exporter exposes metrics in a format that a monitoring system can collect.

A collector receives or scrapes monitoring data.

A time-series database stores measurements over time.

A dashboard displays the data.

An alerting system evaluates conditions and sends notifications.

Prometheus is a popular open-source monitoring system designed primarily for metrics.

Grafana is commonly used to create dashboards and visualize metrics from systems such as Prometheus.

Node Exporter can expose Linux system metrics for Prometheus.

Other monitoring platforms include cloud-native monitoring services and commercial observability platforms.

Monitoring architecture depends on the environment.

A small application may use one monitoring service.

A large organization may collect data from thousands of machines and services.

Monitoring systems should themselves be monitored.

If the monitoring system fails, operators may stop receiving important alerts.

Monitoring data should also be protected.

Access to dashboards may expose sensitive operational information.

Monitoring infrastructure should therefore use authentication and appropriate authorization.

A good architecture should also consider:

- Data retention
- Scalability
- Availability
- Cost
- Security
- Alert reliability

The purpose of the architecture is not to collect unlimited data.

It is to collect useful information and make it available when operators need it.
          `,
          quiz: [
            {
              question: "What does a monitoring agent commonly do?",
              options: [
                "Collects or exposes information about a system",
                "Deletes application source code",
                "Creates physical servers",
                "Replaces the operating system",
              ],
              answer:
                "Collects or exposes information about a system",
            },
            {
              question: "What is Prometheus commonly used for?",
              options: [
                "Monitoring and storing time-series metrics",
                "Editing photographs",
                "Writing spreadsheets",
                "Creating network cables",
              ],
              answer: "Monitoring and storing time-series metrics",
            },
            {
              question: "What is Grafana commonly used for?",
              options: [
                "Creating monitoring dashboards and visualizations",
                "Building physical servers",
                "Replacing operating systems",
                "Encrypting every database automatically",
              ],
              answer:
                "Creating monitoring dashboards and visualizations",
            },
            {
              question: "Why should monitoring systems themselves be monitored?",
              options: [
                "A monitoring failure could prevent important alerts from being received",
                "Monitoring systems never fail",
                "It makes dashboards more colorful",
                "It replaces application testing",
              ],
              answer:
                "A monitoring failure could prevent important alerts from being received",
            },
            {
              question: "Why should monitoring dashboards be protected?",
              options: [
                "They may expose sensitive operational information",
                "Dashboards cannot contain useful information",
                "Authentication prevents monitoring",
                "Security is unrelated to dashboards",
              ],
              answer:
                "They may expose sensitive operational information",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Application and Infrastructure Monitoring",
      description:
        "Learn application monitoring, infrastructure monitoring, database monitoring, network monitoring, and health checks.",

      lessons: [
        {
          title: "Lesson 5: Application Performance Monitoring",
          content: `
Application Performance Monitoring, or APM, focuses on the behavior and performance of applications.

APM helps developers and operators understand:

- Request latency
- Error rates
- Throughput
- Slow database queries
- External service calls
- Exceptions
- Resource usage

For a web API, useful metrics include:

Requests per second
Average latency
P95 latency
P99 latency
HTTP error rate
Active requests

Percentiles are often more useful than averages.

For example, an average latency of 100 milliseconds may look good while a small group of users experience several seconds of delay.

P95 latency means 95% of measured requests are at or below that latency value.

P99 represents the 99th percentile.

APM can also identify slow transactions.

For example, a request may spend:

50 ms in application code
800 ms waiting for a database
100 ms calling an external API

This reveals where time is being spent.

Error tracking records application exceptions.

A useful error report may include:

- Error type
- Message
- Stack trace
- Request information
- Application version
- Timestamp

Request IDs or correlation IDs help connect logs from multiple services belonging to the same request.

APM is especially important in distributed applications.

A user request may travel through:

Frontend
→ API Gateway
→ Backend
→ Database
→ External API

Without application monitoring, identifying the slow component can be difficult.

APM helps connect performance measurements to application behavior.
          `,
          quiz: [
            {
              question: "What does APM stand for?",
              options: [
                "Application Performance Monitoring",
                "Application Password Management",
                "Automated Process Memory",
                "Application Package Manager",
              ],
              answer: "Application Performance Monitoring",
            },
            {
              question: "What does P95 latency represent?",
              options: [
                "The latency at or below which 95% of measured requests fall",
                "The latency of exactly 95 requests",
                "The average CPU usage",
                "The number of failed servers",
              ],
              answer:
                "The latency at or below which 95% of measured requests fall",
            },
            {
              question: "Why can percentiles be useful instead of only averages?",
              options: [
                "They reveal behavior experienced by slower portions of requests",
                "They remove all slow requests",
                "They guarantee zero errors",
                "They measure only CPU usage",
              ],
              answer:
                "They reveal behavior experienced by slower portions of requests",
            },
            {
              question: "What can a correlation ID help with?",
              options: [
                "Connecting logs from multiple services for the same request",
                "Changing CPU frequency",
                "Creating container images",
                "Replacing databases",
              ],
              answer:
                "Connecting logs from multiple services for the same request",
            },
            {
              question: "What can APM help identify?",
              options: [
                "Slow application operations and performance problems",
                "Only monitor brightness",
                "Only keyboard errors",
                "Only source-code formatting",
              ],
              answer:
                "Slow application operations and performance problems",
            },
          ],
        },

        {
          title: "Lesson 6: Infrastructure Monitoring",
          content: `
Infrastructure monitoring focuses on the health and performance of the systems that run applications.

Important infrastructure components include:

- Servers
- Virtual machines
- Containers
- Storage
- Networks
- Operating systems

Common server metrics include:

CPU utilization
Memory utilization
Disk usage
Disk I/O
Network traffic
Network packet errors
System load
Process count

CPU utilization measures how much processing capacity is being used.

Memory monitoring helps detect memory pressure.

Disk monitoring should consider both capacity and performance.

A server may have enough disk space but still experience slow disk I/O.

Network monitoring can identify:

- High traffic
- Packet loss
- Connection failures
- Interface errors
- Bandwidth saturation

Container monitoring may include:

- CPU usage
- Memory usage
- Restart count
- Network traffic
- Container health

Infrastructure monitoring should establish baselines.

A baseline describes normal behavior.

For example, if a server normally uses 30% CPU during business hours, sustained usage of 95% may indicate unusual activity.

However, thresholds should be chosen based on workload.

A database server may normally use more CPU than a lightweight web server.

Monitoring should also track capacity trends.

For example, if disk usage increases steadily, an alert can be created before the disk reaches full capacity.

Infrastructure monitoring helps identify problems before they affect users.
          `,
          quiz: [
            {
              question: "What does infrastructure monitoring focus on?",
              options: [
                "The health and performance of systems running applications",
                "Only application user interfaces",
                "Only source-code comments",
                "Only database schemas",
              ],
              answer:
                "The health and performance of systems running applications",
            },
            {
              question: "Which is an infrastructure metric?",
              options: [
                "Disk utilization",
                "Button color",
                "Username spelling",
                "Source-code indentation",
              ],
              answer: "Disk utilization",
            },
            {
              question: "What is a monitoring baseline?",
              options: [
                "A description of normal system behavior",
                "A database password",
                "A Docker image",
                "A source-code repository",
              ],
              answer: "A description of normal system behavior",
            },
            {
              question: "Why should thresholds depend on workload?",
              options: [
                "Different systems have different normal operating patterns",
                "All systems use exactly the same resources",
                "Thresholds cannot be changed",
                "CPU usage is always identical",
              ],
              answer:
                "Different systems have different normal operating patterns",
            },
            {
              question: "Why monitor disk usage trends?",
              options: [
                "To detect when storage may eventually become full",
                "To prevent all network failures",
                "To replace backups",
                "To increase CPU speed",
              ],
              answer:
                "To detect when storage may eventually become full",
            },
          ],
        },

        {
          title: "Lesson 7: Database Monitoring",
          content: `
Databases are critical components of many applications.

Database monitoring helps identify:

- Slow queries
- Connection problems
- High CPU usage
- Memory pressure
- Lock contention
- Connection pool exhaustion
- Storage growth
- Replication problems
- Failed transactions

Important database metrics depend on the database system.

Common measurements include:

Query latency
Queries per second
Active connections
Connection errors
Cache hit ratio
Disk usage
Replication lag

Slow queries can significantly affect application performance.

A monitoring system can identify queries that consistently take longer than expected.

Database connection pools should also be monitored.

If an application has more requests than available database connections, requests may wait.

Connection pool exhaustion can therefore appear as application latency.

Locks can also affect performance.

One transaction may hold a lock while another transaction waits.

Replication is another important area.

A replicated database may copy data from one server to another.

Replication lag indicates how far behind a replica is compared with the primary database.

Storage monitoring is essential because databases grow over time.

A database that reaches its storage limit can cause serious application failures.

Backups should be monitored as well.

It is not enough to schedule backups.

The system should verify that backups complete successfully and that they can be restored.

Monitoring should therefore include:

Backup success
Backup duration
Backup size
Restore testing

Database monitoring helps connect infrastructure problems with application behavior.
          `,
          quiz: [
            {
              question: "Which is a useful database monitoring metric?",
              options: [
                "Query latency",
                "Monitor brightness",
                "Keyboard speed",
                "Source-code font",
              ],
              answer: "Query latency",
            },
            {
              question: "What can connection pool exhaustion cause?",
              options: [
                "Requests may wait for available database connections",
                "The database automatically becomes faster",
                "All queries are deleted",
                "The application source code changes",
              ],
              answer:
                "Requests may wait for available database connections",
            },
            {
              question: "What does replication lag describe?",
              options: [
                "How far a replica is behind the primary database",
                "How quickly a query is written",
                "How large a database password is",
                "How many users exist",
              ],
              answer:
                "How far a replica is behind the primary database",
            },
            {
              question: "Why should database backups be monitored?",
              options: [
                "A scheduled backup may fail without being noticed",
                "Backups never fail",
                "Monitoring deletes backups",
                "Databases do not require recovery",
              ],
              answer:
                "A scheduled backup may fail without being noticed",
            },
            {
              question: "What can database locks cause?",
              options: [
                "Transactions may have to wait",
                "All queries become faster",
                "Storage automatically increases",
                "Network bandwidth doubles",
              ],
              answer: "Transactions may have to wait",
            },
          ],
        },

        {
          title: "Lesson 8: Network Monitoring and Health Checks",
          content: `
Network monitoring observes the health and performance of network connections.

Important network measurements include:

- Bandwidth
- Latency
- Packet loss
- Connection errors
- Throughput
- Interface utilization
- DNS response time

Latency measures the time required for data to travel between endpoints.

Packet loss occurs when packets fail to reach their destination.

Packet loss can cause retransmissions and poor application performance.

Bandwidth represents the capacity available for transferring data.

Throughput represents the amount of data actually transferred over a period.

DNS monitoring is important because applications often depend on DNS to locate services.

A DNS failure can make an otherwise healthy application appear unavailable.

Health checks are simple tests used to determine whether a service is functioning.

A health endpoint might be:

GET /health

The endpoint can return a success response when the application is operating correctly.

Health checks can be:

Liveness checks:
Determine whether the application process is alive.

Readiness checks:
Determine whether the application is ready to receive traffic.

Dependency checks:
Determine whether required services such as databases are available.

Health checks should be designed carefully.

A readiness check may fail if a critical dependency is unavailable.

However, not every optional dependency should make the entire application unavailable.

Monitoring should distinguish between network problems and application problems.

For example:

High latency between services could indicate network congestion.

High application latency with normal network latency could indicate an application or database problem.

Network monitoring provides the information needed to make these distinctions.
          `,
          quiz: [
            {
              question: "What does packet loss mean?",
              options: [
                "Some network packets fail to reach their destination",
                "The CPU stops processing instructions",
                "A database record is deleted",
                "A file changes its extension",
              ],
              answer:
                "Some network packets fail to reach their destination",
            },
            {
              question: "What does bandwidth represent?",
              options: [
                "The capacity available for transferring data",
                "The number of application users",
                "Database storage size",
                "CPU instruction count",
              ],
              answer:
                "The capacity available for transferring data",
            },
            {
              question: "What does a readiness check determine?",
              options: [
                "Whether a service is ready to receive traffic",
                "Whether a server has a keyboard",
                "Whether a database password is correct",
                "Whether source code is formatted",
              ],
              answer: "Whether a service is ready to receive traffic",
            },
            {
              question: "Why is DNS monitoring important?",
              options: [
                "Applications may depend on DNS to locate services",
                "DNS controls CPU temperature",
                "DNS replaces application logs",
                "DNS determines disk capacity",
              ],
              answer:
                "Applications may depend on DNS to locate services",
            },
            {
              question: "What can network monitoring help distinguish?",
              options: [
                "Network problems from application performance problems",
                "Python from Java",
                "Files from folders",
                "Users from passwords",
              ],
              answer:
                "Network problems from application performance problems",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Alerting and Observability",
      description:
        "Learn alert design, dashboards, distributed tracing, observability, SLI/SLO concepts, and incident-oriented monitoring.",

      lessons: [
        {
          title: "Lesson 9: Alerting Fundamentals",
          content: `
An alert is generated when monitoring data indicates a condition that requires attention.

Alerts are useful only when they help someone take meaningful action.

A good alert should answer:

- What is wrong?
- Which service is affected?
- How serious is the problem?
- When did it start?
- What action should be taken?

Alerts can be based on:

Thresholds
Rates
Percentiles
Absence of data
Error conditions
Health checks

For example:

If HTTP 5xx errors exceed 5% for five minutes, create an alert.

The duration is important.

A temporary spike lasting a few seconds may not require an incident.

Alert severity can help prioritize responses.

For example:

Warning:
Potential problem requiring attention.

Critical:
Immediate action may be required.

Alert fatigue occurs when operators receive too many alerts.

If every small variation creates an alert, important alerts can be ignored.

Alerts should therefore focus on symptoms that affect users or important system behavior.

Alerts should have clear ownership.

The responsible team should know how to investigate the alert.

Runbooks can provide investigation and recovery steps.

Alerts should also include useful context such as:

Service name
Environment
Metric
Current value
Threshold
Timestamp
Link to dashboard

Alert testing is important.

A broken notification channel can be worse than having no alert rule because operators may assume they are protected when they are not.

Good alerting is actionable, meaningful, and tested.
          `,
          quiz: [
            {
              question: "What is the purpose of an alert?",
              options: [
                "To notify people about a condition requiring attention",
                "To collect source code",
                "To replace dashboards",
                "To increase CPU speed",
              ],
              answer:
                "To notify people about a condition requiring attention",
            },
            {
              question: "What is alert fatigue?",
              options: [
                "Receiving too many alerts, making important ones harder to notice",
                "A server running out of disk space",
                "A database becoming unavailable",
                "A monitoring dashboard loading slowly",
              ],
              answer:
                "Receiving too many alerts, making important ones harder to notice",
            },
            {
              question: "Why should alerts be actionable?",
              options: [
                "The recipient should be able to understand what needs attention",
                "Alerts should contain random information",
                "Alerts should never identify the affected service",
                "Alerts should always trigger for every small change",
              ],
              answer:
                "The recipient should be able to understand what needs attention",
            },
            {
              question: "What can a runbook provide?",
              options: [
                "Investigation and recovery steps",
                "A replacement operating system",
                "A database password",
                "A container image",
              ],
              answer: "Investigation and recovery steps",
            },
            {
              question: "Why should alert notification channels be tested?",
              options: [
                "To verify that alerts can actually reach the intended recipients",
                "To remove all alerts",
                "To increase storage usage",
                "To disable monitoring",
              ],
              answer:
                "To verify that alerts can actually reach the intended recipients",
            },
          ],
        },

        {
          title: "Lesson 10: Dashboards and Visualization",
          content: `
Dashboards organize monitoring information into visual panels.

A useful dashboard helps an operator understand system health quickly.

Common dashboard panels include:

- CPU usage
- Memory usage
- Request rate
- Error rate
- Latency
- Disk usage
- Network traffic
- Active connections

Dashboards should be designed around questions.

For example:

Is the service healthy?
Is traffic increasing?
Are errors increasing?
Are requests becoming slower?
Is the infrastructure reaching capacity?

A dashboard should not contain dozens of unrelated charts without purpose.

Graphs should have clear labels and units.

Time ranges should be visible.

Comparisons can also be useful.

For example, comparing the current hour with the previous hour can show unusual changes.

Dashboards can be separated by audience.

An application dashboard may focus on request latency and errors.

An infrastructure dashboard may focus on CPU, memory, disk, and network.

A database dashboard may focus on query performance and connections.

Dashboards can also display alerts and service status.

Color and visualization should communicate meaning without making the dashboard confusing.

A good dashboard supports troubleshooting.

For example:

Error rate increased
→ Check latency
→ Check database latency
→ Check infrastructure
→ Check logs

Dashboards should also be versioned or documented when possible.

Monitoring configuration is part of the system and should not depend only on one person's knowledge.
          `,
          quiz: [
            {
              question: "What is the purpose of a monitoring dashboard?",
              options: [
                "To provide a visual view of system health and behavior",
                "To replace application code",
                "To store passwords",
                "To create physical servers",
              ],
              answer:
                "To provide a visual view of system health and behavior",
            },
            {
              question: "Why should dashboards have clear units?",
              options: [
                "Users need to understand what the displayed values represent",
                "Units prevent monitoring data from being collected",
                "Units replace alert rules",
                "Units automatically fix system failures",
              ],
              answer:
                "Users need to understand what the displayed values represent",
            },
            {
              question: "What should a good dashboard focus on?",
              options: [
                "Questions that operators need to answer",
                "Every possible metric regardless of usefulness",
                "Only decorative information",
                "Only source-code statistics",
              ],
              answer:
                "Questions that operators need to answer",
            },
            {
              question: "Why can separate dashboards be useful?",
              options: [
                "Different systems and teams need different information",
                "Dashboards cannot display multiple metrics",
                "It prevents all monitoring",
                "It removes the need for alerts",
              ],
              answer:
                "Different systems and teams need different information",
            },
            {
              question: "How can dashboards support troubleshooting?",
              options: [
                "They allow operators to compare related system signals",
                "They automatically fix every problem",
                "They replace all logs",
                "They prevent errors from occurring",
              ],
              answer:
                "They allow operators to compare related system signals",
            },
          ],
        },

        {
          title: "Lesson 11: Distributed Tracing",
          content: `
Modern applications often use multiple services.

A single user request might travel through:

Frontend
→ API gateway
→ Authentication service
→ Backend
→ Database
→ Payment service

Metrics can tell us that the request is slow.

Logs can provide additional details.

Distributed tracing provides a view of the complete request path across services.

A trace represents one request or transaction.

A trace contains spans.

Each span represents an operation within the trace.

For example:

Trace:
User checkout request

Span 1:
API gateway

Span 2:
Order service

Span 3:
Database query

Span 4:
Payment service

Each span can contain:

- Start time
- Duration
- Service name
- Operation
- Status
- Attributes

Distributed tracing can identify where time is being spent.

For example:

Gateway: 20 ms
Order service: 50 ms
Database: 900 ms
Payment service: 100 ms

The database operation is the main contributor to latency.

Trace IDs allow logs and traces to be connected.

This is called correlation.

Distributed tracing is especially useful in microservices architectures.

Without tracing, operators may need to manually search many service logs to understand one request.

OpenTelemetry is a widely used open-source framework for collecting telemetry such as traces, metrics, and logs.

Tracing should be designed with privacy and security in mind.

Sensitive user information should not be placed unnecessarily into trace attributes.

Tracing data can also become expensive at very high volumes, so sampling strategies may be used.
          `,
          quiz: [
            {
              question: "What does a distributed trace represent?",
              options: [
                "The path of a request across multiple services",
                "Only CPU usage",
                "Only one database table",
                "A container image",
              ],
              answer:
                "The path of a request across multiple services",
            },
            {
              question: "What is a span?",
              options: [
                "An individual operation within a trace",
                "A database password",
                "A Docker volume",
                "A network cable",
              ],
              answer: "An individual operation within a trace",
            },
            {
              question: "What can distributed tracing help identify?",
              options: [
                "Which service or operation contributes to request latency",
                "Which keyboard is connected",
                "Which monitor is brightest",
                "Which file extension is largest",
              ],
              answer:
                "Which service or operation contributes to request latency",
            },
            {
              question: "What can a trace ID help connect?",
              options: [
                "Logs and traces belonging to the same request",
                "Two physical servers",
                "Two keyboard devices",
                "Two unrelated databases",
              ],
              answer:
                "Logs and traces belonging to the same request",
            },
            {
              question: "What is OpenTelemetry used for?",
              options: [
                "Collecting and exporting observability telemetry",
                "Editing source-code images",
                "Creating operating systems",
                "Managing physical cables",
              ],
              answer: "Collecting and exporting observability telemetry",
            },
          ],
        },

        {
          title: "Lesson 12: Observability, SLI, SLO, and SLA",
          content: `
Monitoring tells us about known signals.

Observability is the broader ability to understand the internal state of a system from its externally visible outputs.

The three commonly discussed observability signals are:

Metrics
Logs
Traces

Together they help operators investigate system behavior.

An SLI is a Service Level Indicator.

It is a measurement of a service's behavior.

Examples:

Request success rate
Latency
Availability

An SLO is a Service Level Objective.

It defines a target for an SLI.

For example:

99.9% of valid requests should succeed during a month.

An SLA is a Service Level Agreement.

It is a formal agreement between a service provider and customer that may include service expectations and consequences.

SLIs provide measurements.

SLOs define targets.

SLAs define contractual commitments.

These concepts should not be confused.

Error budgets are associated with SLO-based reliability management.

If an SLO allows a small amount of failure, the allowed failure amount represents the error budget.

For example, a 99.9% availability target allows approximately 0.1% unavailability during the relevant period.

Teams can use error budgets to balance reliability and feature delivery.

If the error budget is being consumed too quickly, the team may prioritize reliability work.

Observability helps answer unknown questions.

For example:

Why did latency increase?

Which dependency caused the problem?

Which requests are affected?

Why is one region behaving differently?

Good observability makes troubleshooting faster and helps teams understand system behavior.
          `,
          quiz: [
            {
              question: "What are the three commonly discussed observability signals?",
              options: [
                "Metrics, logs, and traces",
                "CPU, keyboard, and monitor",
                "Files, folders, and passwords",
                "Servers, cables, and screens",
              ],
              answer: "Metrics, logs, and traces",
            },
            {
              question: "What is an SLI?",
              options: [
                "A measurement of a service's behavior",
                "A contractual agreement",
                "A source-code repository",
                "A database password",
              ],
              answer: "A measurement of a service's behavior",
            },
            {
              question: "What is an SLO?",
              options: [
                "A target for a service-level measurement",
                "A log file",
                "A container image",
                "A network cable",
              ],
              answer: "A target for a service-level measurement",
            },
            {
              question: "What is an SLA?",
              options: [
                "A formal service-level agreement",
                "A monitoring metric",
                "A trace span",
                "A Docker command",
              ],
              answer: "A formal service-level agreement",
            },
            {
              question: "What is an error budget?",
              options: [
                "The amount of failure permitted by an SLO",
                "The total number of application bugs",
                "The size of a log file",
                "The number of monitoring servers",
              ],
              answer: "The amount of failure permitted by an SLO",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Advanced Monitoring and Practical Project",
      description:
        "Learn incident monitoring, capacity planning, automated remediation, monitoring security, and build an end-to-end monitoring system.",

      lessons: [
        {
          title: "Lesson 13: Incident Detection and Monitoring",
          content: `
An incident is an event that negatively affects a system or service.

Examples include:

- Application outage
- Database failure
- Network outage
- High error rate
- Security event
- Storage exhaustion
- Performance degradation

Monitoring plays an important role in detecting incidents.

An effective incident-monitoring system should detect meaningful symptoms quickly.

For example:

Error rate increases significantly.
Latency increases.
Health checks begin failing.

These signals can trigger alerts.

Incident detection should avoid unnecessary noise.

A single failed request may not indicate an incident.

A sustained increase in failures may be more meaningful.

Correlation is important.

If several services report errors at the same time, they may share a common dependency.

For example:

Database failure
→ API errors
→ Frontend failures

The frontend may be the first place users notice the problem, but the database could be the underlying cause.

Monitoring should provide enough context to investigate the root cause.

During an incident, operators often need:

- Current metrics
- Recent logs
- Traces
- Deployment history
- Configuration changes
- Infrastructure status

Change tracking is especially useful.

If an incident starts immediately after a deployment, the new version should be investigated.

Incident monitoring should also support escalation.

If the first response team cannot resolve the problem, the issue should be escalated to the appropriate team.

After an incident, monitoring rules should be reviewed.

If the system failed without generating an alert, monitoring coverage may need improvement.

Monitoring is therefore part of the complete incident-management lifecycle.
          `,
          quiz: [
            {
              question: "What is an incident?",
              options: [
                "An event that negatively affects a system or service",
                "A normal successful request",
                "A source-code comment",
                "A dashboard color",
              ],
              answer:
                "An event that negatively affects a system or service",
            },
            {
              question: "Why should incident alerts avoid unnecessary noise?",
              options: [
                "Too many unimportant alerts can hide important problems",
                "Noise always improves reliability",
                "Operators cannot receive any alerts",
                "Alerts cannot contain useful information",
              ],
              answer:
                "Too many unimportant alerts can hide important problems",
            },
            {
              question: "Why is deployment history useful during an incident?",
              options: [
                "A recent deployment may have introduced the problem",
                "Deployments never affect applications",
                "It replaces all monitoring data",
                "It prevents database failures",
              ],
              answer:
                "A recent deployment may have introduced the problem",
            },
            {
              question: "What can correlated failures indicate?",
              options: [
                "Multiple services may share a common dependency or cause",
                "Every service is always independent",
                "Monitoring is not working",
                "The database is always responsible",
              ],
              answer:
                "Multiple services may share a common dependency or cause",
            },
            {
              question: "What should happen after an incident if monitoring failed to detect it?",
              options: [
                "Monitoring coverage and alert rules should be reviewed",
                "All monitoring should be deleted",
                "The incident should be ignored",
                "All alerts should be disabled",
              ],
              answer:
                "Monitoring coverage and alert rules should be reviewed",
            },
          ],
        },

        {
          title: "Lesson 14: Capacity Planning and Performance Trends",
          content: `
Capacity planning uses monitoring data to understand whether infrastructure will be able to handle future workloads.

Resources that may require capacity planning include:

- CPU
- Memory
- Storage
- Network bandwidth
- Database connections
- Application instances

Monitoring historical data can reveal trends.

For example:

January:
Disk usage = 40%

February:
Disk usage = 48%

March:
Disk usage = 56%

The trend indicates that disk usage is increasing.

Capacity planning can estimate when additional resources may be required.

Traffic trends can also be analyzed.

If requests increase by 20% every month, the application may eventually require additional instances.

Capacity planning should consider peak usage rather than only average usage.

A website may have low traffic most of the day but experience a large spike during an event.

Resource headroom is useful.

Running every system at 100% utilization leaves little room for unexpected demand.

Scaling can be:

Vertical:
Increase resources of an existing machine.

Horizontal:
Add more instances.

Horizontal scaling is commonly used for stateless web services.

Monitoring helps determine whether scaling is necessary.

Autoscaling can automatically increase or decrease resources based on metrics.

For example:

If CPU remains above a target:
Add instances.

If demand decreases:
Remove unnecessary instances.

Autoscaling requires sensible limits.

Without limits, a system could create too many resources and increase costs.

Capacity planning connects monitoring data to future infrastructure decisions.
          `,
          quiz: [
            {
              question: "What is capacity planning?",
              options: [
                "Using data to plan whether infrastructure can handle future workloads",
                "Deleting unused source code",
                "Changing application colors",
                "Creating database passwords",
              ],
              answer:
                "Using data to plan whether infrastructure can handle future workloads",
            },
            {
              question: "What is horizontal scaling?",
              options: [
                "Adding more application instances",
                "Increasing the CPU of one machine",
                "Reducing storage capacity",
                "Removing all servers",
              ],
              answer: "Adding more application instances",
            },
            {
              question: "What is vertical scaling?",
              options: [
                "Increasing resources of an existing machine",
                "Adding more application instances",
                "Deleting a container",
                "Changing a network address",
              ],
              answer: "Increasing resources of an existing machine",
            },
            {
              question: "Why is resource headroom useful?",
              options: [
                "It leaves capacity for unexpected demand",
                "It guarantees that resources are always unused",
                "It removes the need for monitoring",
                "It prevents scaling",
              ],
              answer: "It leaves capacity for unexpected demand",
            },
            {
              question: "Why should autoscaling have limits?",
              options: [
                "To prevent uncontrolled resource creation and cost",
                "To prevent all scaling",
                "To disable monitoring",
                "To make applications slower",
              ],
              answer:
                "To prevent uncontrolled resource creation and cost",
            },
          ],
        },

        {
          title: "Lesson 15: Automated Monitoring and Remediation",
          content: `
Monitoring can be combined with automation to respond to detected conditions.

For example:

Condition:
A service becomes unhealthy.

Automation:
Restart the service.

Another example:

Condition:
Disk usage reaches a defined threshold.

Automation:
Create an alert and start a cleanup workflow.

Automated remediation should be used carefully.

A monitoring system may detect a symptom but not understand the root cause.

Repeatedly restarting a service can hide the underlying issue.

A safer remediation workflow can be:

1. Detect the condition.
2. Collect diagnostic information.
3. Check whether remediation is allowed.
4. Perform the action.
5. Verify the result.
6. Escalate if the problem remains.

Remediation should have limits.

For example, a service may be restarted at most three times within an hour.

After that, the incident should be escalated.

Automation should log every remediation action.

The log should include:

- Time
- Trigger
- Action
- Result
- Relevant service

Security is also important.

Automated remediation may require privileged access.

The automation account should receive only the permissions required to perform its job.

Approval gates can be used for risky actions.

For example, automatically restarting a development service may be safe.

Automatically deleting production data should normally require stronger controls.

Monitoring and automation work best together when the system has clear conditions, safe actions, validation, and escalation paths.
          `,
          quiz: [
            {
              question: "What is automated remediation?",
              options: [
                "Automatically performing a controlled response to a detected condition",
                "Ignoring monitoring alerts",
                "Deleting all monitoring data",
                "Disabling system health checks",
              ],
              answer:
                "Automatically performing a controlled response to a detected condition",
            },
            {
              question: "What should happen before automated remediation when possible?",
              options: [
                "Collect useful diagnostic information",
                "Delete all logs",
                "Disable monitoring",
                "Restart every server",
              ],
              answer: "Collect useful diagnostic information",
            },
            {
              question: "Why should remediation actions have limits?",
              options: [
                "To prevent repeated actions from making the problem worse",
                "To prevent all automation",
                "To disable error handling",
                "To remove monitoring",
              ],
              answer:
                "To prevent repeated actions from making the problem worse",
            },
            {
              question: "What should happen if remediation repeatedly fails?",
              options: [
                "Escalate the incident",
                "Continue indefinitely",
                "Delete all logs",
                "Ignore the failure",
              ],
              answer: "Escalate the incident",
            },
            {
              question: "Why should remediation accounts use least privilege?",
              options: [
                "To limit the damage if the automation credentials are compromised",
                "To give automation unlimited access",
                "To prevent automation from running",
                "To remove authentication",
              ],
              answer:
                "To limit the damage if the automation credentials are compromised",
            },
          ],
        },

        {
          title: "Lesson 16: Final Project - Build an Application Monitoring System",
          content: `
The final project combines the monitoring concepts learned throughout the course.

Project goal:

Build a monitoring system for a containerized web application.

The application can contain:

- Frontend
- Backend API
- Database

The monitoring system should observe:

- Application health
- Request rate
- Error rate
- Response latency
- CPU usage
- Memory usage
- Disk usage
- Database health
- Container status

A possible architecture is:

Application
→ Metrics
→ Monitoring system
→ Time-series storage
→ Dashboard
→ Alerting

Logs can be collected separately and connected with metrics.

Step 1: Application health endpoint

Create:

GET /health

The endpoint should return a successful response when the application is healthy.

Step 2: Application metrics

Collect metrics such as:

Total requests
Request duration
HTTP errors
Active requests

Step 3: Infrastructure metrics

Monitor:

CPU
Memory
Disk
Network

Step 4: Database monitoring

Monitor:

Connections
Query latency
Storage
Errors

Step 5: Dashboard

Create dashboards showing:

Application health
Traffic
Latency
Errors
Infrastructure resources
Database status

Step 6: Alerts

Create meaningful alerts.

Examples:

High error rate
High latency
Service unavailable
Disk nearly full
Database unavailable

Avoid creating alerts for every small temporary variation.

Step 7: Logs

Collect application logs.

Include useful information such as:

Timestamp
Service
Log level
Request ID
Message

Do not log passwords or private credentials.

Step 8: Incident simulation

Simulate a controlled problem.

For example:

Stop the backend service.

The monitoring system should detect that the service is unavailable.

An alert should be generated.

Logs and metrics should help identify the problem.

Restart the service.

Verify that the health check becomes successful again.

Step 9: Automated remediation

Create a safe automation workflow that can restart the service when a defined health condition occurs.

Add a limit so that the service is not restarted continuously.

Step 10: Documentation

Document:

Monitoring architecture
Metrics
Logs
Dashboard
Alert rules
Health checks
Troubleshooting steps
Remediation process

The final project demonstrates the complete monitoring workflow:

Collect
→ Store
→ Visualize
→ Alert
→ Investigate
→ Remediate
→ Verify

After completing this project, you should understand how monitoring helps developers and system administrators detect problems, investigate failures, measure performance, and improve system reliability.
          `,
          quiz: [
            {
              question: "What is the main goal of the final monitoring project?",
              options: [
                "Monitor application, infrastructure, and database health",
                "Replace the application with a spreadsheet",
                "Remove all system logs",
                "Disable application testing",
              ],
              answer:
                "Monitor application, infrastructure, and database health",
            },
            {
              question: "What endpoint can be used as a basic application health check?",
              options: [
                "GET /health",
                "GET /delete",
                "POST /shutdown",
                "DELETE /monitor",
              ],
              answer: "GET /health",
            },
            {
              question: "Which information should not be placed in application logs?",
              options: [
                "Passwords and private credentials",
                "Timestamp",
                "Log level",
                "Request ID",
              ],
              answer: "Passwords and private credentials",
            },
            {
              question: "What should a useful monitoring dashboard display?",
              options: [
                "Health, traffic, latency, errors, and resource usage",
                "Only application colors",
                "Only source-code comments",
                "Only usernames",
              ],
              answer:
                "Health, traffic, latency, errors, and resource usage",
            },
            {
              question: "What is the final monitoring workflow?",
              options: [
                "Collect, store, visualize, alert, investigate, remediate, and verify",
                "Delete, restart, ignore, and repeat",
                "Code, compile, print, and shutdown",
                "Install, format, delete, and reinstall",
              ],
              answer:
                "Collect, store, visualize, alert, investigate, remediate, and verify",
            },
          ],
        },
      ],
    },
  ],
};

export default monitoringCourse;