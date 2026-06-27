export function ComputerIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
      <rect x="4" y="6" width="24" height="16" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
      <rect x="6" y="8" width="20" height="12" fill="#008080" />
      <rect x="10" y="22" width="12" height="2" fill="#808080" />
      <rect x="8" y="24" width="16" height="3" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
    </svg>
  );
}

export function FolderIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
      <path d="M2 8 L2 26 L30 26 L30 12 L16 12 L12 8 Z" fill="#ffcc00" stroke="#cc9900" strokeWidth="1" />
      <path d="M2 8 L12 8 L16 12 L30 12" fill="#ffdd44" stroke="#cc9900" strokeWidth="0.5" />
    </svg>
  );
}

export function NotesIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" fill="#ffffcc" stroke="#000" strokeWidth="1" />
      <line x1="9" y1="10" x2="23" y2="10" stroke="#0000aa" strokeWidth="1" />
      <line x1="9" y1="14" x2="23" y2="14" stroke="#0000aa" strokeWidth="1" />
      <line x1="9" y1="18" x2="20" y2="18" stroke="#0000aa" strokeWidth="1" />
    </svg>
  );
}

export function TrashIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
      <rect x="10" y="10" width="12" height="16" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
      <rect x="8" y="8" width="16" height="3" fill="#808080" />
      <rect x="14" y="6" width="4" height="3" fill="#808080" />
      <line x1="13" y1="14" x2="13" y2="22" stroke="#666" strokeWidth="1" />
      <line x1="16" y1="14" x2="16" y2="22" stroke="#666" strokeWidth="1" />
      <line x1="19" y1="14" x2="19" y2="22" stroke="#666" strokeWidth="1" />
    </svg>
  );
}

export function TelegramIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#0088cc" />
      <path d="M8 16 L24 8 L20 24 L16 18 L12 22 L13 17 Z" fill="white" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="7" fill="url(#ig)" />
      <circle cx="16" cy="16" r="6" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="23" cy="9" r="1.5" fill="white" />
    </svg>
  );
}

export function ExeIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
      <rect x="1" y="1" width="14" height="14" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
      <rect x="3" y="3" width="10" height="8" fill="#008080" />
    </svg>
  );
}

export function TxtIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="1" width="12" height="14" fill="#ffffcc" stroke="#000" strokeWidth="0.5" />
      <line x1="4" y1="5" x2="12" y2="5" stroke="#0000aa" strokeWidth="0.5" />
      <line x1="4" y1="8" x2="12" y2="8" stroke="#0000aa" strokeWidth="0.5" />
    </svg>
  );
}

export function ArchiveIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="2" width="12" height="12" fill="#ffcc00" stroke="#cc9900" strokeWidth="0.5" />
    </svg>
  );
}

const iconMap = {
  computer: ComputerIcon,
  folder: FolderIcon,
  notes: NotesIcon,
  trash: TrashIcon,
  telegram: TelegramIcon,
  instagram: InstagramIcon,
} as const;

export function getIcon(name: keyof typeof iconMap) {
  const Icon = iconMap[name];
  return Icon ? <Icon /> : null;
}
