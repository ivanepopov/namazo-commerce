import { MouseEventHandler } from "react"

type Props = {
  icon? : string
  onClick? : MouseEventHandler
  width? : number
  height? : number
  hover : boolean
}

export default function IconButton(props: Props) {
  
  var svg =
  <svg className="text-indigo-600 dark:text-orange-400" height="24" width="24">
    <line x1="3" y1="6"  x2="21" y2="6"  stroke="currentColor" strokeWidth={2}/>
    <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth={2}/>
    <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth={2}/>
  </svg>

  var width  = props.width  ? props.width  : 24
  var height = props.height ? props.height : 24

  const buttonClass = 
  `
    border border-solid rounded-full border-transparent transition-colors
    flex items-center justify-center
    ${props.hover ? 'hover:bg-indigo-600/15 dark:hover:bg-orange-400/15' : ''}
    text-sm sm:text-base
    h-8 sm:h-12 px-2 sm:px-3
  `

  switch (props.icon) {
    case "menu": break;
    case "moon":
      svg =
      <svg className="text-indigo-600 dark:text-orange-400" width={width} height={height} viewBox="0 0 512 512">
        <path fill="currentColor" fillRule="evenodd" d="M264,480A232,232,0,0,1,32,248C32,154,86,69.72,169.61,33.33a16,16,0,0,1,21.06,21.06C181.07,76.43,176,104.66,176,136c0,110.28,89.72,200,200,200,31.34,0,59.57-5.07,81.61-14.67a16,16,0,0,1,21.06,21.06C442.28,426,358,480,264,480Z"/>      break;
      </svg> 
      break;
    case "sun":
      svg =
      <svg className="text-indigo-600 dark:text-orange-400" width={width} height={height} viewBox="0 0 512 512">
          <path fill="currentColor" fillRule="evenodd" d="M256,144c-61.75,0-112,50.25-112,112c0,61.749,50.25,112,112,112s112-50.251,112-112    C368,194.25,317.75,144,256,144z M256,112c8.833,0,16-7.146,16-16V64c0-8.833-7.167-16-16-16c-8.854,0-16,7.167-16,16v32    C240,104.854,247.146,112,256,112z M256,400c-8.854,0-16,7.167-16,16v32c0,8.854,7.146,16,16,16c8.833,0,16-7.146,16-16v-32    C272,407.167,264.833,400,256,400z M380.417,154.167l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625    c-6.251-6.25-16.375-6.25-22.625,0l-22.625,22.625c-6.251,6.25-6.251,16.375,0,22.625    C364.042,160.416,374.166,160.416,380.417,154.167z M131.541,357.854l-22.623,22.625c-6.252,6.25-6.252,16.377,0,22.625    c6.249,6.25,16.373,6.25,22.623,0l22.625-22.625c6.251-6.291,6.251-16.375,0-22.625    C147.917,351.604,137.792,351.562,131.541,357.854z M112,256c0-8.833-7.167-16-16-16H64c-8.854,0-16,7.167-16,16    c0,8.854,7.146,16,16,16h32C104.833,272,112,264.854,112,256z M448,240h-32c-8.854,0-16,7.167-16,16c0,8.854,7.146,16,16,16h32    c8.833,0,16-7.146,16-16C464,247.167,456.833,240,448,240z M131.521,154.167c6.249,6.25,16.375,6.25,22.625,0    c6.249-6.25,6.249-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.376-6.25-22.625,0c-6.25,6.25-6.25,16.375,0,22.625    L131.521,154.167z M380.459,357.812c-6.293-6.25-16.376-6.25-22.625,0c-6.25,6.248-6.293,16.375,0,22.625l22.625,22.625    c6.249,6.248,16.374,6.248,22.625,0c6.249-6.25,6.249-16.377,0-22.625L380.459,357.812z" />
      </svg>
      break;
    case "search":
      svg =
      <svg className="text-indigo-600 dark:text-orange-400" width={width} height={height} viewBox="0 0 32 32"> 
        <path fill="currentColor" fillRule="evenodd" d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" />
      </svg>    
      default: break;
  }

  return (
    <div
        className={buttonClass} 
        onClick={props.onClick}
      >
      {svg}
      </div>
  )
}