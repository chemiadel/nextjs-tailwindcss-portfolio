import { FaDiscord, FaGithub, FaLinkedin} from 'react-icons/fa';

const skills={
  Backend:["NodeJS", "Google Apps Script", "VBA"],
  Frontend: ["Javascript", "ReactJS", "Nextjs", "JQuery"],
  Style: ["CSS", "Material UI", "StyledComponent", "Tailwaindcss"],
  Databases: ["Mongodb", "Mysql"],
  "Web builders": ["Wix code", "Wordpress"],
  "Data analytics": ["Excel VBA", "Google Sheets", "Google Apps scripts"]
}

export default function Home() {
  return (
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="space-y-5 m-auto">
            <div class="font-mono text-3xl font-extrabold	">
              DMs are open !
            </div>
            <p class="font-mono  font-medium">
              Email: <a href="mailto:pace3man@gmail.com">pace3man@gmail.com</a>
            </p>
            <p class="font-mono  font-medium">
              Phone: <a href="tel:pace3man@gmail.com">+213 561 47 92 84 </a>
            </p>
        </div>
        <div class="space-x-5 m-auto">
        <button class="rounded-lg p-4 border-2 border-gray-900 hover:textColor-gray-500 "><FaGithub /></button>
        <button class="rounded-lg p-4 border-2 border-blue-400 hover:textColor-gray-500 "><FaLinkedin class="text-blue-400 hover:text-gray-500"/></button>
        <button class="rounded-lg p-4 border-2 border-blue-300 hover:textColor-gray-500 "><FaDiscord class="text-blue-300 hover:text-gray-500"/></button>
        </div>
      </div>
  )
}