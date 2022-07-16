export const mockedPositions = {
  1: {
    id: 1,
    title: 'Globant - Ssr Front End Developer',
    description:
      'Globant esta buscando un Semi Senior Front end developer que pueda sumarse a su equipo.',
    type: 'Remoto',
    seniority: 'SEMISENIOR',
    arsMinSalary: 350000,
    arsMaxSalary: 450000,
    requirements: 'Angular, Material UI, +3 años de experiencia.',
    commodities:
      'OSDE 310, Gym Pass CABA, Bono anual 2 sueldos en base a performance.',
    vacaciones: 14,
    salaryType: 'ARS',
    jobPostingType: 'REMOTE',
    techs: [10, 3],
    timeline: [
      {
        title: 'Entrevista RRHH',
        description: 'entrevista preliminar',
      },
      {
        title: 'Entrevista tecnica',
        description: 'Entrevista nivel tecnico',
      },
    ],
  },
  2: {
    id: 2,
    title: 'Salesforce - Senior Back End Developer',
    type: 'Remoto',
    seniority: 'SENIOR',
    arsMinSalary: 600000,
    arsMaxSalary: 700000,
    description:
      'Salesforce busca agrandar su equipo con un Senior Back End Developer con proyección de crecimiento a una posición de liderazgo en el corto/mediano plazo..',

    requirements: 'NodeJS, Prisma, Postgres, Kubernetes, Docker, Express.',
    commodities:
      'Swiss Medical, descuento en marcas seleccionadas, vacaciones ilimitadas, horarios flexibles.',
    vacaciones: 14,
    salaryType: 'ARS',
    jobPostingType: 'REMOTE',
    techs: [2, 8, 9, 3],
    timeline: [
      {
        title: 'Entrevista RRHH',
        description: 'entrevista preliminar',
      },
      {
        title: 'Entrevista tecnica',
        description: 'Entrevista nivel tecnico',
      },
    ],
  },
  3: {
    id: 3,
    title: 'Accenture - Full Stack Developer',
    type: 'Remoto',
    seniority: 'Semi Senior',
    arsMinSalary: 300000,
    arsMaxSalary: 400000,
  },
  4: {
    id: 4,
    title: 'Mercado Libre - Business Analyst',
    type: 'Remoto',
    seniority: 'Junior',
    arsMinSalary: 200000,
    arsMaxSalary: 250000,
  },
};

