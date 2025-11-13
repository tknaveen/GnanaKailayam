interface YouTubeIconHDProps {
  className?: string;
  size?: number;
}

export function YouTubeIconHD({ className = "", size = 40 }: YouTubeIconHDProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* YouTube logo shape with high detail */}
      <path
        d="M47.044 12.315C46.48 10.088 44.762 8.347 42.565 7.776C38.832 6.75 24 6.75 24 6.75C24 6.75 9.168 6.75 5.435 7.776C3.238 8.347 1.52 10.088 0.956 12.315C0 16.092 0 24 0 24C0 24 0 31.908 0.956 35.685C1.52 37.912 3.238 39.653 5.435 40.224C9.168 41.25 24 41.25 24 41.25C24 41.25 38.832 41.25 42.565 40.224C44.762 39.653 46.48 37.912 47.044 35.685C48 31.908 48 24 48 24C48 24 48 16.092 47.044 12.315Z"
        fill="currentColor"
      />
      {/* Play button triangle */}
      <path
        d="M19.2 30.75V17.25L31.8 24L19.2 30.75Z"
        fill="white"
      />
      {/* Highlight effect for depth */}
      <path
        d="M47.044 12.315C46.48 10.088 44.762 8.347 42.565 7.776C38.832 6.75 24 6.75 24 6.75C24 6.75 9.168 6.75 5.435 7.776C3.238 8.347 1.52 10.088 0.956 12.315C0 16.092 0 24 0 24C0 24 0 31.908 0.956 35.685C1.52 37.912 3.238 39.653 5.435 40.224C9.168 41.25 24 41.25 24 41.25C24 41.25 38.832 41.25 42.565 40.224C44.762 39.653 46.48 37.912 47.044 35.685C48 31.908 48 24 48 24C48 24 48 16.092 47.044 12.315Z"
        fill="url(#youtube-gradient)"
        fillOpacity="0.15"
      />
      <defs>
        <linearGradient
          id="youtube-gradient"
          x1="24"
          y1="6.75"
          x2="24"
          y2="41.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
