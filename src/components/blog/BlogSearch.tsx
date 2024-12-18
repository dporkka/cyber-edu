import { Input } from '@/components/ui/input';
import { Icons } from '@/lib/icons';

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <div className="relative">
      <Icons.search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search posts..."
        className="pl-10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
} 