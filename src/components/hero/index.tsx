import imageCircle from '../../assets/userCircle.png'

export const Hero =()=>{
    return (
        <div className=" w-full pt-40 flex flex-col min-h-90 bg-luk-500 text-lukGray">
            <div className=" self-center w-full lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 ">
                <div className="flex flex-col col-span-1 px-10 lg:p-0 lg:pr-10">
                    <div className="flex">
                    <div className="px-2 py-1 bg-primary ">
                        Fullstack-Developer
                    </div>
                    </div>

                    <div className="text-6xl my-5 font-bold  tracking-[.45em]">
                        <p>FILIPE</p>
                        <p>LUKEBANA</p>
                    </div>
                    <p className=" tracking-[.55em] font-light my-5">Changing the wolrd with my code</p>
                    <div className="w-full flex items-center mb-10 justify-between">
                        <div className=" hover:w-2/6 transition-all delay-10  w-15 h-15 rounded-lg border border-primary shadow-2xl shadow-black "></div>
                        <div className=" hover:w-2/6 transition-all delay-10  w-15 h-15 rounded-lg border border-primary shadow-2xl shadow-black "></div>
                        <div className=" hover:w-2/6 transition-all delay-10  w-15 h-15 rounded-lg border border-primary shadow-2xl shadow-black "></div>
                        <div className=" hover:w-2/6 transition-all delay-10  w-15 h-15 rounded-lg border border-primary shadow-2xl shadow-black "></div>
                        <div className=" hover:w-2/6 transition-all delay-10  w-15 h-15 rounded-lg border border-primary shadow-2xl shadow-black "></div>
                    </div>
                    <p className="  font-light my-5">Wants to say something? Here is your terminal!</p>

                    <div className="w-full p-2 bg-luk-600 mb-10 rounded-lg flex flex-col">
                        <div className="flex ">
                            <div className="shadow-lg px-3 py-1 rounded-lg bg-luk-500">
                                {'>'}
                            </div>
                        </div>
                        <div className="flex items-center">
                             <div className="w-1 h-6 bg-primary animate-pulse animate-duration-600 "></div>
                                <input type="text" className="bg-transparent outline-none w-full border-none" placeholder="You can type your message here..."></input>
                        </div>
                    </div>
                    <div className="flex justify-between mb-10">
                        <div className="flex items-center">
                            <p className="text-6xl mr-4 ">80</p>
                            <p className="leading-[1.2] tracking-[.1em] font-light text-gray-400">
                            Tha’s the number <br/>
                            of year of experience<br/>
                            I have as a dev
                            </p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-6xl mr-4 ">60</p>
                            <p className="leading-[1.2] tracking-[.1em] font-light text-gray-400">
                            Tha’s the number <br/>
                            of year of experience<br/>
                            I have as a dev
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col px-10 lg:p-0 lg:pl-10 font-light">
                    <p className="text-2xl">Hello! I’m Filipe Lukebana - (LUK3D)</p>
                    <p className="my-5">
                    I was born on 29/1997<br/>My carrer as develloper started when I hade only 16 yearold. I was lerning html3 and css.
                    </p>
                    <p className="text-sm text-gray-400">
                    I was born on 29/1997My carrer as develloper started when I hade only 16 yearold. I was lerning html3 and css.
                    </p>

                    <div className="image-circle absolute   w-[900px]" style={{right:"-400px",top:"50px"}}>
                        <img src={imageCircle} className="object-contain w-full"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}