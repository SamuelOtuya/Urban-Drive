
"use client";

import { Button,Label, TextInput } from "flowbite-react";

export function Contact() {
  return (
    <form className="flex max-w-md flex-col gap-4 justify-between p-10 ml-10">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="Name" value="Your Name" />
        </div>
        <TextInput id="Name" type="Name" placeholder="Name" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput id="email" type="email" placeholder="urbandrive@gmail.com" required shadow />
      </div>
      <div>
        <div className="mb-2  block">
          <Label htmlFor="message" value="Message" />
        </div>
        <TextInput id="Message" type="message" placeholder="Write your message here"/>
      </div>
      
      <Button className="bg-orange-500" type="submit">Send a message</Button>
    </form>
  );
}
