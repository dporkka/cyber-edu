import { Badge } from '@/components/ui/badge';
import { cn } from "@/lib/utils";

interface BlogTagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export function BlogTagFilter({ tags, selectedTag, onTagSelect }: BlogTagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      <Badge
        variant={selectedTag === null ? "default" : "outline"}
        className="cursor-pointer"
        onClick={() => onTagSelect(null)}
      >
        All
      </Badge>
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          className={cn(
            "cursor-pointer",
            selectedTag === tag && "bg-primary text-primary-foreground"
          )}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
} 