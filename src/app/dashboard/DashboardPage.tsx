"use client"

import {
   ResizableHandle,
   ResizablePanel,
   ResizablePanelGroup,
} from "@/components/ui/resizable"
import Sidebar from "../components/layouts/dashboard/Sidebar"
import Schema from "../components/layouts/dashboard/Schema"
import MobileSidebar from "../components/layouts/dashboard/MobileSidebar"

const DashboardPage = () => {
   return (
      <>
         <div className="lg:block hidden">
            <ResizablePanelGroup direction="horizontal">
               <ResizablePanel
                  defaultSize={25}
                  className="shadow-lg shadow-black"
               >
                  <Sidebar />
               </ResizablePanel>
               <ResizableHandle />
               <ResizablePanel defaultSize={150}>
                  <Schema />
               </ResizablePanel>
            </ResizablePanelGroup>
         </div>

         <div className="lg:hidden flex flex-col gap-5">
            <MobileSidebar />
            <Schema />
         </div>
      </>
   )
}

export default DashboardPage
