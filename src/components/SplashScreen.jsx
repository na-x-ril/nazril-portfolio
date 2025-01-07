import { TypeAnimation } from "react-type-animation";

export default function SplashScreen({ name, onAnimationEnd }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 px-8">
      <h1 className="text-4xl font-bold text-white">
        <TypeAnimation
          sequence={[
            `Selamat Datang, ${name}!`,
            () => {
              setTimeout(() => {
                onAnimationEnd();
              }, 1000);
            },
          ]}
          speed={35}
          style={{ whiteSpace: "pre-line" }}
          repeat={0}
        />
      </h1>
    </div>
  );
}