import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutImage = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`relative box-border caret-transparent h-[400px] overflow-hidden rounded-lg transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <img
        alt="Engineer portrait"
        src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/pexels-photo-3861958.jpeg"
        className="absolute text-transparent box-border h-full max-w-full object-cover w-full inset-0"
      />
    </div>
  );
};
