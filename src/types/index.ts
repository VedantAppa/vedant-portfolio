export interface PersonalInfo {
  fullName: string;
  role: string;
  tagline: string;
  shortBio: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  college: string;
  degree: string;
  course: string;
  academicYear: string;
  semester: string;
  expectedGraduation: string;
  linkedin: string;
  github: string;
  resumeFileName: string;
  availableForWork: boolean;
  avatar: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EnjoyItem {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface SkillItem {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Roadmap / Upcoming' | 'Exploring';
  isVerified: boolean;
  category: 'core' | 'languages' | 'tools' | 'other';
  icon?: string;
  description?: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  status: 'Completed' | 'Ongoing' | 'Planned';
  githubUrl: string;
  liveDemoUrl: string;
  pdfUrl?: string;
  featured: boolean;
  isPlaceholder: boolean;
  category: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  status: string;
  isCurrent: boolean;
  isPlaceholder?: boolean;
  details?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  grade?: string;
  score?: string;
  pdfUrl?: string;
  verificationUrl?: string;
  isPlaceholder: boolean;
  description?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  pdfUrl?: string;
  isPlaceholder: boolean;
}

export interface HobbyItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  growthImpact: string;
}
