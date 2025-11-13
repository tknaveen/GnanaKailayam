interface FacebookIconHDProps {
  className?: string;
  size?: number;
}

export function FacebookIconHD({ className = "", size = 40 }: FacebookIconHDProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Facebook 'f' logo in high detail */}
      <path
        d="M24 0C10.745 0 0 10.745 0 24C0 36.018 8.89 45.834 20.531 47.611V30.844H14.352V24H20.531V18.703C20.531 12.603 24.181 9.234 29.697 9.234C32.352 9.234 35.133 9.703 35.133 9.703V15.656H32.072C29.055 15.656 28.125 17.465 28.125 19.32V24H34.852L33.797 30.844H28.125V47.611C39.766 45.834 48.656 36.018 48.656 24C48.656 10.745 37.911 0 24.656 0H24Z"
        fill="currentColor"
      />
      <path
        d="M33.797 30.844L34.852 24H28.125V19.32C28.125 17.465 29.055 15.656 32.072 15.656H35.133V9.703C35.133 9.703 32.352 9.234 29.697 9.234C24.181 9.234 20.531 12.603 20.531 18.703V24H14.352V30.844H20.531V47.611C21.672 47.797 22.828 47.906 24 47.906C25.172 47.906 26.328 47.797 27.469 47.611V30.844H33.797Z"
        fill="#ffffff"
        fillOpacity="0.15"
      />
    </svg>
  );
}
