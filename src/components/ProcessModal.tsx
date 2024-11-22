import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const processSteps = [
  {
    title: "Design Phase",
    description: "Creating the PCB layout using advanced CAD software",
    icon: "🎨",
    details: [
      "Schematic capture",
      "Component placement",
      "Route optimization",
      "DRC checks"
    ]
  },
  {
    title: "Material Preparation",
    description: "Selecting and preparing high-quality materials",
    icon: "🛠",
    details: [
      "Copper clad laminate selection",
      "Panel sizing",
      "Surface cleaning",
      "Photoresist application"
    ]
  },
  {
    title: "Manufacturing",
    description: "Precise manufacturing process with quality control",
    icon: "⚙️",
    details: [
      "UV exposure",
      "Chemical etching",
      "Drilling",
      "Plating process"
    ]
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and inspection procedures",
    icon: "✓",
    details: [
      "Electrical testing",
      "Visual inspection",
      "Dimensional verification",
      "Final QC"
    ]
  }
];

export function ProcessModal({ isOpen, onClose }: ProcessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        <div className="relative inline-block w-full max-w-4xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
            Our PCB Manufacturing Process
          </h2>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="process-step opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl">{step.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}