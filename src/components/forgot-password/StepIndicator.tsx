"use client";

import MailIcon from "@/components/icons/MailIcon";
import { Check, KeyRound, Lock } from "lucide-react";

const steps = [
  { icon: <MailIcon className="size-4 m-auto" /> },
  { icon: <KeyRound className="size-4 m-auto" /> },
  { icon: <Lock className="size-4 m-auto" /> },
];

export default function StepIndicator({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {steps.map((step, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`
              size-10 rounded-full flex 
              ${
                isActive
                  ? "bg-primary-main text-white ring-4 ring-green-100"
                  : isCompleted
                    ? "bg-primary-main text-white"
                    : "bg-gray-100 text-gray-400 border border-gray-200"
              }`}
            >
              {isCompleted ? (
                <Check className="size-4 m-auto" strokeWidth={3} />
              ) : (
                step.icon
              )}
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-16 h-0.5 ${isCompleted ? "bg-primary-main" : "bg-gray-200"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
