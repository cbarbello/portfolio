export const projectPosts = [
  {
    id: 1,
    title: "Body-Mounted Cooling Device",
    description:
      "I created a body-mounted cooling device that can literally give you frostbite.",
    image: "/wrist-mounted-cooling-device-v4.jpeg?height=250&width=250",
    tags: ["Hardware", "Electronics", "3D Printing"],
    slug: "cooling-device",
    content: `
    <p>The inspiration for this project came from the fact that I'm physically dense, so I sweat often during workouts. 
    I had played around with peltier devices before, but never on battery. Over the years I've slowly iterated on the most-optimal
    peltier cooling device on battery, and where to place it.</p>
    &nbsp;
    <p>You can read more about peltier devices <a href="https://www.labcenter.com/blog/sim-peltier-models/" target="_blank">here</a>, but TL;DR: you pump in 
    electricity and one side gets hot while the other gets cold. You must remove the heat quickly however.</p>
    &nbsp;
    <p>The device is powered by a 3.7V lithium-ion battery, remains cold on your skin, and can run for about 45-60 minutes on a full charge. 
    When it's not removing heat from you, it can reach -70F degrees ambient temperature (I usually hit sub-zero due to ambient 
    temperatures in my apartment). I don't know what the temperature is when it's against your skin, but I know it's less than 
    the freezing point of water.</p>
    &nbsp;
    <p>(I'll write more later)</p>
  `,
  },
  {
    id: 2,
    title: "Rotating Disco Ball Earring",
    description: "A disco ball earring that spins.",
    image: "/spinning-disco-ball-earring.jpeg?height=250&width=250",
    tags: ["Hardware", "Electronics", "3D Printing"],
    slug: "disco-ball-earring",
    content: `
    <p>The picture you see here is a V4. It took a ridiculous amount of labor to glue mirrors on.</p>
    &nbsp;
    <p>It only weighs a few grams, runs on a 60mah battery, rotates around its' own axis, and honestly might get caught in your hair. 
    It's pretty cool though.</p>
    &nbsp;
    <p>(I'll write more later)</p>
  `,
  },
  {
    id: 3,
    title: "Solar-Powered, Spinning Hanging Planter",
    description: "It spins when the sun hits it for even growth.",
    image: "/solar-powered-spinning-planter.jpeg?height=250&width=250",
    tags: ["Hardware", "Electronics", "3D Printing"],
    slug: "spinning-planter",
    content: `
    <p>The photo you see above is a v0 that was hot-fixed. The solar panel is attached to the window, but I plan to make this 
    self-contained by mounting the motor to the planter and using a flexible solar panel.</p>
    &nbsp;
    <p>(I'll write more later)</p>
  `,
  },
  {
    id: 4,
    title: "Custom-Built Drone",
    description: "It sort of flies. I wrote the flight controller.",
    image: "/custom-built-drone.jpeg?height=250&width=250",
    tags: ["Hardware", "Electronics", "3D Printing", "C++"],
    slug: "custom-built-drone",
    content: `
    <p>I attempted to build a drone from scratch, flight controller and all. I learned quite a bit, like how the adjacent rotors have to spin 
    in opposite directions to avoid the entire drone spinning on its' x-axis. I think the one thing I forgot was that the accelleration of one 
    motor sorta throws off the whole "cancelling drone rotation out" thing.</p>
    &nbsp;
    <p>(I'll write more later)</p>
  `,
  },
  {
    id: 5,
    title: "Over-Powered Squirt Gun",
    description: "Waters plants, and the walls.",
    image: "/over-powered-squirt-gun.jpeg?height=250&width=250",
    tags: ["Hardware", "Electronics"],
    slug: "/projects/over-powered-squirt-gun",
    content: `
    <p>I bought an automatic squirt gun online and immediately thought "what would happen if I boosted the voltage from 7.4V to 20V?</p>
    &nbsp;
    <p>It turns out that it shoots at, like, quadruple the frequency it did prior. I watered my plants with it - it worked great, aside 
    from the fact that the water shots move fast enough to spray a wide circumference. 
    &nbsp;
    <p>(I'll write more later)</p>
  `,
  },
];
