interface LogoProps {
  width?: number;
  className?: string;
}

export const Logo = ({ width = 24, className }: LogoProps) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4h16v16H4z" />
      <path d="M9 9h6v6H9z" />
    </svg>
  );
};
