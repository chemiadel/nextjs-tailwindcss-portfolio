import { FaDiscord, FaGithub, FaLinkedin} from 'react-icons/fa';
import Head from 'next/head'

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
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div class="grid grid-cols-1 lg:grid-cols-1 space-y-5 gap-4">
        <div class="space-y-5 m-auto align-middle">
            <div class="font-mono text-3xl font-extrabold	">
              Get in touch
            </div>
            <p class="font-mono  font-medium">
              Email: <a href="mailto:adelchemi6@gmail.com">adelchemi6@gmail.com</a>
            </p>
            <p class="font-mono  font-medium">
              Phone: <a href="tel:+213561479284">+213 561 47 92 84 </a>
            </p>
        </div>
        <div class="space-x-5 m-auto">
        <button class="rounded-lg p-4 border-2 border-gray-900 "><FaGithub /></button>
        <button class="rounded-lg p-4 border-2 border-blue-400 "><FaLinkedin class="text-blue-400" /></button>
        <button class="rounded-lg p-4 border-2 border-blue-300 "><FaDiscord class="text-blue-300 "/></button>
        </div>
      </div>
      </>
  )
}