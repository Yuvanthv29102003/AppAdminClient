import type { FC } from 'react';

export type ThirdLevelItem = { id: string; label: string };

export interface ThirdLevelPanelProps {
  visible: boolean;
  topClass: string;
  items: ThirdLevelItem[];
  activeId: string;
  onChange: (id: string) => void;
}

export const ThirdLevelPanel: FC<ThirdLevelPanelProps> = ({
  visible,
  topClass,
  items,
  activeId,
  onChange,
}) => {
  if (!visible) return null;

  return (
    <div
      className={`absolute ${topClass} left-[500px] h-auto w-[250px] bg-[#000000] text-[#dcdcdc] shadow-lg`}
    >
      {items.map((subItem) => {
        const isSubActive = subItem.id === activeId;

        return (
          <button
            key={subItem.id}
            type="button"
            onClick={() => onChange(subItem.id)}
            className={
              'relative flex items-center justify-between px-6 h-11 text-sm font-medium w-full text-left cursor-pointer ' +
              (isSubActive ? 'bg-[#1a1a1a]' : 'bg-transparent hover:bg-[#1a1a1a]/60')
            }
          >
            <span>{subItem.label}</span>
          </button>
        );
      })}
    </div>
  );
};
