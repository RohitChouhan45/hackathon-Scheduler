// Conference data

// Speakers data
const speakers = [
  {
    id: 1,
    name: "#",
    title: "Senior Engineer",
    company: "Facebook",
    bio: "Core team member working on Server Components.",
    image: "#",
    featured: true
  },
  {
    id: 2,
    name: "#",
    title: "Frontend Architect",
    company: "Airbnb",
    bio: "Creator of several popular libraries and passionate about developer experience.",
    image: "#",
    featured: true
  },
  {
    id: 3,
    name: "#",
    title: "React Native Lead",
    company: "Shopify",
    bio: "Specializes in cross-platform React Native applications and performance optimization.",
    image: "#",
    featured: true
  },
  {
    id: 4,
    name: "#",
    title: "Open Source Maintainer",
    company: "Vercel",
    bio: "Maintainer of several React ecosystem projects and Next.js contributor.",
    image: "#",
    featured: true
  },
  {
    id: 5,
    name: "#",
    title: "UI/UX Designer",
    company: "Microsoft",
    bio: "Focuses on creating accessible and beautiful React component systems.",
    image: "#",
    featured: false
  },
  {
    id: 6,
    name: "#",
    title: "State Management Expert",
    company: "Redux",
    bio: "Creator of popular state management solutions for React applications.",
    image: "#",
    featured: false
  },
  {
    id: 7,
    name: "#",
    title: "Performance Engineer",
    company: "Netflix",
    bio: "Specializes in optimizing React applications for maximum performance.",
    image: "#",
    featured: false
  },
  {
    id: 8,
    name: "#",
    title: "Testing Specialist",
    company: "Cypress",
    bio: "Expert in testing React applications and building reliable frontend systems.",
    image: "#",
    featured: false
  },
  {
    id: 9,
    name: "#",
    title: "Accessibility Advocate",
    company: "Deque Systems",
    bio: "Passionate about making React applications accessible to everyone.",
    image: "#",
    featured: false
  },
  {
    id: 10,
    name: "#",
    title: "GraphQL Expert",
    company: "Apollo",
    bio: "Specializes in data fetching strategies and GraphQL integration with React.",
    image: "#",
    featured: false
  },
  {
    id: 11,
    name: "#",
    title: "React Educator",
    company: "Frontend Masters",
    bio: "Teaches React best practices and has trained thousands of developers.",
    image: "#",
    featured: false
  },
  {
    id: 12,
    name: "#",
    title: "Animation Specialist",
    company: "Framer",
    bio: "Creates beautiful animations and transitions in React applications.",
    image: "#",
    featured: false
  }
];