export const mockedBoards = {
  1: [
    {
      title: 'CVs por revisar',
      color: '#1a237e',
      candidates: [
        {
          id: 3,
          fullName: 'Jimena Alba',
          gitHubUser: '@JimenaAlba',
          currentPosition: 'Frontend Developer',
          currentCompany: 'Freelance',
          matchDescription: 'Experiencia insuficiente',
          matchType: 1,
          gitHubURL: '',
          match: 91,
          matchE: 93,
          matchDev: 89,
          matchRating: {
            experience: {
              color: 1,
              rating: 84,
            },
            permanencia: {
              color: 1,
              rating: 82,
            },
            technologies: {
              color: 1,
              rating: 87,
            },
            salary: {
              color: 1,
              rating: 88,
            },
            requirements: {
              color: 1,
              rating: 87,
            },
            benefits: {
              color: 1,
              rating: 92,
            },
          },
          role: 'Frontend Developer',
          profileImageURL:
            'https://media-exp1.licdn.com/dms/image/C5103AQEPM7WEmj6DPw/profile-displayphoto-shrink_200_200/0/1517087465886?e=1661385600&v=beta&t=0tHK_Ize7VFEJcUP9-VbU5VYTtUNZ99tk6pZwTA0WW8',
          education: 'Secundario completo',
          experience: '3 años de experiencia',
          salary: 120000,
          seniority: 'Semi Senior',
        },
        {
          id: 4,
          fullName: 'Orestes Chena',
          gitHubUser: '@OrestesChena',
          currentPosition: 'Semi Sr. Frontend dev',
          currentCompany: 'Modo',
          matchDescription: 'Cumple con los requerimientos minimos',
          matchType: 1,
          gitHubURL: '',
          match: 83,
          matchE: 80,
          matchDev: 75,
          matchRating: {
            experience: {
              color: 1,
              rating: 90,
            },
            permanencia: {
              color: 2,
              rating: 65,
            },
            technologies: {
              color: 1,
              rating: 70,
            },
            salary: {
              color: 1,
              rating: 77,
            },
            requirements: {
              color: 1,
              rating: 76,
            },
            benefits: {
              color: 1,
              rating: 70,
            },
          },
          matchDev: 75,
          matchRating: {
            experience: {
              color: 2,
              rating: 65,
            },
            turnover: {
              color: 3,
              rating: 27,
            },
            technologies: {
              color: 1,
              rating: 85,
            },
            salary: {
              color: 3,
              rating: 21,
            },
            requirements: {
              color: 2,
              rating: 58,
            },
            benefits: {
              color: 1,
              rating: 87,
            },
          },
          role: 'Frontend Developer',
          profileImageURL:
            'https://media-exp1.licdn.com/dms/image/C4E03AQFN7EOqYjsrAA/profile-displayphoto-shrink_200_200/0/1517721717978?e=1661385600&v=beta&t=QesE49ZFFKxXQsrxlPSOS8c_kDGV2Y2UiAZxwn8Gyuk',
          education: 'Terciario',
          experience: '6 años de experiencia',
          salary: 320000,
          seniority: 'Semi Senior',
        },
        {
          id: 5,
          fullName: 'Nadia Aquino',
          gitHubUser: '@NadiaAquino',
          currentPosition: 'Semi Sr. Frontend dev',
          currentCompany: 'Santander',
          matchDescription: 'Cumple con los requerimientos minimos',
          matchType: 2,
          gitHubURL: '',
          match: 78,
          matchE: 80,
          matchDev: 90,
          matchRating: {
            experience: {
              color: 1,
              rating: 75,
            },
            permanencia: {
              color: 1,
              rating: 80,
            },
            technologies: {
              color: 1,
              rating: 90,
            },
            salary: {
              color: 1,
              rating: 85,
            },
            requirements: {
              color: 1,
              rating: 90,
            },
            benefits: {
              color: 1,
              rating: 70,
            },
          },
          matchDev: 75,
          matchRating: {
            experience: {
              color: 3,
              rating: 55,
            },
            turnover: {
              color: 3,
              rating: 55,
            },
            technologies: {
              color: 3,
              rating: 55,
            },
            salary: {
              color: 3,
              rating: 55,
            },
            requirements: {
              color: 3,
              rating: 55,
            },
            benefits: {
              color: 3,
              rating: 55,
            },
          },
          role: 'Frontend Developer',
          profileImageURL:
            'https://media-exp1.licdn.com/dms/image/C4E03AQEeu9BMEW3qIQ/profile-displayphoto-shrink_200_200/0/1610460508700?e=1661385600&v=beta&t=ca0RfMKLG6rcw9TFSj2ANl6SWg0Fr-5D9iz9IGJZj2w',
          education: 'Terciario',
          experience: '4 años de experiencia',
          salary: 310000,
          seniority: 'Semi Senior',
        },
      ],
    },
    {
      title: 'En evaluación',
      color: '#4a148c',
      candidates: [
        {
          id: 2,
          fullName: 'Adrian Braga',
          gitHubUser: '@AdrianBraga',
          currentPosition: 'Semi Sr. Frontend dev',
          currentCompany: 'Accenture',
          matchDescription: 'Cumple con los requerimientos minimos',
          matchType: 1,
          gitHubURL: '',
          match: 85,
          matchE: 87,
          matchDev: 83,
          matchRating: {
            experience: {
              color: 1,
              rating: 90,
            },
            permanencia: {
              color: 2,
              rating: 55,
            },
            technologies: {
              color: 1,
              rating: 80,
            },
            salary: {
              color: 1,
              rating: 84,
            },
            requirements: {
              color: 1,
              rating: 81,
            },
            benefits: {
              color: 1,
              rating: 70,
            },
          },
          role: 'Frontend Developer',
          profileImageURL:
            'https://media-exp1.licdn.com/dms/image/C4E03AQHXxMCtw-PEbA/profile-displayphoto-shrink_200_200/0/1625934212299?e=1661385600&v=beta&t=I53reBWJJxc2eL78itb8cbdksWZaa2xOB-6WfKW_UWk',
          education: 'Universitario',
          experience: '5 años de experiencia',
          salary: 280000,
          seniority: 'Semi Senior',
        },
      ],
    },
    {
      title: 'Contratados',
      color: '#1b5e20',
      candidates: [
        {
          id: 1,
          fullName: 'Adolfo Martin',
          gitHubUser: '@AdolfoMartin',
          currentPosition: 'Semi Sr. Frontend dev',
          currentCompany: 'Mercado Libre',
          matchDescription: 'Remuneración económica insuficiente',
          matchType: 1,
          gitHubURL: '',
          match: 95,
          matchE: 93,
          matchDev: 97,
          matchRating: {
            experience: {
              color: 1,
              rating: 89,
            },
            permanencia: {
              color: 2,
              rating: 79,
            },
            technologies: {
              color: 1,
              rating: 90,
            },
            salary: {
              color: 1,
              rating: 90,
            },
            requirements: {
              color: 1,
              rating: 94,
            },
            benefits: {
              color: 1,
              rating: 97,
            },
          },
          role: 'Frontend Developer',
          profileImageURL:
            'https://media-exp1.licdn.com/dms/image/C4E03AQGlhsSaeDOzLw/profile-displayphoto-shrink_200_200/0/1539708874075?e=1661385600&v=beta&t=9y9_VbndeB1otwj7aaBulHXlnjxaNqCQV3Q5gr0bW7k',
          education: 'Universitario',
          experience: '5 años de experiencia',
          salary: 360000,
          seniority: 'Semi Senior',
        },
      ],
    },
  ],
  2: [
    {
      title: 'CVs por revisar',
      color: '#1a237e',
      candidates: [
        {
          id: 3,
          fullName: 'Cristian Barreto',
          gitHubUser: '@CristianBarreto',
          currentPosition: 'Backend Developer',
          currentCompany: 'Etermax',
          matchDescription: 'Experiencia insuficiente',
          matchType: 1,
          gitHubURL: '',
          match: 82,
          matchE: 81,
          matchDev: 82,
          matchRating: {
            experience: {
              color: 1,
              rating: 84,
            },
            permanencia: {
              color: 1,
              rating: 82,
            },
            technologies: {
              color: 1,
              rating: 87,
            },
            salary: {
              color: 1,
              rating: 88,
            },
            requirements: {
              color: 1,
              rating: 87,
            },
            benefits: {
              color: 1,
              rating: 92,
            },
          },
          role: 'Backend Developer',
          profileImageURL:
            'https://media-exp1.licdn.com/dms/image/C5103AQEPM7WEmj6DPw/profile-displayphoto-shrink_200_200/0/1517087465886?e=1661385600&v=beta&t=0tHK_Ize7VFEJcUP9-VbU5VYTtUNZ99tk6pZwTA0WW8',
          education: 'Universitario',
          experience: '8 años de experiencia',
          salary: 120000,
          seniority: 'Senior',
        },
        {
          id: 4,
          fullName: 'Daniela Villalba',
          gitHubUser: '@DanielaVillalba',
          currentPosition: 'Backend Developer',
          currentCompany: 'DinoCloud',
          matchDescription: 'Cumple con los requerimientos minimos',
          matchType: 2,
          gitHubURL: '',
          match: 78,
          matchE: 80,
          matchDev: 75,
          matchRating: {
            experience: {
              color: 1,
              rating: 90,
            },
            permanencia: {
              color: 2,
              rating: 65,
            },
            technologies: {
              color: 1,
              rating: 70,
            },
            salary: {
              color: 1,
              rating: 77,
            },
            requirements: {
              color: 1,
              rating: 76,
            },
            benefits: {
              color: 1,
              rating: 70,
            },
          },
          role: 'Backend Developer',
          profileImageURL:
            'https://media-exp1.licdn.com/dms/image/C4E03AQFN7EOqYjsrAA/profile-displayphoto-shrink_200_200/0/1517721717978?e=1661385600&v=beta&t=QesE49ZFFKxXQsrxlPSOS8c_kDGV2Y2UiAZxwn8Gyuk',
          education: 'Terciario',
          experience: '7 años de experiencia',
          salary: 320000,
          seniority: 'Senior',
        },
        {
          id: 5,
          fullName: 'Erwin Coria',
          gitHubUser: '@ErwinCoria',
          currentPosition: 'Backend Developer',
          currentCompany: 'Accenture',
          matchDescription: 'Cumple con los requerimientos minimos',
          matchType: 3,
          gitHubURL: '',
          match: 56,
          matchE: 55,
          matchDev: 57,
          matchRating: {
            experience: {
              color: 1,
              rating: 75,
            },
            permanencia: {
              color: 1,
              rating: 80,
            },
            technologies: {
              color: 1,
              rating: 90,
            },
            salary: {
              color: 1,
              rating: 85,
            },
            requirements: {
              color: 1,
              rating: 90,
            },
            benefits: {
              color: 1,
              rating: 70,
            },
          },
          role: 'Backend Developer',
          profileImageURL:
            'https://media-exp1.licdn.com/dms/image/C4E03AQEeu9BMEW3qIQ/profile-displayphoto-shrink_200_200/0/1610460508700?e=1661385600&v=beta&t=ca0RfMKLG6rcw9TFSj2ANl6SWg0Fr-5D9iz9IGJZj2w',
          education: 'Secundario',
          experience: '8 años de experiencia',
          salary: 310000,
          seniority: 'Senior',
        },
      ],
    },
    {
      title: 'En evaluación',
      color: '#4a148c',
      candidates: [
        {
          id: 1,
          fullName: 'Ezequiel Adamo',
          gitHubUser: '@EzequielAdamo',
          currentPosition: 'Backend Developer',
          currentCompany: 'SAP Argentina',
          matchDescription: 'Remuneración económica insuficiente',
          matchType: 1,
          gitHubURL: '',
          match: 93,
          matchE: 93,
          matchDev: 97,
          matchRating: {
            experience: {
              color: 1,
              rating: 89,
            },
            permanencia: {
              color: 2,
              rating: 79,
            },
            technologies: {
              color: 1,
              rating: 90,
            },
            salary: {
              color: 1,
              rating: 90,
            },
            requirements: {
              color: 1,
              rating: 94,
            },
            benefits: {
              color: 1,
              rating: 97,
            },
          },
          role: 'Backend Developer',
          profileImageURL:
            'https://media-exp1.licdn.com/dms/image/C4E03AQGlhsSaeDOzLw/profile-displayphoto-shrink_200_200/0/1539708874075?e=1661385600&v=beta&t=9y9_VbndeB1otwj7aaBulHXlnjxaNqCQV3Q5gr0bW7k',
          education: 'Universitario',
          experience: '11 años de experiencia',
          salary: 360000,
          seniority: 'Senior',
        },
        {
          id: 2,
          fullName: 'Emilse Caetano',
          gitHubUser: '@EmilseCaetano',
          currentPosition: 'Backend Developer',
          currentCompany: 'Movistar',
          matchDescription: 'Cumple con los requerimientos minimos',
          matchType: 1,
          gitHubURL: '',
          match: 91,
          matchE: 85,
          matchDev: 80,
          matchRating: {
            experience: {
              color: 1,
              rating: 90,
            },
            permanencia: {
              color: 2,
              rating: 55,
            },
            technologies: {
              color: 1,
              rating: 80,
            },
            salary: {
              color: 1,
              rating: 84,
            },
            requirements: {
              color: 1,
              rating: 81,
            },
            benefits: {
              color: 1,
              rating: 70,
            },
          },
          role: 'Backend Developer',
          profileImageURL:
            'https://media-exp1.licdn.com/dms/image/C4E03AQHXxMCtw-PEbA/profile-displayphoto-shrink_200_200/0/1625934212299?e=1661385600&v=beta&t=I53reBWJJxc2eL78itb8cbdksWZaa2xOB-6WfKW_UWk',
          education: 'Secundario',
          experience: '12 años de experiencia',
          salary: 280000,
          seniority: 'Senior',
        },
      ],
    },
    {
      title: 'Contratados',
      color: '#1b5e20',
      candidates: [],
    },
  ],
};
