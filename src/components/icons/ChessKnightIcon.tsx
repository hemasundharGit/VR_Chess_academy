export function ChessKnightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 45 45" 
      fill="currentColor"
      {...props}
    >
      <path 
        d="M22.5,9C20.57,9,19,7.43,19,5.5S20.57,2,22.5,2,26,3.57,26,5.5,24.43,9,22.5,9ZM25.2,12.08a4.3,4.3,0,0,0-2.7,2.7l-2,7.21,2.48,1L23,23l-3-4-3,4,.05-.18L15.4,22l2.5-1-2-7.21a4.3,4.3,0,0,0-2.7-2.7L5,13.25V31h2.5V18.13l5.13-1.42.89,3.22L11,21.3v4.2a4.5,4.5,0,0,0,4.5,4.5H16V31h2.5V30h9V31H30V25.5h.5a4.5,4.5,0,0,0,4.5-4.5V21.3l-2.5-1.37.89-3.22L38.5,18.13V31H41V13.25Z" 
        stroke="hsl(var(--background))" 
        strokeWidth="0.5"
      />
      <path d="M8,33v6H38V33Z" />
      <path d="M12,41.25V44h22V41.25Z" />
    </svg>
  );
}
