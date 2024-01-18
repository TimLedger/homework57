export interface User {
    id: number;
    name: string;
    email: string;
    active: boolean;
    role: 'user' | 'editor' | 'administrator';
}
  
export interface FormState {
    name: string;
    email: string;
    active: boolean;
    role: 'user' | 'editor' | 'administrator';
}
  