export default [
  {
    title: 'A jolly trip',
    members: [
      {
        name: 'Person A',
        expenses: [
          {
            title: 'Rizla',
            value: 0.80,
            participants: ['Person-A']
          }
        ]
      },
      {
        name: 'Person B',
        expenses: []
      }
    ]
  },
  {
    title: 'Cornwall weekend',
    members: [
      {
        name: 'Person A',
        expenses: [
          {
            title: 'Petrol',
            value: 30,
            participants: ['Person-A','Person-B']
          }
        ]
      },
      {
        name: 'Person B',
        expenses: [
          {
            title: 'Food',
            value: 80,
            participants: ['Person-A','Person-B']
          },
          {
            title: 'Beer',
            value: 40,
            participants: ['Person-A']
          }
        ]
      }
    ]
  }
];
