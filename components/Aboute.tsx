
export const metadata = {
  title: 'Senior Fullstack Developer | VIP Portfolio',
  description: 'Passionate Senior Fullstack JavaScript Developer with 6+ years of experience.',
}

export default function Aboute() {
  return (
    <section id="about">      
    <div  className="py-8 bg-linear-to-b to-black via-gray-950/80 from-black text-white px-4 w-full " >
      <div className="max-w-5xl mx-auto ">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-linear-to-t to-[#B3E5F5] via-[#D4F1FC]/60 from-[#B3E5F5] bg-clip-text text-transparent ">
            🌟Senior Fullstack Developer
          </h1>
          <p className="text-xl text-white mb-2">6+ Years of Experience</p>
          <div className="w-16 h-1 bg-linear-to-b to-white via-gray-950/90 from-white text-white mx-auto"></div>
        </div>

        {/* About Section */}
        <div className="mb-12 bg-linear-to-b to-black via-gray-200/10 from-black text-white border-[2.5px] border-[#D4F1FC] hover:border-white backdrop-blur hover:duration-300 hover:shadow-sm hover:shadow-white rounded-lg p-6 duration-1000 hover:scale-110">
          <h2 className="text-3xl font-bold text-shadow-black text-shadow-2xs text-[#D4F1FC] mb-4">About Me</h2>
          <p className="text-md text-white leading-relaxed">
            I am a passionate Senior Fullstack JavaScript Developer specializing in building robust and scalable web applications using Node.js, React, Angular, and AWS. With a strong focus on backend development and microservices architecture, I excel in creating solutions that enhance system performance, increase user engagement, and streamline deployment processes.
          </p>
        </div>
    <div className="flex flex-col lg:flex-row flex-1 gap-16">
        {/* Skills Grid */}
        <div className=" flex flex-col max-w-124">
          <h2 className="text-3xl font-bold text-[#D4F1FC] text-shadow-black text-shadow-2xs mb-6">Key Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Fullstack Development', skills: 'JavaScript, React, TypeScript, Node.js,  Angular, Micro' },
              { title: 'Cloud & DevOps', skills: 'AWS, Docker, CI/CD Pipelines, Scalability' },
              { title: 'Backend Mastery', skills: 'REST APIs, GraphQL, PostgreSQL, MongoDB, Redis' },
              { title: 'Team Leadership', skills: 'Agile, Cross-functional Teams, Project Delivery' },
            ].map((skill, i) => (
              <div key={i}  className="border-[2.5px] border-[#D4F1FC] rounded-lg p-6 transition-all duration-500 ease-out hover:-translate-y-2 h over:scale-[1.03] hover:border-white shadow-[0_0_0px_rgba(255,255,255,0.0)] hover:shadow-[0_0_10px_rgba(212,241,252,0.8)] hover:bg-white/5 hover:transform-[perspective(1200px)_rotateX(2deg)_rotateY(-2deg)]">
                <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-white/70 text-sm">{skill.skills}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-shadow-black text-shadow-2xs text-[#D4F1FC] mb-6">Key Achievements</h2>
        <div
  className="
    flex flex-col flex-1 relative overflow-hidden group
    border-[2.5px] border-[#9FD9F7]
    rounded-lg p-8 backdrop-blur

    transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    hover:scale-[1.035] hover:-translate-y-2
  "
>

  {/* Darker Neon Aura */}
  <span className="
    absolute -inset-0.5 rounded-lg
    bg-[radial-gradient(circle_at_top_left,rgba(107, 148, 150,0.45),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(116, 154, 161,0.45),transparent_40%)]
    opacity-0 group-hover:opacity-100
    transition-all duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)]
  "></span>

  {/* Smooth Cyber Highlight */}
  <span className="
    absolute inset-0 rounded-lg
    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.10),transparent)]
    translate-y-[90%]
    group-hover:translate-y-[-90%]
    transition-all duration-1400 ease-out
  "></span>

  {/* Deep Inner Glow */}
  <span className="
    absolute inset-0 rounded-lg
    shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]
    group-hover:shadow-[inset_0_0_55px_rgba(200,230,255,0.10)]
    transition-all duration-1200
  "></span>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-white">50%</div>
              <div>
                <p className="font-semibold text-white">System Performance</p>
                <p className="text-white/70">Improved system performance by up to 50%</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-white">↓</div>
              <div>
                <p className="font-semibold text-white">Operational Costs</p>
                <p className="text-white/70">Reduced operational costs through effective technology solutions</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-white">✓</div>
              <div>
                <p className="font-semibold text-white">Complex Projects</p>
                <p className="text-white/70">Successfully delivered complex projects on time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>

  </section>
  )
}
