import { Disclosure } from "@headlessui/react";

interface AccordionProps {
  question: string;
  children: React.ReactNode;
}

export default function Accordion({ question, children }: AccordionProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`mt-3 shadow-sm ${
              open ? "bg-violet-300/75" : "hover:bg-violet-300/75"
            } transition-all ease-linear duration-200 bg-violet-300/50 font-bold rounded-md w-full p-2 text-xl`}
          >
            {question}
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2">{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
