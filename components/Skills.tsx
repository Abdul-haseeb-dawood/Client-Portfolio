"use client"
import { useState} from "react"
import { Badge } from "@/components/ui/badge"
import portfolioConfig from "@/config/portfolio.json"
import skillsDatabase from "@/config/skills-database.json"

interface SkillTag {
  id: string
  name: string
  image: string
  color: string
}

interface PortfolioConfig {
  skills: string[] 
}

const config = portfolioConfig as PortfolioConfig

export default function Skills() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const getSkillData = (skillId: string): SkillTag | null => {
    const skillData = skillsDatabase[skillId as keyof typeof skillsDatabase]
    if (!skillData) return null

    let backgroundColor = skillData.color

    if (skillData.color === "default") {
      backgroundColor = isDarkMode ? "#011d1f" : "#ffffff"
    } 


    return {
      id: skillId,
      name: skillData.name,
      image: skillData.images,
      color: backgroundColor,
    }
  }

  return (
    <section id="skills"> 
      <div className="bg-linear-to-b pt-8 to-black via-gray-950/80 from-black relative">
        <div className="flex">
          <h1 className="text-3xl mx-auto md:text-4xl font-bold bg-linear-to-t to-[#B3E5F5] via-[#D4F1FC]/60 from-[#B3E5F5] bg-clip-text text-transparent">
            🛠Technical Skills
            <p className="text-lg text-white font-normal flex justify-center my-1 tracking-widest">37 Plus+ Skills</p>
            <div className="w-20 h-1 rounded-2xl bg-linear-to-b to-white via-gray-950/90 from-white mx-auto"></div>
          </h1>
        </div>
        <div className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="text-center">
              {/* Skill Badges */}
              <div className="flex flex-wrap justify-center gap-4 ">
                {config.skills.map((skillId) => {
                  const skill = getSkillData(skillId)
                  if (!skill) return null

                  return (
                    <Badge
                      key={skill.id}
                      className="px-3 py-1 text-sm font-medium transition-all duration-700 hover:scale-125 backdrop-blur-sm dark:shadow-white-glow light:shadow-black-deep border-2 border-[#b7fbff] text-white"
                      style={{
                        backgroundColor: skill.color,
                      }}
                    >
                      <img src={skill.image} alt={skill.name} className="w-8 h-7 pr-1" />
                    
                      {skill.name}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