// Schedule data
const schedule = {
  day1: [
    {
      time: "8:00 AM - 9:00 AM",
      title: "Registration & Breakfast",
      speaker: "",
      description: "Pick up your badge and enjoy breakfast with fellow attendees.",
      track: "",
      type: "break"
    },
    {
      time: "9:00 AM - 9:30 AM",
      title: "Opening Keynote",
      speaker: "Sarah Johnson",
      description: "Welcome to ReactConf 2025 and overview of the React ecosystem in 2025.",
      track: "Main Stage",
      type: "keynote"
    },
    {
      time: "9:45 AM - 10:30 AM",
      title: "The Future of React Server Components",
      speaker: "Sarah Johnson",
      description: "Deep dive into React Server Components and how they're changing application architecture.",
      track: "Main Stage",
      type: "talk"
    },
    {
      time: "10:30 AM - 11:00 AM",
      title: "Coffee Break",
      speaker: "",
      description: "Refresh with coffee, tea, and snacks.",
      track: "",
      type: "break"
    },
    {
      time: "11:00 AM - 11:45 AM",
      title: "Building Accessible React Applications",
      speaker: "Olivia Brown",
      description: "Best practices for creating accessible React applications that work for everyone.",
      track: "Track A",
      type: "talk"
    },
    {
      time: "11:00 AM - 11:45 AM",
      title: "React Performance Optimization Techniques",
      speaker: "Sophia Martinez",
      description: "Advanced strategies to make your React applications blazing fast.",
      track: "Track B",
      type: "talk"
    },
    {
      time: "12:00 PM - 12:45 PM",
      title: "State Management in 2025",
      speaker: "James Wilson",
      description: "Overview of modern state management approaches in the React ecosystem.",
      track: "Track A",
      type: "talk"
    },
    {
      time: "12:00 PM - 12:45 PM",
      title: "Testing React Applications",
      speaker: "Robert Taylor",
      description: "Comprehensive testing strategies for React applications.",
      track: "Track B",
      type: "talk"
    },
    {
      time: "12:45 PM - 2:00 PM",
      title: "Lunch",
      speaker: "",
      description: "Enjoy lunch and network with other attendees.",
      track: "",
      type: "break"
    },
    {
      time: "2:00 PM - 3:30 PM",
      title: "Workshop: Building a Full-Stack React Application",
      speaker: "Michael Chen",
      description: "Hands-on workshop building a modern React application from scratch.",
      track: "Workshop Room A",
      type: "workshop"
    },
    {
      time: "2:00 PM - 3:30 PM",
      title: "Workshop: React Native for React Developers",
      speaker: "Emily Rodriguez",
      description: "Learn how to leverage your React skills to build mobile applications.",
      track: "Workshop Room B",
      type: "workshop"
    },
    {
      time: "3:30 PM - 4:00 PM",
      title: "Coffee Break",
      speaker: "",
      description: "Refresh with coffee, tea, and snacks.",
      track: "",
      type: "break"
    },
    {
      time: "4:00 PM - 4:45 PM",
      title: "React and AI: Building Intelligent UIs",
      speaker: "David Kim",
      description: "Exploring the integration of AI capabilities into React applications.",
      track: "Main Stage",
      type: "talk"
    },
    {
      time: "5:00 PM - 6:30 PM",
      title: "Welcome Reception",
      speaker: "",
      description: "Join us for drinks, appetizers, and networking to close out the first day.",
      track: "Main Hall",
      type: "social"
    }
  ],
  day2: [
    {
      time: "8:00 AM - 9:00 AM",
      title: "Breakfast",
      speaker: "",
      description: "Start your day with breakfast and coffee.",
      track: "",
      type: "break"
    },
    {
      time: "9:00 AM - 9:45 AM",
      title: "Design Systems in React",
      speaker: "Priya Patel",
      description: "Building and maintaining scalable design systems with React.",
      track: "Main Stage",
      type: "talk"
    },
    {
      time: "10:00 AM - 10:45 AM",
      title: "GraphQL and React: A Perfect Match",
      speaker: "Daniel Lee",
      description: "Best practices for using GraphQL with React applications.",
      track: "Track A",
      type: "talk"
    },
    {
      time: "10:00 AM - 10:45 AM",
      title: "Animation and Motion in React",
      speaker: "Thomas Garcia",
      description: "Creating fluid animations and transitions in React applications.",
      track: "Track B",
      type: "talk"
    },
    {
      time: "10:45 AM - 11:15 AM",
      title: "Coffee Break",
      speaker: "",
      description: "Refresh with coffee, tea, and snacks.",
      track: "",
      type: "break"
    },
    {
      time: "11:15 AM - 12:00 PM",
      title: "React in the Enterprise",
      speaker: "Michael Chen",
      description: "Strategies for using React in large-scale enterprise applications.",
      track: "Track A",
      type: "talk"
    },
    {
      time: "11:15 AM - 12:00 PM",
      title: "React Native Performance Tuning",
      speaker: "Emily Rodriguez",
      description: "Advanced techniques for optimizing React Native applications.",
      track: "Track B",
      type: "talk"
    },
    {
      time: "12:15 PM - 1:00 PM",
      title: "Building for the Next Billion Users",
      speaker: "Ava Williams",
      description: "Creating React applications that work for users around the world.",
      track: "Main Stage",
      type: "talk"
    },
    {
      time: "1:00 PM - 2:15 PM",
      title: "Lunch",
      speaker: "",
      description: "Enjoy lunch and network with other attendees.",
      track: "",
      type: "break"
    },
    {
      time: "2:15 PM - 3:45 PM",
      title: "Workshop: Advanced State Management",
      speaker: "James Wilson",
      description: "Deep dive into complex state management scenarios in React.",
      track: "Workshop Room A",
      type: "workshop"
    },
    {
      time: "2:15 PM - 3:45 PM",
      title: "Workshop: Testing Strategies for React",
      speaker: "Robert Taylor",
      description: "Hands-on workshop on comprehensive testing for React applications.",
      track: "Workshop Room B",
      type: "workshop"
    },
    {
      time: "3:45 PM - 4:15 PM",
      title: "Coffee Break",
      speaker: "",
      description: "Refresh with coffee, tea, and snacks.",
      track: "",
      type: "break"
    },
    {
      time: "4:15 PM - 5:00 PM",
      title: "Panel: The Future of Frontend Development",
      speaker: "Sarah Johnson, Michael Chen, Emily Rodriguez, David Kim",
      description: "Industry leaders discuss trends and the future of frontend development.",
      track: "Main Stage",
      type: "panel"
    },
    {
      time: "6:30 PM - 9:30 PM",
      title: "Conference Party",
      speaker: "",
      description: "Join us for food, drinks, and entertainment at our official conference party.",
      track: "Offsite - City View at Metreon",
      type: "social"
    }
  ],
  day3: [
    {
      time: "8:30 AM - 9:30 AM",
      title: "Breakfast",
      speaker: "",
      description: "Start your day with breakfast and coffee.",
      track: "",
      type: "break"
    },
    {
      time: "9:30 AM - 10:15 AM",
      title: "React Beyond the Browser",
      speaker: "David Kim",
      description: "Exploring React in non-traditional environments: VR, desktop, and more.",
      track: "Main Stage",
      type: "talk"
    },
    {
      time: "10:30 AM - 11:15 AM",
      title: "Building Accessible Forms in React",
      speaker: "Olivia Brown",
      description: "Creating inclusive and accessible forms in React applications.",
      track: "Track A",
      type: "talk"
    },
    {
      time: "10:30 AM - 11:15 AM",
      title: "React and WebAssembly",
      speaker: "Sophia Martinez",
      description: "Integrating WebAssembly with React for high-performance applications.",
      track: "Track B",
      type: "talk"
    },
    {
      time: "11:15 AM - 11:45 AM",
      title: "Coffee Break",
      speaker: "",
      description: "Refresh with coffee, tea, and snacks.",
      track: "",
      type: "break"
    },
    {
      time: "11:45 AM - 12:30 PM",
      title: "React Teaching Patterns",
      speaker: "Ava Williams",
      description: "Effective strategies for teaching and mentoring React developers.",
      track: "Track A",
      type: "talk"
    },
    {
      time: "11:45 AM - 12:30 PM",
      title: "Micro-Frontends with React",
      speaker: "Michael Chen",
      description: "Strategies for implementing micro-frontend architectures with React.",
      track: "Track B",
      type: "talk"
    },
    {
      time: "12:30 PM - 1:45 PM",
      title: "Lunch",
      speaker: "",
      description: "Enjoy lunch and network with other attendees.",
      track: "",
      type: "break"
    },
    {
      time: "1:45 PM - 3:15 PM",
      title: "Workshop: Building Accessible React Applications",
      speaker: "Olivia Brown",
      description: "Hands-on workshop on creating accessible React applications.",
      track: "Workshop Room A",
      type: "workshop"
    },
    {
      time: "1:45 PM - 3:15 PM",
      title: "Workshop: Animation in React",
      speaker: "Thomas Garcia",
      description: "Practical techniques for adding animations to React applications.",
      track: "Workshop Room B",
      type: "workshop"
    },
    {
      time: "3:15 PM - 3:45 PM",
      title: "Coffee Break",
      speaker: "",
      description: "Refresh with coffee, tea, and snacks.",
      track: "",
      type: "break"
    },
    {
      time: "3:45 PM - 4:30 PM",
      title: "Lightning Talks",
      speaker: "Various Speakers",
      description: "A series of quick, 5-minute talks on various React topics.",
      track: "Main Stage",
      type: "lightning"
    },
    {
      time: "4:45 PM - 5:30 PM",
      title: "Closing Keynote",
      speaker: "Sarah Johnson",
      description: "Reflecting on the conference and looking ahead to the future of React.",
      track: "Main Stage",
      type: "keynote"
    }
  ]
};