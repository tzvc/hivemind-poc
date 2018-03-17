module.exports = {
  user: {
    username: "Cossio",
    firstName: "Antoine",
    lastName: "Cauquil"
  },
  project: {
    name: "AI-Controlled Multi-Pattern Search Radar",
    quote:
      "A high gain radar providing Helical, Raster, Palmer-Raster and Palmer-Helical scanning modes, all controlled by a powerful AI",
    likes: 1337,
    liked: false,
    tags: ["Electronics", "Arduino", "Machine Learning"],
    description: `## Features\n## Usage\n### Installation\n### Running examples in this repository

    
    ## Changelog
    
    See [changelog](docs/CHANGELOG.md).
    
    ## Contributing
    
    See the contributing [guidelines](CONTRIBUTING.md).
    
    ## Disclaimer
    
    This is not an official Google product.`,
    tabIndex: 0,
    files: [
      {
        isFolder: true,
        name: "public",
        comment: "add copyright informations",
        size: 4096,
        lmd: "23 hours ago"
      },
      {
        isFolder: true,
        name: "server",
        comment: "Add mongodb integration + routes",
        size: 4096,
        lmd: "12 hours ago"
      },
      {
        isFolder: true,
        name: "src",
        comment: "Global: Project / CardMatrix presentation components",
        size: 4096,
        lmd: "7 hours ago"
      },
      {
        isFolder: false,
        name: ".gitignore",
        comment: "Ignore vscode specifics",
        size: 124,
        lmd: "12 hours ago"
      },
      {
        isFolder: false,
        name: "README.md",
        comment: "Add dev and production guidlines",
        size: 407,
        lmd: "1 day ago"
      },
      {
        isFolder: false,
        name: "yarn.lock",
        comment: "Merge branch 'dev-front'",
        size: 124,
        lmd: "12 hours ago"
      }
    ],
    cards: [
      {
        title: "Monopulse Tracking",
        description:
          "The tracking solution may be determined on the basis of a single pulse rather than the beam sequence (sequential lobing) or a complete conical scan. The tracking data rate is therefore much higher and therefore potentially more accurate.",
        points: 42
      },
      {
        title: "Velocity Search",
        description:
          "The PRF ( Pulse repetition frequency ) are set at maximum, higher PRF results in more power on target, more power mean more reflection, this mode is specifically for detecting medium and high closure targets, with the cost of not detecting low and no-closure targets at all.",
        points: 25
      }
    ]
  },
  contributors: [
    {
      name: "Antoine Cauquil",
      competencies: [
        "Signal Processing",
        "Machine Learning",
        "Embedded OS",
        "Cryptography"
      ],
      reputation: 666,
      img: "https://i.imgur.com/5Tpbaii.jpg",
      inProject: false,
      commits: 4
    },
    {
      name: "Thomas Baakel",
      competencies: ["Street Art", "Wordpress", "Microsoft Office"],
      reputation: 2,
      img: "https://i.imgur.com/dalEMPI.jpg",
      inProject: false,
      commits: 2
    },
    {
      name: "Nicolas Sebag",
      competencies: ["Project Management", "iOS", "Java"],
      reputation: 347,
      img: "https://i.imgur.com/DPoFICj.jpg",
      inProject: false,
      commits: 9
    },
    {
      name: "Guillaume Baud",
      competencies: ["DJ", "CAM", "Java"],
      reputation: 24,
      img: "https://i.imgur.com/OuboOag.jpg",
      inProject: true,
      commits: 4
    },
    {
      name: "Thomas Chevrie",
      competencies: ["Electronics", "Radar", "Java"],
      reputation: 42,
      img: "https://i.imgur.com/hVIWg8W.jpg",
      inProject: true,
      commits: 3
    }
  ]
};
