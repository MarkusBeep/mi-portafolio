import { GitBranch, CheckCheck, Bell } from "lucide-react";

export const StatusBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#d8f3e5] border-t border-[#80d4ab] px-4 py-1 text-xs text-[#2e7d58] flex items-center justify-between font-mono z-50">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1 hover:text-emerald-950 cursor-pointer">
          <GitBranch className="w-3.5 h-3.5 text-emerald-700" /> main*
        </span>
        <span className="flex items-center gap-1 hover:text-emerald-950 cursor-pointer">
          <CheckCheck className="w-3.5 h-3.5 text-emerald-700" /> 0 errors, 0
          warnings
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">Ln 42, Col 18</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden sm:inline">TypeScript JSX</span>
        <Bell className="w-3.5 h-3.5 text-emerald-700 hover:text-emerald-950 cursor-pointer" />
      </div>
    </footer>
  );
};
