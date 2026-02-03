import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum LegalCategory {
  REAL_ESTATE = 'Недвижимость',
  CRIMINAL = 'Уголовное право',
  CIVIL = 'Гражданское право',
  BUSINESS = 'Бизнес и Арбитраж',
}