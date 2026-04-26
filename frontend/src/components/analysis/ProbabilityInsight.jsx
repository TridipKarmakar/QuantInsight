import { ArrowUpRight, ArrowDownRight, House, ChevronRight, Clock4  } from "lucide-react";

export default function ProbabilityInsight({ data}) {

    return(

        <div className="flex items-center justify-between border-b pb-10 pt-5">
    

            <div>
                <div className="mb-5 text-sm  flex items-center  gap-2">

                    <House size={16} className="text-blue-500"/>
                
                    <span className=" ml-2 uppercase tracking-wide font-medium text-stone-500" >Overview</span>
                    <ChevronRight size={13} className="text-gray-400 ml-2"/>
                </div>

                
            </div>
        </div>
        
    )
}