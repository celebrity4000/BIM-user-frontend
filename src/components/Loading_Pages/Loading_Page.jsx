import logo from "../../../public/favicon.png";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="relative">
        {/* Pulsing circles behind the logo */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 rounded-full animate-ping`}
            style={{
              backgroundColor: "#FF006B",
              opacity: 0.2 - i * 0.05,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "2s",
            }}
          />
        ))}

        {/* Main logo container */}
        <div className="relative">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-bounce"
          />
        </div>
      </div>

      {/* Loading text with gradient effect */}
      <div className="mt-8 text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
        Loading...
      </div>

      {/* Animated bar */}
      <div className="mt-4 w-48 h-1 rounded-full overflow-hidden bg-gray-200">
        <div
          className="h-full rounded-full animate-slide"
          style={{
            backgroundColor: "#FF006B",
            width: "30%",
          }}
        />
      </div>
    </div>
  );
};

// Add custom animation
const style = document.createElement("style");
style.textContent = `
  @keyframes slide {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(400%); }
  }
  .animate-slide {
    animation: slide 1.5s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default LoadingPage;
