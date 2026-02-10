import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface Step {
  label: string
  description: string
}

const STEPS: Step[] = [
  { label: 'Search', description: 'Find a title' },
  { label: 'Verify', description: 'Confirm match' },
  { label: 'Confirm', description: 'Lock in title' },
  { label: 'Locations', description: 'Discover places' },
  { label: 'Select', description: 'Pick locations' },
  { label: 'Dates', description: 'Set travel dates' },
  { label: 'Preferences', description: 'Trip details' },
  { label: 'Generate', description: 'Build itinerary' },
  { label: 'Itinerary', description: 'Your trip!' },
]

interface ProgressStepperProps {
  currentStep: number
}

export function ProgressStepper({ currentStep }: ProgressStepperProps) {
  return (
    <div className="w-full mb-8">
      {/* Mobile: compact indicator */}
      <div className="sm:hidden flex items-center justify-between mb-4 px-2">
        <span className="text-netflix-text-muted text-sm">Step {currentStep} of 9</span>
        <span className="text-netflix-red font-semibold text-sm">{STEPS[currentStep - 1]?.label}</span>
      </div>
      <div className="sm:hidden w-full bg-netflix-gray rounded-full h-1.5 mb-2">
        <div
          className="bg-netflix-red h-1.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / 9) * 100}%` }}
        />
      </div>

      {/* Desktop: full stepper */}
      <div className="hidden sm:flex items-center justify-between relative">
        {/* Background line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-netflix-gray" />
        <div
          className="absolute top-5 left-0 h-0.5 bg-netflix-red transition-all duration-500 ease-out"
          style={{ width: `${((currentStep - 1) / 8) * 100}%` }}
        />

        {STEPS.map((step, idx) => {
          const stepNum = idx + 1
          const isCompleted = stepNum < currentStep
          const isCurrent = stepNum === currentStep
          const isFuture = stepNum > currentStep

          return (
            <div key={step.label} className="flex flex-col items-center relative z-10">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2',
                  isCompleted && 'bg-netflix-red border-netflix-red text-white',
                  isCurrent && 'bg-netflix-black border-netflix-red text-netflix-red shadow-[0_0_12px_rgba(229,9,20,0.5)]',
                  isFuture && 'bg-netflix-gray border-netflix-light-gray text-netflix-text-muted'
                )}
              >
                {isCompleted ? <Check size={18} /> : stepNum}
              </div>
              <span
                className={cn(
                  'mt-2 text-xs font-medium text-center max-w-[64px]',
                  isCurrent ? 'text-netflix-red' : isCompleted ? 'text-netflix-text' : 'text-netflix-text-muted'
                )}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
