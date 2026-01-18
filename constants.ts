import { ResumeData } from './types';
import { Layout, Mail, MapPin, Phone, Globe, Award, Code, Cpu, Terminal, BookOpen } from 'lucide-react';

export const RESUME_DATA: ResumeData = {
  name: "Yousef Moslem",
  title: "Computer Engineering Student",
  contact: {
    phone: "+961 78 949 932",
    email: "101220199@mu.edu.lb",
    location: "Tyre/Beirut, Lebanon"
  },
  objective: "Motivated Computer Engineering student with solid hardware, software, and networking foundations, seeking an internship or engineering position to apply technical skills, gain industry experience, and contribute to real engineering projects.",
  education: [
    {
      degree: "Bachelor of Computer Engineering",
      institution: "Al Maaref University",
      year: "2022 – 2026"
    }
  ],
  experience: [
    {
      role: "Private Tutor",
      company: "Freelance",
      period: "10/2025 – Present",
      achievements: [
        "Private Tutor (Math, Physics, Chemistry) – Grades 8–12",
        "Actively teaching 3 students with a focus on concept mastery and academic improvement."
      ]
    },
    {
      role: "Math Support Tutor",
      company: "Al Maaref University",
      period: "02/2025 – 04/2025",
      achievements: [
        "Provided academic support to students in Discrete Mathematics, resulting in improved class averages.",
        "Assisted peers in understanding complex logic and algorithm concepts."
      ]
    },
    {
      role: "Electrical & PV Store Assistant",
      company: "SunTec",
      location: "Tyre",
      period: "12/2024 – 01/2025",
      achievements: [
        "Assisted customers with technical inquiries regarding PV and electrical components.",
        "Gained hands-on familiarity with solar energy hardware and inventory management."
      ]
    }
  ],
  skills: [
    {
      category: "Programming & Software",
      items: ["Python", "Java", "C/C++", "PIC18 Assembly", "MIPS", "VHDL (Basic)", "SQL"]
    },
    {
      category: "Core Concepts",
      items: ["OOP", "Data Structures & Algorithms", "OS Architecture", "Process Management", "Scheduling"]
    },
    {
      category: "Networks & Security",
      items: ["CCNA Concepts", "Packet Tracer", "Wireshark", "Kali Linux", "Network Security Basics"]
    },
    {
      category: "Simulation & Control",
      items: ["MATLAB", "Simulink (Modeling & Control)"]
    },
    {
      category: "Electronics & Embedded",
      items: ["Analog/Digital Analysis", "Arduino", "Microcontroller Programming", "MPLAB"]
    },
    {
      category: "VLSI & CAD Tools",
      items: ["Electric VLSI", "LTSpice", "PSpice", "Logisim", "Altium Designer (Intro)"]
    }
  ],
  softSkills: [
    "Communication", "Teamwork", "Quick Learning", "Problem Solving", "Analytical Thinking",
  ],
  languages: ["Arabic (Native)", "English (Fluent)"],
  training: [
    "Semicolon Cybersecurity CTF Training & Competition (Current)",
    "CCNA Coursework & Certification (Completed)",
    "MATLAB Course",
    "PSpice Course",
    "Altium PCB Design Workshop (University Training)"
  ],
  projects: [
    {
      name: "Digital ALU Design",
      tech: "Electric VLSI",
      details: [
        "Designed a full Arithmetic Logic Unit (Add, Subtract, AND, OR) with schematic, layout, and icon.",
        "Applied CMOS design rules and verified functionality using rigorous simulations."
      ]
    },
    {
      name: "Store Management System",
      tech: "Java",
      details: [
        "Engineered a data-structure based system using linked lists, stacks, and queues.",
        "Applied OOP principles to manage inventory, transactions, and store operations efficiently."
      ]
    },
    {
      name: "Pharmacy Database Management System",
      tech: "SQL",
      details: [
        "Designed and implemented a relational database system with normalized tables for drugs, categories, origins, purchases, and sales.",
        "Developed complex SQL queries for sorting, filtering, and calculating sales/profit over custom date ranges.",
        "Created inventory management features to track available quantities and monitor near-expiry drugs.",
        "Enabled comprehensive report generation for inventory and financial analysis to support decision-making."
      ]
    },
    {
      name: "Network Configuration & Simulation",
      tech: "Packet Tracer",
      details: [
        "Simulated complex enterprise networks with routers, switches, and servers.",
        "Implemented VLANs, DHCP, DNS, and IP routing protocols.",
        "Gained practical network design and troubleshooting proficiency."
      ]
    },
    {
      name: "Robotic Arm Control System Design & Simulation",
      tech: "MATLAB/Simulink",
      details: [
        "Designed and simulated a closed-loop control system for a robotic arm to ensure smooth motion for payloads ranging from 25 g to 25 kg.",
        "Applied system identification and designed PID and lead compensator controllers separately, performing a comparative performance analysis using root locus and frequency-response (Bode) methods.",
        "Evaluated controllers based on steady-state error, overshoot, and settling time, achieving zero error, zero overshoot, and settling time ≤ 2 s.",
        "Validated controller robustness and stability under varying payload conditions."
      ]
    },
    {
      name: "Additional Projects",
      details: [
        "FSM based digital door lock.",
        "Mini Python projects (Snake Game).",
      ]
    }
  ]
};

export const ICONS = {
  Layout, Mail, MapPin, Phone, Globe, Award, Code, Cpu, Terminal, BookOpen
};