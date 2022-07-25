import { useState } from "react";
import { Button } from "../button";
import { MenuBtn } from "./types";

export const Header = ()=>{
  const [menus, setMenus]  = useState<Array<MenuBtn>>([
    {
        title:"Home",
        link:"#",
        active:true
    },
    {
        title:"Projects",
        link:"#",
        active:false
    },
    {
        title:"Tools",
        link:"#",
        active:false
    },
    {
        title:"Blog",
        link:"#",
        active:false
    },
    {
        title:"Contacts",
        link:"#",
        active:false
    },
  ]);


  function activeThis(index:number){
    setMenus(menus.map((menu,i)=>{
        let currentmenu = menu;
        if(i==index){
            currentmenu.active = true;
        }else{
            currentmenu.active = false;
        }
        return currentmenu;
    }));

  }
    return (
        <div className="px-10 fixed top-0 left-0 w-full h-14 flex items-center justify-between">
           <div >
            <Button child={
                <p className="font-bold">LUK3D</p>
            }  onClick={()=>{}}></Button>
           </div>
           <div className="flex items-center">
            {
                menus.map((menu,idnex)=><button   onClick={()=>activeThis(idnex)} className={` transition-transform transform hover:scale-120  mx-2 px-2 py-1 ${menu.active?'text-primary':'text-lukGray'}`}>
                    {menu.active?(
                        <div className="flex items-center" >
                            <div className="w-1 h-4 bg-primary animate-pulse animate-duration-600 "></div>
                        <div>
                            {'<'+ menu.title +'>'}
                        </div>
                        </div>
                    ):(
                         menu.title
                    )}
                </button>)
            }
    
           </div>
           <div>
            <button className="flex items-center text-white">
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5H15M9 3V5M10.048 14.5C8.5081 12.9059 7.27548 11.0413 6.412 9M12.5 18H19.5M11 21L16 11L21 21M12.751 5C11.783 10.77 8.07 15.61 3 18.129" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className="mx-2">English</p>
            </button>
           </div>
        </div>
    )
}