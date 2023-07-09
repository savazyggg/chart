export interface UserSelect {
  startDate: string;
  endDate: string;
  timeUnit: string;
  category: string;
  keyword: string;
  device: string;
  gender: string;
  ages: string[];
}

export interface UserData {
  period: string;
  group: string;
  ratio: number;
}

export interface MergedData {
  기간: string;
  [key: string]: string | number;
}