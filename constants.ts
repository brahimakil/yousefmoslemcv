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
      items: ["Python", "Java", "C/C++", "PIC18 Assembly", "MIPS", "VHDL (Basic)"]
    },
    {
      category: "Core Concepts",
      items: ["OOP", "Data Structures & Algorithms", "OS Architecture", "Memory Management", "Scheduling"]
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
    "Communication", "Teamwork", "Quick Learning", "Problem Solving", "Analytical Thinking" ,
  ],
  languages: ["Arabic (Native)", "English (Fluent)"],
  training: [
    "Semicolon Cybersecurity CTF Training (Current)",
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
      name: "Network Configuration & Simulation",
      tech: "Packet Tracer",
      details: [
        "Simulated complex enterprise networks with routers, switches, and servers.",
        "Implemented VLANs, DHCP, DNS, and IP routing protocols.",
        "Gained practical network design and troubleshooting proficiency."
      ]
    },
    {
      name: "Robot Arm Control Design",
      tech: "MATLAB/Simulink",
      details: [
        "Completed system identification; currently advancing through control design (PID, Root Locus) and Bode plot analysis.",
        "Implementing hardware control logic via Simulink modeling."
      ]
    },
    {
      name: "Residential PV System Design",
      tech: "Power Engineering",
      details: [
        "Designed a complete residential solar PV system including load estimation.",
        "Performed inverter and battery sizing and component selection based on power requirements."
      ]
    },
    {
      name: "Additional Projects",
      details: [
        "FSM based digital door lock.",
        "Mini Python projects (Snake Game).",
        "Xo tic tac toe game."     
      ]
    }
  ]
};

export const ICONS = {
  Layout, Mail, MapPin, Phone, Globe, Award, Code, Cpu, Terminal, BookOpen
};