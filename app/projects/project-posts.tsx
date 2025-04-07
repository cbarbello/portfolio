export const projectPosts = [
  {
    id: 1,
    title: "Wrist-Mounted Cooling Device",
    description:
      "I created a wrist-mounted cooling device that can literally give you frostbite.",
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
    <p>The device is powered by a 3.7V lithium-ion battery, remains cold, and can run for about 45-60 minutes on a full charge. 
    When it's not removing heat from you, it can reach -70 degree ambient temperatures (I usually hit sub-zero due to ambient 
    temperatures in my apartment). I don't know what the temperature is when it's against your skin, but I know it's less than 
    the freezing point of water.</p>
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
    <p>Something I did.</p>
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
    <p>Something I did.</p>
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
    <p>Something I did.</p>
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
    <p>Something I did.</p>
  `,
  },
];
