import dynamic from 'next/dynamic'

const ReactJson = dynamic(() => import('react-json-view'), {ssr : false})

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
      <div class="mx-auto space-y-6">
        <img class="block lg:hidden 
          mx-auto rounded-full
         sm:mt-4 sm:mb-4 md:mt-6 md:mb-6 lg:mt-10 lg:mb-10 
         shadow-lg
         w-48" src="/me.jpg" alt="Adel Chemi" />
        <div class="font-mono mx-auto sm:text-lg md:text-xl lg:text-3xl font-extrabold	">
          Hello, &#10; I'm Adel Chemi
        </div>
        <p class="font-mono mx-auto font-medium	m-5 sm:mt-4 sm:mb-4 md:mt-6 md:mb-6 lg:mt-10 lg:mb-10">
          I'm Learner, Web developer and work as Freelancer
        </p>
        <ReactJson 
              name="Skills" 
              src={skills}
              displayDataTypes={false} />
      </div>
      <div class="w-full">
      <img class="hidden lg:block w-full mx-auto rounded-lg shadow-lg " src="/me.jpg" alt="Adel Chemi" />
      </div>
      </div>
  )
}