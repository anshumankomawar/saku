import { P, H1, H3, MUTE } from '@/styles/typography'

export default function About() {
  return (
    <div className="space-y-2">
      <H3 text="Who are we?"/>
      <P text="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps."/>
      <div className="py-2"/>
      <H3 text="What do you mean by not a component library?"/>

      <P text="I mean you do not install it as a dependency. It is not available or distributed via npm.
Pick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours.
Use this as a reference to build your own component libraries."/>
      <div className="py-2"/>
      <H3 text="Why did you build this?"/>
      <P text="I wanted to build a collection of re-usable components that I could copy and paste into my projects."/>
    </div>
  );
}
