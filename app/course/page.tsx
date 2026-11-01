"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import embeddedSystemsCourse from "./data/embeddedC";
import deepLearningAIMLCourse from "./data/deep-learning-aiml";
import apisAIMLCourse from "./data/apis-aiml";
import { pythonCourse } from "./data/python";
import gitCourse from "./data/git";
import { javaCourse } from "./data/java";
import {
  powerBIAndTableauDashboardsCourse,
} from "./data/powerbi-and-tableau-dashboards";
import { htmlCourse } from "./data/html";
import { cssCourse } from "./data/css";
import sqlCourse from "./data/sql";
import { dataCleaningAndValidationCourse } from "./data/data-cleaning-and-validation";
import { javascriptCourse } from "./data/javascript";
import reactCourse from "./data/react";
import linuxCourse from "./data/linux";
import { cloudCourse } from "./data/cloud";
import networkingCourse from "./data/networking";
import statisticsCourse from "./data/statistics";
import circuitTheoryCourse from "./data/circuit-theory";
import analogElectronicsCourse from "./data/analog-electronics";
import digitalElectronicsCourse from "./data/digital-electronics";
import { cProgrammingCourse } from "./data/c-programming";
import microcontrollerBasicsCourse from "./data/microcontroller-basics";
import excelCourse from "./data/excel";

import { excelAndSpreadsheetFundamentalsCourse } from "./data/excel-and-spreadsheet-fundamentals";
import { designFundamentalsCourse } from "./data/design-fundamentals";
import { wireframingCourse } from "./data/wireframing";
import { visualCommunicationCourse } from "./data/visual-communication";
import { booleanAlgebraCourse } from "./data/boolean-algebra";
import { verilogBasicsCourse } from "./data/verilog-basics";
import { programmingFundamentalsCourse } from "./data/programming-fundamentals";
import { programmingBasicsCourse } from "./data/programming-basics";
import networkingFundamentalsCourse from "./data/networking-fundamentals";
import linuxBasicsCourse from "./data/linux-basics";
import { basicStatisticsCourse } from "./data/basic-statistics";
import electronicsBasicCourse from "./data/electronics-basic";
import securityFundamentalsCourse from "./data/security-fundamentals";
import { basicMathematicsCourse } from "./data/basic-mathematics";
import ipAddressingCourse from "./data/ip-addressing";
import { communicationCourse } from "./data/communication";
import subnettingCourse from "./data/subnetting";
import { networkingBasicsCourse } from "./data/networking-basics";
import sqlBasicsCourse from "./data/sql-basics";

import cloudArchitectureCourse from "./data/cloud-architecture";
import containersCourse from "./data/containers";
import automationCourse from "./data/automation";
import monitoringCourse from "./data/monitoring";
import networkBasicsCourse from "./data/network-basics";

import securityMonitoringCourse from "./data/security-monitoring";
import scriptingCourse from "./data/scripting";
import incidentResponseCourse from "./data/incident-response";
import riskAssessmentCourse from "./data/risk-assessment";

import { statisticsAndExploratoryDataAnalysisCourse } from "./data/statistics-and-exploratory-data-analysis";
import { pythonWithPandasAndNumpyCourse } from "./data/python-with-pandas-and-numpy";
import powerBiCourse from "./data/power-bi";

import dataPreparationCourse from "./data/data-preparation";
import machineLearningCourse from "./data/machine-learning";
import modelEvaluationCourse from "./data/model-evaluation";

import pcbDesignCourse from "./data/pcb-design";
import instrumentationCourse from "./data/Instrumentation";
import signalProcessingCourse from "./data/SignalProcessing";
import testingElectronicsCourse from "./data/TestingElectronics";
import rtosCourse from "./data/rtos";
import deviceDriversCourse from "./data/device-drivers";
import communicationProtocolsCourse from "./data/communication-protocols";
import microcontrollerCourse from "./data/microcontroller";
import mqttCourse from "./data/mqtt";
import cloudIntegrationCourse from "./data/cloud-integration";
import deviceSecurityCourse from "./data/device-security";
import routingCourse from "./data/routing";
import switchingCourse from "./data/switching";
import networkSecurityCourse from "./data/network-security";
import troubleshootingCourse from "./data/troubleshooting";
import productMetricsCourse from "./data/product-metrics";
import experimentAnalysisCourse from "./data/experiment-analysis";
import dataStructuresCourse from "./data/data-structures";
import algorithmsCourse from "./data/algorithms";
import softwareTestingCourse from "./data/software-testing";
import prototypingCourse from "./data/prototyping";
import usabilityTestingCourse from "./data/usability-testing";
import designSystemCourse from "./data/design-system";
import accessibilityCourse from "./data/accessibility";
import systemVerilogCourse from "./data/system-verilog";
import cmosVerificationCourse from "./data/verification-cmos";
import physicalDesignCourse from "./data/physical-design";
import nextjsCourse from "./data/nextjs";
import testingCourse from "./data/testing";
import webSecurityCourse from "./data/web-security";
import programmingAIMLCourse from "./data/programming";
import programBasicsCourse from "./data/program-basics";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type Lesson = {
  id: string;
  title: string;
  introduction: string;
  sections: { heading: string; content: string }[];
  example?: string;
  exercise: string;
  quiz: QuizQuestion[];
};

type CourseWeek = {
  title: string;
  lessons: Lesson[];
  assignment: string;
};

type Course = {
  title: string;
  description: string;
  project: string;
  weeks: CourseWeek[];
};

type RecordValue = Record<string, unknown>;

type WeeklyTask = {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
  career: string | null;
  course: string | null;
  created_at?: string;
};

function record(value: unknown): RecordValue {
  return value !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
    ? (value as RecordValue)
    : {};
}

