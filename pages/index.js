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
      <div class="mx-auto">
        <img class="block lg:hidden mx-auto rounded-full sm:mt-4 sm:mb-4 md:mt-6 md:mb-6 lg:mt-10 lg:mb-10 shadow-lg " src="https://scontent-pmo1-1.xx.fbcdn.net/v/t1.0-1/p240x240/91077631_627454224771041_7670873614278721536_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=3cPzFmEN8wcAX_9PgME&_nc_ht=scontent-pmo1-1.xx&tp=6&oh=4e0cb1c9285382e5767c9898736ad647&oe=606EBF7F" alt="Woman's Face" />
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
      <img class="hidden lg:block w-full mx-auto rounded-lg shadow-lg " src="https://scontent-pmo1-1.xx.fbcdn.net/v/t1.0-1/p240x240/91077631_627454224771041_7670873614278721536_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=3cPzFmEN8wcAX_9PgME&_nc_ht=scontent-pmo1-1.xx&tp=6&oh=4e0cb1c9285382e5767c9898736ad647&oe=606EBF7F" alt="Woman's Face" />
      </div>
      </div>
  )
}