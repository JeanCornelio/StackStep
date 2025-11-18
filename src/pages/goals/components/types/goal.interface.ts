export interface Goal {
  id: string;
  user: User;
  title: string;
  category: Category;
  totalHours: number;
  currentHours: number;
  percent: string;
  dueDate: Date;
  description: string;
  state: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
}

export interface User {
  id: string;
}
