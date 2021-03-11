import {AiFillGithub} from 'react-icons/ai'
import Head from 'next/head'

const works=[
  {
    img: "https://pro2-bar-s3-cdn-cf3.myportfolio.com/9cbee533-529b-4d06-9782-170c982050e5/ee634afd-00a7-49a2-b0e5-fa67d0bf3e57_rw_600.png?h=32270538fb70716402c9248b7752e407",
    title: "Fiverr",
    link: "https://fiverr.com/adelchemi",
    description: "4 Years working on Fiverr with more then 170 order completed in programming tasks, Most work was Apps Script, API integrations, Javascript tasks and Wix websites",
    badges: [
      <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>,
    ]    
  },{
    img: "/gy.png",
    title: "Gameyarn",
    link: "https://gameyarn.vercel.app/",
    description: "Website for gaming bloggers, Same as Medium but gaming only",
    badges: [
      <img alt="Next JS" src="https://img.shields.io/badge/next%20js%20-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"/>,
      <img alt="GraphQL" src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql"/>,
      <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
    ]
  },{
    img:"/wo.png",
    title: "Workoutorb",
    link: "https://nextjs-wo.vercel.app/",
    description: "Web app for creating workout routine cards",
    badges: [
      <img alt="Next JS" src="https://img.shields.io/badge/next%20js%20-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"/>,
      <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>,
      <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>,
      <img alt="Material UI" src="https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white"/>
    ]
  },{
    img:"/sm.png",
    title: "Sheetmania blog",
    link: "https://adelchemi.blogspot.com/",
    description: "Blog for Google sheets and Apps script tutorials and tricks",
    badges: [
      <img alt="Blogger" src="https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white" />
    ]
  },{
    img:"/p.png",
    src:"https://github.com/chemiadel/nextjs-tailwindcss-portfolio",
    title: "Portfolio",
    link: "https://adeldev.vercel.app",
    description: "My sample portfolio",
    badges: [
      <img alt="Next JS" src="https://img.shields.io/badge/next%20js%20-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"/>,
      <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss%20-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white"/>
    ]
  }
  
]
export default function Work() {
  return (
    <>
          <Head>
        <title>Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div class="grid grid-cols-1 md:grid-cols-2 sm:gap-2 md:gap-5 lg:gap-8">
          {works.map((work,i)=> [<Img key={i.toString()} data={work}/>, <Info key={`0${i.toString()}`} data={work}/>])}
        </div>
        </>
  )
}

function Img({data}){
  const { img }=data
  return(
    <div class="w-auto  ">
    <img class="object-contain max-h-80 m-auto rounded-lg shadow-lg " src={img} />
    </div>
  )
}

function Info({data}){
  const { src, title, link, description, badges }=data
  return(
    <div class="space-y-7 border-b-2 md:border-b-0 m-4 pb-4">
      <div class="md:text-lg lg:text-xl text-medium font-bold"><a  href={link} target="_blank"><span class="mb-2 text-lg">&#128279; </span> <span>{title}</span></a></div>
      {src?<div class="text-md font-medium"><a class="flex flex-row space-x-2" href={link} target="_blank"><span  class="m-0 "><AiFillGithub class="mt-1"/></span> <p >source</p></a></div>:null}
      <div class="flex flex-wrap">{badges}</div>
      {/* <div><a class="transition duration-500 ease-in-out font-medium" href={link} target="_blank">&#128279; {link}</a></div> */}
      <div class="font-mono font-medium ">{description}</div>
    </div>
  )
}