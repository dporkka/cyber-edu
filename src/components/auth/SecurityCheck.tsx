import { Icons } from '@/lib/icons';

export function SecurityCheck() {
  return (
    <div className="flex items-center gap-2">
      <Icons.shieldCheck className="h-5 w-5" />
      <span>Security verification</span>
    </div>
  );
} 