import { Icons } from '@/lib/icons';

export function ProfileSecurity() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icons.key className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Security Settings</h2>
      </div>
      {/* Rest of the component */}
    </div>
  );
} 