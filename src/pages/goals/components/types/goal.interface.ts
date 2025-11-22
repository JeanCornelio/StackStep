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

export interface PaginationParams {
  page: number;
  size: number;
}

export interface SearchParams {
  term?: string | null;
  categoryId?: string | null;
}

export interface FetchGoalsParams extends PaginationParams, SearchParams {}

export interface SetGoal {
  title: string;
  description: string;
  totalHours: number;
  categoryId: string;
  dueDate: Date;
}
