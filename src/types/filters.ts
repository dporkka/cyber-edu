export interface CourseFilters {
  search: string;
  level: string[];
  priceRange: [number, number];
  category: string[];
}

export interface PriceRange {
  min: number;
  max: number;
}