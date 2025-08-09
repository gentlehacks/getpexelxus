import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
  return (
    <div 
      id="faq"
    className="w-full flex flex-col items-center justify-center mt-[9rem]">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
        Frequently Asked Question
      </h1>
      <div className="w-full flex flex-col items-center justify-center mt-[4rem]">
        {/* Q - 01 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%]'>
          <AccordionItem value="item-1">
            <AccordionTrigger>Which network do you support?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
              PexelXUS supports all major Nigerian network:
              <p>• MTN</p>
              <p>• Airtel</p>
              <p>• Glo </p>
              <p>• 9mobile</p>
              <p>No matter your provider!</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Q - 02 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%]'>
          <AccordionItem value="item-1">
            <AccordionTrigger>Can i use it on iPhone and Android devices? 📱</AccordionTrigger>
            <AccordionContent className="text-gray-800">
              Yes! PexelXUS works on both Android and IOS devices 📱. Download links will be sent via email when launch 🚀.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Q - 03 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%]'>
          <AccordionItem value="item-1">
            <AccordionTrigger>How secure are my transactions? 🔐</AccordionTrigger>
            <AccordionContent className="text-gray-800">
              Your security is our priority. All transactions are encrypted and proccessed through Paystack, compliant with PCI - DSS standards. We never store your card/bank details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Q - 04 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%]'>
          <AccordionItem value="item-1">
            <AccordionTrigger>Can i connect with my friends?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
              <p>Yes Apart from purchasing airtime and data, PexelXus allow you to connect with your friends and family easily, and post updates fast!</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Q - 05 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%]'>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is my airtime/data delivered instantly? ⚡ </AccordionTrigger>
            <AccordionContent className="text-gray-800">
              Yes! 99% of airtime/data purcharses complete within 10 seconds. If delays occur, contact us on WhatsApp for instant help.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FaqSection