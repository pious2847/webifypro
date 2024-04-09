import { Button } from "@/components/ui/button";


function HeroSection() {
  return (
    <>
    <div className="flex mainhero justify-center align-middle w-full">
      <div className="h-screen heroscreen max-w-screen-md justify-start p-10  flex-col align-middle ">
        <div className=" boldmessage">
          <h2 className="text-7xl flex-1 font-extrabold">
            Build with the power of code — without writing any
          </h2>
        </div>
        <br />
        <br />
        <div>
          <p className="text-xl">
            Take control of HTML, CSS, and JavaScript in a visual canvas.
            Webflow generates clean, semantic code that’s ready to publish or
            hand to developers.
          </p>
        </div>
        <br />
        <Button className='p-5 h-14 w-70 neon '>
            {/* <Link href="/login"></Link> */}
            Start Developing
          </Button>
      </div>
      <img src="herosection.png"  className="heroimg" />
      </div>
    </>
  );
}

export default HeroSection;