function text(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function normalizeSkill(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");
}

function normalizeCareerName(value: string): string {
  const normalized = normalizeSkill(value);

  const aliases: Record<string, string> = {
    "cloud eng": "cloud engineer",
    "cloud engineer": "cloud engineer",
    cloud: "cloud engineer",

    "network eng": "network engineer",
    "network engineer": "network engineer",
    networking: "network engineer",

    "software eng": "software engineer",
    "software engineer": "software engineer",

    "data analyst": "data analyst",
    "data analytics": "data analyst",

    "ai ml engineer": "ai ml engineer",
    "ai engineer": "ai ml engineer",
    "machine learning engineer": "ai ml engineer",
  };

  return aliases[normalized] ?? normalized;
}

function normalizeQuiz(value: unknown): QuizQuestion[] {
  const list = Array.isArray(value)
    ? value
    : value && typeof value === "object"
      ? [value]
      : [];

  return list
    .map((item): QuizQuestion | null => {
      const q = record(item);

      const rawOptions = Array.isArray(q.options)
        ? q.options
        : Array.isArray(q.choices)
          ? q.choices
          : [];

      const options = rawOptions
        .map((option) => {
          if (
            typeof option === "string" ||
            typeof option === "number"
          ) {
            return String(option);
          }

          const o = record(option);

          return (
            text(o.label) ||
            text(o.text) ||
            text(o.value)
          );
        })
        .filter(Boolean);

      const question =
        text(q.question) ||
        text(q.text) ||
        text(q.prompt);

      const rawAnswer =
        q.answer ??
        q.correctAnswer ??
        q.correct_answer ??
        q.correctOption ??
        q.correct_option;

      let answer = "";

      if (typeof rawAnswer === "number") {
        answer = options[rawAnswer] ?? "";
      } else if (typeof rawAnswer === "string") {
        const trimmed = rawAnswer.trim();

        const number = trimmed.match(
          /^(?:option\s*)?([0-9]+)$/i
        );

        const letter = trimmed.match(/^([A-D])$/i);

        if (number) {
          const index = Number(number[1]);

          answer =
            index >= 1 && index <= options.length
              ? options[index - 1]
              : options[index] ?? "";
        } else if (letter && options.length >= 4) {
          answer =
            options[letter[1].charCodeAt(0) - 65] ?? "";
        } else {
          answer = trimmed;
        }
      }

      if (!question || options.length < 2 || !answer) {
        return null;
      }

      const matching = options.find(
        (option) =>
          option.trim().toLowerCase() === answer.toLowerCase()
      );

      return {
        question,
        options,
        answer: matching ?? answer,
        explanation:
          text(q.explanation) ||
          text(q.feedback) ||
          text(q.reason),
      };
    })
    .filter((q): q is QuizQuestion => q !== null);
}


function normalizeCourse(
  value: unknown,
  fallbackTitle: string,
  fallbackDescription: string,
  fallbackProject: string
): Course {
  const raw = record(value);

  const rawWeeks = Array.isArray(raw.weeks)
    ? raw.weeks
    : [];

  const weeks: CourseWeek[] = rawWeeks.map((weekValue, wi) => {
    const week = record(weekValue);

    const rawLessons = Array.isArray(week.lessons)
      ? week.lessons
      : [];

    const weeklyQuiz = normalizeQuiz(
      week.quiz ??
        week.weeklyQuiz ??
        week.questions
    );

    const lessons: Lesson[] = rawLessons.map(
      (lessonValue, li) => {
        const lesson = record(lessonValue);

        const introduction =
          text(lesson.introduction) ||
          text(lesson.content) ||
          text(lesson.explanation) ||
          text(lesson.description) ||
          "Study the explanation and practise the example.";

        let sections = Array.isArray(lesson.sections)
          ? lesson.sections
              .map((item) => {
                const s = record(item);

                return {
                  heading: text(s.heading, "Lesson notes"),
                  content:
                    text(s.content) ||
                    text(s.description),
                };
              })
              .filter((section) => section.content)
          : [];

        if (!sections.length) {
          sections = [
            {
              heading: "Lesson explanation",
              content: introduction,
            },
          ];
        }

        return {
          id: text(lesson.id, `${wi + 1}-${li + 1}`),
          title: text(lesson.title, `Lesson ${li + 1}`),
          introduction,
          sections,
          example: text(lesson.example),
          exercise:
            text(lesson.exercise) ||
            text(lesson.assignment) ||
            "Review this lesson and write a small example.",
          quiz: normalizeQuiz(
            lesson.quiz ??
              lesson.questions ??
              lesson.weeklyQuiz
          ),
        };
      }
    );

    if (lessons.length && weeklyQuiz.length) {
      const base = Math.floor(
        weeklyQuiz.length / lessons.length
      );

      const extra =
        weeklyQuiz.length % lessons.length;

      let position = 0;

      lessons.forEach((lesson, index) => {
        const count = base + (index < extra ? 1 : 0);

        lessons[index] = {
          ...lesson,
          quiz: [
            ...lesson.quiz,
            ...weeklyQuiz.slice(
              position,
              position + count
            ),
          ],
        };

        position += count;
      });
    }

    return {
      title: text(week.title, `Week ${wi + 1}`),
      lessons,
      assignment:
        text(week.assignment) ||
        text(week.description) ||
        "Revise this week's lessons and practise the examples.",
    };
  });

  // Support both string and object project formats.
  const projectValue =
    typeof raw.project === "string"
      ? raw.project
      : "";

  const project = record(raw.project);

  const requirements = Array.isArray(project.requirements)
    ? project.requirements.map(String).join("; ")
    : "";

  const projectText = [
    text(project.title),
    text(project.description),
    requirements ? `Requirements: ${requirements}` : "",
  ]
    .filter(Boolean)
    .join(" — ");

  const lastAssignment =
    weeks[weeks.length - 1]?.assignment ?? "";

  return {
    title: text(raw.title, fallbackTitle),
    description: text(raw.description, fallbackDescription),
    project:
      projectValue ||
      projectText ||
      (lastAssignment.toLowerCase().startsWith("final mini project")
        ? lastAssignment
        : fallbackProject),
    weeks,
  };
}


function createStarterCourse(skill: string): Course {
  return {
    title: skill || "General",
    description: `Learn ${skill} step by step with lessons and practice.`,
    project: `${skill} Mini Project`,
    weeks: [
      {
        title: "Week 1: Fundamentals",
        assignment: `Practise the basic concepts of ${skill}.`,
        lessons: [
          {
            id: "1-1",
            title: `Introduction to ${skill}`,
            introduction: `This course introduces ${skill}. Learn the key concepts and practise with small examples.`,
            sections: [
              {
                heading: "What you will learn",
                content: `Understand the main concepts of ${skill} and how they are used in practical applications.`,
              },
            ],
            example: `Create a simple example using ${skill}.`,
            exercise: `Write your own example using ${skill}.`,
            quiz: [],
          },
        ],
      },
    ],
  };
}

const courseCatalog = [
  // CLOUD ENGINEER
  {
    aliases: [
      "cloud architecture",
      "cloud architect",
      "cloud infrastructure",
    ],
    raw: cloudArchitectureCourse,
    title: "Cloud Architecture",
    description: "Learn cloud architecture, infrastructure, and design.",
    project: "Cloud Architecture Design Project",
  },
  {
    aliases: [
      "networking",
      "computer networking",
      "networking fundamentals",
      "computer networks",
      "network administration",
      "network engineering",
    ],
    raw: networkingCourse,
    title: "Networking",
    description:
      "Learn computer networking fundamentals, network devices, OSI and TCP/IP models, IP addressing, subnet masks, routing, DNS, DHCP, network security, and troubleshooting.",
    project: "Design and Troubleshoot a Small Network",
  },
  {
  aliases: [
    "data cleaning and validation",
    "data cleaning",
    "data validation",
    "data cleansing",
    "data quality",
  ],
  raw: dataCleaningAndValidationCourse,
  title: "Data Cleaning and Validation",
  description:
    "Learn to identify, clean, standardize, and validate datasets using Excel and Python.",
  project:
    "Create a Clean Student Records Dataset and prepare a data quality report.",
},
{
  aliases: [
    "statistics and exploratory data analysis",
    "statistics",
    "exploratory data analysis",
    "eda",
    "statistical analysis",
  ],
  raw: statisticsAndExploratoryDataAnalysisCourse,
  title: "Statistics and Exploratory Data Analysis",
  description:
    "Learn statistics, probability, descriptive analysis, and EDA using Excel and Python.",
  project:
    "Analyze student performance data using statistical measures, charts, and exploratory analysis.",
},
  {
    aliases: [
      "sql basics",
      "sql",
      "sql fundamentals",
      "database basics",
      "sql beginner",
      "relational databases",
      "database fundamentals",
    ],
    raw: sqlBasicsCourse,
    title: "SQL Basics",
    description:
      "Learn SQL fundamentals, databases, tables, data types, SELECT queries, filtering, sorting, grouping, joins, subqueries, data modification, constraints, and practical database querying.",
    project: "Student Management Database",
  },
  {
    aliases: [
      "microcontroller basics",
      "microcontroller",
      "microcontrollers",
      "microcontroller fundamentals",
      "embedded systems basics",
      "8051 basics",
    ],
    raw: microcontrollerBasicsCourse,
    title: "Microcontroller Basics",
    description:
      "Learn microcontroller architecture, CPU, memory, GPIO, registers, timers, interrupts, serial communication, embedded C concepts, peripheral interfacing, and practical embedded system design.",
    project: "Build a Simple Microcontroller-Based Sensor System",
  },
  {
    aliases: [
      "analog electronics",
      "analog electronics fundamentals",
      "analog circuits",
      "analog electronics basics",
      "analog circuit design",
    ],
    raw: analogElectronicsCourse,
    title: "Analog Electronics",
    description:
      "Learn analog signals, semiconductor devices, diodes, transistors, amplifiers, operational amplifiers, filters, oscillators, and practical analog circuit design.",
    project: "Design a Basic Analog Signal Amplifier",
  },
  {
    aliases: [
      "data preparation",
      "data preparation fundamentals",
      "data cleaning",
      "data preprocessing",
      "data transformation",
      "data preparation using python",
    ],
    raw: dataPreparationCourse,
    title: "Data Preparation",
    description:
      "Learn data profiling, data quality, missing-value handling, duplicate detection, cleaning, standardization, transformation, validation, and preparing datasets for analysis and machine learning.",
    project: "Prepare a Clean Student Performance Dataset",
  },
  {
  aliases: [
    "power bi",
    "powerbi",
    "power bi dashboards",
    "tableau",
    "tableau dashboards",
    "power bi and tableau",
    "powerbi and tableau dashboards",
  ],
  raw: powerBIAndTableauDashboardsCourse,
  title: "Power BI and Tableau Dashboards",
  description:
    "Master Power BI and Tableau through data preparation, visualizations, DAX, calculated fields and interactive dashboard development.",
  project:
    "Build a Student Performance Analysis Dashboard using Power BI and Tableau.",
},
  {
    aliases: [
      "circuit theory",
      "electrical circuit theory",
      "circuit analysis",
      "network theory",
      "electrical networks",
      "basic circuit theory",
    ],
    raw: circuitTheoryCourse,
    title: "Circuit Theory",
    description:
      "Learn electrical circuit fundamentals, Ohm's law, Kirchhoff's laws, network theorems, AC circuit analysis, impedance, resonance, transient response, and circuit applications.",
    project: "Analyze an RC Low-Pass Filter",
  },
  {
    aliases: [
      "sql",
      "sql course",
      "sql fundamentals",
      "sql basics",
      "structured query language",
      "database fundamentals",
      "database management",
    ],
    raw: sqlCourse,
    title: "SQL",
    description:
      "Learn SQL fundamentals, relational databases, tables, data types, SQL commands, filtering, sorting, aggregate functions, joins, subqueries, constraints, and database operations.",
    project: "Student Management Database",
  },
  {
    aliases: [
      "pcb design",
      "printed circuit board design",
      "pcb layout",
      "pcb designing",
      "printed circuit board",
      "pcb fundamentals",
    ],
    raw: pcbDesignCourse,
    title: "PCB Design",
    description:
      "Learn PCB fundamentals, schematic capture, component footprints, board layout, routing, design rules, grounding, signal integrity, manufacturing, and PCB testing.",
    project: "Design a Basic LED Indicator PCB",
  },
  {
    aliases: [
      "scripting",
      "scripting fundamentals",
      "automation scripting",
      "shell scripting",
      "python scripting",
      "scripting basics",
    ],
    raw: scriptingCourse,
    title: "Scripting",
    description:
      "Learn scripting fundamentals, variables, conditions, loops, functions, files, command-line tools, Bash and Python scripting, automation, error handling, logging, scheduling, and practical system scripting.",
    project: "Build a System Automation Script",
  },
  {
    aliases: [
      "subnetting",
      "subnetting fundamentals",
      "ip subnetting",
      "subnetting basics",
      "ipv4 subnetting",
      "network subnetting",
    ],
    raw: subnettingCourse,
    title: "Subnetting",
    description:
      "Learn IPv4 subnetting, binary conversion, subnet masks, CIDR, network and broadcast addresses, host calculations, VLSM, subnet planning, and practical network troubleshooting.",
    project: "Design a Subnetted Network",
  },
  {
    aliases: [
      "electronics basic",
      "basic electronics",
      "electronics basics",
      "electronics fundamentals",
      "introduction to electronics",
    ],
    raw: electronicsBasicCourse,
    title: "Electronics Basic",
    description:
      "Learn basic electronics, voltage, current, resistance, electrical components, circuit laws, diodes, transistors, capacitors, sensors, and practical electronic circuits.",
    project: "Build a Basic Sensor-Based Electronic Circuit",
  },
 {
  ...excelAndSpreadsheetFundamentalsCourse,
  aliases: [
    "excel",
    "microsoft excel",
    "spreadsheet fundamentals",
    "excel and spreadsheet fundamentals",
    "excel basics",
  ],
},
  {
    aliases: [
      "incident response",
      "incident response fundamentals",
      "cybersecurity incident response",
      "security incident response",
      "incident handling",
      "incident management",
    ],
    raw: incidentResponseCourse,
    title: "Incident Response",
    description:
      "Learn incident response fundamentals, incident identification, triage, evidence collection, containment, eradication, recovery, communication, documentation, and practical incident response workflows.",
    project: "Build an Incident Response Workflow",
  },
  {
    aliases: [
      "risk assessment",
      "risk assessment fundamentals",
      "security risk assessment",
      "cybersecurity risk assessment",
      "risk management",
      "security risk management",
    ],
    raw: riskAssessmentCourse,
    title: "Risk Assessment",
    description:
      "Learn risk assessment fundamentals, assets, threats, vulnerabilities, likelihood, impact, risk analysis, risk treatment, controls, risk registers, and practical security risk assessment.",
    project: "Security Risk Assessment",
  },
  {
    aliases: [
      "git",
      "git fundamentals",
      "version control",
      "git basics",
      "github",
      "git and github",
      "version control fundamentals",
    ],
    raw: gitCourse,
    title: "Git",
    description:
      "Learn Git fundamentals, repositories, commits, branches, merging, remotes, GitHub workflows, collaboration, conflict resolution, history, tags, and practical version control.",
    project: "Build a Git-Based Project Workflow",
  },
  {
    aliases: [
      "linux basics",
      "linux basic",
      "linux fundamentals",
      "linux basics course",
      "basic linux",
      "linux administration basics",
    ],
    raw: linuxBasicsCourse,
    title: "Linux Basics",
    description:
      "Learn essential Linux commands, files and directories, permissions, users, processes, package management, networking, shell scripting, and basic system administration.",
    project: "Linux System Administration Basics",
  },
  {
    aliases: [
      "security fundamentals",
      "security basics",
      "cybersecurity fundamentals",
      "cyber security basics",
      "information security fundamentals",
      "security fundamentals course",
    ],
    raw: securityFundamentalsCourse,
    title: "Security Fundamentals",
    description:
      "Learn cybersecurity fundamentals, common threats, authentication, access control, network security, system security, data protection, security monitoring, and basic security best practices.",
    project: "Basic Security Assessment",
  },
  {
    aliases: [
      "program basics",
      "programming basics",
      "programming basic",
      "introduction to programming",
      "basic programming",
    ],
    raw: programBasicsCourse,
    title: "Program Basics",
    description:
      "Learn programming fundamentals, algorithms, variables, data types, operators, conditions, loops, functions, arrays, debugging, and problem-solving.",
    project: "Student Marks Management Program",
  },
  {
    aliases: [
      "programming for aiml engineer",
      "programming for ai/ml engineer",
      "python for ai ml",
      "python programming for machine learning",
      "python for ai engineer",
      "ai ml programming",
      "python for artificial intelligence",
    ],
    raw: programmingAIMLCourse,
    title: "Programming for AI/ML Engineer",
    description:
      "Learn Python fundamentals, data structures, OOP, NumPy, Pandas, data preprocessing, visualization, APIs, testing, and practical AI/ML programming.",
    project: "Student Performance Prediction Application",
  },
  {
    aliases: [
      "network basics",
      "networking basics",
      "basic networking",
      "computer network basics",
      "network fundamentals",
      "networking fundamentals",
    ],
    raw: networkBasicsCourse,
    title: "Network Basics",
    description:
      "Learn the fundamentals of computer networks, network devices, IP addresses, protocols, ports, DNS, DHCP, routing, switching, wireless networking, troubleshooting, and practical network concepts.",
    project: "Build and Troubleshoot a Small Network",
  },
  {
    aliases: [
      "ip addressing",
      "ip address",
      "ip addressing basics",
      "ipv4 addressing",
      "ipv6 addressing",
      "network addressing",
    ],
    raw: ipAddressingCourse,
    title: "IP Addressing",
    description:
      "Learn IPv4 and IPv6 addressing, public and private addresses, subnet masks, CIDR notation, gateways, DNS, DHCP, address allocation, troubleshooting, and practical IP addressing.",
    project: "Design an IP Addressing Plan",
  },
  {
    aliases: [
      "apis for aiml",
      "apis for ai ml engineer",
      "apis for ai engineer",
      "api development for machine learning",
      "api integration for ai",
      "rest api for ai ml",
    ],
    raw: apisAIMLCourse,
    title: "APIs for AI/ML Engineer",
    description:
      "Learn API fundamentals, HTTP, REST, JSON, FastAPI, validation, model serving, authentication, testing, security, and deployment.",
    project: "AI/ML Model Prediction REST API",
  },
  {
    aliases: [
      "deep learning for aiml engineer",
      "deep learning for ai ml engineer",
      "deep learning",
      "deep learning fundamentals",
      "neural networks",
      "deep learning for machine learning",
    ],
    raw: deepLearningAIMLCourse,
    title: "Deep Learning for AI/ML Engineer",
    description:
      "Learn neural network fundamentals, perceptrons, activation functions, forward and backpropagation, optimization, CNNs, RNNs, transformers, regularization, and model evaluation.",
    project: "Image Classification with a Neural Network",
  },
  {
    aliases: [
      "containers",
      "container",
      "containerization",
      "docker",
      "kubernetes",
    ],
    raw: containersCourse,
    title: "Containers",
    description: "Learn container technologies and deployment concepts.",
    project: "Containerized Application Project",
  },
  {
    aliases: [
      "automation",
      "cloud automation",
      "infrastructure automation",
    ],
    raw: automationCourse,
    title: "Cloud Automation",
    description: "Learn automation concepts and repeatable infrastructure workflows.",
    project: "Cloud Automation Project",
  },
  {
    aliases: [
      "monitoring",
      "cloud monitoring",
      "infrastructure monitoring",
    ],
    raw: monitoringCourse,
    title: "Cloud Monitoring",
    description: "Learn to monitor system health, performance, and availability.",
    project: "Cloud Monitoring Dashboard",
  },

  // CYBERSECURITY ANALYST
  {
    aliases: [
      "security monitoring",
      "security monitoring tools",
      "siem",
    ],
    raw: securityMonitoringCourse,
    title: "Security Monitoring",
    description: "Learn security event monitoring and alert analysis.",
    project: "Security Monitoring Investigation",
  },
  {
    aliases: [
      "scripting",
      "security scripting",
      "cybersecurity scripting",
    ],
    raw: scriptingCourse,
    title: "Scripting",
    description: "Learn scripting techniques for security and automation tasks.",
    project: "Security Scripting Project",
  },
  {
    aliases: [
      "incident response",
      "cyber incident response",
      "incident handling",
    ],
    raw: incidentResponseCourse,
    title: "Incident Response",
    description: "Learn how to investigate and respond to security incidents.",
    project: "Incident Response Case Study",
  },
  {
    aliases: [
      "risk assessment",
      "security risk assessment",
      "cybersecurity risk assessment",
    ],
    raw: riskAssessmentCourse,
    title: "Risk Assessment",
    description: "Learn to identify, evaluate, and prioritize security risks.",
    project: "Security Risk Assessment Report",
  },

  // DATA ANALYST
  {
    aliases: [
      "statistics and exploratory data analysis",
      "statistics & exploratory data analysis",
      "exploratory data analysis",
      "eda",
    ],
    raw: statisticsAndExploratoryDataAnalysisCourse,
    title: "Statistics and Exploratory Data Analysis",
    description: "Learn statistical reasoning and explore datasets for useful patterns.",
    project: "Exploratory Data Analysis Report",
  },
 {
  aliases: [
    "python with pandas and numpy",
    "pandas and numpy",
    "python pandas",
    "numpy",
    "pandas",
  ],
  raw: pythonWithPandasAndNumpyCourse,
  title: "Python with Pandas and NumPy",
  description:
    "Learn Python data analysis using NumPy arrays, Pandas DataFrames, data cleaning, filtering, and aggregation.",
  project:
    "Build a Student Performance Analysis project using Python, NumPy, and Pandas.",
},
  {
    aliases: [
      "power bi and tableau dashboards",
      "power bi",
      "powerbi",
      "tableau",
      "data visualization dashboards",
      "bi dashboards",
    ],
    raw: powerBiCourse,
    title: "Power BI and Tableau Dashboards",
    description: "Learn dashboard design, data visualization, and reporting.",
    project: "Interactive Analytics Dashboard",
  },

  // DATA SCIENTIST
  {
    aliases: [
      "data preparation",
      "data preprocessing",
      "data cleaning",
      "data preparation and preprocessing",
    ],
    raw: dataPreparationCourse,
    title: "Data Preparation",
    description: "Learn to clean, transform, and prepare datasets for analysis.",
    project: "Data Preparation Pipeline",
  },
  {
    aliases: [
      "machine learning",
      "machine learning basics",
      "ml",
    ],
    raw: machineLearningCourse,
    title: "Machine Learning",
    description: "Learn machine learning concepts and build predictive models.",
    project: "Machine Learning Prediction Project",
  },
  {
    aliases: [
      "model evaluation",
      "machine learning model evaluation",
      "model validation",
    ],
    raw: modelEvaluationCourse,
    title: "Model Evaluation",
    description: "Learn how to evaluate model performance and compare predictions.",
    project: "Model Evaluation Report",
  },  // ELECTRONICS ENGINEER
  {
    aliases: [
      "pcb design",
      "printed circuit board design",
      "printed circuit boards",
    ],
    raw: pcbDesignCourse,
    title: "PCB Design",
    description: "Learn printed circuit board design and layout fundamentals.",
    project: "PCB Design Project",
  },
  {
    aliases: [
      "instrumentation",
      "electronic instrumentation",
      "measurement and instrumentation",
    ],
    raw: instrumentationCourse,
    title: "Instrumentation",
    description: "Learn measurement systems, sensors, and instrumentation concepts.",
    project: "Instrumentation Measurement Project",
  },
  {
    aliases: [
      "signal processing",
      "digital signal processing",
      "dsp",
    ],
    raw: signalProcessingCourse,
    title: "Signal Processing",
    description: "Learn signal processing concepts and practical applications.",
    project: "Signal Processing Analysis Project",
  },
  {
    aliases: [
      "testing",
      "electronics testing",
      "electronic testing",
      "testing and troubleshooting",
    ],
    raw: testingElectronicsCourse,
    title: "Electronics Testing",
    description: "Learn electronic circuit testing, measurement, and troubleshooting.",
    project: "Electronics Testing Project",
  },
  {
    aliases: ["python"],
    raw: pythonCourse,
    title: "Python",
    description: "Learn Python from basics to practical projects.",
    project: "Python Mini Project",
  },
  {
    aliases: [
      "linux",
      "linux operating system",
      "linux fundamentals",
      "linux administration",
      "linux commands",
      "linux system administration",
    ],
    raw: linuxCourse,
    title: "Linux",
    description:
      "Learn Linux commands, filesystem, permissions, users, processes, package management, networking, Bash scripting, storage, and system administration.",
    project: "Linux System Maintenance Automation Script",
  },
  {
    aliases: [
      "git",
      "github",
      "version control",
    ],
    raw: gitCourse,
    title: "Git",
    description: "Learn Git and version control.",
    project: "Git Version Control Mini Project",
  },
  {
    aliases: ["java"],
    raw: javaCourse,
    title: "Java",
    description: "Learn Java and object-oriented programming.",
    project: "Java Mini Project",
  },
  {
    aliases: ["html"],
    raw: htmlCourse,
    title: "HTML",
    description: "Learn HTML and build web pages.",
    project: "Student Portfolio Website",
  },
  {
    aliases: ["css"],
    raw: cssCourse,
    title: "CSS",
    description: "Learn CSS and responsive website design.",
    project: "Responsive Portfolio Website",
  },
  {
    aliases: [
      "sql",
      "database",
      "sql developer",
    ],
    raw: sqlCourse,
    title: "SQL",
    description: "Learn SQL and database management.",
    project: "Database Management Mini Project",
  },
  {
    aliases: [
      "javascript",
      "js",
    ],
    raw: javascriptCourse,
    title: "JavaScript",
    description: "Learn JavaScript for interactive websites.",
    project: "Interactive Website Mini Project",
  },
  {
    aliases: [
      "react",
      "react js",
      "reactjs",
    ],
    raw: reactCourse,
    title: "React",
    description: "Learn React interfaces.",
    project: "React Application Mini Project",
  },
  {
    aliases: ["linux"],
    raw: linuxCourse,
    title: "Linux",
    description: "Learn Linux commands and fundamentals.",
    project: "Linux Administration Mini Project",
  },
  {
    aliases: [
      "cloud",
      "cloud computing",
      "cloud engineer",
      "cloud eng",
    ],
    raw: cloudCourse,
    title: "Cloud",
    description: "Learn cloud computing fundamentals.",
    project: "Cloud Computing Mini Project",
  },
  {
    aliases: [
      "networking",
      "computer networks",
      "network engineer",
      "network eng",
    ],
    raw: networkingCourse,
    title: "Networking",
    description: "Learn computer networking.",
    project: "Computer Networking Mini Project",
  },
  {
    aliases: [
      "statistics",
      "statistics for data analysis",
    ],
    raw: statisticsCourse,
    title: "Statistics",
    description: "Learn statistics for data analysis.",
    project: "Data Analysis Mini Project",
  },
  {
    aliases: [
      "networking fundamentals",
      "network fundamentals",
      "computer networking fundamentals",
      "network basics",
      "networking basics",
      "computer networks fundamentals",
    ],
    raw: networkingFundamentalsCourse,
    title: "Networking Fundamentals",
    description:
      "Learn the foundations of computer networking, OSI and TCP/IP models, Ethernet, IP addressing, ports, TCP and UDP, DNS, DHCP, switching, routing, wireless networking, troubleshooting, and practical network design.",
    project: "Build and Troubleshoot a Small Network",
  },
  {
    aliases: [
      "circuit theory",
      "electrical engineer",
      "circuit analysis",
    ],
    raw: circuitTheoryCourse,
    title: "Circuit Theory",
    description: "Learn circuit theory and electrical networks.",
    project: "Circuit Analysis Mini Project",
  },
  {
    aliases: [
      "analog electronics",
      "analog",
    ],
    raw: analogElectronicsCourse,
    title: "Analog Electronics",
    description: "Learn analog electronics.",
    project: "Analog Electronics Mini Project",
  },
  {
    aliases: [
      "digital electronics",
      "digital logic",
    ],
    raw: digitalElectronicsCourse,
    title: "Digital Electronics",
    description: "Learn digital electronics and logic design.",
    project: "Digital Electronics Mini Project",
  },
  {
    aliases: [
      "embedded c",
      "embedded systems",
      "embedded systems engineering",
    ],
    raw: embeddedSystemsCourse,
    title: "Embedded Systems Engineering",
    description:
      "Learn Embedded C programming and embedded systems concepts through lessons and quizzes.",
    project: "Embedded Systems Mini Project",
  },
  {
    aliases: [
      "rtos",
      "real-time operating systems",
      "real time operating system",
      "real-time operating system",
    ],
    raw: rtosCourse,
    title: "Real-Time Operating Systems (RTOS)",
    description:
      "Learn RTOS tasks, scheduling, synchronization, timers, memory management, and embedded applications.",
    project: "RTOS-Based Sensor Monitoring Project",
  },
  {
    aliases: [
      "device drivers",
      "device driver",
      "embedded device drivers",
      "embedded drivers",
    ],
    raw: deviceDriversCourse,
    title: "Embedded Device Drivers",
    description:
      "Learn GPIO, UART, SPI, I2C, ADC, PWM, timers, DMA, and embedded driver development.",
    project: "Multi-Peripheral Driver System",
  },
  {
    aliases: [
      "communication protocols",
      "communication-protocols",
      "embedded communication protocols",
      "serial communication",
    ],
    raw: communicationProtocolsCourse,
    title: "Communication Protocols",
    description:
      "Learn UART, SPI, I2C, CAN, and practical embedded communication.",
    project: "Multi-Protocol Sensor System",
  },
  {
    aliases: [
      "microcontroller",
      "microcontrollers",
      "microcontroller fundamentals",
      "embedded microcontrollers",
    ],
    raw: microcontrollerCourse,
    title: "Microcontrollers",
    description:
      "Learn microcontroller architecture, GPIO, timers, interrupts, ADC, PWM, memory, and embedded applications.",
    project: "Sensor-Based Microcontroller System",
  },
  {
    aliases: [
      "mqtt",
      "message queuing telemetry transport",
      "mqtt protocol",
      "iot mqtt",
    ],
    raw: mqttCourse,
    title: "MQTT",
    description:
      "Learn MQTT messaging, publishers, subscribers, brokers, topics, QoS, and IoT communication.",
    project: "IoT Sensor Monitoring with MQTT",
  },
  {
    aliases: [
      "cloud integration",
      "cloud",
      "cloud computing",
      "iot cloud",
      "cloud integration for iot",
    ],
    raw: cloudIntegrationCourse,
    title: "Cloud Integration",
    description:
      "Learn cloud concepts, IoT cloud integration, APIs, data storage, dashboards, and connecting embedded devices to cloud platforms.",
    project: "Cloud-Based IoT Monitoring",
  },
  {
    aliases: [
      "device security",
      "device-security",
      "embedded device security",
      "iot security",
    ],
    raw: deviceSecurityCourse,
    title: "Device Security",
    description:
      "Learn embedded device security, authentication, secure communication, access control, firmware protection, and IoT security practices.",
    project: "Secure IoT Device",
  },
  {
    aliases: [
      "routing",
      "network routing",
      "ip routing",
      "routing protocols",
      "iot routing",
    ],
    raw: routingCourse,
    title: "Routing",
    description:
      "Learn routing fundamentals, IP addressing, routing tables, routing protocols, and routing for IoT and embedded networks.",
    project: "IoT Network Routing",
  },
  {
    aliases: [
      "switching",
      "network switching",
      "ethernet switching",
      "switching fundamentals",
      "lan switching",
    ],
    raw: switchingCourse,
    title: "Switching",
    description:
      "Learn network switching, Ethernet, MAC addresses, VLANs, switching methods, and practical network configuration.",
    project: "IoT Network Switching",
  },
  {
    aliases: [
      "network security",
      "network-security",
      "network security fundamentals",
      "network protection",
      "iot network security",
    ],
    raw: networkSecurityCourse,
    title: "Network Security",
    description:
      "Learn network security fundamentals, threats, authentication, firewalls, secure communication, and practical network protection.",
    project: "Secure IoT Network",
  },
  {
    aliases: [
      "troubleshooting",
      "network troubleshooting",
      "embedded troubleshooting",
      "system troubleshooting",
      "debugging",
    ],
    raw: troubleshootingCourse,
    title: "Troubleshooting",
    description:
      "Learn systematic troubleshooting, hardware and software diagnosis, network debugging, embedded system testing, and practical problem solving.",
    project: "Embedded System Troubleshooting",
  },
  {
    aliases: [
      "product metrics",
      "product-metrics",
      "product metrics for product analyst",
      "product analytics",
      "product analyst metrics",
    ],
    raw: productMetricsCourse,
    title: "Product Metrics",
    description:
      "Learn product metrics, KPIs, funnels, activation, retention, engagement, conversion, cohorts, and data-driven product analysis.",
    project: "Product Metrics Dashboard",
  },
  {
    aliases: [
      "experiment analysis",
      "experiment-analysis",
      "experimentation",
      "product experiments",
      "ab testing",
      "a/b testing",
      "experiment analysis for product analyst",
    ],
    raw: experimentAnalysisCourse,
    title: "Experiment Analysis",
    description:
      "Learn A/B testing, experiment design, hypothesis testing, statistical significance, experiment metrics, and data-driven product decisions.",
    project: "A/B Test Analysis",
  },
  {
    aliases: [
      "statistics",
      "statistics for product analyst",
      "product analytics statistics",
      "statistics for product analytics",
    ],
    raw: statisticsCourse,
    title: "Statistics",
    description:
      "Learn statistics fundamentals, probability, distributions, sampling, hypothesis testing, correlation, regression, and practical analysis for product decisions.",
    project: "Product Statistics Analysis",
  },
  {
    aliases: [
      "data structures",
      "data-structures",
      "data structures for software developer",
      "data structures and algorithms",
      "ds",
      "dsa",
    ],
    raw: dataStructuresCourse,
    title: "Data Structures",
    description:
      "Learn arrays, linked lists, stacks, queues, hash tables, trees, heaps, graphs, and practical data structure usage for software development.",
    project: "Data Structure Based Application",
  },
  {
    aliases: [
      "algorithms",
      "algorithm",
      "algorithms for software developer",
      "data structures and algorithms",
      "dsa algorithms",
    ],
    raw: algorithmsCourse,
    title: "Algorithms",
    description:
      "Learn algorithm fundamentals, searching, sorting, recursion, divide and conquer, greedy algorithms, dynamic programming, and practical problem solving.",
    project: "Algorithm Problem Solver",
  },
  {
    aliases: [
      "software testing",
      "software-testing",
      "software testing for software developer",
      "software testing fundamentals",
      "testing",
      "software quality assurance",
    ],
    raw: softwareTestingCourse,
    title: "Software Testing",
    description:
      "Learn software testing fundamentals, test cases, test types, debugging, automation, API testing, and practical software quality assurance.",
    project: "Automated Web Application Testing",
  },
  {
    aliases: [
      "prototyping",
      "prototyping for ui/ux design",
      "ui ux prototyping",
      "ui/ux prototyping",
      "prototype design",
      "ux prototyping",
    ],
    raw: prototypingCourse,
    title: "Prototyping",
    description:
      "Learn UI/UX prototyping, wireframes, interactive prototypes, user flows, navigation, usability testing, and practical interface design.",
    project: "Complete App Prototype",
  },
  {
    aliases: [
      "usability testing",
      "usability-testing",
      "usability testing for ui/ux",
      "ui ux usability testing",
      "ux usability testing",
      "user testing",
    ],
    raw: usabilityTestingCourse,
    title: "Usability Testing",
    description:
      "Learn usability testing, user research, test planning, task design, user observation, feedback analysis, accessibility, and practical UX evaluation.",
    project: "Complete Usability Testing Study",
  },
  {
    aliases: [
      "design system",
      "design systems",
      "design-system",
      "design-system for ui/ux",
      "ui ux design system",
      "ui/ux design system",
    ],
    raw: designSystemCourse,
    title: "Design Systems",
    description:
      "Learn UI/UX design systems, reusable components, design tokens, typography, colors, spacing, accessibility, documentation, and practical design system creation.",
    project: "Build a UI Design System",
  },
  {
    aliases: [
      "accessibility",
      "accessibility for ui/ux",
      "accessibility for ui ux",
      "ui ux accessibility",
      "web accessibility",
      "inclusive design",
    ],
    raw: accessibilityCourse,
    title: "Accessibility",
    description:
      "Learn UI/UX accessibility principles, inclusive design, WCAG guidelines, accessible colors, typography, navigation, and practical accessibility testing.",
    project: "Accessible Website Design",
  },
  {
    aliases: [
      "cloud architecture",
      "cloud computing",
      "cloud fundamentals",
      "cloud infrastructure",
      "cloud engineering",
      "cloud services",
    ],
    raw: cloudArchitectureCourse,
    title: "Cloud Architecture",
    description:
      "Learn cloud computing fundamentals, service and deployment models, cloud infrastructure, virtualization, storage, networking, security, scalability, monitoring, and cloud architecture design.",
    project: "Design a Scalable Cloud Application",
  },
  {
    aliases: [
      "automation",
      "automation fundamentals",
      "task automation",
      "workflow automation",
      "devops automation",
      "automation engineering",
      "system automation",
    ],
    raw: automationCourse,
    title: "Automation",
    description:
      "Learn automation fundamentals, scripting, task scheduling, workflow automation, CI/CD, infrastructure automation, APIs, monitoring, error handling, security, and practical automation workflows.",
    project: "Automated Application Deployment Pipeline",
  },
  {
    aliases: [
      "monitoring",
      "system monitoring",
      "application monitoring",
      "infrastructure monitoring",
      "observability",
      "monitoring fundamentals",
      "devops monitoring",
    ],
    raw: monitoringCourse,
    title: "Monitoring",
    description:
      "Learn monitoring fundamentals, metrics, logs, traces, dashboards, alerts, health checks, application monitoring, infrastructure monitoring, observability, incident detection, and practical monitoring workflows.",
    project: "Build an Application Monitoring System",
  },
  {
    aliases: [
      "system verilog",
      "systemverilog",
      "system-verilog",
      "systemverilog for vlsi engineer",
      "system verilog for vlsi engineer",
      "systemverilog for vlsi",
      "sv for vlsi",
    ],
    raw: systemVerilogCourse,
    title: "SystemVerilog",
    description:
      "Learn SystemVerilog for VLSI design and verification, including data types, modules, procedural blocks, interfaces, assertions, testbenches, and functional verification.",
    project: "4-bit Up Counter RTL Design and Verification",
  },
  {
    aliases: [
      "cmos verification",
      "verification-cmos",
      "verification cmos",
      "cmos circuit verification",
      "cmos verification for vlsi",
      "cmos verification for vlsi engineer",
    ],
    raw: cmosVerificationCourse,
    title: "CMOS Verification",
    description:
      "Learn CMOS circuit verification, transistor-level simulation, static timing analysis, power analysis, design rule checks, layout verification, and debugging techniques used in VLSI design.",
    project: "CMOS Inverter Verification",
  },
  {
    aliases: [
      "physical design",
      "physical-design",
      "physical design concepts",
      "physical-design-concepts",
      "physical design for vlsi",
      "physical design for vlsi engineer",
      "vlsi physical design",
    ],
    raw: physicalDesignCourse,
    title: "Physical Design Concepts",
    description:
      "Learn VLSI physical design fundamentals, floorplanning, placement, clock tree synthesis, routing, timing closure, power optimization, and physical verification.",
    project: "Physical Design Flow of a 4-bit Counter",
  },
  {
    aliases: [
      "next.js",
      "nextjs",
      "next js",
      "next.js for web developer",
      "nextjs for web developer",
      "next.js development",
      "next.js web development",
      "next js web development",
    ],
    raw: nextjsCourse,
    title: "Next.js for Web Developer",
    description:
      "Learn Next.js App Router, layouts, Server and Client Components, dynamic routing, data fetching, API development, authentication concepts, and deployment.",
    project: "Full-Stack Next.js Career Portal",
  },
  {
    aliases: [
      "testing",
      "software testing",
      "testing for web developer",
      "web testing",
      "web application testing",
      "software testing for web developer",
      "manual testing",
      "automation testing",
      "web testing fundamentals",
    ],
    raw: testingCourse,
    title: "Testing for Web Developer",
    description:
      "Learn manual testing, test case design, functional testing, API testing, JavaScript unit testing, Playwright automation, performance testing, security testing, and accessibility testing.",
    project: "Complete Web Application Testing Project",
  },
  {
    aliases: [
      "web security",
      "web-security",
      "web security for web developer",
      "web security for web development",
      "web application security",
      "website security",
      "web application security fundamentals",
    ],
    raw: webSecurityCourse,
    title: "Web Security for Web Developer",
    description:
      "Learn HTTPS, common web vulnerabilities, secure coding, SQL injection prevention, XSS and CSRF protection, authentication, authorization, API security, and secure deployment.",
    project: "Secure Student Portal",
  },
  {
    aliases: [
      "c",
      "c programming",
      "c language",
      "c programming language",
    ],
    raw: cProgrammingCourse,
    title: "C Programming",
    description: "Learn C programming.",
    project: "C Programming Mini Project",
  },
  {
    aliases: [
      "microcontroller basics",
      "microcontrollers",
      "microcontroller",
    ],
    raw: microcontrollerBasicsCourse,
    title: "Microcontroller Basics",
    description: "Learn microcontroller fundamentals.",
    project: "Microcontroller Mini Project",
  },
{
  aliases: ["excel", "microsoft excel", "product analysis", "product analyst"],
  raw: excelCourse,
  title: "Excel",
  description: "Learn Excel for analysis and reporting.",
  project: "Product Analysis Mini Project",
},
{
  aliases: [
    "spreadsheet fundamentals",
    "excel and spreadsheet fundamentals",
    "excel basics",
  ],
  raw: excelAndSpreadsheetFundamentalsCourse,
  title: "Excel and Spreadsheet Fundamentals",
  description:
    "Learn Excel and spreadsheet fundamentals, including data entry, formatting, formulas, functions, charts, sorting, filtering, and practical data analysis.",
  project:
    "Create a Student Performance Management spreadsheet using formulas, functions, formatting, sorting, filtering, and charts.",
},
  {
    aliases: [
      "design fundamentals",
      "design fundamentals for ui ux designer",
      "design fundamentals for ui/ux designer",
      "ui ux design",
      "ui/ux design",
    ],
    raw: designFundamentalsCourse,
    title: "Design Fundamentals",
    description: "Learn UI/UX design fundamentals.",
    project: "UI/UX Design Mini Project",
  },
  {
    aliases: [
      "wireframing",
      "wireframe",
      "wireframes",
      "wireframing for ui ux designer",
      "wireframing for ui/ux designer",
      "wireframing and prototyping",
    ],
    raw: wireframingCourse,
    title: "Wireframing",
    description: "Learn wireframing and prototyping.",
    project: "Wireframing Mini Project",
  },
  {
    aliases: [
      "visual communication",
      "visual communication for ui ux designer",
      "visual communication for ui/ux designer",
    ],
    raw: visualCommunicationCourse,
    title: "Visual Communication",
    description: "Learn visual communication.",
    project: "Visual Communication Mini Project",
  },
  {
    aliases: [
      "boolean algebra",
      "boolean logic",
      "boolean algebra for vlsi",
      "boolean algebra for vlsi engineer",
    ],
    raw: booleanAlgebraCourse,
    title: "Boolean Algebra",
    description: "Learn Boolean algebra and logic simplification.",
    project: "Boolean Algebra Mini Project",
  },
  {
    aliases: [
      "verilog",
      "verilog basics",
      "verilog hdl",
      "verilog basics for vlsi",
      "verilog basics for vlsi engineer",
    ],
    raw: verilogBasicsCourse,
    title: "Verilog Basics",
    description: "Learn Verilog HDL.",
    project: "Verilog Digital Design Mini Project",
  },
  {
    aliases: [
      "programming fundamentals",
      "programming fundamental",
    ],
    raw: programmingFundamentalsCourse,
    title: "Programming Fundamentals",
    description: "Learn programming concepts and problem-solving.",
    project: "Programming Fundamentals Mini Project",
  },
  {
    aliases: [
      "programming basics",
      "programming basic",
    ],
    raw: programmingBasicsCourse,
    title: "Programming Basics",
    description: "Learn programming basics.",
    project: "Programming Basics Mini Project",
  },
  {
    aliases: [
      "networking fundamentals",
      "networking fundamental",
    ],
    raw: networkingFundamentalsCourse,
    title: "Networking Fundamentals",
    description: "Learn networking foundations.",
    project: "Networking Fundamentals Mini Project",
  },
  {
    aliases: [
      "linux basics",
      "linux basic",
    ],
    raw: linuxBasicsCourse,
    title: "Linux Basics",
    description: "Learn Linux commands, permissions and security.",
    project: "Linux System Security Audit",
  },
  {
    aliases: [
      "basic statistics",
      "statistics basics",
    ],
    raw: basicStatisticsCourse,
    title: "Basic Statistics",
    description: "Learn basic statistics.",
    project: "Basic Statistics Mini Project",
  },
  {
    aliases: [
      "digital electronics",
      "digital electronics fundamentals",
      "digital logic",
      "digital logic design",
      "digital circuits",
    ],
    raw: digitalElectronicsCourse,
    title: "Digital Electronics",
    description:
      "Learn number systems, binary arithmetic, logic gates, Boolean algebra, combinational circuits, sequential circuits, flip-flops, counters, registers, and digital system design.",
    project: "Digital Counter Design",
  },
  {
    aliases: ["electronics basics"],
    raw: electronicsBasicCourse,
    title: "Electronics Basics",
    description: "Learn electronic components and circuits.",
    project: "Electronics Basics Mini Project",
  },
  {
    aliases: [
      "security fundamentals",
      "security basics",
    ],
    raw: securityFundamentalsCourse,
    title: "Security Fundamentals",
    description: "Learn cybersecurity fundamentals.",
    project: "Security Fundamentals Mini Project",
  },
  {
    aliases: [
      "basic mathematics",
      "mathematics basics",
      "basic maths",
    ],
    raw: basicMathematicsCourse,
    title: "Basic Mathematics",
    description: "Learn technical mathematics.",
    project: "Basic Mathematics Mini Project",
  },
  {
    aliases: [
      "ip addressing",
      "ip address",
    ],
    raw: ipAddressingCourse,
    title: "IP Addressing",
    description: "Learn IP addressing.",
    project: "IP Addressing Mini Project",
  },
  {
    aliases: [
      "communication",
      "communication skills",
    ],
    raw: communicationCourse,
    title: "Communication",
    description: "Develop communication skills.",
    project: "Communication Skills Mini Project",
  },
  {
    aliases: [
      "subnetting",
      "ip subnetting",
    ],
    raw: subnettingCourse,
    title: "Subnetting",
    description: "Learn network subnetting.",
    project: "Network Subnetting Mini Project",
  },
  {
    aliases: [
      "networking basics",
      "networking basic",
    ],
    raw: networkingBasicsCourse,
    title: "Networking Basics",
    description: "Learn networking devices and protocols.",
    project: "Networking Basics Mini Project",
  },
  {
    aliases: [
      "sql basics",
      "basic sql",
    ],
    raw: sqlBasicsCourse,
    title: "SQL Basics",
    description: "Learn SQL queries and database fundamentals.",
    project: "SQL Basics Mini Project",
  },
];

function CoursePageContent() {
  const params = useSearchParams();

  const requestedSkill = params.get("skill") || "Python";
  const skill = requestedSkill.trim() || "Python";
  const normalized = normalizeSkill(skill);

  /*
   * Explicit course mappings.
   *
   * These mappings are checked before the catalog aliases.
   * This prevents duplicate aliases from selecting the wrong course.
   */
  const skillAliasMap: Record<string, string> = {
    // Programming
    programming: "program basics",
    "programming basics": "program basics",
    "programming basic": "program basics",
    "program basics": "program basics",
    "introduction to programming": "program basics",
    "basic programming": "program basics",

    // C Programming
    c: "c programming",
    "c language": "c programming",
    "c programming language": "c programming",

    // Visualization
    visualization: "power bi and tableau dashboards",
    "data visualization": "power bi and tableau dashboards",
    "data visualization dashboards": "power bi and tableau dashboards",

    // UI/UX
    "design fundamentals": "design fundamentals",
    "design fundamentals for ui ux designer": "design fundamentals",
    "design fundamentals for ui/ux designer": "design fundamentals",

    wireframing: "wireframing",
    wireframe: "wireframing",
    wireframes: "wireframing",
    "wireframing for ui ux designer": "wireframing",
    "wireframing for ui/ux designer": "wireframing",

    "visual communication": "visual communication",
    "visual communication for ui ux designer": "visual communication",
    "visual communication for ui/ux designer": "visual communication",

    // VLSI
    "boolean algebra": "boolean algebra",
    "boolean logic": "boolean algebra",
    "boolean algebra for vlsi": "boolean algebra",
    "boolean algebra for vlsi engineer": "boolean algebra",

    verilog: "verilog basics",
    "verilog basics": "verilog basics",
    "verilog hdl": "verilog basics",
    "verilog basics for vlsi": "verilog basics",
    "verilog basics for vlsi engineer": "verilog basics",

    verification: "systemverilog",
    "rtl verification": "systemverilog",
    "systemverilog verification": "systemverilog",
    "system verilog verification": "systemverilog",

    cmos: "cmos verification",
    "cmos basics": "cmos verification",
    "cmos design": "cmos verification",
    "cmos verification": "cmos verification",
    "verification cmos": "cmos verification",
  };

  const lookupSkill = skillAliasMap[normalized] ?? normalized;

const selectedCourse =
  lookupSkill === "excel"
    ? courseCatalog.find(
        (item) => item.raw === excelCourse
      )
    : lookupSkill === "excel and spreadsheet fundamentals" ||
        lookupSkill === "spreadsheet fundamentals" ||
        lookupSkill === "excel basics"
      ? courseCatalog.find(
          (item) =>
            item.raw === excelAndSpreadsheetFundamentalsCourse
        )
      : courseCatalog.find((item) =>
          item.aliases.some(
            (alias) => normalizeSkill(alias) === lookupSkill
          )
        );

  const course = useMemo<Course>(() => {
    if (!selectedCourse) {
      return createStarterCourse(skill);
    }

    return normalizeCourse(
      selectedCourse.raw,
      selectedCourse.title,
      selectedCourse.description,
      selectedCourse.project
    );
  }, [selectedCourse, skill]);

  const allLessons = useMemo(
    () => course.weeks.flatMap((week) => week.lessons),
    [course]
  );

  const totalLessons = allLessons.length;

  const [userId, setUserId] = useState<string | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [currentWeek, setCurrentWeek] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const validCompletedIds = useMemo(() => {
    const ids = new Set(allLessons.map((lesson) => lesson.id));

    return [...new Set(completedLessonIds)].filter((id) =>
      ids.has(id)
    );
  }, [allLessons, completedLessonIds]);

  const completedCount = validCompletedIds.length;

  const progressPercent = totalLessons
    ? Math.round((completedCount / totalLessons) * 100)
    : 0;

  const isCourseCompleted =
    totalLessons > 0 && completedCount >= totalLessons;

  const weekIndex = Math.min(
    Math.max(currentWeek, 0),
    Math.max(course.weeks.length - 1, 0)
  );

  const week = course.weeks[weekIndex];

  const lessonIndex = Math.min(
    Math.max(currentLesson, 0),
    Math.max((week?.lessons.length ?? 1) - 1, 0)
  );

  const lesson = week?.lessons[lessonIndex];

  const loadProgress = useCallback(async () => {
    setLoading(true);
    setMessage("");

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        setUserId(null);
        setCompletedLessonIds([]);
        setCurrentWeek(0);
        setCurrentLesson(0);

        setMessage("Please log in to save your course progress.");
        return;
      }

      setUserId(user.id);

      const { data, error } = await supabase
        .from("course_progress")
        .select("completed_lessons, current_week, current_lesson")
        .eq("user_id", user.id)
        .eq("skill", skill)
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (!data) {
        setCompletedLessonIds([]);
        setCurrentWeek(0);
        setCurrentLesson(0);
        return;
      }

      const savedCount = Math.max(
        0,
        Math.min(Number(data.completed_lessons) || 0, totalLessons)
      );

      let ids: string[] = [];

      const {
        data: savedLessonIds,
        error: savedLessonIdsError,
      } = await supabase
        .from("course_progress")
        .select("completed_lesson_ids")
        .eq("user_id", user.id)
        .eq("skill", skill)
        .maybeSingle();

      if (!savedLessonIdsError) {
        const optionalIds = (
          savedLessonIds as Record<string, unknown> | null
        )?.completed_lesson_ids;

        if (Array.isArray(optionalIds)) {
          ids = optionalIds.filter(
            (id: unknown): id is string =>
              typeof id === "string"
          );
        }
      }

      if (!ids.length && savedCount > 0) {
        ids = allLessons
          .slice(0, savedCount)
          .map((item) => item.id);
      }

      ids = [...new Set(ids)].filter((id) =>
        allLessons.some((item) => item.id === id)
      );

      setCompletedLessonIds(ids);

      const savedWeek = Math.max(
        0,
        Number(data.current_week) || 0
      );

      const boundedWeek = Math.min(
        savedWeek,
        Math.max(course.weeks.length - 1, 0)
      );

      setCurrentWeek(boundedWeek);

      setCurrentLesson(
        Math.min(
          Math.max(0, Number(data.current_lesson) || 0),
          Math.max(
            (course.weeks[boundedWeek]?.lessons.length ?? 1) - 1,
            0
          )
        )
      );
    } catch (error) {
      console.error("Could not load course progress:", error);

      setMessage(
        "Progress could not be loaded. Check your course_progress table and permissions."
      );
    } finally {
      setLoading(false);
    }
  }, [skill, totalLessons, allLessons, course.weeks]);

  useEffect(() => {
    void loadProgress();
  }, [loadProgress]);

  const saveProgress = useCallback(
    async (
      nextIds: string[],
      nextWeek: number,
      nextLesson: number
    ): Promise<boolean> => {
      if (!userId) {
        setMessage("Please log in before saving your progress.");
        return false;
      }

      setSaving(true);

      const ids = [...new Set(nextIds)].filter((id) =>
        allLessons.some((item) => item.id === id)
      );

      const values = {
        user_id: userId,
        skill,
        completed_lessons: ids.length,
        current_week: nextWeek,
        current_lesson: nextLesson,
        updated_at: new Date().toISOString(),
      };

      try {
        const {
          data: existing,
          error: lookupError,
        } = await supabase
          .from("course_progress")
          .select("id")
          .eq("user_id", userId)
          .eq("skill", skill)
          .maybeSingle();

        if (lookupError) {
          throw lookupError;
        }

        const result = existing
          ? await supabase
              .from("course_progress")
              .update(values)
              .eq("id", existing.id)
          : await supabase
              .from("course_progress")
              .insert(values);

        if (result.error) {
          throw result.error;
        }

        const { error: lessonIdsSaveError } = await supabase
          .from("course_progress")
          .update({
            completed_lesson_ids: ids,
          })
          .eq("user_id", userId)
          .eq("skill", skill);

        if (lessonIdsSaveError) {
          console.info(
            "completed_lesson_ids is not available; using completed_lessons count for progress restoration.",
            lessonIdsSaveError.message
          );
        }

        setCompletedLessonIds(ids);
        setCurrentWeek(nextWeek);
        setCurrentLesson(nextLesson);

        return true;
      } catch (error) {
        console.error("Could not save course progress:", error);

        setMessage(
          "Progress could not be saved. Check your course_progress table and permissions."
        );

        return false;
      } finally {
        setSaving(false);
      }
    },
    [userId, skill, allLessons]
  );

  const completeNextWeeklyTask = useCallback(
    async (): Promise<string | null> => {
      if (!userId) {
        console.error("No logged-in user found.");
        return null;
      }

      try {
        const { data: tasks, error: taskError } = await supabase
          .from("weekly_tasks")
          .select(
            "id, title, description, completed, career, course, created_at"
          )
          .eq("user_id", userId)
          .eq("completed", false)
          .order("created_at", {
            ascending: true,
          });

        if (taskError) {
          console.error("Could not load weekly tasks:", taskError);
          return null;
        }

        console.log("Pending weekly tasks:", tasks);

        if (!tasks || tasks.length === 0) {
          console.log("There are no pending weekly tasks.");
          return null;
        }

        const currentCourse = normalizeSkill(course.title);
        const currentSkill = normalizeSkill(skill);

        console.log("Current course:", currentCourse);
        console.log("Current skill:", currentSkill);

        let matchingTask: WeeklyTask | null = null;

        for (const task of tasks) {
          const taskCourse = normalizeSkill(task.course || "");
          const taskCareer = normalizeSkill(task.career || "");

          const courseMatches =
            taskCourse === currentCourse ||
            taskCourse === currentSkill;

          const careerMatches =
            taskCareer === currentCourse ||
            taskCareer === currentSkill;

          if (courseMatches || careerMatches) {
            matchingTask = task as WeeklyTask;
            break;
          }
        }

        if (!matchingTask) {
          matchingTask = tasks[0] as WeeklyTask;

          console.log("No exact course match found.");
          console.log(
            "Using oldest pending task:",
            matchingTask.title
          );
        }

        const {
          data: updatedTask,
          error: updateError,
        } = await supabase
          .from("weekly_tasks")
          .update({
            completed: true,
          })
          .eq("id", matchingTask.id)
          .eq("user_id", userId)
          .eq("completed", false)
          .select("id, title, completed")
          .maybeSingle();

        if (updateError) {
          console.error(
            "Could not complete weekly task:",
            updateError
          );
          return null;
        }

        if (!updatedTask) {
          console.error("Weekly task was not updated.");
          return null;
        }

        console.log(
          "Weekly task automatically completed:",
          updatedTask.title
        );

        console.log("Updated task:", updatedTask);

        return updatedTask.title;
      } catch (error) {
        console.error("Weekly task completion error:", error);
        return null;
      }
    },
    [userId, course.title, skill]
  );

  function goToLesson(wi: number, li: number) {
    setCurrentWeek(wi);
    setCurrentLesson(li);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function nextLessonPosition() {
    if (!week) {
      return {
        week: weekIndex,
        lesson: lessonIndex,
      };
    }

    if (lessonIndex < week.lessons.length - 1) {
      return {
        week: weekIndex,
        lesson: lessonIndex + 1,
      };
    }

    if (weekIndex < course.weeks.length - 1) {
      return {
        week: weekIndex + 1,
        lesson: 0,
      };
    }

    return {
      week: weekIndex,
      lesson: lessonIndex,
    };
  }

  async function submitQuiz() {
    if (!lesson) {
      return;
    }

    if (lesson.quiz.length === 0) {
      setMessage("This lesson has no quiz yet.");
      return;
    }

    if (
      lesson.quiz.some(
        (_, index) => !quizAnswers[index]
      )
    ) {
      setMessage(
        "Please answer every quiz question before checking."
      );
      return;
    }

    const correctCount = lesson.quiz.filter(
      (question, index) =>
        quizAnswers[index]?.trim().toLowerCase() ===
        question.answer.trim().toLowerCase()
    ).length;

    const passMark = Math.ceil(lesson.quiz.length * 0.8);

    setQuizSubmitted(true);

    if (correctCount < passMark) {
      setMessage(
        `You scored ${correctCount}/${lesson.quiz.length}. You need ${passMark} correct answers to pass. Try again.`
      );
      return;
    }

    if (validCompletedIds.includes(lesson.id)) {
      setMessage(
        `You passed with ${correctCount}/${lesson.quiz.length}. This lesson was already completed.`
      );
      return;
    }

    const nextIds = [
      ...validCompletedIds,
      lesson.id,
    ];

    const saved = await saveProgress(
  nextIds,
  weekIndex,
  lessonIndex
);

    if (!saved) {
      setMessage(
        `You passed with ${correctCount}/${lesson.quiz.length}, but progress could not be saved. Please try again.`
      );
      return;
    }

    const completedTask = await completeNextWeeklyTask();

    if (completedTask) {
      setMessage(
        `Congratulations! You passed with ${correctCount}/${lesson.quiz.length}. Your lesson progress was saved and "${completedTask}" was automatically completed.`
      );
    } else {
      setMessage(
        `Congratulations! You passed with ${correctCount}/${lesson.quiz.length}. Your lesson progress was saved, but no matching pending weekly task was found.`
      );
    }
  }

  function retryQuiz() {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setMessage("");
  }

  const quizCorrectCount = lesson
    ? lesson.quiz.filter(
        (question, index) =>
          quizAnswers[index]?.trim().toLowerCase() ===
          question.answer.trim().toLowerCase()
      ).length
    : 0;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="/dashboard"
              className="mb-3 inline-flex text-sm text-sky-400 hover:text-sky-300"
            >
              ← Back to dashboard
            </a>

            <h1 className="text-3xl font-bold sm:text-4xl">
              {course.title} Learning Course
            </h1>

            <p className="mt-2 max-w-2xl text-slate-400">
              {course.description}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:min-w-52">
            <p className="text-sm text-slate-400">
              Course progress
            </p>

            <div className="mt-2 flex items-center justify-between gap-3">
              <span className="text-2xl font-bold">
                {progressPercent}%
              </span>

              <span className="text-sm text-slate-400">
                {completedCount}/{totalLessons} lessons
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-sky-500 transition-all"
                style={{
                  width: `${progressPercent}%`,
                }}
              />
            </div>
          </div>
        </header>

        {isCourseCompleted && (
          <section className="mb-5 rounded-2xl border border-emerald-700 bg-emerald-950/40 p-5">
            <h2 className="text-xl font-bold text-emerald-300">
              Course completed!
            </h2>

            <p className="mt-2 text-emerald-100">
              You completed all {totalLessons} lessons in {course.title}.
            </p>
          </section>
        )}

        {message && (
          <div
            role="status"
            className="mb-5 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300"
          >
            {message}
          </div>
        )}

        {loading ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-300">
            Loading your course progress...
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <h2 className="mb-4 text-lg font-semibold">
                Course syllabus
              </h2>

              {!course.weeks.length ? (
                <p className="text-sm text-slate-400">
                  No lessons have been added to this course yet.
                </p>
              ) : (
                <div className="space-y-5">
                  {course.weeks.map((item, wi) => (
                    <section key={`${item.title}-${wi}`}>
                      <h3 className="mb-2 text-sm font-semibold text-sky-300">
                        {item.title}
                      </h3>

                      <div className="space-y-1">
                        {item.lessons.map((itemLesson, li) => {
                          const active =
                            wi === weekIndex &&
                            li === lessonIndex;

                          const completed =
                            validCompletedIds.includes(
                              itemLesson.id
                            );

                          return (
                            <button
                              key={`${wi}-${itemLesson.id}`}
                              type="button"
                              onClick={() =>
                                goToLesson(wi, li)
                              }
                              className={`flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                                active
                                  ? "bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/40"
                                  : "text-slate-300 hover:bg-slate-800"
                              }`}
                            >
                              <span>
                                {completed ? "✓" : "○"}
                              </span>

                              <span>{itemLesson.title}</span>
                            </button>
                          );
                        })}
                      </div>

                      <p className="mt-2 px-3 text-xs text-slate-500">
                        {item.lessons.length} lessons
                      </p>
                    </section>
                  ))}
                </div>
              )}
            </aside>

            <section className="min-w-0 space-y-6">
              {lesson && week ? (
                <>
                  <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8">
                    <p className="text-sm font-medium text-sky-400">
                      {week.title} · Lesson {lessonIndex + 1}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                      {lesson.title}
                    </h2>

                    <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-300">
                      {lesson.introduction}
                    </p>

                    {lesson.sections.map((section, index) => (
                      <div
                        key={`${section.heading}-${index}`}
                        className="mt-6"
                      >
                        <h3 className="text-lg font-semibold text-white">
                          {section.heading}
                        </h3>

                        <p className="mt-2 whitespace-pre-wrap leading-7 text-slate-300">
                          {section.content}
                        </p>
                      </div>
                    ))}

                    {lesson.example && (
                      <div className="mt-6">
                        <h3 className="mb-2 text-lg font-semibold">
                          Example
                        </h3>

                        <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm leading-6 text-emerald-300">
                          <code>{lesson.example}</code>
                        </pre>
                      </div>
                    )}

                    <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                      <h3 className="font-semibold text-amber-300">
                        Practice exercise
                      </h3>

                      <p className="mt-2 whitespace-pre-wrap leading-7 text-slate-300">
                        {lesson.exercise}
                      </p>
                    </div>
                  </article>

                  {lesson.quiz.length > 0 && (
                    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8">
                      <div className="mb-5">
                        <h2 className="text-xl font-bold">
                          Lesson quiz
                        </h2>

                        <p className="mt-1 text-sm text-slate-400">
                          Answer all questions. Passing automatically saves your lesson progress and updates the next weekly task.
                        </p>

                        <p className="mt-2 text-sm text-sky-300">
                          {lesson.quiz.length} questions · Pass mark:{" "}
                          {Math.ceil(lesson.quiz.length * 0.8)}/
                          {lesson.quiz.length}
                        </p>
                      </div>

                      <div className="space-y-6">
                        {lesson.quiz.map((question, index) => {
                          const selected =
                            quizAnswers[index] ?? "";

                          const correct =
                            selected.trim().toLowerCase() ===
                            question.answer.trim().toLowerCase();

                          return (
                            <div
                              key={`${question.question}-${index}`}
                              className="rounded-xl border border-slate-800 p-4"
                            >
                              <p className="font-medium">
                                {index + 1}. {question.question}
                              </p>

                              <div className="mt-3 space-y-2">
                                {question.options.map(
                                  (option, oi) => (
                                    <label
                                      key={`${option}-${oi}`}
                                      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm transition ${
                                        selected === option
                                          ? "border-sky-500 bg-sky-500/10"
                                          : "border-slate-800 hover:bg-slate-800"
                                      }`}
                                    >
                                      <input
                                        type="radio"
                                        name={`quiz-${lesson.id}-${index}`}
                                        value={option}
                                        checked={selected === option}
                                        disabled={
                                          quizSubmitted || saving
                                        }
                                        onChange={() =>
                                          setQuizAnswers(
                                            (previous) => ({
                                              ...previous,
                                              [index]: option,
                                            })
                                          )
                                        }
                                        className="mt-1 accent-sky-500"
                                      />

                                      <span>{option}</span>
                                    </label>
                                  )
                                )}
                              </div>

                              {quizSubmitted && (
                                <div className="mt-3 text-sm">
                                  <p
                                    className={
                                      correct
                                        ? "text-emerald-400"
                                        : "text-rose-400"
                                    }
                                  >
                                    {correct
                                      ? "Correct answer!"
                                      : `Correct answer: ${question.answer}`}
                                  </p>

                                  {question.explanation && (
                                    <p className="mt-1 leading-6 text-slate-400">
                                      {question.explanation}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {!quizSubmitted ? (
                        <button
                          type="button"
                          disabled={saving}
                          onClick={() => void submitQuiz()}
                          className="mt-6 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400 disabled:opacity-50"
                        >
                          {saving ? "Saving..." : "Check answers"}
                        </button>
                      ) : (
                        <div className="mt-6 rounded-xl bg-slate-950 p-4">
                          <p className="font-semibold">
                            Your score: {quizCorrectCount}/
                            {lesson.quiz.length}
                          </p>

                          {validCompletedIds.includes(lesson.id) ? (
                            <p className="mt-2 text-sm text-emerald-400">
                              Lesson completion is saved.
                            </p>
                          ) : quizCorrectCount >=
                            Math.ceil(lesson.quiz.length * 0.8) ? (
                            <p className="mt-2 text-sm text-amber-300">
                              You passed, but if saving failed, try the quiz again.
                            </p>
                          ) : null}

                          <button
                            type="button"
                            disabled={saving}
                            onClick={retryQuiz}
                            className="mt-3 text-sm text-sky-400 hover:text-sky-300 disabled:opacity-50"
                          >
                            Try quiz again
                          </button>
                        </div>
                      )}
                    </article>
                  )}

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <p className="font-semibold">
                      {validCompletedIds.includes(lesson.id)
                        ? "✓ Lesson completed"
                        : lesson.quiz.length > 0
                          ? "Pass the quiz to complete this lesson"
                          : "Quiz not available"}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {lesson.quiz.length > 0
                        ? `Score at least ${Math.ceil(
                            lesson.quiz.length * 0.8
                          )} out of ${lesson.quiz.length} to pass.`
                        : "Add a quiz to this lesson to enable quiz-based completion."}
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        const position = nextLessonPosition();

                        if (
                          position.week !== weekIndex ||
                          position.lesson !== lessonIndex
                        ) {
                          goToLesson(
                            position.week,
                            position.lesson
                          );
                        }
                      }}
                     disabled={
  !validCompletedIds.includes(lesson.id) ||
  (
    weekIndex === course.weeks.length - 1 &&
    lessonIndex === week.lessons.length - 1
  )
}
                      className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next lesson →
                    </button>
                  </div>

                  <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8">
                    <p className="text-sm font-medium text-sky-400">
                      Weekly assignment
                    </p>

                    <h2 className="mt-2 text-xl font-bold">
                      {week.title}
                    </h2>

                    <p className="mt-3 whitespace-pre-wrap leading-7 text-slate-300">
                      {week.assignment}
                    </p>
                  </article>
                </>
              ) : (
                <article className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
                  <h2 className="text-2xl font-bold">
                    {course.title} course
                  </h2>

                  <p className="mt-3 text-slate-400">
                    No lessons are available yet. Check the course data file.
                  </p>
                </article>
              )}

              <article className="rounded-2xl border border-sky-900 bg-sky-950/30 p-5 sm:p-8">
                <p className="text-sm font-medium text-sky-300">
                  Final mini project
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  {course.project}
                </h2>

                <p className="mt-3 leading-7 text-slate-300">
                  Complete the weekly lessons and assignments, then build this project using what you have learned. Test it and keep your project files for your portfolio.
                </p>
              </article>
            </section>
          </div>
        )}
       
      </div>
    </main>
  );
  

}
export default function CoursePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 p-8 text-center text-slate-300">
          Loading course...
        </div>
      }
    >
      <CoursePageContent />
    </Suspense>
  );
}