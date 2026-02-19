import React from 'react';

const CodeWatermark: React.FC = () => {
  // A visual representation of "code" to be used as a watermark
  const codeSnippets = [
    "import { Future } from '@solutions';",
    "const optimize = (data) => data.filter(Boolean);",
    "class Innovation extends Core { constructor() {} }",
    "while (true) { createValue(); }",
    "git commit -m 'Initial success'",
    "export default function NextBigThing()",
    "<Component prop={value} />",
    "await database.connect();",
    "const style = { display: 'flex' };",
    "console.log('Hello World');",
    "if (bug) fix(bug);",
    "return new Promise((resolve) => resolve());"
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.05] text-slate-500 font-mono text-sm leading-loose">
        {/* Generative pattern of code snippets */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="whitespace-nowrap transform"
            style={{
              marginLeft: `${Math.random() * 20}%`,
              marginTop: `${Math.random() * 5}rem`,
              opacity: Math.random() * 0.5 + 0.5
            }}
          >
            {codeSnippets[i % codeSnippets.length]}
          </div>
        ))}
        {/* Large purely decorative symbol */}
        <div className="absolute -right-20 top-1/4 text-[20rem] font-bold opacity-[0.03] text-white">
          {`</>`}
        </div>
      </div>
    </div>
  );
};

export default CodeWatermark;