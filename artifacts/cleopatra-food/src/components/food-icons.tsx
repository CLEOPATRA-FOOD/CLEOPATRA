import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { strokeWidth?: number };

const baseProps = (strokeWidth = 1.5) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function BurgerIcon({ strokeWidth, ...props }: IconProps) {
  return (
    <svg {...baseProps(strokeWidth)} {...props}>
      {/* Top bun - dome */}
      <path d="M3 10 Q3 4 12 4 Q21 4 21 10 Z" />
      {/* Sesame seeds on top bun */}
      <ellipse cx="8" cy="7.5" rx="0.6" ry="0.9" fill="currentColor" />
      <ellipse cx="12" cy="6.2" rx="0.6" ry="0.9" fill="currentColor" />
      <ellipse cx="16" cy="7.5" rx="0.6" ry="0.9" fill="currentColor" />
      {/* Lettuce - wavy */}
      <path d="M2.5 11.5 Q4 10.5 5.5 11.5 T8.5 11.5 T11.5 11.5 T14.5 11.5 T17.5 11.5 T20.5 11.5 T21.5 11.5" />
      {/* Cheese - droopy edges */}
      <path d="M3 13 H21 M5 13 L4 14.5 M19 13 L20 14.5 M9 13 L8.5 14.5 M15 13 L15.5 14.5" />
      {/* Patty */}
      <path d="M3 15 Q3 14.5 4 14.5 H20 Q21 14.5 21 15 V16.5 Q21 17 20 17 H4 Q3 17 3 16.5 Z" />
      {/* Bottom bun */}
      <path d="M3 18 H21 Q21 21 12 21 Q3 21 3 18 Z" />
    </svg>
  );
}

export function CrepeIcon({ strokeWidth, ...props }: IconProps) {
  return (
    <svg {...baseProps(strokeWidth)} {...props}>
      {/* Plate */}
      <ellipse cx="12" cy="19.5" rx="10" ry="1.6" />
      {/* Folded crepe - triangle/cone shape */}
      <path d="M4 18 Q4 17 5 16.8 L11 7.5 Q12 6 13 7.5 L19 16.8 Q20 17 20 18 Z" />
      {/* Fold line */}
      <path d="M12 8 L12 17.5" opacity="0.7" />
      {/* Strawberry on top */}
      <circle cx="12" cy="6" r="1.4" fill="currentColor" />
      <path d="M11 4.8 L12 4 L13 4.8" />
      {/* Whipped cream swirl */}
      <path d="M9 16 Q9.5 14.5 11 14.8 Q12.5 15.2 13 14 Q14 13 15 14.5" opacity="0.85" />
    </svg>
  );
}

export function GratinIcon({ strokeWidth, ...props }: IconProps) {
  return (
    <svg {...baseProps(strokeWidth)} {...props}>
      {/* Casserole dish - oval baking dish */}
      <ellipse cx="12" cy="14" rx="9" ry="2" />
      <path d="M3 14 V18 Q3 20 12 20 Q21 20 21 18 V14" />
      {/* Handles */}
      <path d="M3 16 L1.5 16.5 M21 16 L22.5 16.5" />
      {/* Melted cheese top with bubbles */}
      <path d="M5 13.5 Q7 11 9 13 Q11 11 13 13 Q15 11 17 13 Q19 11 19 13.5" />
      {/* Steam */}
      <path d="M9 9 Q10 7 9 5 M12 8 Q13 6 12 4 M15 9 Q16 7 15 5" opacity="0.7" />
    </svg>
  );
}

export function PastaIcon({ strokeWidth, ...props }: IconProps) {
  return (
    <svg {...baseProps(strokeWidth)} {...props}>
      {/* Plate */}
      <ellipse cx="12" cy="17" rx="10" ry="2.2" />
      <path d="M2 17 Q2 19.5 12 19.5 Q22 19.5 22 17" />
      {/* Spaghetti swirl mound */}
      <path d="M4 16 Q4 11 12 11 Q20 11 20 16" />
      {/* Spaghetti strands */}
      <path d="M6 15.5 Q9 13 12 14 Q15 15 18 13.5" opacity="0.85" />
      <path d="M5.5 14 Q9 12 12 12.5 Q15 13 18.5 12" opacity="0.85" />
      <path d="M7 13 Q10 11.5 13 12 Q16 12.5 17 11.5" opacity="0.85" />
      {/* Fork sticking in */}
      <path d="M14 4 V11" />
      <path d="M13 4 V7 M15 4 V7 M14.7 4 V7" opacity="0.8" />
    </svg>
  );
}

export function FritesIcon({ strokeWidth, ...props }: IconProps) {
  return (
    <svg {...baseProps(strokeWidth)} {...props}>
      {/* Paper cup - trapezoid */}
      <path d="M6 11 L8 21 H16 L18 11 Z" />
      {/* Cup horizontal stripes */}
      <path d="M7 14 H17" opacity="0.5" />
      <path d="M7.4 17 H16.6" opacity="0.5" />
      {/* Fries sticking out the top - vertical sticks of varying heights */}
      <path d="M8 11 V4" />
      <path d="M10 11 V2.5" />
      <path d="M12 11 V3" />
      <path d="M14 11 V2" />
      <path d="M16 11 V4" />
      <path d="M9 11 V5.5" opacity="0.85" />
      <path d="M13 11 V5" opacity="0.85" />
      <path d="M15 11 V6" opacity="0.85" />
    </svg>
  );
}

