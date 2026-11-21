import jsPDF from 'jspdf';
import { personalInfo } from '../data/portfolio';

export function generateResumePdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // ~210 mm
  const margin = 14;
  const contentWidth = pageWidth - (margin * 2);
  let y = 14;

  // --- HEADER SECTION ---
  // Top subtle decorative banner
  doc.setFillColor(17, 24, 39); // Dark Navy #111827
  doc.rect(margin, y, contentWidth, 26, 'F');

  // Accent vertical stripe
  doc.setFillColor(139, 92, 246); // Electric Violet #8B5CF6
  doc.rect(margin, y, 3, 26, 'F');

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(17);
  doc.setTextColor(255, 255, 255);
  doc.text(personalInfo.fullName.toUpperCase(), margin + 7, y + 9);

  // Subtitle / Title
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(196, 181, 253); // Light Purple
  doc.text('B.Tech in Computer Engineering | Aspiring Software Developer', margin + 7, y + 15);

  // Contact Strip inside Header
  doc.setFontSize(8);
  doc.setTextColor(226, 232, 240);
  const contactText = `Email: ${personalInfo.email}  |  Phone: ${personalInfo.phone}  |  Location: Pune, Maharashtra, India`;
  doc.text(contactText, margin + 7, y + 21);

  y += 32;

  // Social & Web Links Bar
  doc.setFontSize(8.5);
  doc.setTextColor(79, 70, 229);
  doc.text(`GitHub: ${personalInfo.github}`, margin, y);
  doc.text(`LinkedIn: ${personalInfo.linkedin}`, margin + (contentWidth / 2), y);

  y += 6;

  // Helper function to draw Section Headings
  const drawSectionHeader = (title: string) => {
    doc.setFillColor(243, 244, 246); // Light slate bar
    doc.rect(margin, y, contentWidth, 6, 'F');
    doc.setFillColor(139, 92, 246);
    doc.rect(margin, y, 2, 6, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42); // Deep slate
    doc.text(title.toUpperCase(), margin + 5, y + 4.3);
    y += 8.5;
  };

  // --- 1. PROFESSIONAL SUMMARY ---
  drawSectionHeader('Professional Profile');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summary = "Second-year B.Tech Computer Engineering student at Dr. D. Y. Patil College of Engineering and Innovation with verified competencies in C, C++, Python, and Data Structures. Smart India Hackathon 2026 participant and NASSCOM FutureSkills Prime certified AI Specialist in BFSI. Focused on concept-driven understanding, clean system implementations, and real-world software solutions.";
  const summaryLines = doc.splitTextToSize(summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += (summaryLines.length * 4.2) + 2;

  // --- 2. EDUCATION ---
  drawSectionHeader('Education');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Dr. D. Y. Patil College of Engineering and Innovation, Varale, Pune', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('2024 – 2029 (Expected)', pageWidth - margin, y, { align: 'right' });
  y += 4;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(124, 58, 237);
  doc.text('Bachelor of Technology (B.Tech) – Computer Engineering', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('| Current Status: Second Year (Semester 2)', margin + 92, y);
  y += 4;

  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text('• Core Coursework: C & C++ Programming, Data Structures, Discrete Mathematics, Algorithms & Systems.', margin + 2, y);
  y += 6.5;

  // --- 3. TECHNICAL COMPETENCIES & CERTIFICATIONS ---
  drawSectionHeader('Technical Skills & Verified Certifications');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Programming Languages:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('C & C++ (Grade A+ Certified), Python for Data Science (NPTEL Certified).', margin + 40, y);
  y += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('Core Computer Science:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('Data Structures, Object-Oriented Programming (OOP), Memory Management, Algorithmic Logic.', margin + 40, y);
  y += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('Domains & Tools:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('AI in BFSI Workflows, Git & GitHub, VS Code, Linux CLI, Geolocation APIs.', margin + 40, y);
  y += 5.5;

  // Bullet list of Verified Certifications
  const certs = [
    '• NASSCOM FutureSkills Prime & SmartBridge: AI Specialist - BFSI Track Virtual Internship (Cert ID: VIP-BFSI-2026-0276, Nov 2026)',
    '• NPTEL & IIT Madras (Swayam): Python for Data Science (Score: 55, 2 Academic Credits, Roll No: NPTEL26CS80S466205290)',
    '• Certified Technical Education: C & C++ Programming (Grade A+, Certificate ID: 3M3ATFWI0HA59, May 2026)',
    '• MyCaptain: Business Communication Workshop (7-Month Ratified Program, Batch Oct 2025)',
    '• Bajaj Finserv CSR: Professional Capability & Corporate Readiness Certificate (ID: 548688-37-2026-10-07)'
  ];

  certs.forEach((c) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(51, 65, 85);
    const lines = doc.splitTextToSize(c, contentWidth - 4);
    doc.text(lines, margin + 2, y);
    y += (lines.length * 3.8);
  });
  y += 2.5;

  // --- 4. KEY PROJECTS & HACKATHONS ---
  drawSectionHeader('Key Projects & Hackathons');

  // Project 1: CareFlow
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('CareFlow – Smart Healthcare Appointment System', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(124, 58, 237);
  doc.text('[Smart India Hackathon 2026 | Team Power Rangers | PS ID: 29]', margin + 82, y);
  y += 3.8;
  doc.setFontSize(7.8);
  doc.setTextColor(71, 85, 105);
  const p1 = '• Connected healthcare software mitigating hospital overcrowding and unpredictable appointment delays.\n• Engineered GPS-based patient tracking with dynamic ETA estimation, AI healthcare assistance, and crowdsourced emergency blood & medicine availability tracking.';
  const p1Lines = doc.splitTextToSize(p1, contentWidth - 4);
  doc.text(p1Lines, margin + 2, y);
  y += (p1Lines.length * 3.7) + 2;

  // Project 2: Pothole Reporting System
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Pothole Reporting & Tracking Platform', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(124, 58, 237);
  doc.text('[DTIL Engineering Project | DYPCOEI Varale]', margin + 63, y);
  y += 3.8;
  doc.setFontSize(7.8);
  doc.setTextColor(71, 85, 105);
  const p2 = '• Civic infrastructure web application enabling citizens to report road hazards with photo upload and geotagging.\n• Integrated complaint status lifecycle tracking and a gamified municipal civic rewards system (Bronze/Silver/Gold).';
  const p2Lines = doc.splitTextToSize(p2, contentWidth - 4);
  doc.text(p2Lines, margin + 2, y);
  y += (p2Lines.length * 3.7) + 2;

  // Project 3: C/C++ Systems
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Algorithmic Systems & Data Structures in C/C++', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(124, 58, 237);
  doc.text('[Grade A+ Certified Project]', margin + 75, y);
  y += 3.8;
  doc.setFontSize(7.8);
  doc.setTextColor(71, 85, 105);
  const p3 = '• Modular implementation of pointer manipulation, linked lists, stacks, queues, and tree traversal algorithms.\n• Evaluated algorithmic performance, dynamic memory allocation safety, and object-oriented modular code structure.';
  const p3Lines = doc.splitTextToSize(p3, contentWidth - 4);
  doc.text(p3Lines, margin + 2, y);
  y += (p3Lines.length * 3.7) + 2.5;

  // --- 5. PROFESSIONAL STRENGTHS ---
  drawSectionHeader('Professional Strengths & Interests');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  doc.text('• Strengths: Problem-Solving, Leadership, Analytical Thinking, Clear Communication, Quick Adaptability.', margin + 2, y);
  y += 4;
  doc.text('• Co-Curricular & Personal Interests: Playing Sports (Teamwork), Technology Exploration, Travelling.', margin + 2, y);

  // Footer bar
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184);
  doc.text(`Official Developer Resume • Generated for Vedant Sanjay Ghodeswar • portfolio: ${personalInfo.github}`, margin, 290);

  // Save the PDF
  doc.save(personalInfo.resumeFileName);
}
