import { Icons } from '@/lib/icons';

export function AuthModal() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Icons.key className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Authentication Required</h2>
      </div>
      {/* Rest of the modal content */}
    </div>
  );
} 