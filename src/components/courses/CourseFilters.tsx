import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { CourseFilters as FilterType } from '@/types/filters';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CourseFiltersProps {
  filters: FilterType;
  onFilterChange: (key: keyof FilterType, value: any) => void;
}

const levels = ['Beginner', 'Intermediate', 'Advanced'];
const categories = ['Ethical Hacking', 'Network Security', 'Web Security'];

export function CourseFilters({ filters, onFilterChange }: CourseFiltersProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="search">Search Courses</Label>
        <Input
          id="search"
          placeholder="Search..."
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
      </div>

      <div>
        <Label>Difficulty Level</Label>
        <ScrollArea className="h-[120px]">
          <div className="space-y-2">
            {levels.map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox
                  id={level}
                  checked={filters.level.includes(level)}
                  onCheckedChange={(checked) => {
                    const newLevels = checked
                      ? [...filters.level, level]
                      : filters.level.filter((l) => l !== level);
                    onFilterChange('level', newLevels);
                  }}
                />
                <label htmlFor={level}>{level}</label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <Label>Price Range</Label>
        <div className="pt-4">
          <Slider
            value={filters.priceRange}
            min={0}
            max={1000}
            step={50}
            onValueChange={(value) => onFilterChange('priceRange', value)}
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <Label>Categories</Label>
        <ScrollArea className="h-[120px]">
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={filters.category.includes(category)}
                  onCheckedChange={(checked) => {
                    const newCategories = checked
                      ? [...filters.category, category]
                      : filters.category.filter((c) => c !== category);
                    onFilterChange('category', newCategories);
                  }}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}