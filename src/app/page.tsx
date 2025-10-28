import { montserrat } from "@/lib/fonts";
import { FeatureInfo } from "@/lib/types/featureInfo";
import FeatureCard from "@/components/FeatureCard";

const featuresInfo: Pick<
  FeatureInfo,
  "imageName" | "title" | "description" | "iconBg"
>[] = [
  {
    imageName: "chart-pie-alt.png",
    title: "Macros Tracker",
    description:
      "Track your macros easily and efficiently with our intuitive interface. Stay on top of your goals.",
    iconBg: "bg-rose-200",
  },
  {
    imageName: "mobile-notch.png",
    title: "Food Tracker",
    description:
      "Log your meals quickly, monitor your intake, and keep your nutrition balanced every single day.",
    iconBg: "bg-violet-200",
  },
  {
    imageName: "book-bookmark.png",
    title: "Recipes Database",
    description:
      "Discover delicious keto recipes, save your favorites, and get inspired to cook healthy meals daily.",
    iconBg: "bg-orange-100",
  },
  {
    imageName: "calendar-day.png",
    title: "Meal Planner",
    description:
      "Plan your meals ahead, organize your week, and simplify your keto journey with our planner.",
    iconBg: "bg-green-100",
  },
  {
    imageName: "graduation-cap.png",
    title: "Keto Academy",
    description:
      "Learn everything about keto, access expert tips, and master your diet with our educational resources.",
    iconBg: "bg-emerald-100",
  },
  {
    imageName: "messages.png",
    title: "Community",
    description:
      "Connect with fellow keto enthusiasts, share experiences, ask questions, and support each other daily.",
    iconBg: "bg-indigo-100",
  },
  {
    imageName: "gym.png",
    title: "Exercise Portal",
    description:
      "Access workout routines, track your progress, and stay motivated with our exercise portal features.",
    iconBg: "bg-emerald-100",
  },
  {
    imageName: "chart-line-up.png",
    title: "Advanced Insights",
    description:
      "Gain valuable insights, analyze your progress, and make informed decisions for your keto lifestyle.",
    iconBg: "bg-indigo-100",
  },
];

export default function Home() {
  return (
    <div>
      <div className="bg-indigo-400 pt-16 pb-25 px-5 rounded-bl-[100px]">
        <div className="pt-15">
          <p className="mt-5 text-xs font-bold text-stone-200">
            This is just a mockup home page
          </p>
          <h1
            className={`text-stone-50 font-extrabold text-4xl leading-tight ${montserrat.className}`}
          >
            The #1 Recipe App Since Today
          </h1>
          <p className="mt-5 text-stone-200 font-bold text-2xl">
            Search. Add to Favourites
          </p>
          <p className="mt-2 text-stone-200 text-lg">
            Explore our industry-leading suite of features that make Keto life
            easy
          </p>
        </div>
      </div>

      <div className="mt-20 px-4">
        <h1
          className={`font-extrabold text-3xl text-center leading-snug ${montserrat.className}`}
        >
          The Most Advance Set of Tools to Make Your Keto LifeStyle Easy
        </h1>

        <div className="grid gap-5 mt-10">
          {featuresInfo.map((feature) => (
            <FeatureCard
              key={feature.title}
              imageName={feature.imageName}
              title={feature.title}
              description={feature.description}
              iconBg={feature.iconBg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
