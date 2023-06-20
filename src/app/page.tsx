import ImageSlider from "./components/Slider";


export default function Home() {
  
  return (
   
    <div className='h-96 bg-slate-400 items-center'>
      <div className="text-xl font-semibold text-white text-center mt-10">Products slide show</div>
      <ImageSlider/>
    </div>
  )
}
