"use client";

import { useState } from "react";
import branches from "../data/branchData";

export default function BranchLocator() {
  const [selectedBranch, setSelectedBranch] = useState(0);

  return (
    <section id="location" className="py-12 bg-secondary text-white">
      <div className="container mx-auto grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-8">Find <span className='font-normal'>Our Branches</span></h2>
          <ul>
            {branches.map((branch, index) => (
              <li key={index} className="mb-4">
                <button onClick={() => setSelectedBranch(index)} className={`block w-full text-left p-3 bg-gray-700 hover:bg-gray-500 transition ${selectedBranch === index ? "bg-yellow-500" : ""}`}>
                  <h3 className="text-sm font-bold">{branch.name}</h3>
                  <p>{branch.address}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <iframe
            src={branches[selectedBranch].mapUrl}
            className="mt-72"
            width="650"
            height="650"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={branches[selectedBranch].name}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
