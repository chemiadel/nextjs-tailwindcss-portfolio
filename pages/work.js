const works=[
  {
    img: "https://pro2-bar-s3-cdn-cf3.myportfolio.com/9cbee533-529b-4d06-9782-170c982050e5/ee634afd-00a7-49a2-b0e5-fa67d0bf3e57_rw_600.png?h=32270538fb70716402c9248b7752e407",
    title: "Fiverr",
    link: "https://fiverr.com/adelchemi",
    description: "Years working on Fiverr with more then 170 order completed in programming tasks, Most work was Apps Script, API integrations, Javascript tasks and Wix websites"
  },{
    img:"/wo.png",
    title: "Workoutorb",
    link: "https://nextjs-wo.vercel.app/",
    description: "Years working on Fiverr with more then 170 order completed in programming tasks, Most work was Apps Script, API integrations, Javascript tasks and Wix websites"
  },{
    img: "/gameyarn.png",
    title: "Gameyarn",
    link: "https://gameyarn.vercel.app/",
    description: "Years working on Fiverr with more then 170 order completed in programming tasks, Most work was Apps Script, API integrations, Javascript tasks and Wix websites"
  },{
    img:"/sm.png",
    title: "Sheetmania blog",
    link: "https://nextjs-wo.vercel.app/",
    description: "Years working on Fiverr with more then 170 order completed in programming tasks, Most work was Apps Script, API integrations, Javascript tasks and Wix websites"
  }
  
]
export default function Work() {
  return (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work,i)=> true? [<Img data={work}/>, <Info data={work}/>]:[<Img data={work}/>, <Info data={work}/>].reverse())}
        </div>
  )
}

function Img({data}){
  const { img }=data
  return(
    <img class="object-contain h-64 w-full rounded-lg shadow-lg " src={img} alt="Woman's Face" />
  )
}

function Info({data}){
  const { title, link, description }=data
  return(
    <div class="p-5 space-y-7">
      <div class=" text-3xl font-bold"><a href={link} target="_blank">&#128279; {title}</a></div>
      {/* <div><a class="transition duration-500 ease-in-out font-medium" href={link} target="_blank">&#128279; {link}</a></div> */}
      <div class="font-mono font-medium">{description}</div>
    </div>
  )
}