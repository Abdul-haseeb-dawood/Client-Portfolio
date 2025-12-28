import { PeopleSayStyling } from "@/components/ui/peopleSay";
import { Layers,Palette,Clock} from "lucide-react";

const cardData = [
  {
    id: "1",
    say: "“Working with Syed Yarooq has been a game-changer for my startup. He helped us launch our MVP in record time, with clean code and scalable architecture.”",
    name: "Mobeen Ahmed",
    description: "VP Engineering, Dastgyr Technologies",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "2",
    say: "“Syed is one of the best engineers I've worked with. His attention to detail, speed, and product sense are top-notch. Highly recommended for any frontend or backend work.”",
    name: "Rai Muhammad Rafay",
    description: "Product Manager, KodersClub",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    id: "3",
    say: "“We hired Syed for a critical backend overhaul. He not only delivered ahead of schedule but improved our performance by 40%. Will definitely work with him again.”",
    name: "Muneed Abdul Shakoor",
    description: "Founder, Inaequo Solutions",
    icon: <Clock className="h-5 w-5" />,
  },
]
export default function PeopleSay() {
  return <PeopleSayStyling className="my-20" cards={cardData} />;
}
