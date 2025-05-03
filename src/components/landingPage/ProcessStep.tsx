import { ReactNode } from "react"

type ProcessProp = {
    number: string
    title:string
    description:string
    isReversed?:boolean
    children?:ReactNode
}

export const ProcessStep = ({ number, title, description, isReversed = false, children }:ProcessProp) => {
    return (
      <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16 md:mb-24`}>
        {/* Step number and content */}
        <div className="w-full md:w-1/2 flex">
          <div className="flex-shrink-0 mr-6">
            <div className="text-6xl md:text-8xl font-bold text-gray-100 opacity-80">
              {number}
            </div>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
        
        {/* Step illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="max-w-xs md:max-w-sm w-full">
            {children}
          </div>
        </div>
      </div>
    );
  };