export function PizzaIcon({ strokeWidth, ...props }: IconProps) {
  return (
    <svg {...baseProps(strokeWidth)} {...props}>
      {/* Pizza slice - triangle */}
      <path d="M12 3 L21 19 Q12 21 3 19 Z" />
      {/* Crust curve at base */}
      <path d="M3.5 19 Q12 20.5 20.5 19" opacity="0.85" />
      <path d="M5 17 Q12 18.5 19 17" opacity="0.5" />
      {/* Pepperoni toppings */}
      <circle cx="12" cy="9" r="1.4" fill="currentColor" />
      <circle cx="9" cy="13" r="1.5" fill="currentColor" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" />
      <circle cx="12" cy="16.2" r="1.1" fill="currentColor" />
      {/* Cheese melt drips */}
      <path d="M7 14.5 L7 16" opacity="0.6" />
      <path d="M17 14.5 L17 16" opacity="0.6" />
    </svg>
  );
}

export function SandwichSubIcon({ strokeWidth, ...props }: IconProps) {
  return (
    <svg {...baseProps(strokeWidth)} {...props}>
      {/* Long sub roll baguette */}
      <path d="M2 9 Q2 6.5 5 6.5 H19 Q22 6.5 22 9 V13 Q22 15.5 19 15.5 H5 Q2 15.5 2 13 Z" />
      {/* Diagonal slice cut */}
      <path d="M13.5 6.5 L10.5 15.5" opacity="0.7" />
      {/* Filling - lettuce wave */}
      <path d="M3 11.5 Q5 11 7 11.5 T11 11.5" opacity="0.85" />
      {/* Meat / tomato slices visible */}
      <path d="M3 13 Q5 12.5 7 13 T11 13" opacity="0.7" />
      {/* Sesame seeds on top */}
      <ellipse cx="6" cy="8.3" rx="0.4" ry="0.7" fill="currentColor" />
      <ellipse cx="9" cy="8" rx="0.4" ry="0.7" fill="currentColor" />
      <ellipse cx="16" cy="8" rx="0.4" ry="0.7" fill="currentColor" />
      <ellipse cx="19" cy="8.3" rx="0.4" ry="0.7" fill="currentColor" />
    </svg>
  );
}

export function PaniniIcon({ strokeWidth, ...props }: IconProps) {
  return (
    <svg {...baseProps(strokeWidth)} {...props}>
      {/* Top bread half */}
      <path d="M3 6 Q3 5 4 5 H20 Q21 5 21 6 V11 H3 Z" />
      {/* Filling layer */}
      <path d="M3 11 Q5 12 7 11.5 T11 12 T15 11.5 T19 12 T21 11.5 V13 H3 Z" />
      {/* Bottom bread half */}
      <path d="M3 13 H21 V18 Q21 19 20 19 H4 Q3 19 3 18 Z" />
      {/* Grill stripes */}
      <path d="M6 5 L6 11" opacity="0.6" />
      <path d="M10 5 L10 11" opacity="0.6" />
      <path d="M14 5 L14 11" opacity="0.6" />
      <path d="M18 5 L18 11" opacity="0.6" />
      <path d="M6 13 L6 19" opacity="0.6" />
      <path d="M10 13 L10 19" opacity="0.6" />
      <path d="M14 13 L14 19" opacity="0.6" />
      <path d="M18 13 L18 19" opacity="0.6" />
    </svg>
  );
}

export function TacosIcon({ strokeWidth, ...props }: IconProps) {
  return (
    <svg {...baseProps(strokeWidth)} {...props}>
      {/* Grilled wrap packet - rounded rectangle */}
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      {/* Grill marks - diagonal stripes */}
      <path d="M6 9 L10 5 M10 9 L14 5 M14 9 L18 5" opacity="0.6" />
      <path d="M6 14 L11 9 M10 14 L15 9 M14 14 L19 9" opacity="0.6" />
      <path d="M6 19 L11 14 M10 19 L15 14 M14 19 L19 14" opacity="0.6" />
      {/* Filling peeking out the top */}
      <path d="M5 5 Q7 3.5 9 5 T13 5 T17 5 T19 5" opacity="0.85" />
      {/* Sauce drips at bottom */}
      <path d="M8 20 L8 22" opacity="0.7" />
      <path d="M12 20 L12 22" opacity="0.7" />
      <path d="M16 20 L16 22" opacity="0.7" />
    </svg>
  );
}

export function RiceIcon({ strokeWidth, ...props }: IconProps) {
  return (
    <svg {...baseProps(strokeWidth)} {...props}>
      {/* Plate - large oval */}
      <ellipse cx="12" cy="18" rx="10.5" ry="2.4" />
      <path d="M1.5 18 Q1.5 20.5 12 20.5 Q22.5 20.5 22.5 18" />
      {/* Plate inner rim */}
      <ellipse cx="12" cy="17.6" rx="8.5" ry="1.6" opacity="0.5" />
      {/* Mound of rice - dome */}
      <path d="M4.5 17.5 Q4.5 8 12 8 Q19.5 8 19.5 17.5" />
      {/* Rice grain marks (small dashes on the mound) */}
      <path d="M7 14 L7.7 14.4" />
      <path d="M9 12 L9.7 12.4" />
      <path d="M11 10 L11.7 10.4" />
      <path d="M14 11 L14.7 11.4" />
      <path d="M16 13 L16.7 13.4" />
      <path d="M8 16 L8.7 16.4" />
      <path d="M12 14 L12.7 14.4" />
      <path d="M15 15 L15.7 15.4" />
      <path d="M10 15.5 L10.7 15.9" />
      <path d="M13 9 L13.7 9.4" />
      {/* Steam */}
      <path d="M9 6 Q10 4 9 2 M13 6 Q14 4 13 2" opacity="0.7" />
    </svg>
  );
}
