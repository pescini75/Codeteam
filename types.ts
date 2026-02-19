import React from 'react';
import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: React.ReactNode;
  icon: LucideIcon;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  linkedinUrl?: string;
  email?: string;
  phoneNumber?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown content
  imageUrl: string;
  date: string;
  readTime: string;
  tags: string[];
}